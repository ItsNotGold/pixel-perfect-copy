
import { useState, useEffect, useRef, useCallback } from "react";
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

// Inject required silky smooth CSS
const WPM_METER_STYLES = `
  @property --wpm-progress {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 0%;
  }
  .wpm-meter {
    height: 12px;
    width: 300px;
    background: #e0e0e0;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
  }
  .wpm-meter-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--wpm-progress);
    background: linear-gradient(90deg, #4caf50, #8bc34a);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 6px;
  }
`;

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
  
  // Scoring Refs
  const currentPaceMetrics = useRef({
    inZoneSeconds: 0,
    totalSeconds: 0,
    fastAvg: 0,
    slowAvg: 0,
    fastCount: 0,
    slowCount: 0,
  });

  // Load content from master for usage in ExerciseGate/logic
  // In a real app we might use useLibrary().getMergerExerciseContent, but direct import is fine for now
  // as long as we respect the structure.
  const content = paceCadenceMaster.content.multilingual[currentLang] || paceCadenceMaster.content.multilingual['en'];
  const meta = paceCadenceMaster.metadata;
  
  // Initialize topic on mount or language change
  useEffect(() => {
    pickNewTopic();
  }, [currentLang]); // eslint-disable-line react-hooks/exhaustive-deps

  const pickNewTopic = () => {
    const langTopics = content.topics;
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
  
  const targetRange = content.paceDefinitions[currentPaceType];

  // --- MANDATORY WPM ARCHITECTURE (REWORKED FROM SCRATCH) ---
  const { wordTimestamps } = useVoiceRecording();
  const sessionStartRef = useRef<number | null>(null);

  // Core Data Structure
  const wpmState = useRef({
    wordTimestamps: [] as { start: number; end: number }[], // Absolute timestamps
    windowStartMs: 0,
    rawWpm: 0,
    smoothedWpm: 60,
    lastUpdate: 0
  });

  // Track session start for absolute time conversion
  useEffect(() => {
    if (isRecording && !sessionStartRef.current) {
      sessionStartRef.current = Date.now();
      wpmState.current.smoothedWpm = 0; // Start at 0
    } else if (!isRecording) {
      sessionStartRef.current = null;
    }
  }, [isRecording]);

  // Rolling Window Calculator
  const updateWpmMetrics = useCallback((nowMs: number) => {
    // Exactly 4s rolling window (industry standard)
    wpmState.current.windowStartMs = nowMs - 4000;

    // Count words whose ENTIRE duration falls in window
    const wordsInWindow = wpmState.current.wordTimestamps.filter(word => 
      word.start >= wpmState.current.windowStartMs &&
      word.end <= nowMs
    ).length;

    // Raw WPM = (words / 4 seconds) * 60
    wpmState.current.rawWpm = (wordsInWindow / 4) * 60;
  }, []);

  // Exponential Smoothing Loop
  const smoothWpm = useCallback(() => {
    const alpha = 0.25; // α=0.25 constant
    const nowMs = Date.now();

    // Limit update frequency to 250ms+ for stability
    if (nowMs - wpmState.current.lastUpdate < 300) return;

    // Exponential moving average: smoothed = α*raw + (1-α)*old
    const nextSmoothed = alpha * wpmState.current.rawWpm + (1 - alpha) * wpmState.current.smoothedWpm;
    
    // "No Jumps" logic: Limit change per update to ≤ 3 WPM
    const diff = nextSmoothed - wpmState.current.smoothedWpm;
    const clampedDiff = Math.max(-3, Math.min(3, diff));
    wpmState.current.smoothedWpm = wpmState.current.smoothedWpm + clampedDiff;

    // Trigger high-frequency UI updates
    const rounded = Math.round(wpmState.current.smoothedWpm);
    setRealtimeWpm(rounded);
    renderWpmProgress(rounded);
    
    // Record Metrics for scoring
    if (isActive && !isComplete) {
       if (rounded >= targetRange.min && rounded <= targetRange.max) {
           currentPaceMetrics.current.inZoneSeconds += 0.3; // 300ms chunks
       }
       currentPaceMetrics.current.totalSeconds += 0.3;
       
       if (currentPaceType === 'fast') {
          currentPaceMetrics.current.fastAvg = 
            (currentPaceMetrics.current.fastAvg * currentPaceMetrics.current.fastCount + rounded) / (currentPaceMetrics.current.fastCount + 1);
          currentPaceMetrics.current.fastCount++;
       } else if (currentPaceType === 'slow') {
          currentPaceMetrics.current.slowAvg = 
            (currentPaceMetrics.current.slowAvg * currentPaceMetrics.current.slowCount + rounded) / (currentPaceMetrics.current.slowCount + 1);
          currentPaceMetrics.current.slowCount++;
       }
    }
  }, [isActive, isComplete, currentPaceType, targetRange]);

  // Process incoming finalized words from AssemblyAI
  useEffect(() => {
    if (!isRecording || !sessionStartRef.current) return;
    
    // Map relative timestamps to absolute
    const absoluteWords = wordTimestamps.map(w => ({
      start: sessionStartRef.current! + w.start,
      end: sessionStartRef.current! + w.end
    }));

    const nowMs = Date.now();
    // Buffer last 10s to prevent memory leaks as per requirements
    wpmState.current.wordTimestamps = absoluteWords.filter(w => nowMs - w.end <= 10000);
    
    updateWpmMetrics(nowMs);
    smoothWpm();
    wpmState.current.lastUpdate = nowMs;
  }, [wordTimestamps, isRecording, smoothWpm, updateWpmMetrics]);

  // 300ms Interval for continuous window updates (even during silence)
  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
       const nowMs = Date.now();
       updateWpmMetrics(nowMs);
       smoothWpm();
    }, 300);
    return () => clearInterval(interval);
  }, [isActive, isComplete, targetRange, currentPaceType, smoothWpm, updateWpmMetrics]);

  const renderWpmProgress = (wpm: number) => {
    const progress = Math.min(100, (wpm / 300) * 100); // Scale to 300WPM max
    document.documentElement.style.setProperty('--wpm-progress', `${progress}%`);
  };



  const startSession = async () => {
    setIsActive(true);
    setIsComplete(false);
    setTimeLeft(60);
    setRealtimeWpm(0);
    renderWpmProgress(0);
    wpmState.current.wordTimestamps = [];
    wpmState.current.smoothedWpm = 0;
    wpmState.current.rawWpm = 0;
    wpmState.current.lastUpdate = 0;
    
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
          exerciseId: meta.id,
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
      <style>{WPM_METER_STYLES}</style>
      <ExerciseGate exerciseId={meta.id}>
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
                          {currentSegment?.instruction}
                       </div>
                      
                      {/* WPM Feedback (Re-engineered Meter) */}
                      <div className="flex flex-col items-center gap-4">
                         <div className="text-6xl font-mono font-bold tracking-tight">
                            <span className="wpm-value">{realtimeWpm}</span>
                            <span className="text-2xl text-muted-foreground ml-2">WPM</span>
                         </div>
                         
                         <div className="wpm-meter">
                            <div className="wpm-meter-fill" />
                         </div>

                         <div className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            TARGET: {targetRange.min}-{targetRange.max} WPM
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
