interface MicrophoneRecorder {
    limit: number; // Duration limit in milliseconds
    dataAvailableCallback: (data: Blob) => void; // Callback for when data is available
    onStopCallback: () => void; // Callback for when recording stops
}

export const useMicrophoneRecorder = async (props: MicrophoneRecorder) => {
    const { limit, dataAvailableCallback, onStopCallback } = props;

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream, { 
        mimeType: "audio/webm; codecs=opus",
        audioBitsPerSecond: 16000 
    });    
    
    mediaRecorder.start(250); // Start recording with a 250ms timeslice

    mediaRecorder.ondataavailable = (event) => {
        dataAvailableCallback(event.data);
    };

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 256;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    source.connect(analyser);

    let silenceStart: number = null;
    const silenceThreshold = 5; // Adjust this threshold as needed
    const silenceDuration = 800; // Adjust this duration as needed

    function detectSilence() {
        analyser.getByteFrequencyData(dataArray);

        // Calculate average volume
        const averageVolume = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;

        if (averageVolume < silenceThreshold) {
            if (silenceStart === null) {
                silenceStart = Date.now();
            } else if (Date.now() - silenceStart > silenceDuration) {
                console.log("Silence detected. Stopping transcription.");
                silenceStart = null; // Reset silence detection
                mediaRecorder.stop(); // Stop recording
                return; // Stop further processing
            }
        } else {
            silenceStart = null; // Reset if audio is detected
        }

        requestAnimationFrame(detectSilence);
    }

    detectSilence();

    mediaRecorder.onstop = () => {
        onStopCallback();
    };

    setTimeout(() => {
        mediaRecorder.stop();
        stream.getTracks().forEach((track) => track.stop());
    }, limit);


    return mediaRecorder;
};