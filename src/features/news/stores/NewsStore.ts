// NewsStore.ts
import { type Article } from 'google-news-scraper';
import { getHardCodedNewsData } from './example-data';
import { create } from 'zustand';

const useHardcodedData = false; // Set to false to disable caching

interface NewsState {
    // State
    data: Article[] | null;
    isLoading: boolean;
    error: string | null;
    lastUpdated: Date | null;
    // Actions
    fetchNews: (searchTerm?: string) => Promise<void>;
    clearError: () => void;
    reset: () => void;
}

export const useNewsStore = create<NewsState>((set, get) => ({
    // Initial state
    data: null,
    isLoading: false,
    error: null,
    lastUpdated: null,
    
    // Actions
    fetchNews: async (searchTerm) => {
        set({ isLoading: true, error: null });

        try {
            // Use the exposed electronAPI instead of direct ipcRenderer
            const result = useHardcodedData ? getHardCodedNewsData() : await window.electronAPI.fetchNews(searchTerm);
            
            if (result.success) {
                console.log(`Fetched ${useHardcodedData ? 'cached' : ''} news data`, { response: result.data });
                set({
                    data: result.data,
                    isLoading: false,
                    lastUpdated: new Date(),
                    error: null
                });
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            set({
                isLoading: false,
                error: error instanceof Error ? error.message : 'Unknown error',
                data: null
            });
        }
    },

    clearError: () => set({ error: null }),

    reset: () => set({
        data: null,
        isLoading: false,
        error: null,
        lastUpdated: null
    }),
}));