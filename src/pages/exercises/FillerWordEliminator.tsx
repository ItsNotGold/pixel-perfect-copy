import { useState, useEffect, useRef, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { fillerWordEliminatorMaster } from "@/data/exercises/fillerWordEliminator.master";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVoskTranscription, WordTimestamp } from "@/hooks/useVoskTranscription";
import { ExerciseGate } from "@/components/ExerciseGate";
import { MessageCircle, Mic, Square, RotateCcw, Trophy, AlertTriangle, Loader2, Sparkles, ChevronUp } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";

interface FillerDetection {
  word: string;
  count: number;
  positions: number[];
}

export default function FillerWordEliminator() {
  const { language, speechLanguageCode } = useLanguage();
  const {
    isRecording,
    isProcessing,
    isModelLoading,
    loadingProgress,
    transcript,
    wordTimestamps,
    startRecording,
    stopRecording,
    reset,
  } = useWhisperTranscription();

  const [currentTopic, setCurrentTopic] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [fillers, setFillers] = useState<FillerDetection[]>([]);
  const [score, setScore] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  const content = fillerWordEliminatorMaster.content.multilingual[language] || fillerWordEliminatorMaster.content.multilingual.en;

  const pickNewTopic = useCallback(() => {
    const topics = content.topics;
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setCurrentTopic(randomTopic);
  }, [content.topics]);

  useEffect(() => {
    pickNewTopic();
  }, [language, pickNewTopic]);

  // Effect to analyze the transcript when it's finalized
  useEffect(() => {
    if (transcript && !isProcessing) {
      analyzeFillers(transcript, wordTimestamps);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, isProcessing]);


  const startSession = async () => {
    setIsActive(true);
    setTimeLeft(60);
    reset();
    setShowAnalysis(false);
    setFillers([]);
    setScore(0);

    await startRecording(speechLanguageCode);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopSession = () => {
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
    
    stopRecording();
    setTotalAttempts(prev => prev + 1);
  };

  const analyzeFillers = (text: string, words: WordTimestamp[]) => {
    const content = fillerWordEliminatorMaster.content.multilingual[language] || fillerWordEliminatorMaster.content.multilingual.en;
    const targets = content.targetFillerWords;

    const detections: FillerDetection[] = [];
    let totalCount = 0;

    targets.forEach(filler => {
      const fillerLower = filler.toLowerCase();
      const matches = words.filter(w => w.text === fillerLower);
      
      if (matches.length > 0) {
        detections.push({
          word: filler,
          count: matches.length,
          positions: matches.map(m => m.start)
        });
        totalCount += matches.length;
      }
    });

    setFillers(detections);
    const calculatedScore = Math.max(0, 100 - totalCount * 10);
    setScore(calculatedScore);

    if (user) {
      saveAttempt({
        exerciseId: "filler-word-eliminator",
        score: calculatedScore,
        maxScore: 100,
        answers: { 
          transcript: text, 
          fillerCount: totalCount,
          detections 
        },
      });
    }
  };

  const handleRestart = () => {
    pickNewTopic();
    reset();
    setShowAnalysis(false);
    setTimeLeft(60);
  };

  return (
    <MainLayout>
      <ExerciseGate exerciseId="filler-word-eliminator">
        <div className="mx-auto max-w-3xl px-6 py-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Filler Word Eliminator</h1>
            <p className="text-muted-foreground">Master the art of pause and precision</p>
          </div>

          {/* Stats */}
          <div className="mb-8 flex items-center justify-center gap-6">
            <div className="rounded-xl glass p-4 text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <Trophy className="h-5 w-5" />
                {transcript ? score : "--"}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Score</div>
            </div>
            <div className="rounded-xl glass p-4 text-center min-w-[100px]">
              <div className="text-2xl font-bold text-foreground">{totalAttempts}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Attempts</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl glass p-8 shadow-2xl border border-white/10">
            {/* Model Loading UI */}
            {isModelLoading && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-lg rounded-3xl">
                <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                <p className="text-lg font-semibold text-foreground">Loading Speech Model...</p>
                <p className="text-muted-foreground mb-4">This may take a moment. Please wait.</p>
              </div>
            )}

            {/* Minimalist Recording UI */}
            <div className={`transition-all duration-500 ease-in-out ${showAnalysis ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100'}`}>
              <div className="mb-8 text-center">
                <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-widest">Your Topic</div>
                <div className="inline-block rounded-2xl bg-white/5 px-8 py-4 border border-white/10 backdrop-blur-md">
                  <span className="text-xl font-semibold text-foreground">{currentTopic}</span>
                </div>
              </div>

              <div className="mb-12 text-center">
                <div className={`text-7xl font-light tabular-nums tracking-tighter transition-colors duration-300 ${timeLeft <= 10 ? "text-rose-500 animate-pulse" : "text-foreground"}`}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  {isRecording && (
                    <>
                      <div className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                      <span className="text-sm font-semibold uppercase tracking-widest text-rose-500">
                        Live Recording
                      </span>
                    </>
                  )}
                  {!isRecording && !transcript && <span className="text-sm text-muted-foreground font-medium">Ready to record</span>}
                  {transcript && !isRecording && <span className="text-sm text-emerald-500 font-medium">Analysis ready</span>}
                </div>
              </div>

              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                {!isActive && !transcript && (
                  <Button variant="hero" size="xl" className="w-full shadow-glow" onClick={startSession} disabled={isModelLoading}>
                    <Mic className="mr-2 h-5 w-5" />
                    Start Speaking
                  </Button>
                )}
                {isActive && (
                  <Button variant="destructive" size="xl" className="w-full shadow-lg" onClick={stopSession}>
                    <Square className="mr-2 h-5 w-5 fill-current" />
                    Stop Recording
                  </Button>
                )}
                {transcript && !isRecording && !showAnalysis && (
                  <Button 
                    variant="accent" 
                    size="xl" 
                    className="w-full shadow-glow"
                    onClick={() => setShowAnalysis(true)}
                  >
                    <Sparkles className="mr-2 h-5 w-5" />Reveal Analysis
                  </Button>
                )}
              </div>
            </div>

            {/* Post-Analysis Reveal with Slide-up Animation */}
            <div 
              className={`transition-all duration-300 ${
                showAnalysis ? 'translate-y-0 opacity-100 relative' : 'translate-y-full opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="space-y-8 py-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Speech Analysis
                  </h3>
                  <Button variant="ghost" size="sm" onClick={handleRestart} className="text-muted-foreground hover:text-foreground">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    New Session
                  </Button>
                </div>

                {/* Heatmap/Counts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4 text-rose-400">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="font-semibold uppercase tracking-wider text-xs">Fillers Detected</span>
                    </div>
                    {fillers.length === 0 ? (
                      <div className="text-emerald-400 font-medium">Perfect! No fillers detected.</div>
                    ) : (
                      <div className="space-y-3">
                        {fillers.map(f => (
                          <div key={f.word} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                            <span className="font-medium text-foreground capitalize">"{f.word}"</span>
                            <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-xs font-bold">
                              {f.count}x
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4 text-primary">
                      <Trophy className="h-5 w-5" />
                      <span className="font-semibold uppercase tracking-wider text-xs">Performance</span>
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">{score}%</div>
                    <p className="text-sm text-muted-foreground">
                      {score === 100 ? "Flawless delivery! Your speech was incredibly clean." : 
                       score > 80 ? "Great job! Minor fillers detected but overall very clear." :
                       "Keep practicing! Reducing fillers will make you sound more confident."}
                    </p>
                  </div>
                </div>

                {/* Transcript Reveal */}
                <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                   <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                     <span className="text-sm font-bold uppercase tracking-widest opacity-50">Full Transcript</span>
                   </div>
                   <div className="p-6 max-h-[300px] overflow-y-auto custom-scrollbar">
                     <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">
                        {transcript || "No speech captured."}
                     </p>
                   </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button variant="outline" size="lg" onClick={handleRestart} className="rounded-full px-8">
                    Try Another Topic
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Guide */}
          <div className={`mt-8 transition-opacity duration-500 ${isRecording ? 'opacity-0' : 'opacity-100'}`}>
            <div className="rounded-2xl glass p-6 border border-white/10">
              <h3 className="mb-4 font-display text-lg text-foreground flex items-center gap-2">
                <ChevronUp className="h-5 w-5 text-primary" />
                Target Filler Words
              </h3>
              <div className="flex flex-wrap gap-2">
                {(content.targetFillerWords).map((word) => (
                  <span key={word} className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-muted-foreground font-medium capitalize">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}
