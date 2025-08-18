
import ChatBlock from './chat-block';

import { useChatStore } from '../stores/ChatStore';
import { useAudioChat } from '../hooks/useAudioChat';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { usePorcupineWrapper } from '../../../hooks/usePorcupineWrapper';
import { type PorcupineCore } from '../../../hooks/usePorcupineWrapper';

import { Howl } from 'howler';
import { animate, stagger, text } from 'animejs';

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
            animate('.chat-wrapper-outer', {
                duration: 500,
                opacity: 1,
                delay: 500
            });

            animate('.progress-bar-outer', {
                duration: 500,
                transform: {
                    from: 'translateY(30px)',
                    to: 'translateY(0px)'
                },
                ease: "linear",
                onBegin: () => {
                    const progressBarSound = new Howl({
                        src: ['/assets/servo-up-01-wet.wav'],
                        volume: 0.7,
                    });
                    progressBarSound.play();
                },
                delay: 1000
            });

            const chars = text.split('.header', {
                chars: { wrap: 'visible' },
            });

            chars.addEffect(({ lines, words, chars }) => animate([lines, words, chars], {
                opacity: { 
                    from: 0,
                    to: 1, 
                    delay: stagger(100, { ease: 'Out(1)', start: 500 }), 
                    duration: 1000
                },
            }));
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