// GmailStore.ts
//import { getHardCodedNewsData } from './example-data';
import { create } from 'zustand';
import { type gmail_v1 } from 'googleapis/build/src/apis/gmail/v1';
import { type OAuth2Client } from 'google-auth-library/build/src';
import { GmailAuthResponse } from '../../../main/gmailService';

const useHardcodedData = false; // Set to false to disable caching

interface GmailState {
    // State
    data: gmail_v1.Schema$Message[] | null;
    isLoading: boolean;
    error: string | null;
    lastUpdated: Date | null;
    // Actions
    fetchMail: (searchTerm?: string) => Promise<void>;
    authorize: () => Promise<GmailAuthResponse>;
    clearError: () => void;
    reset: () => void;
}

export const useGmailStore = create<GmailState>((set, get) => ({
    // Initial state
    data: null,
    isLoading: false,
    error: null,
    lastUpdated: null,
    
    // Actions
    authorize: async () => {
        try {
            const auth = await window.electronAPI.fetchGmailAuth();
            if (auth.success) {
                console.log('Gmail authorization successful');
                return auth.data;
            } else {
                throw new Error(auth.error || 'Failed to authorize Gmail');
            }
        } catch (error) {
            console.error('Error during Gmail authorization:', error);
            throw error instanceof Error ? error : new Error('Unknown error during Gmail authorization');
        }
    },

    fetchMail: async (searchTerm: string) => {
        set({ isLoading: true, error: null });

        try {
            // Use the exposed electronAPI instead of direct ipcRenderer
            const result = await window.electronAPI.fetchGmail(searchTerm);
            
            if (result.success) {
                console.log(`Fetched ${useHardcodedData ? 'cached' : ''} mail data`, { response: result.data });
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