import { useEffect } from 'react';
import { useGmailStore } from '../stores/GmailStore';
import { GridContainer } from '~/features/grid/components/grid-container';
import { GridItem } from '~/features/grid/components/grid-item';


export const GmailWidget = () => {
    const { data, authorize, fetchMail } = useGmailStore();

    const initialize = async () => {
        try {
            await authorize();
        } catch (error) {
            console.error('Gmail authorization failed:', error);
        }

        fetchMail('category:primary'); // Fetch all emails initially
    }

    useEffect(() => {
        // Automatically authorize on mount
        initialize();
    }, [authorize]);

    useEffect(() => {
        if (data) { console.log('Gmail data updated:', data); }
    }, [data]);

    // Rest of your component...
    return (
        <div className="gmail-widget">
            {data ? <>
                <div className="widget-label">Inbox</div>
                <div className="messages-wrapper">
                    <GridContainer className="messages-grid">
                        {data.map((manager) => {
                            const message = manager.message;
                            return (
                            <GridItem key={message.id} className="message-item">
                                <div className="top-line">
                                    <div className="sender">{manager.getSender().name}</div>
                                    <div className="internal-date">{manager.getFormattedDate()}</div>
                                </div>
                                <div className="bottom-line">
                                    <div className='subject'>{manager.getHeaderByName('Subject')}</div>
                                </div>

                                {/* Render other message details as needed */}
                            </GridItem>
                            )
                        })}
                    </GridContainer>
                </div>

            </> : <button onClick={authorize}>Authorize</button>}
        </div>
    );
}