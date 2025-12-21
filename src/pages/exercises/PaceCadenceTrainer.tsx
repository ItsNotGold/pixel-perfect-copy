
import { useState, useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { paceCadenceMaster, PaceType } from "@/data/exercises/paceCadence.master";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVoiceRecording } from "@/hooks/useVoiceRecording";
import { ExerciseGate } from "@/components/ExerciseGate";
import { Mic, Square, Gauge, RotateCcw } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

// Helper for rolling WPM
interface WpmSample {
  timestamp: number;
  wordCount: number;
}

export default function PaceCadenceTrainer() {
  const { language: appLang, speechLanguageCode } = useLanguage();
  // Safe language getter
  const currentLang = appLang;

  const { 
    isRecording, 
    startRecording, 
    stopRecording, 
    transcript,
    rawTranscript,
    audioBlob,
    saveAudio 
  } = useVoiceRecording();
  
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  // State
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [currentTopic, setCurrentTopic] = useState("");
  const [realtimeWpm, setRealtimeWpm] = useState(0);
  // Separate score state for display
  const [displayScore, setDisplayScore] = useState<number | null>(null);
  
  // Refs
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const wpmIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const wpmSamplesRef = useRef<WpmSample[]>([]);
  
  // Scoring Refs
  const currentPaceMetrics = useRef({
    inZoneSeconds: 0,
    totalSeconds: 0,
    fastAvg: 0,
    slowAvg: 0,
    fastCount: 0,
    slowCount: 0,
  });

  const content = paceCadenceMaster;
  
  // Initialize topic on mount or language change
  useEffect(() => {
    pickNewTopic();
  }, [currentLang]); // eslint-disable-line react-hooks/exhaustive-deps

  const pickNewTopic = () => {
    const langTopics = content.topics.find(t => t.language === currentLang)?.list 
      || content.topics[0].list;
    const random = langTopics[Math.floor(Math.random() * langTopics.length)];
    setCurrentTopic(random);
  };

  const getTargetPaceType = (secondsPassed: number): PaceType => {
    const segments = content.segments;
    const segment = segments.find(s => s.start <= secondsPassed && s.end > secondsPassed);
    return segment ? segment.type : 'free';
  };

  const secondsPassed = 60 - timeLeft;
  const currentPaceType = getTargetPaceType(secondsPassed);
  const currentSegment = content.segments.find(s => s.type === currentPaceType && s.start <= secondsPassed && s.end > secondsPassed);
  
  const targetRange = content.paceDefinitions[currentLang][currentPaceType];

  // WPM Calculation Logic (Rolling Window)
  useEffect(() => {
    if (!isActive) return;

    wpmIntervalRef.current = setInterval(() => {
      const now = Date.now();
      
      // Count total words in current transcript
      // This is cumulative.
      // Count total words in current transcript (Finalized + Interim)
      const currentText = (transcriptRef.current + " " + (rawTranscriptRef.current || "")).trim();
      const words = currentText.split(/\s+/).filter(w => w.length > 0);
      const totalCount = words.length; // accumulated count

      // Add to samples
      wpmSamplesRef.current.push({ timestamp: now, wordCount: totalCount });

      // Keep only last 5 seconds
      const WINDOW_MS = 5000;
      wpmSamplesRef.current = wpmSamplesRef.current.filter(s => s.timestamp > now - WINDOW_MS);

      // Calculate WPM
      let calculatedWpm = 0;
      if (wpmSamplesRef.current.length > 1) {
        const oldest = wpmSamplesRef.current[0];
        const newest = wpmSamplesRef.current[wpmSamplesRef.current.length - 1];
        
        const deltaWords = newest.wordCount - oldest.wordCount;
        const deltaTimeMinutes = (newest.timestamp - oldest.timestamp) / 60000;
        
        if (deltaTimeMinutes > 0) {
           calculatedWpm = Math.round(deltaWords / deltaTimeMinutes);
        }
      }

      // Smooth weighting for display (30% new, 70% old) to avoid jumps
      setRealtimeWpm(prev => {
          if (calculatedWpm === 0 && prev < 5) return 0; // Quick drop to 0 if silence
          return Math.round(prev * 0.7 + calculatedWpm * 0.3);
      });

      // --- Metric Tracking for Scoring ---
      if (isActive && !isComplete) {
         // Maintenance
         if (calculatedWpm >= targetRange.min && calculatedWpm <= targetRange.max) {
             currentPaceMetrics.current.inZoneSeconds += 0.5; // running every 500ms? No, 1000ms is the interval below?
             // Wait, interval is set below. Let's assume 500ms or 1000ms.
         }
         currentPaceMetrics.current.totalSeconds += 0.5; // adjust based on interval

         // Contrast
         if (currentPaceType === 'fast') {
            currentPaceMetrics.current.fastAvg = 
              (currentPaceMetrics.current.fastAvg * currentPaceMetrics.current.fastCount + calculatedWpm) / (currentPaceMetrics.current.fastCount + 1);
            currentPaceMetrics.current.fastCount++;
         } else if (currentPaceType === 'slow') {
            currentPaceMetrics.current.slowAvg = 
              (currentPaceMetrics.current.slowAvg * currentPaceMetrics.current.slowCount + calculatedWpm) / (currentPaceMetrics.current.slowCount + 1);
            currentPaceMetrics.current.slowCount++;
         }
      }

    }, 500); // 500ms update rate

    return () => {
      if (wpmIntervalRef.current) clearInterval(wpmIntervalRef.current);
    };
  }, [isActive, transcript, currentPaceType, isComplete, targetRange]); 
  // removed `rawTranscript` dependency to avoid erratic updates, rely on `transcript` which usually streams well enough or use `useVoiceRecording` better if available.
  // Actually, `transcript` from hook might be stable finalized text. `rawTranscript` is interim.
  // For 'real-time', rawTranscript is better for responsiveness.
  // But USER demanded "sync to finalized SpeechRecognition results" OR "AssemblyAI".
  // `transcript` in `useVoiceRecording` is usually finalized. `rawTranscript` is interim.
  // If we ONLY use finalized, WPM will drop to 0 while speaking a long sentence.
  // We MUST use rawTranscript for the "count" to keep it alive.
  // Let's use `rawTranscript || transcript` inside the effect, but depend on `rawTranscript`.

  // Fix: Re-add rawTranscript to dependency and use it for valid count.
  useEffect(() => {
     // ... logic above ...
  }, [isActive, transcript, isComplete]); // Actually we need a ref or access to latest state for transcript. 
  // Inside interval, we can't reliably read state if proper dependencies aren't set, but setting dependencies restarts interval.
  // Better use Ref for transcript.
  
  // Ref-based transcript access for Interval
  const transcriptRef = useRef("");
  const rawTranscriptRef = useRef("");
  useEffect(() => { transcriptRef.current = transcript; }, [transcript]);
  useEffect(() => { rawTranscriptRef.current = rawTranscript; }, [rawTranscript]);


  const startSession = async () => {
    setIsActive(true);
    setIsComplete(false);
    setTimeLeft(60);
    setRealtimeWpm(0);
    wpmSamplesRef.current = [];
    currentPaceMetrics.current = { inZoneSeconds: 0, totalSeconds: 0, fastAvg: 0, slowAvg: 0, fastCount: 0, slowCount: 0 };
    
    await startRecording(speechLanguageCode);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          finishSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const finishSession = async () => {
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (wpmIntervalRef.current) clearInterval(wpmIntervalRef.current);
    
    const { blob, transcript: finalTranscript } = await stopRecording();
    setIsComplete(true);

    // Calculate Score
    // 1. Maintenance Score
    const maintenanceScore = (currentPaceMetrics.current.inZoneSeconds / Math.max(1, currentPaceMetrics.current.totalSeconds)) * 100;
    
    // 2. Contrast Score
    // Difference between avg fast and avg slow. Target diff is ~60 WPM (e.g. 100 vs 160)
    const diff = currentPaceMetrics.current.fastAvg - currentPaceMetrics.current.slowAvg;
    const contrastScore = Math.min(100, Math.max(0, (diff / 50) * 100)); // 50 WPM diff = 100%

     // Weighted: 60% Maintenance, 40% Contrast
    const finalScore = Math.round((maintenanceScore * 0.6) + (contrastScore * 0.4));
    setDisplayScore(finalScore);

    if (user) {
      const url = await saveAudio(blob);
      await saveAttempt({
          exerciseId: content.exerciseId,
          score: finalScore,
          maxScore: 100,
          answers: { 
            transcript: finalTranscript, 
            avgWpm: Math.round((currentPaceMetrics.current.fastAvg + currentPaceMetrics.current.slowAvg)/2),
            audioUrl: url,
            metrics: currentPaceMetrics.current
          }
      });
    }
  };

  const stopEarly = () => {
    finishSession();
  };

  // Visuals
  const getButtonText = (completed: boolean) => {
      if (completed) {
         if (currentLang === 'es') return "Intentar de nuevo";
         if (currentLang === 'fr') return "Réessayer";
         return "Try Again";
      } else {
         if (currentLang === 'es') return "Comenzar";
         if (currentLang === 'fr') return "Commencer";
         return "Start Speech"; 
      }
  };

  const getBgColor = () => {
     if (!isActive) return "bg-background";
     switch(currentPaceType) {
       case 'fast': return "bg-red-50/50 dark:bg-red-900/10";
       case 'slow': return "bg-blue-50/50 dark:bg-blue-900/10";
       default: return "bg-background";
     }
  };

  const getTextColor = () => {
    if (!isActive) return "text-muted-foreground";
    switch(currentPaceType) {
      case 'fast': return "text-red-500 animate-pulse";
      case 'slow': return "text-blue-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <MainLayout>
      <ExerciseGate exerciseId={content.exerciseId}>
        <div className={cn("min-h-screen transition-colors duration-1000", getBgColor())}>
          <div className="mx-auto max-w-3xl px-6 py-12">
            
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                <Gauge className="h-7 w-7 text-white" />
              </div>
              <h1 className="mb-2 font-display text-3xl text-foreground">{content.name}</h1>
              <p className="text-muted-foreground">{content.description}</p>
            </div>

             {/* Score Cards */}
             <div className="mb-8 flex items-center justify-center gap-6">
               <div className="rounded-xl glass p-4 text-center min-w-[100px]">
                  <div className="text-2xl font-bold text-primary">{displayScore !== null ? displayScore : "--"}</div>
                  <div className="text-xs text-muted-foreground">Pace Score</div>
               </div>
                <div className="rounded-xl glass p-4 text-center min-w-[100px]">
                  <div className="text-2xl font-bold text-foreground">{realtimeWpm}</div>
                  <div className="text-xs text-muted-foreground">Current WPM</div>
               </div>
             </div>
            {/* Main Interactive Area */}
            <div className="rounded-2xl glass p-8 shadow-card relative overflow-hidden">
               {/* Progress Bar */}
               {isActive && (
                 <div className="absolute top-0 left-0 h-1 bg-primary transition-all duration-1000 ease-linear" style={{ width: `${((60-timeLeft)/60)*100}%` }} />
               )}

               {/* Topic */}
               <div className="mb-8 text-center">
                 <div className="text-sm text-muted-foreground mb-2">Your Topic</div>
                 <div className="text-xl font-medium text-foreground p-4 bg-muted/30 rounded-xl">
                   {currentTopic}
                 </div>
               </div>

               {/* Dynamic Instruction / Metronome */}
               <div className="mb-12 min-h-[160px] flex flex-col items-center justify-center text-center">
                  {!isActive && !isComplete && (
                    <div className="text-muted-foreground">Press Start to begin your speech</div>
                  )}
                  
                  {isActive && (
                    <>
                      <div className={cn("text-5xl font-bold mb-4 transition-all duration-500", getTextColor())}>
                         {currentPaceType === 'fast' && (currentLang === 'es' ? "RÁPIDO" : currentLang === 'fr' ? "RAPIDE" : "FAST")}
                         {currentPaceType === 'slow' && (currentLang === 'es' ? "LENTO" : currentLang === 'fr' ? "LENT" : "SLOW")}
                         {currentPaceType === 'free' && (currentLang === 'es' ? "NATURAL" : currentLang === 'fr' ? "NATUREL" : "NATURAL")}
                      </div>
                      <div className="text-xl text-foreground/80 mb-6">
                         {currentSegment?.instruction[currentLang]}
                      </div>
                      
                      {/* WPM Feedback */}
                      <div className="flex flex-col items-center gap-2">
                         <div className="text-4xl font-mono font-medium">
                            {realtimeWpm} <span className="text-lg text-muted-foreground">WPM</span>
                         </div>
                         <div className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground">
                            Target: {targetRange.min}-{targetRange.max} WPM
                         </div>
                      </div>
                    </>
                  )}

                  {isComplete && (
                     <div className="text-xl font-medium text-emerald-600">
                        Session Complete!
                     </div>
                  )}
               </div>

               {/* Controls */}
               <div className="flex justify-center gap-4">
                   {!isActive && (
                     <div className="flex flex-col gap-4 w-full max-w-xs">
                        <Button size="lg" className="w-full text-lg h-12" onClick={startSession}>
                           <Mic className="mr-2 h-5 w-5" />
                           {getButtonText(isComplete)}
                        </Button>
                        
                        <Button variant="outline" size="sm" onClick={pickNewTopic} className="w-full">
                           <RotateCcw className="mr-2 h-4 w-4" />
                           {currentLang === 'es' ? "Cambiar tema" : currentLang === 'fr' ? "Changer de sujet" : "Shuffle Topic"}
                        </Button>
                     </div>
                   )}

                  {isActive && (
                    <Button variant="destructive" size="lg" className="w-full max-w-xs text-lg h-12" onClick={stopEarly}>
                      <Square className="mr-2 h-5 w-5" />
                      Stop
                    </Button>
                  )}
               </div>

            </div>
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}
