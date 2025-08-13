interface ChatBlockProps {
    userMessage: string;
    aiResponse: string;
}

const ChatBlock = (props: ChatBlockProps) => {
    const { userMessage, aiResponse } = props;

    return (
        <div className="chat-block">
            <div className="chat-tile">
                <div className="tile-icon">ME</div>
                <div className="tile-content">{userMessage}</div>  
            </div>
            <div className="chat-tile">
                <div className="tile-icon">CPU</div>
                <div className="tile-content">{aiResponse}</div>
            </div>
        </div>
    )
}

export default ChatBlock;