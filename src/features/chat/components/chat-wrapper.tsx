
import ChatBlock from './chat-block';

import { useChatStore } from '../stores/ChatStore';
import { useAudioChat } from '../hooks/useAudioChat';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { usePorcupineWrapper } from '../../../hooks/usePorcupineWrapper';
import { type PorcupineCore } from '../../../hooks/usePorcupineWrapper';

const ChatWrapper = () => {
    const { chatBlocks, isReady, progressBarValue } = useChatStore();
    
    const audioChat = useAudioChat();
    const textToSpeech = useTextToSpeech();

    const askQuestion = async () => {
        const transcript = await audioChat.askQuestion();
        textToSpeech.process(transcript.LLMResponse);
    }

    const porcupineCallback = (core: PorcupineCore) => {
        console.log(`Detected keyword`, core.keywordDetection);
        if (document.querySelector('.startup-wrapper')) {
            const startupElement = document.querySelector('.startup-wrapper') as HTMLDivElement;
            if (startupElement.style.display !== "none") {
                return;
            }
        }
        if (isReady) {
            askQuestion();
        }
    }

    usePorcupineWrapper({
        onDetectionCallback: porcupineCallback
    });


    return (
    
    <div className='chat-wrapper-outer'>
        <div className="header-section">
            <div className="header">Welcome, Isaac.</div>
            <progress className="progress-bar" value={progressBarValue} max="100"></progress>
        </div>
        <button className={["ask-button", isReady ? "" : "disabled"].join(" ")} onClick={askQuestion}>Ask</button>
        <div className="chat-wrapper-inner">
            {chatBlocks.map((block, index) => (
                <ChatBlock
                    key={index}
                    userMessage={block.transcript}
                    aiResponse={block.response}
                />
            ))}
        </div>

    </div>
    );
};

export default ChatWrapper;