// ChatStore.ts
import { create } from 'zustand';

export interface Message {
    role: "user" | "assistant";
    content: string;
}

interface ChatBlock {
    transcript: string;
    response: string;
}

interface ChatState {
    chatBlocks: ChatBlock[];
    messages: Message[];
    progressBarValue: number;
    isReady: boolean;

    addChatBlock: (userMessage: string, aiResponse: string) => ChatBlock;
    getChatBlock: (last: boolean, index?: number) => ChatBlock | null;
    updateLastChatBlock: (userMessage?: string, aiResponse?: string) => void;
    addMessage: (role: "user" | "assistant", content: string) => Message[];
    getMessages: () => Message[];
    
    setProgressBarValue: (value: number) => void;
    animateProgressBar: (duration: number) => void;

    setIsReady: (ready: boolean) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
    chatBlocks: [],
    messages: [],
    progressBarValue: 0,
    isReady: true,

    addChatBlock: (userMessage, aiResponse) => {
        const newBlock = { transcript: userMessage, response: aiResponse };
        set(state => ({ chatBlocks: [...state.chatBlocks, newBlock] }));
        return newBlock; // Return the new block
    },

    getChatBlock: (last: boolean, index?: number) => {
        const { chatBlocks } = get();
        if (last) {
            if (chatBlocks.length === 0) {
                return { transcript: '', response: '' };
            }
            return chatBlocks[chatBlocks.length - 1];
        }
        if (index === undefined || index < 0 || index >= chatBlocks.length) {
            return null;
        }
    },

    updateLastChatBlock: (userMessage, aiResponse) => {
        set(state => {
            const lastBlock = state.chatBlocks[state.chatBlocks.length - 1];
            if (lastBlock) {
                return {
                    chatBlocks: [
                        ...state.chatBlocks.slice(0, -1),
                        {
                            transcript: userMessage ?? lastBlock.transcript,
                            response: aiResponse ?? lastBlock.response,
                        },
                    ]
                };
            }
            return state;
        });
    },

    addMessage: (role, content) => {
        set(state => ({ messages: [...state.messages, { role, content }] }));
        return get().messages;
    },

    getMessages: () => {
        return get().messages;
    },

    setProgressBarValue: (value) => set({ progressBarValue: value }),
    animateProgressBar: (duration) => {
        // Animate the progress bar over the specified duration in milliseconds
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            set({ progressBarValue: progress * 100 });
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    },
    
    setIsReady: (ready) => set({ isReady: ready }),
}));