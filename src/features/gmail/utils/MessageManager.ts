import dayjs from "dayjs";
import { SerializableGmailMessage } from "~/main/gmailService";

export class MessageManager {
    // MessageManager implementation
    public message: SerializableGmailMessage;

    private headers: {
        received: string[];
        xReceived: string[];
    } = {
        received: [],
        xReceived: [],
    };

    constructor(message: SerializableGmailMessage) {
        // Initialization code
        this.message = message;

        const values = (name: string) =>
        this.message.payload.headers
            .filter(h => h.name.toLowerCase() === name.toLowerCase())
            .map(h => h.value);
        
        this.headers.received = values("Received");     // array of multi-hop 'Received:' lines
        this.headers.xReceived = values("X-Received");  
    }

    parseReceivedDate(line: string): Date | undefined {
        // RFC style: "...; Tue, 02 Sep 2025 12:11:27 -0700 (PDT)"
        const i = line.lastIndexOf(";");
        if (i === -1) return undefined;
        const dateStr = line.slice(i + 1).trim();
        const d = new Date(dateStr);
        return isNaN(+d) ? undefined : d;
    }

    pickGoogleReceiveTime(): Date | undefined {
        const { received = [], xReceived = [] } = this.headers;
        // Try X-Received first
        for (const line of xReceived) {
            if (/google\.com|mx\.google\.com/i.test(line)) {
                const d = this.parseReceivedDate(line);
                if (d) return d;
            }
        }
        // Fallback to Received
        for (const line of received) {
            if (/by\s+mx\.google\.com/i.test(line)) {
                const d = this.parseReceivedDate(line);
                if (d) return d;
            }
        }
        return undefined;
    }

    getSnippet(): string {
        return this.message.snippet || '';
    }

    getSender(): { name: string; email: string } | undefined {
        const initialExtraction = this.getHeaderByName('From');
        const name = initialExtraction.replace(/<.*?>/, '').trim();
        const emailMatch = initialExtraction.match(/<(.+?)>/);
        const email = emailMatch ? emailMatch[1] : initialExtraction.includes('@') ? initialExtraction.trim() : '';

        return { name, email };
    }

    getHeaderByName(name: string): string | undefined {
        const headers = this.message.payload?.headers || [];
        const header = headers.find(h => h.name?.toLowerCase() === name.toLowerCase());
        
        return header?.value;
    }

    getDate(): dayjs.Dayjs | null {
        const receiveTime = this.pickGoogleReceiveTime();
        if (receiveTime) {
            return dayjs(receiveTime);
        }
        // Fallback to internalDate
        if (this.message.internalDate) {
            return dayjs(parseInt(this.message.internalDate));
        }
    }

    getFormattedDate(format: string = 'auto'): string {
        const date = this.getDate();
        if (!date) return 'Unknown date';
        if (format === 'auto') {
            const now = dayjs();
            if (date.isSame(now, 'day')) {
                return date.format('h:mm A'); // Today: show time only
            }
            else if (date.isSame(now.subtract(1, 'day'), 'day')) {
                return 'Yesterday'; // Yesterday
            }
            else if (date.isAfter(now.subtract(7, 'day'))) {
                return date.format('dddd'); // Within last week: show day name
            }
            else if (date.isSame(now, 'year')) {
                return date.format('MMM D'); // Within this year: show month and day
            }
            else {
                return date.format('MMM D, YYYY'); // Older: show full date
            }
        } else {
            return date.format(format);
        }
    }
}