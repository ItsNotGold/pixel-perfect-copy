import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";

export interface WordTimestamp {
  text: string;
  start: number;
  end: number;
}

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface UseInvisibleTranscriptionReturn {
  isRecording: boolean;
  isProcessing: boolean;
  getTranscript: () => string;
  getWordTimestamps: () => WordTimestamp[];
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => Promise<{ blob: Blob | null; transcript: string; words: WordTimestamp[] }>;
  reset: () => void;
  audioBlob: Blob | null;
}

interface WhisperWord {
  text: string;
  start: number;
  end: number;
}

interface WhisperMessage {
  message_type: 'SessionBegun' | 'FinalTranscript' | 'Error';
  text: string;
  words?: WhisperWord[];
}

export function useInvisibleTranscription(): UseInvisibleTranscriptionReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  // Refs for accumulation (survives re-renders, invisible to UI)
  const transcriptRef = useRef("");
  const wordTimestampsRef = useRef<WordTimestamp[]>([]);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const sessionBegunRef = useRef(false);

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    try {
      // Clear ONLY on new recording session start
      transcriptRef.current = "";
      wordTimestampsRef.current = [];
      setAudioBlob(null);
      startTimeRef.current = Date.now();
      sessionBegunRef.current = false;

      // Check for browser support
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition || null;

      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast.error("Microphone capture is not supported in this browser.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Setup MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      // Setup WebSocket for Distil-Whisper
      const whisperUrl = import.meta.env.VITE_WHISPER_URL;
      if (whisperUrl) {
        const socket = new WebSocket(whisperUrl);
        socketRef.current = socket;

        socket.onopen = () => console.log("🔐 WebSocket Connected");
        
        socket.onmessage = (event) => {
          const data: WhisperMessage = JSON.parse(event.data);
          
          if (data.message_type === 'SessionBegun') {
            sessionBegunRef.current = true;
          }
          
          if (data.message_type === 'FinalTranscript' && data.words) {
            const newWords: WordTimestamp[] = data.words.map((w) => ({
              text: w.text,
              start: w.start, // keeping relative to start of audio
              end: w.end
            }));
            
            // Accumulate INVISIBLY
            wordTimestampsRef.current.push(...newWords);
            transcriptRef.current = (transcriptRef.current + " " + data.text).trim();
          }
        };

        socket.onerror = (err) => console.error("WebSocket Error:", err);
        socket.onclose = () => sessionBegunRef.current = false;

        // Audio processing for WebSocket
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContextClass({ sampleRate: 16000 });
        audioContextRef.current = audioCtx;
        const source = audioCtx.createMediaStreamSource(stream);
        const processor = audioCtx.createScriptProcessor(4096, 1, 1);
        processorRef.current = processor;

        processor.onaudioprocess = (e) => {
          if (socket.readyState !== WebSocket.OPEN || !sessionBegunRef.current) return;
          const inputData = e.inputBuffer.getChannelData(0);
          const pcmData = new Int16Array(inputData.length);
          for (let i = 0; i < inputData.length; i++) {
            pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
          }
          const b64 = window.btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
          socket.send(JSON.stringify({ audio_data: b64 }));
        };

        source.connect(processor);
        processor.connect(audioCtx.destination);
      }

      // Setup Web Speech API as fallback
      if (SpeechRecognitionConstructor) {
        const recognition = new SpeechRecognitionConstructor();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = languageCode;

        recognition.onresult = (event: any) => {
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              const text = result[0].transcript;
              // If Whisper is NOT active or NOT begun, use Web Speech for accumulation
              if (!socketRef.current || !sessionBegunRef.current) {
                const now = Date.now();
                const sessionStart = startTimeRef.current || now;
                const offset = now - sessionStart;
                
                const words = text.split(/\s+/).filter(Boolean);
                const dummyWords: WordTimestamp[] = words.map((w, idx) => ({
                   text: w,
                   start: offset - (words.length - idx) * 300, 
                   end: offset - (words.length - idx - 1) * 300
                }));
                
                wordTimestampsRef.current.push(...dummyWords);
                transcriptRef.current = (transcriptRef.current + " " + text).trim();
              }
            }
          }
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
        };

        recognitionRef.current = recognition;
        try {
          recognition.start();
        } catch (e) {
          console.warn('Speech recognition start failed', e);
        }
      }

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error starting recording:", err);
      toast.error("Failed to start recording.");
    }
  }, []);

  const stopRecording = useCallback(async () => {
    setIsProcessing(true);

    // Stop Web Speech
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.warn('Speech recognition stop failed', e);
      }
      recognitionRef.current = null;
    }

    // Stop WebSocket
    if (socketRef.current) {
      if (socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(JSON.stringify({ terminate_session: true }));
      }
      socketRef.current.close();
      socketRef.current = null;
    }

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (audioContextRef.current) {
      await audioContextRef.current.close();
      audioContextRef.current = null;
    }

    // Stop MediaRecorder
    let recordedBlob: Blob | null = null;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      recordedBlob = await new Promise<Blob | null>((resolve) => {
        mediaRecorderRef.current!.onstop = () => {
          const blob = new Blob(chunksRef.current, { type: "audio/webm" });
          setAudioBlob(blob);
          resolve(blob);
        };
        mediaRecorderRef.current!.stop();
      });
    }

    setIsRecording(false);
    setIsProcessing(false);

    // Return the accumulated data - NEVER clear state here
    return {
      blob: recordedBlob,
      transcript: transcriptRef.current,
      words: wordTimestampsRef.current
    };
  }, []);

  const reset = useCallback(() => {
    transcriptRef.current = "";
    wordTimestampsRef.current = [];
    setAudioBlob(null);
  }, []);

  const getTranscript = () => transcriptRef.current;
  const getWordTimestamps = () => wordTimestampsRef.current;

  return {
    isRecording,
    isProcessing,
    getTranscript,
    getWordTimestamps,
    startRecording,
    stopRecording,
    reset,
    audioBlob
  };
}
