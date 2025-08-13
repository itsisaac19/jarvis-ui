import { useEffect, useRef } from "react";
import { usePorcupineWrapper } from "../../../hooks/usePorcupineWrapper";
import { type PorcupineCore } from "../../../hooks/usePorcupineWrapper";

const Startup = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const SKIP_STARTUP = true;

    const detectionCallback = (core: PorcupineCore) => {
        if (SKIP_STARTUP) {
            return;
        }
        core.stop();
        core.release();

        if (videoRef.current) {
            videoRef.current.play();
        }
        setTimeout(() => {
            const startupElement = wrapperRef.current;
            if (startupElement) {
                startupElement.classList.add('fade-out');
                setTimeout(() => {
                    startupElement.style.display = "none";
                }, 1000);
            }
        }, 9000); 
    }

    const {stop, release} = usePorcupineWrapper({
        onDetectionCallback: detectionCallback
    });

    useEffect(() => {
        const startupElement = wrapperRef.current;
        if (SKIP_STARTUP) {
            stop();
            release();
            
            startupElement.style.display = "none";
        }
    }, []);

    return (
        <div ref={wrapperRef} className={`startup-wrapper ${SKIP_STARTUP ? 'fade-out' : ''}`}>
            <div className="startup-video">
                <video ref={videoRef} src="/assets/init-jarvis-01.mp4"></video>
            </div>
        </div>
    );
}

export default Startup;