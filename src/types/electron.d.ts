import { GmailAuthResponse } from "src/main/gmailService";

// src/types/electron.d.ts
export interface ElectronAPI {
    fetchNews: (searchTerm: string) => Promise<{ success: boolean; data?: any; error?: string }>;
    
    fetchGmailAuth: () => Promise<{ 
        success: boolean; 
        data: GmailAuthResponse;
        error?: string 
    }>;
    fetchGmail: (query: string) => Promise<{ success: boolean; data?: any; error?: string }>;
}

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}