import { useChatStore } from '../stores/ChatStore';
import { useMicrophoneRecorder } from './useMicrophoneRecorder';
import { useWebSocket } from '../../../hooks/useWebSocket';

import { SentenceFixer } from '../utils/SentenceFixer';

interface GPTResponse {
    text: string;
    is_final: boolean;
}

interface AudioChat {
    askQuestion: () => Promise<{ LLMResponse: string }>;
}

interface TranscriptionResponse {
    transcript: string;
    is_final: boolean;
}

export const useAudioChat = (): AudioChat => {
    const { socket: audioSocket, reconnect: reconnectAudioSocket } = useWebSocket("ws://127.0.0.1:8000/ws/audio");
    const { socket: transcriptSocket, reconnect: reconnectTranscriptSocket } = useWebSocket("ws://127.0.0.1:8000/ws/transcript");

    const chatStore = useChatStore();
    const { 
        getMessages,
        addMessage,
        addChatBlock, 
        getChatBlock,
        updateLastChatBlock, 
        setIsReady, 
        setProgressBarValue, 
        animateProgressBar 
    } = chatStore;

    const sendTranscript = async (block: { transcript: string; response: string }) => {
        const messages = getMessages();

        return new Promise<string>(async (resolve) => {
            let currentSocket = transcriptSocket;
            if (audioSocket.readyState !== WebSocket.OPEN) {
                currentSocket = await reconnectTranscriptSocket();
            }
        
            console.log(messages);
            currentSocket.send(JSON.stringify(messages));
        
            currentSocket.onmessage = (event) => {
                const data = JSON.parse(event.data) as GPTResponse;
        
                // Update the last chat block with the AI response
                const lastBlock = getChatBlock(true);
                if (!lastBlock) {
                    console.error("No last chat block found.");
                    return;
                }
        
        
                if (data.is_final) {
                    const finalResponse = data.text;
                    console.log("ChatGPT response:", finalResponse);
                    updateLastChatBlock(null, finalResponse);
        
                    addMessage("assistant", finalResponse);
        
                    resolve(finalResponse);
                } else {
                    updateLastChatBlock(null, block.response += data.text);
                }
        
            }
        });
    }

    const askQuestion = async (): Promise<{ LLMResponse: string }> => {
        return new Promise(async (resolve) => {
            console.group("Asking question...");
            setIsReady(false);
            const newBlock = addChatBlock("", ""); // Add a placeholder chat block and get the new block
    
            let currentSocket = audioSocket;
            if (audioSocket.readyState !== WebSocket.OPEN) {
                currentSocket = await reconnectAudioSocket();
            }
    
            let finished = false;
            let lastKnownTranscript = "";
    
            const processFinalTranscript = async () => {
                addMessage("user", lastKnownTranscript);
    
                console.log("Final transcript sent:", lastKnownTranscript);
                finished = true;
                const LLMResponse = await sendTranscript(newBlock);
                resolve({ LLMResponse });
            }
    
            const ondataavailable = async (data: Blob) => {
                if (data.size > 0) {
                    const arrayBuffer = await data.arrayBuffer();
                    console.log(`Sending ${arrayBuffer.byteLength} bytes to backend...`);
                    currentSocket.send(arrayBuffer);
    
                    if (finished) {
                        currentSocket.send(JSON.stringify({ action: "stop" }));
                        console.log("Data collection finished.");
                        console.groupEnd();
                    }
                }
            }
    
            const onstop = () => {
                console.log("Recording stopped.");
                finished = true;
                setProgressBarValue(0);
            }
    
            useMicrophoneRecorder({
                limit: 10000,
                dataAvailableCallback: ondataavailable,
                onStopCallback: onstop
            });
    
            animateProgressBar(10);
    
            currentSocket.onmessage = async (event) => {
                const data = JSON.parse(event.data) as TranscriptionResponse;
    
                const fixer = new SentenceFixer(data.transcript);
                const cleanedTranscript = fixer.fix();
                updateLastChatBlock(cleanedTranscript);
                lastKnownTranscript = cleanedTranscript;
    
                /* if (finished && !data.is_final) {
                    console.warn("Data collection is finished, sending non-final transcript anyway.");
                    processFinalTranscript();
    
                    return;
                } */
                console.log("Transcript:", event.data);
    
                if (data.is_final) {
                    //if (!finished) return;
    
                    console.log("Transcript:", event.data);
    
                    processFinalTranscript();
                    finished = true;
    
                    return;
                }
    
            }
    
        }); 
        

    };

    return {
        askQuestion,
    }
}