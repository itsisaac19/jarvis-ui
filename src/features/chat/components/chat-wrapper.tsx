
import ChatBlock from './chat-block';

import { useChatStore } from '../stores/ChatStore';
import { useAudioChat } from '../hooks/useAudioChat';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { usePorcupineWrapper } from '../../../hooks/usePorcupineWrapper';
import { type PorcupineCore } from '../../../hooks/usePorcupineWrapper';

import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
gsap.registerPlugin(ScrambleTextPlugin) 

import { Howl } from 'howler';

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
        onDetectionCallback: porcupineCallback,
        onLoadedCallback: () => {
            console.log('Porcupine is ready');
            gsap.to('.chat-wrapper-outer', {
                duration: 0.5,
                opacity: 1,
            }).delay(0.5); // Fade in the chat wrapper

            gsap.to('.progress-bar-outer', {
                duration: 0.5,
                transform: 'translateY(0)',
                ease: "power2.in",
                onStart: () => {
                    const progressBarSound = new Howl({
                        src: ['/assets/panel_slide.wav'],
                        volume: 0.3,
                    });
                    progressBarSound.play();
                }
            }).delay(1); // Fade in the progress bar wrapper

            gsap.to('.header', {
                scrambleText: {
                    text: "Welcome, Isaac.",
                    revealDelay: 1,
                },
                duration: 2,
                onStart: async () => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    const typingSound = new Howl({
                        src: ['/assets/typing.wav'],
                        volume: 0.1,
                    });
                    typingSound.play();

                    typingSound.fade(0, 0.2, 500); // Fade in typing sound
                    setTimeout(() => {
                        typingSound.fade(0.2, 0, 300); // Fade out typing sound after 1 second
                    }, 1000); // Adjust the timing as needed
                }   
            }); // Scramble text effect on the header
        }
    });


    return (
    
    <div className='chat-wrapper-outer'>
        <div className="chat-wrapper-inner">
        <div className="header-section">
            <div className="header">Welcome, Isaac.</div>
            <div className="progress-bar-outer">
                <progress className="progress-bar" value={progressBarValue} max="100"></progress>
                <div className="progress-bar-info">
                    <span className="current">{Math.round((progressBarValue / 100) * 10)}</span>
                    <span>s</span>
                    <span className="separator">/</span>
                    <span className="total">10</span>
                    <span>s</span>
                </div>
            </div>
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
    </div>
    );
};

export default ChatWrapper;