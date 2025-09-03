// main/gmailService.ts
import { ipcMain } from 'electron';

const fs = require('fs').promises;
import path from 'path';
import process from 'process';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';
import { type JSONClient } from 'google-auth-library/build/src/auth/googleauth';
import { type OAuth2Client } from 'google-auth-library/build/src';
import { type gmail_v1 } from 'googleapis/build/src/apis/gmail/v1';
import { type GaxiosResponseWithHTTP2 } from 'googleapis-common';

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

export interface SerializableGmailMessage {
    id: string;
    internalDate: string;
    threadId: string;
    labelIds: string[];
    snippet: string;
    payload: {
        headers: {
            name: string;
            value: string;
        }[];
    };
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
                maxResults: 10,
            });

            if (!response.data.messages) {
                console.log('No messages found.');
                return { success: true, data: [] };
            }

            const messageIds = response.data.messages;
            console.log(`Fetched ${messageIds.length} message IDs.`);

            const messages: Promise<GaxiosResponseWithHTTP2<gmail_v1.Schema$Message>>[] = [];
            messageIds.forEach(msg => {
                if (msg.id) {
                    messages.push(gmail.users.messages.get({
                        userId: 'me',
                        id: msg.id,
                        format: 'metadata',
                        metadataHeaders: ['Subject', 'From', 'Date', 'Received', 'X-Received']
                    }));
                }
            });

            const messageResponses = await Promise.all(messages);
            console.log(messageResponses[0].data.payload.headers);
            // Extract only the serializable data
            const serializedMessages = messageResponses.map(response => ({
                id: response.data.id,
                threadId: response.data.threadId,
                labelIds: response.data.labelIds,
                snippet: response.data.snippet,
                internalDate: response.data.internalDate,
                payload: {
                    headers: response.data.payload?.headers?.map(header => ({
                        name: header.name,
                        value: header.value
                    }))
                }
            }));
            
            return { success: true, data: serializedMessages };
        } catch (error) {
            console.error('Error in Gmail service:', error);
            return { 
                success: false, 
                error: error instanceof Error ? error.message : 'Unknown error' 
            };
        }
    });
}