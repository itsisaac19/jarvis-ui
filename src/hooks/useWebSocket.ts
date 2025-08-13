import * as React from "react";

export const useWebSocket = (url: string) => {
    const [socket, setSocket] = React.useState<WebSocket | null>(null);

    React.useEffect(() => {
        // Create a new WebSocket connection
        const ws = new WebSocket(url);
        setSocket(ws);

        ws.onopen = () => console.log("WebSocket connected");
        ws.onclose = () => console.log("WebSocket disconnected");

        // Cleanup on unmount
        return () => {
            ws.close();
        };
    }, [url]);

    const reconnect = async (): Promise<WebSocket> => {
        console.log("Reconnecting WebSocket...");
        if (socket) {
            socket.close();
        }

        return new Promise((resolve) => {
            const newSocket = new WebSocket(url);
            newSocket.onopen = () => {
                console.log("WebSocket reconnected");
                setSocket(newSocket);
                resolve(newSocket);
            };
            newSocket.onclose = () => console.log("WebSocket disconnected");
        });
    };

    return { socket, reconnect };
};