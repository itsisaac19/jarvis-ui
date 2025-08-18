// main/gmailService.ts
import { ipcMain } from 'electron';

const fs = require('fs').promises;
import path from 'path';
import process from 'process';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';
import { type JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { type OAuth2Client } from 'google-auth-library/build/src';


const SCOPES = ['https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/gmail.compose'];

// File are stored in the google directory of the project root
const TOKEN_PATH = path.join(process.cwd(), 'google', 'gmail-token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'google', 'credentials.json');

/**
 * Reads previously authorized credentials from the save file.
 *
 */
const loadSavedCredentialsIfExist = async () => {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials) as OAuth2Client;
    } catch (err) {
        return null;
    }
}


/**
 * Serializes credentials to a file compatible with GoogleAuth.fromJSON.
 *
 */
const saveCredentials = async (client: JSONClient | OAuth2Client) => {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}


/**
 * Load or request or authorization to call APIs.
 *
 */
const authorize = async () => {
    const clientADC = await loadSavedCredentialsIfExist();

    if (clientADC) {
        console.log('Loaded saved credentials from', TOKEN_PATH);
        return clientADC;
    }

    const newClientADC = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    });
    if (newClientADC.credentials) {
        await saveCredentials(newClientADC);
    }
    return newClientADC;
}

export interface GmailAuthResponse {
    authenticated: boolean;
    hasValidToken: boolean;
}

export function setupGmailService() {
    ipcMain.handle('fetch-gmail-auth', async () => {
        try {
            const auth = await authorize();
            return { 
                success: true, 
                data: { authenticated: true, hasValidToken: !!auth.credentials.access_token }
            };
        } catch (error) {
            console.error('Error in Gmail authentication:', error);
            return { 
                success: false, 
                error: error instanceof Error ? error.message : 'Unknown error' 
            };
        }
    });

    ipcMain.handle('fetch-gmail', async (event, query: string) => {
        try {
            console.log('Fetching Gmail messages with query:', query);
            const auth = await authorize();
            const gmail = google.gmail({ version: 'v1', auth });

            const response = await gmail.users.messages.list({
                userId: 'me',
                q: query,
            });

            if (!response.data.messages) {
                console.log('No messages found.');
                return { success: true, data: [] };
            }

            const messages = response.data.messages;
            console.log(`Fetched ${messages.length} messages`);

            return { success: true, data: messages };
        } catch (error) {
            console.error('Error in Gmail service:', error);
            return { 
                success: false, 
                error: error instanceof Error ? error.message : 'Unknown error' 
            };
        }
    });
}