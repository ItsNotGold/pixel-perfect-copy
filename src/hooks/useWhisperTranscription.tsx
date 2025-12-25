import { useState, useRef, useCallback, useEffect } from "react";
import { toast } from "sonner";

export interface WordTimestamp {
  text: string;
  start: number;
  end: number;
}

// Define the structure of the output from the Whisper worker
interface WhisperOutput {
  text: string;
  chunks: WordTimestamp[];
}

// Define the new return type for the hook, including loading status and state-driven transcript
interface UseWhisperTranscriptionReturn {
  isRecording: boolean;
  isProcessing: boolean;
  isModelLoading: boolean;
  loadingProgress: number;
  transcript: string; // Now a state variable
  wordTimestamps: WordTimestamp[]; // Now a state variable
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => void; // No longer returns a promise with the result
  reset: () => void;
  audioBlob: Blob | null;
}

export function useWhisperTranscription(): UseWhisperTranscriptionReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  // State for the transcription results
  const [transcript, setTranscript] = useState("");
  const [wordTimestamps, setWordTimestamps] = useState<WordTimestamp[]>([]);

  // Refs for the worker and MediaRecorder
  const workerRef = useRef<Worker | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  // Language code for the current session
  const languageRef = useRef<string | undefined>("en");

  // Effect to initialize and terminate the worker
  useEffect(() => {
    const worker = new Worker(new URL('../workers/whisper.worker.ts', import.meta.url), {
        type: 'module'
    });

    worker.onmessage = (event) => {
      const { status, output, message, error, progress } = event.data;

      switch (status) {
        case 'loading':
            setIsModelLoading(true);
            setLoadingProgress(0);
            break;
        case 'progress':
            setIsModelLoading(true);
            setLoadingProgress(progress || 0);
            break;
        case 'transcribing':
            setIsProcessing(true);
            setIsModelLoading(false);
            break;
        case 'complete':
            setTranscript(output.text);
            setWordTimestamps(output.chunks);
            setIsProcessing(false);
            toast.success("Transcription complete!");
            break;
        case 'error':
            setIsProcessing(false);
            setIsModelLoading(false);
            toast.error(message || "An unknown error occurred", {
              description: error,
            });
            break;
      }
    };

    workerRef.current = worker;

    // Immediately ask the worker to start loading the model
    worker.postMessage({ action: 'loadModel' });

    return () => {
      worker.terminate();
    };
  }, []);

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    setTranscript("");
    setWordTimestamps([]);
    setAudioBlob(null);
    languageRef.current = languageCode;

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast.error("Microphone capture is not supported in this browser.");
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        if (workerRef.current) {
          workerRef.current.postMessage({
            audio: blob,
            language: languageRef.current,
            task: 'transcribe',
          });
        }
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);

    } catch (err) {
      console.error("Error starting recording:", err);
      toast.error("Failed to start recording. Please check microphone permissions.");
    }
  }, []);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setWordTimestamps([]);
    setAudioBlob(null);
    setIsProcessing(false);
    setIsRecording(false);
  }, []);

  return {
    isRecording,
    isProcessing,
    isModelLoading,
    loadingProgress,
    transcript,
    wordTimestamps,
    startRecording,
    stopRecording,
    reset,
    audioBlob,
  };
}
