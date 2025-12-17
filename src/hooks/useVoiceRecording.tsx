import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";
import { AssemblyAI } from 'assemblyai';
import { supabase } from "@/integrations/supabase/client";

// Type definitions for Web Speech API
interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionType extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionType;
    webkitSpeechRecognition: new () => SpeechRecognitionType;
  }
}

interface UseVoiceRecordingReturn {
  isRecording: boolean;
  isProcessing: boolean;
  transcript: string;
  rawTranscript: string;
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => void;
  resetTranscript: () => void;
  audioBlob: Blob | null;
  audioUrl: string | null;
  saveAudio: () => Promise<string | null>;
}

export function useVoiceRecording(): UseVoiceRecordingReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [rawTranscript, setRawTranscript] = useState("");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    try {
      // Check for browser support
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition || null;
      
      if (!SpeechRecognitionConstructor) {
        // Allow recording even when SpeechRecognition is unavailable — we can still provide audio playback and uploads
        toast.warn("Speech recognition not supported in this browser. Recording will still work, but transcript features will be limited.");
      }

      // Request microphone permission
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast.error("Microphone capture is not supported in this browser.");
        return;
      }

      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err: any) {
        // Show a clearer error message based on the error
        if (err && (err.name === "NotAllowedError" || err.name === "SecurityError")) {
          toast.error("Microphone access denied. Please allow microphone permissions in your browser.");
        } else if (err && (err.name === "NotFoundError" || err.name === "DevicesNotFoundError")) {
          toast.error("No microphone found. Please connect a microphone and try again.");
        } else {
          toast.error("Unable to access microphone. Check device settings and try again.");
        }
        console.error("getUserMedia error:", err);
        return;
      }
      
      // Set up MediaRecorder for audio capture
      if (typeof MediaRecorder === "undefined") {
        toast.error("Recording is not supported in this browser.");
        stream.getTracks().forEach((t) => t.stop());
        return;
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };
      
      // Set up Speech Recognition only when available
      if (SpeechRecognitionConstructor) {
        const recognition = new SpeechRecognitionConstructor();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = languageCode;

        let finalTranscript = "";

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let interim = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              finalTranscript += result[0].transcript + " ";
            } else {
              interim += result[0].transcript;
            }
          }
          // Keep raw/interim transcript for better detection of disfluencies
          const raw = (finalTranscript + interim).trim();
          setRawTranscript(raw);
          setTranscript(raw); // keep transcript populated while processing
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error("Speech recognition error:", event.error);
          if (event.error === "not-allowed") {
            toast.error("Microphone access denied. Please allow microphone access.");
          }
        };

        recognitionRef.current = recognition;
      } else {
        recognitionRef.current = null;
      }
      
      // Start the recorder and recognition (if available)
      mediaRecorder.start();
      if (recognitionRef.current) {
        try { recognitionRef.current.start(); } catch (e) { console.warn('Speech recognition start failed', e); }
      }
      setIsRecording(true);
      setTranscript("");
      
    } catch (error) {
      console.error("Error starting recording:", error);
      // Provide more actionable messages for common failure modes
      if (error && (error as any).name === "NotAllowedError") {
        toast.error("Microphone access denied. Please enable microphone permissions in your browser and reload the page.");
      } else if (error && (error as any).name === "NotFoundError") {
        toast.error("No microphone found. Connect a microphone and try again.");
      } else {
        toast.error("Failed to start recording. Check microphone permissions and try again.");
      }
    }
  }, []);

  const stopRecording = useCallback(async (): Promise<void> => {
    setIsProcessing(true);

    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    // Stop the media recorder and wait for onstop to resolve with the blob
    let recordedBlob: Blob | null = null;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      try {
        const recorder = mediaRecorderRef.current;
        recordedBlob = await new Promise<Blob | null>((resolve) => {
          recorder.onstop = () => {
            try {
              const blob = new Blob(chunksRef.current, { type: "audio/webm" });
              // update state for UI playback
              setAudioBlob(blob);
              resolve(blob);
            } catch (err) {
              console.error("Error creating audio blob:", err);
              resolve(null);
            }
          };
          try {
            recorder.stop();
          } catch (err) {
            console.error("Error stopping recorder:", err);
            resolve(null);
          }
        });
      } catch (err) {
        console.error("Error stopping recorder:", err);
      } finally {
        mediaRecorderRef.current = null;
      }
    }

    setIsRecording(false);

    // If we have a recorded blob (from the recorder), try to transcribe it using the configured service
    // Use the local recorded blob variable instead of referencing the possibly-stale state value
    if (recordedBlob) {
      try {
        // Only attempt AssemblyAI if an API key is configured
        const apiKey = import.meta.env.VITE_ASSEMBLYAI_API_KEY;
        if (apiKey) {
          const client = new AssemblyAI({ apiKey });
          const audioFile = new File([recordedBlob], 'recording.webm', { type: 'audio/webm' });
          const uploadUrl = await client.files.upload(audioFile);

          // Ask ASR to preserve disfluencies where possible and punctuate
          const transcriptResponse = await client.transcripts.transcribe({
            audio: uploadUrl,
            punctuate: true,
            format_text: true,
            disfluencies: true,
          });

          if (transcriptResponse.status === 'completed') {
            // Merge processed transcript with raw interim transcript to preserve filler detections
            const processed = transcriptResponse.text || '';
            const merged = [processed, rawTranscript].filter(Boolean).join(' ');
            setTranscript(merged);
          } else {
            toast.error('Transcription failed');
          }
        } else {
          // No remote ASR configured — keep the raw transcript captured by the Web Speech API
          setTranscript(rawTranscript);
        }
      } catch (error) {
        console.error('Transcription error:', error);
        // Don't surface a toast for transcription errors in order to keep recording flow smooth
      }
    } else {
      // If there was no recorded blob, fall back to whatever transcript we have
      setTranscript(rawTranscript);
    }

    setIsProcessing(false);
  }, [audioBlob, rawTranscript]);

  const saveAudio = useCallback(async (): Promise<string | null> => {
    if (!audioBlob) return null;
    
    try {
      const fileName = `recording-${Date.now()}.webm`;
      const { data, error } = await supabase.storage
        .from('audio-recordings')
        .upload(fileName, audioBlob, {
          contentType: 'audio/webm',
        });
      
      if (error) throw error;
      
      const { data: urlData } = supabase.storage
        .from('audio-recordings')
        .getPublicUrl(fileName);
      
      setAudioUrl(urlData.publicUrl);
      return urlData.publicUrl;
    } catch (error) {
      console.error('Error saving audio:', error);
      toast.error('Failed to save audio recording');
      return null;
    }
  }, [audioBlob]);

  const resetTranscript = useCallback(() => {
    setTranscript("");
    setAudioBlob(null);
    setAudioUrl(null);
  }, []);

  return {
    isRecording,
    isProcessing,
    transcript,
    rawTranscript,
    startRecording,
    stopRecording,
    resetTranscript,
    audioBlob,
    audioUrl,
    saveAudio,
  };
}
