import { JSX, useEffect } from 'react';
import { useGmailStore } from '../stores/GmailStore';

export const GmailWidget = () => {
    const { data, authorize } = useGmailStore();

    useEffect(() => {
        // Automatically authorize on mount
        authorize().catch(error => {
            console.error('Failed to authorize Gmail:', error);
        });
    }, [authorize]);

    // Rest of your component...
    return (
        <div className="gmail-widget">
            {data ? <></> : <button onClick={authorize}>Authorize</button>}
        </div>
    );
}