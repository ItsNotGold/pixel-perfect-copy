
import { useState, useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { paceCadenceMaster } from "@/data/exercises/paceCadence.master";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVoiceRecording } from "@/hooks/useVoiceRecording";
import { ExerciseGate } from "@/components/ExerciseGate";
import { Mic, MicOff, Play, Square, RotateCcw, Gauge, Trophy } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

// Types
type PaceType = 'slow' | 'fast' | 'free';

interface PaceState {
  currentWpm: number;
  targetPace: PaceType;
  score: number;
  segmentIndex: number;
}

export default function PaceCadenceTrainer() {
  const { language, speechLanguageCode } = useLanguage();
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
  const [wpm, setWpm] = useState(0);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [paceScore, setPaceScore] = useState(100);
  
  // Refs for logic
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const wpmIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastTranscriptLengthRef = useRef(0);
  const wpmHistoryRef = useRef<number[]>([]);
  
  const content = paceCadenceMaster;
  
  // Initialize topic
  useEffect(() => {
    pickNewTopic();
  }, [language]);

  const pickNewTopic = () => {
    const langTopics = content.topics.find(t => t.language === (language === 'english' ? 'en' : language === 'spanish' ? 'es' : 'fr'))?.list 
      || content.topics[0].list;
    const random = langTopics[Math.floor(Math.random() * langTopics.length)];
    setCurrentTopic(random);
  };

  const getTargetPace = (secondsPassed: number): PaceType => {
    const segments = content.segments;
    // Find which segment we are in
    const segment = segments.find(s => s.start <= secondsPassed && s.end > secondsPassed);
    return segment ? segment.type : 'free';
  };

  const currentPace = getTargetPace(60 - timeLeft);
  const currentSegment = content.segments.find(s => s.type === currentPace && s.start <= (60 - timeLeft) && s.end > (60 - timeLeft));

  // WPM Calculation Logic
  useEffect(() => {
    if (!isActive) return;

    wpmIntervalRef.current = setInterval(() => {
      // Calculate WPM based on new words in the last second
      // This is a rough real-time estimate
      // In a real app we might use word timestamps from WebSpeech API if available
      
      const text = rawTranscript || transcript;
      const words = text.trim().split(/\s+/).filter(w => w.length > 0);
      const currentWordCount = words.length;
      const newWords = Math.max(0, currentWordCount - lastTranscriptLengthRef.current);
      lastTranscriptLengthRef.current = currentWordCount;
      
      // Instant WPM = newWords * 60 (since we check every 1s)
      // Smoothed WPM = rolling average
      const instantWpm = newWords * 60;
      
      setWpm(prev => {
        const smoothed = Math.round(prev * 0.7 + instantWpm * 0.3);
        wpmHistoryRef.current.push(smoothed);
        return smoothed;
      });

      // Simple Scoring update
      // We deduct points if pace is vastly different from target
      // Target ranges: Slow (<110), Fast (>150)
      setPaceScore(prev => {
        let penalty = 0;
        if (currentPace === 'slow' && instantWpm > 130) penalty = 2; // Speaking too fast
        if (currentPace === 'fast' && instantWpm < 130 && instantWpm > 10) penalty = 2; // Speaking too slow (ignore silence)
        return Math.max(0, prev - penalty);
      });

    }, 1000);

    return () => {
      if (wpmIntervalRef.current) clearInterval(wpmIntervalRef.current);
    };
  }, [isActive, rawTranscript, transcript, currentPace]);

  const startSession = async () => {
    setIsActive(true);
    setIsComplete(false);
    setTimeLeft(60);
    setPaceScore(100);
    wpmHistoryRef.current = [];
    lastTranscriptLengthRef.current = 0;
    
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

    // Save Logic
    if (user) {
      const url = await saveAudio(blob);
      await saveAttempt({
          exerciseId: content.exerciseId,
          score: paceScore,
          maxScore: 100,
          answers: { 
            transcript: finalTranscript, 
            avgWpm: Math.round(wpmHistoryRef.current.reduce((a,b)=>a+b,0) / (wpmHistoryRef.current.length || 1)),
            wpmHistory: wpmHistoryRef.current,
            audioUrl: url
          }
      });
    }
  };

  const stopEarly = () => {
    finishSession();
  };

  // Visual Helper for Color
  const getBgColor = () => {
     if (!isActive) return "bg-background";
     switch(currentPace) {
       case 'fast': return "bg-red-50/50 dark:bg-red-900/10 transition-colors duration-1000";
       case 'slow': return "bg-blue-50/50 dark:bg-blue-900/10 transition-colors duration-1000";
       default: return "bg-background transition-colors duration-1000";
     }
  };

  const getTextColor = () => {
    if (!isActive) return "text-muted-foreground";
    switch(currentPace) {
      case 'fast': return "text-red-500 animate-pulse";
      case 'slow': return "text-blue-500 transition-colors duration-1000";
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
                 <div className="text-2xl font-bold text-primary">{isComplete ? paceScore : "--"}</div>
                 <div className="text-xs text-muted-foreground">Pace Score</div>
              </div>
               <div className="rounded-xl glass p-4 text-center min-w-[100px]">
                 <div className="text-2xl font-bold text-foreground">{wpm}</div>
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
               <div className="mb-12 h-32 flex flex-col items-center justify-center text-center">
                  {!isActive && !isComplete && (
                    <div className="text-muted-foreground">Press Start to begin your speech</div>
                  )}
                  
                  {isActive && (
                    <>
                      <div className={cn("text-4xl font-bold mb-2 transition-all duration-500", getTextColor())}>
                         {currentPace === 'fast' && "FAST PACE"}
                         {currentPace === 'slow' && "SLOW PACE"}
                         {currentPace === 'free' && "NATURAL PACE"}
                      </div>
                      <div className="text-lg text-foreground/80">
                         {currentSegment?.instruction || "Speak naturally"}
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
                    <Button size="lg" className="w-full max-w-xs text-lg h-12" onClick={startSession}>
                       <Mic className="mr-2 h-5 w-5" />
                       {isComplete ? "Try Another Topic" : "Start 1-Minute Speech"}
                    </Button>
                  )}

                  {isActive && (
                    <Button variant="destructive" size="lg" className="w-full max-w-xs text-lg h-12" onClick={stopEarly}>
                      <Square className="mr-2 h-5 w-5" />
                      Stop
                    </Button>
                  )}
               </div>

               {/* Transcript Preview (for debugging/feedback) */}
               {(isComplete || isActive) && (
                 <div className="mt-8 p-4 bg-muted/20 rounded-lg text-sm text-muted-foreground max-h-40 overflow-y-auto">
                    {transcript || "Listening..."}
                 </div>
               )}

            </div>
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}
