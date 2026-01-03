import { useState, useRef, useCallback, useEffect } from "react";
import { toast } from "sonner";

export interface WordTimestamp {
  text: string;
  start: number;
  end: number;
}

interface WhisperOutput {
  text: string;
  chunks: WordTimestamp[];
}

interface UseWhisperTranscriptionReturn {
  isRecording: boolean;
  isProcessing: boolean;
  isModelLoading: boolean;
  loadingProgress: number;
  transcript: string;
  wordTimestamps: WordTimestamp[];
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => void;
  reset: () => void;
  audioBlob: Blob | null;
}

interface UseWhisperTranscriptionProps {
  onTranscribeComplete?: (data: WhisperOutput) => void;
}

export function useWhisperTranscription({ onTranscribeComplete }: UseWhisperTranscriptionProps = {}): UseWhisperTranscriptionReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const [transcript, setTranscript] = useState("");
  const [wordTimestamps, setWordTimestamps] = useState<WordTimestamp[]>([]);

  const workerRef = useRef<Worker | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const languageRef = useRef<string | undefined>("en");
  
  // Ref for callback to avoid useEffect re-runs
  const onCompleteRef = useRef(onTranscribeComplete);
  useEffect(() => {
    onCompleteRef.current = onTranscribeComplete;
  }, [onTranscribeComplete]);

  useEffect(() => {
    // Create worker
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
        case 'ready':
            setIsModelLoading(false);
            break;
        case 'transcribing':
            setIsProcessing(true);
            setIsModelLoading(false);
            break;
        case 'complete':
            setTranscript(output.text);
            setWordTimestamps(output.chunks);
            if (onCompleteRef.current) {
                onCompleteRef.current(output);
            }
            setIsProcessing(false);
            toast.success("Transcription complete!");
            break;
        case 'error':
            setIsProcessing(false);
            setIsModelLoading(false);
            console.error("Worker error:", error);
            toast.error(message || "An error occurred", {
              description: typeof error === 'string' ? error : error?.message
            });
            break;
      }
    };

    workerRef.current = worker;
    worker.postMessage({ action: 'loadModel' });

    return () => {
      worker.terminate();
    };
  }, []);

  const startRecording = useCallback(async (languageCode: string = "en") => {
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

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        
        if (workerRef.current) {
          try {
             const arrayBuffer = await blob.arrayBuffer();
             const audioContext = new AudioContext({ sampleRate: 16000 });
             const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
             const audioData = audioBuffer.getChannelData(0);
             
             // Send Float32Array to worker
             workerRef.current.postMessage({
               audio: audioData,
               language: languageRef.current,
               task: 'transcribe',
             }, [audioData.buffer]); // Transferable
             
          } catch (err) {
             console.error("Error decoding audio:", err);
             toast.error("Failed to process audio recording.");
          }
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
