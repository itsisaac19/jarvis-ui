import * as React from 'react';
import { createRoot } from 'react-dom/client';
import ChatWrapper from './features/chat/components/chat-wrapper';
import Startup from './features/startup/components/startup';
import { GridContainer } from './features/grid/components/grid-container';
import { GridItem } from './features/grid/components/grid-item';
import { GridPlaceholder } from './features/grid/components/grid-placeholder';
import { WeatherWidget } from './features/weather/components/weather-widget';

const App = () => {
    
    return (
        <>
            <Startup />

            <GridContainer className="main-grid">
                <GridItem area="chat">
                    <ChatWrapper />
                </GridItem>
                <GridItem area="weather">
                    <WeatherWidget />
                </GridItem>
                <GridItem area="mail">
                    <GridPlaceholder />
                </GridItem>
                <GridItem area="calendar">
                    <GridPlaceholder />
                </GridItem>
                <GridItem area="news">
                    <GridPlaceholder />
                </GridItem>
                <GridItem area="settings">
                    <GridPlaceholder />
                </GridItem>
            </GridContainer>
        </>
    );
};

const root = createRoot(document.body);
root.render(<App />);