import { useEffect } from 'react';
import { usePorcupine } from "@picovoice/porcupine-react";
import { type PorcupineKeyword, type PorcupineDetection, type BuiltInKeyword, type PorcupineModel, type PorcupineOptions } from '@picovoice/porcupine-web';

export interface PorcupineCore {
    keywordDetection: PorcupineDetection | null,
    isLoaded: boolean,
    isListening: boolean,
    error: Error | null,
    init: (
        accessKey: string,
        keywords: Array<PorcupineKeyword | BuiltInKeyword> | PorcupineKeyword | BuiltInKeyword,
        model: PorcupineModel,
        options?: PorcupineOptions,
    ) => Promise<void>,
    start: () => Promise<void>,
    stop: () => Promise<void>,
    release: () => Promise<void>,
}

interface PorcupineWrapperProps {
    onDetectionCallback: (props: PorcupineCore) => any;
}

export const usePorcupineWrapper = (props: PorcupineWrapperProps) => {
    const core = usePorcupine();
    const {
        keywordDetection,
        init,
        start,
        stop,
        release
    } = core;

    const porcupineKeyword = { 
        publicPath: "/assets/Jarvis_en_wasm_v3_0_0.ppn",
        label: "Jarvis" 
    }
    const porcupineModel = { publicPath: "/assets/porcupine_params.pv" }

    const startPorcupine = async (initCall: Promise<void>) => {
        await initCall;
        await start();
    }

    useEffect(() => {
        const initCall = init(
        "uCKaduTEHKVAOi2iT5hVojVFh7oTWL0pub46aht7k/Zk30kY9y58gA==",
        porcupineKeyword,
        porcupineModel
        );

        startPorcupine(initCall);
    }, []);

    useEffect(() => {
        if (keywordDetection !== null) {
            console.log(`Detected keyword`, keywordDetection);
            props.onDetectionCallback(core);
        }
    }, [keywordDetection]);

    return core;
}