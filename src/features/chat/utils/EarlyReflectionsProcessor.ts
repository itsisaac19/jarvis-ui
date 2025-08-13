interface Surface {
    normal: [number, number, number];
    position: [number, number, number];
    absorption: number;
}

interface Reflection {
    time: number;
    amplitude: number;
    direction: [number, number, number];
    totalAbsorption: number;
    order: number;
    surfaceIndex?: number;
}

interface EarlyReflectionsOptions {
    roomWidth?: number;
    roomLength?: number;
    roomHeight?: number;
    sourceX?: number;
    sourceY?: number;
    sourceZ?: number;
    listenerX?: number;
    listenerY?: number;
    listenerZ?: number;
    absorption?: number;
    maxReflections?: number;
    speedOfSound?: number;
}

interface ProcessingOptions {
    dryLevel?: number;
    wetLevel?: number;
    roomWidth?: number;
    roomLength?: number;
    roomHeight?: number;
    sourcePosition?: [number, number, number];
    listenerPosition?: [number, number, number];
    absorption?: number;
    maxReflections?: number;
}

interface StereoGains {
    left: number;
    right: number;
}

export class EarlyReflectionsProcessor {
    private audioContext: AudioContext | null = null;
    private sourceBuffer: AudioBuffer | null = null;

    async initialize(): Promise<void> {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    // Load audio from File, Blob, or URL
    async loadAudioFile(input: File | Blob | string): Promise<AudioBuffer> {
        let arrayBuffer: ArrayBuffer;

        if (input instanceof File || input instanceof Blob) {
            arrayBuffer = await input.arrayBuffer();
        } else if (typeof input === 'string') {
            const response = await fetch(input);
            arrayBuffer = await response.arrayBuffer();
        } else {
            throw new Error('Input must be a File, Blob, or URL string');
        }

        if (!this.audioContext) {
            throw new Error('AudioContext not initialized');
        }

        this.sourceBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        return this.sourceBuffer;
    }

    // Create early reflections impulse response
    createEarlyReflectionsIR(options: EarlyReflectionsOptions = {}): AudioBuffer {
        const {
            roomWidth = 6,      // meters
            roomLength = 8,     // meters  
            roomHeight = 3,     // meters
            sourceX = 2,        // source position
            sourceY = 3,
            sourceZ = 1.5,
            listenerX = 4,      // listener position
            listenerY = 5,
            listenerZ = 1.5,
            absorption = 0.3,   // wall absorption coefficient
            maxReflections = 6, // number of reflection orders
            speedOfSound = 343  // m/s
        } = options;

        if (!this.audioContext) {
            throw new Error('AudioContext not initialized');
        }

        const sampleRate = this.audioContext.sampleRate;
        const maxTime = 0.15; // 150ms for early reflections
        const bufferLength = Math.floor(sampleRate * maxTime);

        // Create stereo buffer
        const impulse = this.audioContext.createBuffer(2, bufferLength, sampleRate);
        const leftChannel = impulse.getChannelData(0);
        const rightChannel = impulse.getChannelData(1);

        // Define room surfaces (walls, floor, ceiling)
        const surfaces: Surface[] = [
            // Walls
            { normal: [1, 0, 0], position: [0, 0, 0], absorption }, // Left wall
            { normal: [-1, 0, 0], position: [roomWidth, 0, 0], absorption }, // Right wall
            { normal: [0, 1, 0], position: [0, 0, 0], absorption }, // Front wall
            { normal: [0, -1, 0], position: [0, roomLength, 0], absorption }, // Back wall
            // Floor and ceiling
            { normal: [0, 0, 1], position: [0, 0, 0], absorption: absorption * 0.8 }, // Floor
            { normal: [0, 0, -1], position: [0, 0, roomHeight], absorption: absorption * 0.6 } // Ceiling
        ];

        // Calculate reflections up to maxReflections order
        const reflections = this.calculateReflections(
            [sourceX, sourceY, sourceZ],
            [listenerX, listenerY, listenerZ],
            surfaces,
            roomWidth, roomLength, roomHeight,
            maxReflections,
            speedOfSound,
            maxTime
        );

        // Add reflections to impulse response
        reflections.forEach(reflection => {
            if (reflection.time < maxTime) {
                const sampleIndex = Math.floor(reflection.time * sampleRate);
                if (sampleIndex < bufferLength) {
                    // Apply HRTF-like panning based on direction
                    const panningGains = this.calculateStereoGains(reflection.direction);

                    // Apply distance and absorption attenuation
                    const amplitude = reflection.amplitude * (1 - reflection.totalAbsorption);

                    leftChannel[sampleIndex] += amplitude * panningGains.left;
                    rightChannel[sampleIndex] += amplitude * panningGains.right;
                }
            }
        });

        // Add some realistic filtering (high frequency rolloff for reflections)
        this.applyReflectionFiltering(leftChannel);
        this.applyReflectionFiltering(rightChannel);

        return impulse;
    }

    // Calculate ray-traced reflections
    private calculateReflections(
        source: [number, number, number],
        listener: [number, number, number],
        surfaces: Surface[],
        width: number,
        length: number,
        height: number,
        maxOrder: number,
        speedOfSound: number,
        maxTime: number
    ): Reflection[] {
        const reflections: Reflection[] = [];

        // Direct path (0th order)
        const directDistance = this.distance3D(source, listener);
        const directTime = directDistance / speedOfSound;
        const directDirection = this.normalize([
            listener[0] - source[0],
            listener[1] - source[1],
            listener[2] - source[2]
        ]);

        reflections.push({
            time: directTime,
            amplitude: 1 / (directDistance + 1),
            direction: directDirection,
            totalAbsorption: 0,
            order: 0
        });

        // First-order reflections (single bounce)
        surfaces.forEach((surface, surfaceIndex) => {
            const reflection = this.calculateSingleReflection(source, listener, surface, width, length, height);
            if (reflection && reflection.time < maxTime) {
                reflection.order = 1;
                reflection.surfaceIndex = surfaceIndex;
                reflections.push(reflection);
            }
        });

        // Higher-order reflections (multiple bounces)
        for (let order = 2; order <= maxOrder; order++) {
            const currentOrderReflections = reflections.filter(r => r.order === order - 1);

            currentOrderReflections.forEach(prevReflection => {
                surfaces.forEach((surface, surfaceIndex) => {
                    // Avoid immediate re-reflection from same surface
                    if (prevReflection.surfaceIndex === surfaceIndex) return;

                    const reflection = this.calculateMultipleReflection(
                        prevReflection, surface, listener, width, length, height, speedOfSound
                    );

                    if (reflection && reflection.time < maxTime) {
                        reflection.order = order;
                        reflection.surfaceIndex = surfaceIndex;
                        reflections.push(reflection);
                    }
                });
            });
        }

        return reflections.sort((a, b) => a.time - b.time);
    }

    // Calculate single surface reflection
    private calculateSingleReflection(
        source: [number, number, number],
        listener: [number, number, number],
        surface: Surface,
        width: number,
        length: number,
        height: number
    ): Reflection | null {
        // Mirror source across surface
        const mirroredSource = this.mirrorPointAcrossSurface(source, surface);

        // Check if mirrored source creates valid reflection
        if (!this.isPointInRoom(mirroredSource, width, length, height)) {
            return null;
        }

        const totalDistance = this.distance3D(mirroredSource, listener);
        const time = totalDistance / 343; // speed of sound

        const direction = this.normalize([
            listener[0] - mirroredSource[0],
            listener[1] - mirroredSource[1],
            listener[2] - mirroredSource[2]
        ]);

        return {
            time: time,
            amplitude: 1 / (totalDistance + 1),
            direction: direction,
            totalAbsorption: surface.absorption,
            order: 1
        };
    }

    // Calculate multiple reflection (simplified)
    private calculateMultipleReflection(
        prevReflection: Reflection,
        surface: Surface,
        listener: [number, number, number],
        width: number,
        length: number,
        height: number,
        speedOfSound: number
    ): Reflection | null {
        // Simplified approach - extend previous reflection path
        const extendedTime = prevReflection.time + (Math.random() * 0.02 + 0.01); // Add 10-30ms
        const attenuatedAmplitude = prevReflection.amplitude * 0.7; // Reduce amplitude
        const totalAbsorption = Math.min(0.9, prevReflection.totalAbsorption + surface.absorption);

        return {
            time: extendedTime,
            amplitude: attenuatedAmplitude,
            direction: prevReflection.direction,
            totalAbsorption: totalAbsorption,
            order: prevReflection.order + 1
        };
    }

    // Mirror a point across a surface
    private mirrorPointAcrossSurface(point: [number, number, number], surface: Surface): [number, number, number] {
        const [px, py, pz] = point;
        const [nx, ny, nz] = surface.normal;
        const [sx, sy, sz] = surface.position;

        // Distance from point to surface
        const d = (px - sx) * nx + (py - sy) * ny + (pz - sz) * nz;

        // Mirror point
        return [
            px - 2 * d * nx,
            py - 2 * d * ny,
            pz - 2 * d * nz
        ];
    }

    // Check if point is within room bounds
    private isPointInRoom(point: [number, number, number], width: number, length: number, height: number): boolean {
        const [x, y, z] = point;
        return x >= 0 && x <= width && y >= 0 && y <= length && z >= 0 && z <= height;
    }

    // Calculate stereo panning based on direction
    private calculateStereoGains(direction: [number, number, number]): StereoGains {
        const [x, y, z] = direction;

        // Simple HRTF approximation - pan based on horizontal angle
        const angle = Math.atan2(x, y); // -π to π
        const normalizedAngle = (angle + Math.PI) / (2 * Math.PI); // 0 to 1

        // Equal power panning
        const leftGain = Math.cos(normalizedAngle * Math.PI / 2);
        const rightGain = Math.sin(normalizedAngle * Math.PI / 2);

        return { left: leftGain, right: rightGain };
    }

    // Apply high-frequency filtering to simulate air absorption
    private applyReflectionFiltering(channelData: Float32Array): void {
        // Simple one-pole low-pass filter
        const cutoff = 0.8; // Filter coefficient
        let prev = 0;

        for (let i = 0; i < channelData.length; i++) {
            channelData[i] = prev = prev * cutoff + channelData[i] * (1 - cutoff);
        }
    }

    // Utility functions
    private distance3D(p1: [number, number, number], p2: [number, number, number]): number {
        const dx = p1[0] - p2[0];
        const dy = p1[1] - p2[1];
        const dz = p1[2] - p2[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    private normalize(vector: [number, number, number]): [number, number, number] {
        const magnitude = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
        return magnitude > 0 ? [vector[0] / magnitude, vector[1] / magnitude, vector[2] / magnitude] : [0, 0, 0];
    }

    // Process audio with early reflections
    async processWithEarlyReflections(options: ProcessingOptions = {}): Promise<AudioBuffer> {
        if (!this.sourceBuffer) {
            throw new Error('No source audio loaded');
        }

        if (!this.audioContext) {
            throw new Error('AudioContext not initialized');
        }

        const {
            dryLevel = 0.7,
            wetLevel = 0.4,
            roomWidth = 6,
            roomLength = 8,
            roomHeight = 3,
            sourcePosition = [2, 3, 1.5],
            listenerPosition = [4, 5, 1.5],
            absorption = 0.3,
            maxReflections = 4
        } = options;

        // Create early reflections impulse response
        const impulseBuffer = this.createEarlyReflectionsIR({
            roomWidth,
            roomLength,
            roomHeight,
            sourceX: sourcePosition[0],
            sourceY: sourcePosition[1],
            sourceZ: sourcePosition[2],
            listenerX: listenerPosition[0],
            listenerY: listenerPosition[1],
            listenerZ: listenerPosition[2],
            absorption,
            maxReflections
        });

        // Create offline context for processing
        const offlineContext = new OfflineAudioContext(
            this.sourceBuffer.numberOfChannels,
            this.sourceBuffer.length,
            this.sourceBuffer.sampleRate
        );

        // Create audio graph
        const source = offlineContext.createBufferSource();
        const dryGain = offlineContext.createGain();
        const wetGain = offlineContext.createGain();
        const convolver = offlineContext.createConvolver();
        const merger = offlineContext.createChannelMerger(2);

        source.buffer = this.sourceBuffer;
        convolver.buffer = impulseBuffer;
        dryGain.gain.value = dryLevel;
        wetGain.gain.value = wetLevel;

        // Connect audio graph
        source.connect(dryGain);
        source.connect(convolver);

        dryGain.connect(merger, 0, 0);
        dryGain.connect(merger, 0, 1);

        convolver.connect(wetGain);
        wetGain.connect(merger, 0, 0);
        wetGain.connect(merger, 0, 1);

        merger.connect(offlineContext.destination);

        // Process
        source.start(0);
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

        const writeString = (offset: number, string: string): void => {
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
        if (!this.audioContext) {
            throw new Error('AudioContext not initialized');
        }

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

// Usage examples with proper typing
export async function processWithEarlyReflections(audioBlob: Blob): Promise<Blob> {
    const processor = new EarlyReflectionsProcessor();
    await processor.initialize();

    // Load audio
    await processor.loadAudioFile(audioBlob);

    // Process with early reflections - small room
    const smallRoomBuffer = await processor.processWithEarlyReflections({
        dryLevel: 0.6,
        wetLevel: 0.5,
        roomWidth: 4,
        roomLength: 5,
        roomHeight: 2.5,
        sourcePosition: [1, 2, 1.2],
        listenerPosition: [3, 3, 1.2],
        absorption: 0.2, // Less absorption = more reflections
        maxReflections: 3
    });

    return processor.audioBufferToWav(smallRoomBuffer);
}

export async function processLargeConcertHall(audioBlob: Blob): Promise<Blob> {
    const processor = new EarlyReflectionsProcessor();
    await processor.initialize();

    await processor.loadAudioFile(audioBlob);

    // Concert hall early reflections
    const concertHallBuffer = await processor.processWithEarlyReflections({
        dryLevel: 0.5,
        wetLevel: 0.6,
        roomWidth: 20,
        roomLength: 30,
        roomHeight: 12,
        sourcePosition: [10, 5, 2],
        listenerPosition: [10, 25, 2],
        absorption: 0.1, // Concert halls have low absorption
        maxReflections: 6
    });

    return processor.audioBufferToWav(concertHallBuffer);
}