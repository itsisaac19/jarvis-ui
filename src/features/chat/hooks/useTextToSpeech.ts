import { useChatStore } from "../stores/ChatStore";
import AudioStreamer from "../utils/AudioStreamer";

interface TextToSpeech {
    process: (LLMResponse: string) => Promise<void>;
}

export const useTextToSpeech = (): TextToSpeech => {
    const { setIsReady } = useChatStore();
    
    const process = async (LLMResponse: string) => {
        const text = LLMResponse;
        console.log("Converting text to speech:", text);
    
        //const estimatedTime = estimateProcessingTime(text);
        //console.log(`Estimated processing time: ${estimatedTime.toFixed(2)} seconds`);
        // Animate progress bar
        //animateProgressBar(estimatedTime);
    
        const streamer = new AudioStreamer();
        await streamer.processorReady;
    
        // 8x10x3m room with 25% absorption
        //streamer.setCustomRoom(8, 10, 3, 0.25); 
        streamer.setReverbSettings({
            dryLevel: 0.8,
            wetLevel: 0.6,
            reverbLevel: 0.2,
            earlyReflectionsEnabled: true,
            reverbEnabled: false,
            rayTracingEnabled: true,
            roomWidth: 12,
            roomLength: 15,
            roomHeight: 10,
        });
    
        await streamer.startStreaming(text);
        await streamer.waitForPlaybackCompletion();
        setIsReady(true);
    }

    return { process };
}