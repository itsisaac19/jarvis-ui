import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ChatWrapper from './features/chat/components/chat-wrapper';
import Startup from './features/startup/components/startup';

const App = () => {
    
    return (
        <>
            <Startup />
            <ChatWrapper></ChatWrapper>
        </>
    );
};

const root = createRoot(document.body);
root.render(<App />);