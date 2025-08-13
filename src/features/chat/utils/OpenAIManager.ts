type Role = "user" | "assistant";

interface Message {
    role: Role;
    content: string;
}

class OpenAIManager {
    private messages: Message[] = [];

    constructor() {
        // Initialize
    }

    addMessage(role: Role, content: string) {
        this.messages.push({ role, content });
    }

    getMessages(): Message[] {
        return this.messages;
    }
}

export default OpenAIManager;