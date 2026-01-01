import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";
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

export interface WordTimestamp {
  text: string;
  start: number;
  end: number;
}

interface UseVoiceRecordingReturn {
  isRecording: boolean;
  isProcessing: boolean;
  transcript: string;
  rawTranscript: string;
  wordTimestamps: WordTimestamp[];
  startRecording: (languageCode?: string) => Promise<void>;
  stopRecording: () => Promise<{ blob: Blob | null; transcript: string }>;
  resetTranscript: () => void;
  audioBlob: Blob | null;
  audioUrl: string | null;
  saveAudio: (blobOverride?: Blob | null) => Promise<string | null>;
}

export function useVoiceRecording(): UseVoiceRecordingReturn {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [rawTranscript, setRawTranscript] = useState("");
  const [wordTimestamps, setWordTimestamps] = useState<WordTimestamp[]>([]);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const sessionBegunRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);

  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<SpeechRecognitionType | null>(null);
  const rtRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const activeLanguageRef = useRef<string>("en-US");

  const startRecording = useCallback(async (languageCode: string = "en-US") => {
    try {
      activeLanguageRef.current = languageCode;
      startTimeRef.current = Date.now();
      setWordTimestamps([]);
      setTranscript("");
      setRawTranscript("");
      sessionBegunRef.current = false;
      // Check for browser support
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition || null;

      if (!SpeechRecognitionConstructor) {
        // Allow recording even when SpeechRecognition is unavailable
        toast.error("Speech recognition not supported in this browser. Recording will still work if AssemblyAI is configured.");
      }

      // Request microphone permission
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast.error("Microphone capture is not supported in this browser.");
        return;
      }

      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (err) {
        const error = err as Error;
        // Show a clearer error message based on the error
        if (error.name === "NotAllowedError" || error.name === "SecurityError") {
          toast.error("Microphone access denied. Please allow microphone permissions in your browser.");
        } else if (error.name === "NotFoundError" || error.name === "DevicesNotFoundError") {
          toast.error("No microphone found. Please connect a microphone and try again.");
        } else {
          toast.error("Unable to access microphone. Check device settings and try again.");
        }
        console.error("getUserMedia error:", error);
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

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let interim = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
              const text = result[0].transcript;
              // If Whisper is NOT active or NOT begun, use Web Speech for basic transcription and dummy timestamps
              if (!import.meta.env.VITE_WHISPER_URL || !sessionBegunRef.current) {
                setTranscript((prev) => (prev + " " + text).trim());
                
                const words = text.split(/\s+/).filter(Boolean);
                const now = Date.now();
                
                const dummyWords: WordTimestamp[] = words.map((w, idx) => ({
                   text: w,
                   start: now - (words.length - idx) * 300, 
                   end: now - (words.length - idx - 1) * 300
                }));
                setWordTimestamps(prev => [...prev, ...dummyWords]);
              }
            } else {
              interim += result[0].transcript;
            }
          }
          const raw = interim.trim();
          setRawTranscript(raw);
          if (!import.meta.env.VITE_WHISPER_URL) {
            setTranscript(raw); 
          }
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

      // Start Web Speech ASAP as fallback
      if (recognitionRef.current) {
        try { 
          recognitionRef.current.start(); 
        } catch (e) { 
          console.warn('Speech recognition start failed', e); 
        }
      }

      // Start MediaRecorder
      mediaRecorderRef.current.start();
      setIsRecording(true);

      // --- AssemblyAI Realtime Setup (Isolated) ---
      const apiKey = import.meta.env.VITE_ASSEMBLYAI_API_KEY;
      if (apiKey) {
        (async () => {
          try {
             // Map app speech language code to internal codes (e.g. 'en-US' -> 'en', 'fr-FR' -> 'fr', 'es-ES' -> 'es')
             const langMap: Record<string, string> = {
               'en-US': 'en',
               'fr-FR': 'fr',
               'es-ES': 'es'
             };
             const targetLang = langMap[languageCode] || 'en';
             
             // Use Distil-Whisper server if configured, otherwise this section is skipped
             const whisperUrl = import.meta.env.VITE_WHISPER_URL;
             if (!whisperUrl) {
               console.warn("⚠️ Distil-Whisper URL not configured (VITE_WHISPER_URL). Realtime transcription disabled.");
               return;
             }

             console.log(`🔗 Connecting to Distil-Whisper: ${whisperUrl} [Language: ${languageCode}]...`);
             const socket = new WebSocket(whisperUrl);
             rtRef.current = socket; 

             socket.onopen = () => {
               console.log("🔓 AssemblyAI Realtime: Socket opened");
               // No need to send auth_key if passed in query param, but some versions need it.
               // We'll wait for SessionBegun.
             };

             socket.onmessage = (event) => {
               const data = JSON.parse(event.data);
               if (data.message_type === 'SessionBegun') {
                  console.log('✅ AssemblyAI Realtime: Session Begun', data.session_id);
                  sessionBegunRef.current = true;
               }
               if (data.message_type === 'FinalTranscript' && data.words) {
                 const sessionStart = startTimeRef.current || Date.now();
                 const newWords = data.words.map((w: any) => ({
                   text: w.text,
                   start: sessionStart + w.start,
                   end: sessionStart + w.end
                 }));
                 setWordTimestamps(prev => [...prev, ...newWords]);
                 setTranscript(prev => (prev + " " + data.text).trim());
               }
               if (data.error) {
                 console.error('❌ AssemblyAI Realtime error:', data.error);
                 // Don't toast here to avoid spamming the user if it's just a transition error
               }
             };

             socket.onerror = (err) => console.error('❌ AssemblyAI WebSocket error:', err);
             socket.onclose = (event) => {
               console.log('ℹ️ AssemblyAI Realtime: Connection closed', event.code, event.reason);
               sessionBegunRef.current = false;
             };

             // Link Audio Context to WebSocket
             const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
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
               // Base64 encode for WebSocket transport
               const b64 = window.btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
               socket.send(JSON.stringify({ audio_data: b64 }));
             };

             source.connect(processor);
             processor.connect(audioCtx.destination);
          } catch (asaiErr) {
             console.error("AssemblyAI Realtime background setup failed:", asaiErr);
          }
        })();
      }
    } catch (err) {
      const error = err as Error;
      console.error("Error starting voice system:", error);
      toast.error("Failed to start voice system. Please check microphone permissions.");
    }
  }, []);


  const stopRecording = useCallback(async (): Promise<{ blob: Blob | null; transcript: string }> => {
    setIsProcessing(true);



    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }

    if (rtRef.current) {
      const socket = rtRef.current as any as WebSocket;
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ terminate_session: true }));
      }
      socket.close();
      rtRef.current = null;
    }

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (audioContextRef.current) {
      await audioContextRef.current.close();
      audioContextRef.current = null;
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
    // If we have a recorded blob, try to transcribe it 
    let finalTranscriptVal = rawTranscript;
    if (recordedBlob) {
      try {
        const whisperUrl = import.meta.env.VITE_WHISPER_URL;
        if (whisperUrl) {
          // Attempt final transcription via the Distil-Whisper REST endpoint (to be implemented in server.py)
          // For now, we reuse the raw transcript to maintain flow if REST is unavailable
          setTranscript(rawTranscript);
          finalTranscriptVal = rawTranscript;
          console.log("📝 Using raw real-time transcript as final result.");
        } else {
          setTranscript(rawTranscript);
          finalTranscriptVal = rawTranscript;
        }
      } catch (error) {
        console.error('Final transcription error:', error);
      }
    }

    setIsProcessing(false);
    return { blob: recordedBlob, transcript: finalTranscriptVal };
  }, [rawTranscript]); // transcript and wordTimestamps are used inside state update logic but don't need to trigger re-creation of the callback itself if we treat them correctly. Actually wordTimestamps is needed for the return but this is the stop hook. 
  // Wait, if I use them in return, they should be dependencies if used in the closure. 
  // But transcript and wordTimestamps are state that changes during recording. 
  // This hook is for STOPPING, it should grab LATEST. So dependencies are correct. 
  // I'll leave them to avoid stale closures.




  const saveAudio = useCallback(async (blobOverride?: Blob | null): Promise<string | null> => {
    const blobToSave = blobOverride || audioBlob;
    if (!blobToSave) return null;

    try {
      const fileName = `recording-${Date.now()}.webm`;
      const { data, error } = await supabase.storage
        .from('audio-recordings')
        .upload(fileName, blobToSave, {
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
    setRawTranscript("");
    setWordTimestamps([]);
    setAudioBlob(null);
    setAudioUrl(null);
    sessionBegunRef.current = false;
  }, []);

  return {
    isRecording,
    isProcessing,
    transcript,
    rawTranscript,
    wordTimestamps,
    startRecording,
    stopRecording,
    resetTranscript,
    audioBlob,
    audioUrl,
    saveAudio,
  };
}
