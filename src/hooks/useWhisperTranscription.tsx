import { useState, useRef, useCallback, useEffect } from "react";
import { toast } from "sonner";

export interface WordTimestamp {
  text: string;
  start: number; // milliseconds
  end: number;   // milliseconds
}

interface WhisperOutput {
  text: string;
  chunks: WordTimestamp[];
}

interface UseWhisperTranscriptionReturn {
  isRecording: boolean;
  isProcessing: boolean;
  isModelLoading: boolean; // Always false for Websocket
  loadingProgress: number; // Always 100 for Websocket
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
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const [transcript, setTranscript] = useState("");
  const [wordTimestamps, setWordTimestamps] = useState<WordTimestamp[]>([]);

  const websocketRef = useRef<WebSocket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  
  // Ref for callback
  const onCompleteRef = useRef(onTranscribeComplete);
  useEffect(() => {
    onCompleteRef.current = onTranscribeComplete;
  }, [onTranscribeComplete]);

  const cleanupWebSocket = useCallback(() => {
     if (websocketRef.current) {
         try {
             websocketRef.current.close();
         } catch (e) {
             console.error("Error closing socket", e);
         }
         websocketRef.current = null;
     }
  }, []);

  const startRecording = useCallback(async (languageCode: string = "en") => {
    setTranscript("");
    setWordTimestamps([]);
    setAudioBlob(null);
    cleanupWebSocket();

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast.error("Microphone capture is not supported in this browser.");
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      // Connect to WebSocket
      // Defaulting to localhost:8000 if not env var
      const wsUrl = import.meta.env.VITE_WHISPER_URL || "ws://localhost:8000/transcribe";
      console.log(`Connecting to Whisper server at ${wsUrl}`);
      
      const socket = new WebSocket(wsUrl);
      websocketRef.current = socket;

      socket.onopen = () => {
          console.log("WebSocket connected");
          setIsRecording(true);
          
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;
          chunksRef.current = [];

          mediaRecorder.ondataavailable = async (e) => {
            if (e.data.size > 0 && socket.readyState === WebSocket.OPEN) {
                chunksRef.current.push(e.data);
                // Convert blob to base64 to send over websocket
                const reader = new FileReader();
                reader.onloadend = () => {
                   const base64Audio = (reader.result as string).split(',')[1];
                   socket.send(JSON.stringify({
                       audio_data: base64Audio
                   }));
                };
                reader.readAsDataURL(e.data);
            }
          };

          mediaRecorder.start(500); // 500ms chunks for streaming
          
          toast.success("Recording started - Server Connected");
      };
      
      socket.onmessage = (event) => {
          try {
              const data = JSON.parse(event.data);
              if (data.message_type === "FinalTranscript") {
                  const resultText = data.text || "";
                  const resultChunks = data.words || [];
                  
                  setTranscript(resultText);
                  setWordTimestamps(resultChunks);
                  
                  if (onCompleteRef.current) {
                      onCompleteRef.current({ text: resultText, chunks: resultChunks });
                  }
                  
                  // If final, we can assume processing is done for that segment
                  setIsProcessing(false);
              }
          } catch (e) {
              console.error("Error parsing websocket message", e);
          }
      };

      socket.onerror = (error) => {
          console.error("WebSocket error:", error);
          toast.error("Connection to transcription server failed.");
          setIsRecording(false);
      };
      
      socket.onclose = () => {
          console.log("WebSocket disconnected");
          setIsRecording(false);
      };

    } catch (err) {
      console.error("Error starting recording:", err);
      toast.error("Failed to start recording.");
    }
  }, [cleanupWebSocket]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
    
    // Create final blob
    const blob = new Blob(chunksRef.current, { type: "audio/webm" });
    setAudioBlob(blob);

    if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
        setIsProcessing(true);
        // Send termination signal potentially, or just close after short delay
        // The server.py loop breaks on 'terminate_session' or close
        websocketRef.current.send(JSON.stringify({ terminate_session: true }));
        // Note: The server might send one last "FinalTranscript" before closing
        // We defer closing slightly to receive it? 
        // Actually server.py sends transcript *as it goes*. 
        // If we want a summary, server.py logic might need to ensure it flushes buffer.
        // Current server.py flushes on terminate.
    }
    
    setIsRecording(false);
  }, []);

  const reset = useCallback(() => {
    setTranscript("");
    setWordTimestamps([]);
    setAudioBlob(null);
    setIsProcessing(false);
    setIsRecording(false);
    cleanupWebSocket();
  }, [cleanupWebSocket]);

  return {
    isRecording,
    isProcessing,
    isModelLoading: false, // Legacy compatibility
    loadingProgress: 100, // Legacy compatibility
    transcript,
    wordTimestamps,
    startRecording,
    stopRecording,
    reset,
    audioBlob,
  };
}
