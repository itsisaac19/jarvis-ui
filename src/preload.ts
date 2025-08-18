// src/preload.ts
import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
    fetchNews: (searchTerm: string) => ipcRenderer.invoke('fetch-news', searchTerm),
    fetchGmail: (searchTerm: string) => ipcRenderer.invoke('fetch-gmail', searchTerm),
    fetchGmailAuth: () => ipcRenderer.invoke('fetch-gmail-auth'),
});
