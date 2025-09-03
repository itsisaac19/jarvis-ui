// main/newsService.ts
import { ipcMain } from 'electron';
import googleNewsScraper from 'google-news-scraper';

const searchTerm1 = `economy OR business OR startups OR innovation OR industry -shooting -violence -murder -crime`

export function setupNewsService() {
    ipcMain.handle('fetch-news', async (event, searchTerm = searchTerm1) => {
        try {
            console.log('Fetching news for:', searchTerm);
            
            const articles = await googleNewsScraper({ 
                searchTerm,
                prettyURLs: true,
                timeframe: '7d',
                limit: 10,
            });

            console.log(`Fetched ${articles.length} articles`);
            
            return { 
                success: true, 
                data: articles 
            };
        } catch (error) {
            console.error('Error in news service:', error);
            return { 
                success: false, 
                error: error instanceof Error ? error.message : 'Unknown error' 
            };
        }
    });
}