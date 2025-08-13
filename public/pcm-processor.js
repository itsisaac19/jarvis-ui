class PCMPlayerProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.audioBuffer = new Float32Array(0);
        this.streamEnded = false;
        this.silentFrames = 0;
        this.maxSilentFrames = 250;
        
        // Audio processing parameters
        this.sampleRate = 48000; // Will be updated from context
        this.earlyReflectionsEnabled = true;
        this.reverbEnabled = true;
        this.rayTracingEnabled = false; // Advanced ray-traced early reflections
        
        // Room acoustics parameters
        this.roomWidth = 6;
        this.roomLength = 8;
        this.roomHeight = 3;
        this.sourcePosition = [2, 3, 1.5];
        this.listenerPosition = [4, 5, 1.5];
        this.wallAbsorption = 0.3;
        this.maxReflectionOrder = 3;
        this.speedOfSound = 343;
        
        // Wet/dry mix
        this.dryLevel = 0.7;
        this.wetLevel = 0.3;
        this.reverbLevel = 0.2;
        this.rayTracedLevel = 0.0;
        
        // Initialize audio processing
        this.setupEarlyReflections();
        this.setupReverb();
        this.setupRayTracedReflections();
        
        this.port.onmessage = (event) => {
            if (event.data === 'stream-ended') {
                this.streamEnded = true;
                return;
            }
            
            if (event.data.type === 'settings') {
                this.updateSettings(event.data);
                return;
            }
            
            const chunk = event.data;
            let audioData;
            
            if (chunk instanceof ArrayBuffer) {
                const int16Data = new Int16Array(chunk);
                audioData = new Float32Array(int16Data.length);
                for (let i = 0; i < int16Data.length; i++) {
                    audioData[i] = int16Data[i] / 32768.0;
                }
            } else {
                audioData = new Float32Array(chunk);
            }
            
            const newBuffer = new Float32Array(this.audioBuffer.length + audioData.length);
            newBuffer.set(this.audioBuffer);
            newBuffer.set(audioData, this.audioBuffer.length);
            this.audioBuffer = newBuffer;
        };
    }
    
    setupEarlyReflections() {
        // Simple early reflections using delay lines
        this.earlyReflectionDelays = [
            { samples: Math.floor(0.013 * this.sampleRate), gain: 0.3, feedback: 0.1 },
            { samples: Math.floor(0.019 * this.sampleRate), gain: 0.25, feedback: 0.08 },
            { samples: Math.floor(0.025 * this.sampleRate), gain: 0.2, feedback: 0.06 },
            { samples: Math.floor(0.031 * this.sampleRate), gain: 0.15, feedback: 0.04 },
            { samples: Math.floor(0.043 * this.sampleRate), gain: 0.12, feedback: 0.03 },
            { samples: Math.floor(0.059 * this.sampleRate), gain: 0.1, feedback: 0.02 }
        ];
        
        this.earlyReflectionBuffers = this.earlyReflectionDelays.map(delay => ({
            buffer: new Float32Array(delay.samples),
            index: 0,
            gain: delay.gain,
            feedback: delay.feedback
        }));
    }
    
    setupReverb() {
        // Comb filter delays (for reverb tail)
        const combDelays = [
            Math.floor(0.029 * this.sampleRate),
            Math.floor(0.037 * this.sampleRate),
            Math.floor(0.041 * this.sampleRate),
            Math.floor(0.043 * this.sampleRate)
        ];
        
        // Allpass filter delays (for diffusion)
        const allpassDelays = [
            Math.floor(0.005 * this.sampleRate),
            Math.floor(0.017 * this.sampleRate)
        ];
        
        this.combFilters = combDelays.map(delay => ({
            buffer: new Float32Array(delay),
            index: 0,
            feedback: 0.84,
            dampening: 0.2
        }));
        
        this.allpassFilters = allpassDelays.map(delay => ({
            buffer: new Float32Array(delay),
            index: 0,
            feedback: 0.5
        }));
        
        this.lowpassState = 0;
    }
    
    setupRayTracedReflections() {
        // Pre-calculate ray-traced early reflections based on room geometry
        this.rayTracedReflections = this.calculateRoomReflections();
        
        // Create delay lines for each calculated reflection
        this.rayTracedBuffers = this.rayTracedReflections.map(reflection => ({
            buffer: new Float32Array(Math.floor(reflection.time * this.sampleRate)),
            index: 0,
            gain: reflection.amplitude * (1 - reflection.totalAbsorption),
            panLeft: reflection.panGains.left,
            panRight: reflection.panGains.right,
            time: reflection.time
        }));
    }
    
    calculateRoomReflections() {
        const reflections = [];
        
        // Define room surfaces
        const surfaces = [
            { normal: [1, 0, 0], position: [0, 0, 0], absorption: this.wallAbsorption }, // Left wall
            { normal: [-1, 0, 0], position: [this.roomWidth, 0, 0], absorption: this.wallAbsorption }, // Right wall
            { normal: [0, 1, 0], position: [0, 0, 0], absorption: this.wallAbsorption }, // Front wall
            { normal: [0, -1, 0], position: [0, this.roomLength, 0], absorption: this.wallAbsorption }, // Back wall
            { normal: [0, 0, 1], position: [0, 0, 0], absorption: this.wallAbsorption * 0.8 }, // Floor
            { normal: [0, 0, -1], position: [0, 0, this.roomHeight], absorption: this.wallAbsorption * 0.6 } // Ceiling
        ];
        
        // Direct path
        const directDistance = this.distance3D(this.sourcePosition, this.listenerPosition);
        const directTime = directDistance / this.speedOfSound;
        const directDirection = this.normalize([
            this.listenerPosition[0] - this.sourcePosition[0],
            this.listenerPosition[1] - this.sourcePosition[1],
            this.listenerPosition[2] - this.sourcePosition[2]
        ]);
        
        reflections.push({
            time: directTime,
            amplitude: 1 / (directDistance + 1),
            direction: directDirection,
            totalAbsorption: 0,
            order: 0,
            panGains: this.calculateStereoGains(directDirection)
        });
        
        // First-order reflections
        surfaces.forEach((surface, surfaceIndex) => {
            const reflection = this.calculateSingleReflection(surface);
            if (reflection && reflection.time < 0.15) { // 150ms max for early reflections
                reflection.order = 1;
                reflection.surfaceIndex = surfaceIndex;
                reflection.panGains = this.calculateStereoGains(reflection.direction);
                reflections.push(reflection);
            }
        });
        
        // Higher-order reflections (simplified)
        for (let order = 2; order <= this.maxReflectionOrder; order++) {
            const prevReflections = reflections.filter(r => r.order === order - 1);
            
            prevReflections.forEach(prevReflection => {
                surfaces.forEach((surface, surfaceIndex) => {
                    if (prevReflection.surfaceIndex === surfaceIndex) return;
                    
                    const extendedTime = prevReflection.time + (Math.random() * 0.02 + 0.01);
                    const attenuatedAmplitude = prevReflection.amplitude * 0.7;
                    const totalAbsorption = Math.min(0.9, prevReflection.totalAbsorption + surface.absorption);
                    
                    if (extendedTime < 0.15) {
                        reflections.push({
                            time: extendedTime,
                            amplitude: attenuatedAmplitude,
                            direction: prevReflection.direction,
                            totalAbsorption: totalAbsorption,
                            order: order,
                            surfaceIndex: surfaceIndex,
                            panGains: this.calculateStereoGains(prevReflection.direction)
                        });
                    }
                });
            });
        }
        
        return reflections.sort((a, b) => a.time - b.time);
    }
    
    calculateSingleReflection(surface) {
        // Mirror source across surface
        const mirroredSource = this.mirrorPointAcrossSurface(this.sourcePosition, surface);
        
        // Check if mirrored source creates valid reflection
        if (!this.isPointInRoom(mirroredSource)) {
            return null;
        }
        
        const totalDistance = this.distance3D(mirroredSource, this.listenerPosition);
        const time = totalDistance / this.speedOfSound;
        
        const direction = this.normalize([
            this.listenerPosition[0] - mirroredSource[0],
            this.listenerPosition[1] - mirroredSource[1],
            this.listenerPosition[2] - mirroredSource[2]
        ]);
        
        return {
            time: time,
            amplitude: 1 / (totalDistance + 1),
            direction: direction,
            totalAbsorption: surface.absorption
        };
    }
    
    mirrorPointAcrossSurface(point, surface) {
        const [px, py, pz] = point;
        const [nx, ny, nz] = surface.normal;
        const [sx, sy, sz] = surface.position;
        
        const d = (px - sx) * nx + (py - sy) * ny + (pz - sz) * nz;
        
        return [
            px - 2 * d * nx,
            py - 2 * d * ny,
            pz - 2 * d * nz
        ];
    }
    
    isPointInRoom(point) {
        const [x, y, z] = point;
        return x >= 0 && x <= this.roomWidth && 
                y >= 0 && y <= this.roomLength && 
                z >= 0 && z <= this.roomHeight;
    }
    
    calculateStereoGains(direction) {
        const [x, y, z] = direction;
        const angle = Math.atan2(x, y);
        const normalizedAngle = (angle + Math.PI) / (2 * Math.PI);
        
        return {
            left: Math.cos(normalizedAngle * Math.PI / 2),
            right: Math.sin(normalizedAngle * Math.PI / 2)
        };
    }
    
    distance3D(p1, p2) {
        const dx = p1[0] - p2[0];
        const dy = p1[1] - p2[1];
        const dz = p1[2] - p2[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    
    normalize(vector) {
        const magnitude = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
        return magnitude > 0 ? [vector[0] / magnitude, vector[1] / magnitude, vector[2] / magnitude] : [0, 0, 0];
    }
    
    updateSettings(settings) {
        // Basic levels
        if (settings.dryLevel !== undefined) this.dryLevel = settings.dryLevel;
        if (settings.wetLevel !== undefined) this.wetLevel = settings.wetLevel;
        if (settings.reverbLevel !== undefined) this.reverbLevel = settings.reverbLevel;
        if (settings.rayTracedLevel !== undefined) this.rayTracedLevel = settings.rayTracedLevel;
        
        // Feature toggles
        if (settings.earlyReflectionsEnabled !== undefined) this.earlyReflectionsEnabled = settings.earlyReflectionsEnabled;
        if (settings.reverbEnabled !== undefined) this.reverbEnabled = settings.reverbEnabled;
        if (settings.rayTracingEnabled !== undefined) this.rayTracingEnabled = settings.rayTracingEnabled;
        
        // Room parameters
        if (settings.roomWidth !== undefined) this.roomWidth = settings.roomWidth;
        if (settings.roomLength !== undefined) this.roomLength = settings.roomLength;
        if (settings.roomHeight !== undefined) this.roomHeight = settings.roomHeight;
        if (settings.wallAbsorption !== undefined) this.wallAbsorption = settings.wallAbsorption;
        if (settings.maxReflectionOrder !== undefined) this.maxReflectionOrder = settings.maxReflectionOrder;
        
        // Positions
        if (settings.sourcePosition !== undefined) this.sourcePosition = settings.sourcePosition;
        if (settings.listenerPosition !== undefined) this.listenerPosition = settings.listenerPosition;
        
        // Recalculate ray-traced reflections if room parameters changed
        if (settings.roomWidth !== undefined || settings.roomLength !== undefined || 
            settings.roomHeight !== undefined || settings.wallAbsorption !== undefined ||
            settings.sourcePosition !== undefined || settings.listenerPosition !== undefined ||
            settings.maxReflectionOrder !== undefined) {
            this.setupRayTracedReflections();
        }
    }
    
    processEarlyReflections(input) {
        let output = 0;
        
        for (let i = 0; i < this.earlyReflectionBuffers.length; i++) {
            const delay = this.earlyReflectionBuffers[i];
            const delayedSample = delay.buffer[delay.index];
            
            output += delayedSample * delay.gain;
            delay.buffer[delay.index] = input + (delayedSample * delay.feedback);
            delay.index = (delay.index + 1) % delay.buffer.length;
        }
        
        return output;
    }
    
    processRayTracedReflections(input) {
        let leftOutput = 0;
        let rightOutput = 0;
        
        for (let i = 0; i < this.rayTracedBuffers.length; i++) {
            const reflection = this.rayTracedBuffers[i];
            if (reflection.buffer.length === 0) continue;
            
            const delayedSample = reflection.buffer[reflection.index];
            
            leftOutput += delayedSample * reflection.gain * reflection.panLeft;
            rightOutput += delayedSample * reflection.gain * reflection.panRight;
            
            reflection.buffer[reflection.index] = input;
            reflection.index = (reflection.index + 1) % reflection.buffer.length;
        }
        
        return { left: leftOutput, right: rightOutput };
    }
    
    processReverb(input) {
        let combOutput = 0;
        
        // Process comb filters (parallel)
        for (let i = 0; i < this.combFilters.length; i++) {
            const comb = this.combFilters[i];
            const delayed = comb.buffer[comb.index];
            
            // Simple low-pass dampening
            const dampened = this.lowpassState = this.lowpassState * (1 - comb.dampening) + delayed * comb.dampening;
            
            combOutput += delayed;
            comb.buffer[comb.index] = input + (dampened * comb.feedback);
            comb.index = (comb.index + 1) % comb.buffer.length;
        }
        
        combOutput /= this.combFilters.length;
        
        // Process allpass filters (series)
        let allpassOutput = combOutput;
        for (let i = 0; i < this.allpassFilters.length; i++) {
            const allpass = this.allpassFilters[i];
            const delayed = allpass.buffer[allpass.index];
            const output = -allpassOutput + delayed;
            
            allpass.buffer[allpass.index] = allpassOutput + (delayed * allpass.feedback);
            allpass.index = (allpass.index + 1) % allpass.buffer.length;
            
            allpassOutput = output;
        }
        
        return allpassOutput;
    }
    
    processSample(input, channel = 0) {
        let output = input * this.dryLevel; // Dry signal
        
        if (this.earlyReflectionsEnabled) {
            const earlyReflections = this.processEarlyReflections(input);
            output += earlyReflections * this.wetLevel;
        }
        
        if (this.reverbEnabled) {
            const reverb = this.processReverb(input);
            output += reverb * this.reverbLevel;
        }
        
        if (this.rayTracingEnabled) {
            const rayTraced = this.processRayTracedReflections(input);
            // Return appropriate channel for stereo
            const rayTracedOutput = channel === 0 ? rayTraced.left : rayTraced.right;
            output += rayTracedOutput * this.rayTracedLevel;
        }
        
        return output;
    }

    process(inputs, outputs) {
        const output = outputs[0];
        const frameSize = 128;
        
        if (this.audioBuffer.length >= frameSize) {
            const channelCount = output.length;
            
            for (let channel = 0; channel < channelCount; channel++) {
                const outputChannel = output[channel];
                for (let i = 0; i < frameSize; i++) {
                    const processedSample = this.processSample(this.audioBuffer[i], channel);
                    outputChannel[i] = processedSample;
                }
            }
            
            this.audioBuffer = this.audioBuffer.subarray(frameSize);
            this.silentFrames = 0;
        } else if (this.audioBuffer.length > 0) {
            const availableSamples = this.audioBuffer.length;
            const channelCount = output.length;
            
            for (let channel = 0; channel < channelCount; channel++) {
                const outputChannel = output[channel];
                
                for (let i = 0; i < availableSamples; i++) {
                    const processedSample = this.processSample(this.audioBuffer[i], channel);
                    outputChannel[i] = processedSample;
                }
                
                for (let i = availableSamples; i < frameSize; i++) {
                    outputChannel[i] = 0;
                }
            }
            
            this.audioBuffer = new Float32Array(0);
            this.silentFrames = 0;
        } else {
            // No data available, output silence
            for (let channel = 0; channel < output.length; channel++) {
                output[channel].fill(0);
            }
            
            this.silentFrames++;
            
            if (this.streamEnded && this.silentFrames >= this.maxSilentFrames) {
                this.port.postMessage({ type: 'playback-finished' });
                this.silentFrames = 0;
                this.streamEnded = false;
            }
        }
        
        return true;
    }
}

registerProcessor("pcm-processor", PCMPlayerProcessor);