export class RoomReverbProcessor {
    audioContext: AudioContext | null;
    sourceBuffer: AudioBuffer | null;
    impulseBuffer: AudioBuffer | null;

    constructor() {
        this.audioContext = null;
        this.sourceBuffer = null;
        this.impulseBuffer = null;
    }

    async initialize() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.audioContext = new ((window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext)();
    }

    // Load WAV file from File input or URL
    async loadWavFile(input: File | string | Blob): Promise<AudioBuffer> {
        let arrayBuffer;

        if (input instanceof File || input instanceof Blob) {
            arrayBuffer = await input.arrayBuffer();
        } else if (typeof input === 'string') {
            const response = await fetch(input);
            arrayBuffer = await response.arrayBuffer();
        }

        this.sourceBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        return this.sourceBuffer;
    }

    // Create synthetic room impulse response
    createRoomImpulseResponse(duration = 2, roomSize = 0.7, dampening = 0.3) {
        const sampleRate = this.audioContext.sampleRate;
        const length = sampleRate * duration;
        const impulse = this.audioContext.createBuffer(2, length, sampleRate);

        for (let channel = 0; channel < 2; channel++) {
            const channelData = impulse.getChannelData(channel);

            for (let i = 0; i < length; i++) {
                // Create decaying noise for room reverb
                const decay = Math.pow(1 - i / length, 2 + roomSize * 3);
                const noise = (Math.random() * 2 - 1) * decay;

                // Add some early reflections
                const earlyReflection = i < sampleRate * 0.1 ?
                    Math.sin(i * 0.01) * decay * 0.3 : 0;

                channelData[i] = (noise + earlyReflection) * (1 - dampening);
            }
        }

        this.impulseBuffer = impulse;
        return impulse;
    }

    // Load external impulse response file
    async loadImpulseResponse(file: File | string | Blob) {
        let arrayBuffer;

        if (file instanceof File || file instanceof Blob) {
            arrayBuffer = await file.arrayBuffer();
        } else if (typeof file === 'string') {
            const response = await fetch(file);
            arrayBuffer = await response.arrayBuffer();
        }

        this.impulseBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        return this.impulseBuffer;
    }

    // Process audio with room reverb
    async processWithReverb(options: {
        wetLevel?: number;      // Reverb mix level (0-1)
        dryLevel?: number;      // Original signal level (0-1)
        roomSize?: number;      // Room size simulation (0-1)
        dampening?: number;     // High frequency dampening (0-1)
        duration?: number;      // Reverb tail duration in seconds
    } = {}) {
        if (!this.sourceBuffer) {
            throw new Error('No source audio loaded');
        }

        const {
            wetLevel = 0.3,      // Reverb mix level (0-1)
            dryLevel = 0.7,      // Original signal level (0-1)
            roomSize = 0.7,      // Room size simulation (0-1)
            dampening = 0.3,     // High frequency dampening (0-1)
            duration = 2         // Reverb tail duration in seconds
        } = options;

        // Create impulse response if not loaded
        if (!this.impulseBuffer) {
            this.createRoomImpulseResponse(duration, roomSize, dampening);
        }

        // Create offline context for processing
        const offlineContext = new OfflineAudioContext(
            this.sourceBuffer.numberOfChannels,
            this.sourceBuffer.length,
            this.sourceBuffer.sampleRate
        );

        // Create nodes
        const source = offlineContext.createBufferSource();
        const dryGain = offlineContext.createGain();
        const wetGain = offlineContext.createGain();
        const convolver = offlineContext.createConvolver();
        const merger = offlineContext.createChannelMerger(2);

        // Set up the audio graph
        source.buffer = this.sourceBuffer;
        convolver.buffer = this.impulseBuffer;

        dryGain.gain.value = dryLevel;
        wetGain.gain.value = wetLevel;

        // Connect dry signal
        source.connect(dryGain);
        dryGain.connect(merger, 0, 0);
        dryGain.connect(merger, 0, 1);

        // Connect wet signal (reverb)
        source.connect(convolver);
        convolver.connect(wetGain);
        wetGain.connect(merger, 0, 0);
        wetGain.connect(merger, 0, 1);

        // Connect to destination
        merger.connect(offlineContext.destination);

        // Start processing
        source.start(0);

        // Render the processed audio
        const processedBuffer = await offlineContext.startRendering();
        return processedBuffer;
    }

    // Convert AudioBuffer to WAV blob
    audioBufferToWav(buffer: AudioBuffer): Blob {
        const length = buffer.length;
        const numberOfChannels = buffer.numberOfChannels;
        const sampleRate = buffer.sampleRate;
        const arrayBuffer = new ArrayBuffer(44 + length * numberOfChannels * 2);
        const view = new DataView(arrayBuffer);

        // WAV header
        const writeString = (offset: number, string: string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };

        writeString(0, 'RIFF');
        view.setUint32(4, 36 + length * numberOfChannels * 2, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numberOfChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * numberOfChannels * 2, true);
        view.setUint16(32, numberOfChannels * 2, true);
        view.setUint16(34, 16, true);
        writeString(36, 'data');
        view.setUint32(40, length * numberOfChannels * 2, true);

        // PCM data
        let offset = 44;
        for (let i = 0; i < length; i++) {
            for (let channel = 0; channel < numberOfChannels; channel++) {
                const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
                view.setInt16(offset, sample * 0x7FFF, true);
                offset += 2;
            }
        }

        return new Blob([arrayBuffer], { type: 'audio/wav' });
    }

    // Play processed audio
    async playBuffer(buffer: AudioBuffer): Promise<AudioBufferSourceNode> {
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }

        const source = this.audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(this.audioContext.destination);
        source.start();

        return source;
    }
}