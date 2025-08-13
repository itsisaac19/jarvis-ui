class AudioStreamer {
    private audioContext: AudioContext;
    private node: AudioWorkletNode;
    public processorReady: Promise<void>;
    private onPlaybackFinished?: () => void;

    constructor(onPlaybackFinished?: () => void) {
        this.audioContext = new AudioContext({ sampleRate: 24000 });
        this.onPlaybackFinished = onPlaybackFinished;
        this.processorReady = this._initWorklet();
    }

    async _initWorklet() {
        try {
            const workletPath = '/assets/pcm-processor.js';
            console.log("Attempting to load worklet from:", workletPath);
            
            await this.audioContext.audioWorklet.addModule(workletPath);
            console.log("Worklet module loaded successfully!");
            
            this.node = new AudioWorkletNode(this.audioContext, "pcm-processor");
            
            this.node.port.onmessage = (event) => {
                if (event.data.type === 'playback-finished') {
                    console.log("Audio playback finished!");
                    this.onPlaybackFinished?.();
                }
            };
            
            this.node.connect(this.audioContext.destination);
        } catch (error) {
            console.error("Failed to initialize audio worklet:", error);
            throw error;
        }
    }

    // Enhanced settings with all early reflections features
    setReverbSettings(settings: {
        dryLevel?: number;
        wetLevel?: number;
        reverbLevel?: number;
        rayTracedLevel?: number;
        earlyReflectionsEnabled?: boolean;
        reverbEnabled?: boolean;
        rayTracingEnabled?: boolean;
        roomWidth?: number;
        roomLength?: number;
        roomHeight?: number;
        wallAbsorption?: number;
        maxReflectionOrder?: number;
        sourcePosition?: [number, number, number];
        listenerPosition?: [number, number, number];
    }) {
        this.node.port.postMessage({
            type: 'settings',
            ...settings
        });
    }

    // Preset room types with ray tracing
    setSmallRoom() {
        this.setReverbSettings({
            dryLevel: 0.7,
            wetLevel: 0.3,
            reverbLevel: 0.2,
            rayTracedLevel: 0.1,
            earlyReflectionsEnabled: true,
            reverbEnabled: true,
            rayTracingEnabled: true,
            roomWidth: 4,
            roomLength: 5,
            roomHeight: 2.5,
            wallAbsorption: 0.2,
            maxReflectionOrder: 2
        });
    }

    setLargeHall() {
        this.setReverbSettings({
            dryLevel: 0.5,
            wetLevel: 0.4,
            reverbLevel: 0.4,
            rayTracedLevel: 0.3,
            earlyReflectionsEnabled: true,
            reverbEnabled: true,
            rayTracingEnabled: true,
            roomWidth: 20,
            roomLength: 30,
            roomHeight: 12,
            wallAbsorption: 0.1,
            maxReflectionOrder: 4
        });
    }

    setConcertHall() {
        this.setReverbSettings({
            dryLevel: 0.4,
            wetLevel: 0.5,
            reverbLevel: 0.5,
            rayTracedLevel: 0.4,
            earlyReflectionsEnabled: true,
            reverbEnabled: true,
            rayTracingEnabled: true,
            roomWidth: 25,
            roomLength: 40,
            roomHeight: 15,
            wallAbsorption: 0.05,
            maxReflectionOrder: 6
        });
    }

    setCustomRoom(width: number, length: number, height: number, absorption: number = 0.3) {
        this.setReverbSettings({
            dryLevel: 0.6,
            wetLevel: 0.4,
            reverbLevel: 0.3,
            rayTracedLevel: 0.2,
            earlyReflectionsEnabled: true,
            reverbEnabled: true,
            rayTracingEnabled: true,
            roomWidth: width,
            roomLength: length,
            roomHeight: height,
            wallAbsorption: absorption,
            maxReflectionOrder: 3
        });
    }

    setDrySignal() {
        this.setReverbSettings({
            dryLevel: 1.0,
            wetLevel: 0.0,
            reverbLevel: 0.0,
            rayTracedLevel: 0.0,
            earlyReflectionsEnabled: false,
            reverbEnabled: false,
            rayTracingEnabled: false
        });
    }

    waitForPlaybackCompletion(): Promise<void> {
        return new Promise((resolve) => {
            const originalCallback = this.onPlaybackFinished;
            this.onPlaybackFinished = () => {
                originalCallback?.();
                this.onPlaybackFinished = originalCallback;
                resolve();
            };
        });
    }

    async startStreaming(text: string): Promise<void> {
        await this.processorReady;
        await this.audioContext.resume();

        console.time("tts-start");

        const response = await fetch("http://127.0.0.1:8000/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        const reader = response.body!.getReader();
        let firstChunk = false;

        const pump = async () => {
            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    this.node.port.postMessage('stream-ended');
                    break;
                }
                if (!firstChunk) {
                    firstChunk = true;
                    console.timeEnd("tts-start");
                }
                this.node.port.postMessage(value.buffer);
            }
        };

        return pump().catch(console.error);
    }
}

export default AudioStreamer;