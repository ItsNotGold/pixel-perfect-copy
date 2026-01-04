import { useState, useEffect, useRef, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { wordIncorporationMaster } from "@/data/exercises/wordIncorporation.master";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExerciseGate } from "@/components/ExerciseGate";
import { Mic, Play, Square, RotateCcw, Trophy, Clock, Feather, Sparkles, CheckCircle2, XCircle, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";

interface WordAnalysis {
  word: string;
  found: boolean;
  count: number;
  timestamps: number[];
}

interface TranscriptWord {
  text: string;
  start: number;
  end: number;
  confidence: number;
}

export default function WordIncorporation() {
  const { language } = useLanguage();

  const [currentPrompt, setCurrentPrompt] = useState<{ prompt: string; words: string[] } | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isComplete, setIsComplete] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [wordDisplayTime, setWordDisplayTime] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [analysis, setAnalysis] = useState<WordAnalysis[]>([]);
  const [finalTranscript, setFinalTranscript] = useState("");
  const [showTranscript, setShowTranscript] = useState(false);
  
  // Recording state
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const wordTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  const pickNewPrompt = useCallback(() => {
    const content = wordIncorporationMaster.content.multilingual[language] || wordIncorporationMaster.content.multilingual.en;
    const prompts = content.prompts;
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setCurrentPrompt(randomPrompt);
  }, [language]);

  useEffect(() => {
    pickNewPrompt();
  }, [language, pickNewPrompt]);

  const showNextWord = useCallback(() => {
    if (!currentPrompt) return;

    setCurrentWordIndex((prev) => {
      const nextIndex = prev + 1;
      
      if (nextIndex < currentPrompt.words.length) {
        setWordDisplayTime(6); 
        if (wordTimerRef.current) clearInterval(wordTimerRef.current);
        wordTimerRef.current = setInterval(() => {
          setWordDisplayTime((time) => {
            if (time <= 1) {
              if (wordTimerRef.current) clearInterval(wordTimerRef.current);
              setTimeout(() => showNextWord(), 100); 
              return 0;
            }
            return time - 1;
          });
        }, 1000);
        return nextIndex;
      } else {
        return prev;
      }
    });
  }, [currentPrompt]);

  const startSession = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        uploadAndAnalyze(blob);
      };

      mediaRecorder.start();
      
      setIsActive(true);
      setIsRecording(true);
      setTimeLeft(30);
      setCurrentWordIndex(-1);
      setWordDisplayTime(0);
      setIsComplete(false);
      setShowResults(false);
      setShowTranscript(false);
      setAnalysis([]);
      setAudioUrl(null);

      // Start word logic
      setTimeout(() => showNextWord(), 2000);

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            stopSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (err) {
      console.error("Error accessing microphone:", err);
      toast.error("Could not access microphone");
    }
  };

  const stopSession = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (wordTimerRef.current) clearInterval(wordTimerRef.current);
    
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
    
    setIsActive(false);
    setIsComplete(true);
    setTotalAttempts(prev => prev + 1);
  };

  const uploadAndAnalyze = async (audioBlob: Blob) => {
    setIsAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm");

      const response = await fetch("http://localhost:8000/transcribe_file", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      setFinalTranscript(result.text);
      verifyWords(result.words, currentPrompt?.words || []);
      
      // Auto show results only after analysis is ready
      // But we need user to click "Check Results" usually? 
      // The original code had "Check Results" button appearing after finish.
      // Now we have analysis running async. 
      // Let's assume we maintain the "Check Results" button flow but enable it when analysis is done, 
      // OR just show it immediately if the user clicks it.
      // Actually, let's keep the manual "Check Results" button but make sure analysis populates.
      // The original code called verifyWords synchronously after stop.
      // Now it's async. We should probably show a loading state on the "Check Results" button if they click it too early,
      // or just auto-show results when ready if that's preferred.
      // The user prompt says "analyses the outputted transcription for the score". 
      // Let's stick to the previous UX: stop -> complete -> user clicks check results.
      // Implication: IsAnalyzing should probably block "Check Results".

    } catch (error) {
      console.error("Transcription failed:", error);
      toast.error("Failed to analyze audio.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const verifyWords = (detectedWords: TranscriptWord[], targets: string[]) => {
    const results: WordAnalysis[] = targets.map(target => {
      const matches = detectedWords.filter(w => 
        w.text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"") === target.toLowerCase()
      );
      return {
        word: target,
        found: matches.length > 0,
        count: matches.length,
        timestamps: matches.map(m => m.start / 1000)
      };
    });

    setAnalysis(results);
    
    if (user) {
      const usedCount = results.filter(r => r.found).length;
      saveAttempt({
        exerciseId: "word-incorporation",
        score: Math.round((usedCount / targets.length) * 100),
        maxScore: 100,
        answers: { 
          transcript: detectedWords.map(w => w.text).join(" "),
          analysis: results 
        },
      });
    }
  };

  const handleRestart = () => {
    pickNewPrompt();
    setIsComplete(false);
    setShowResults(false);
    setTimeLeft(30);
    setCurrentWordIndex(-1);
    setAudioUrl(null);
  };

  const score = Math.round((analysis.filter(r => r.found).length / (currentPrompt?.words.length || 1)) * 100);

  return (
    <MainLayout>
      <ExerciseGate exerciseId="word-incorporation">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Header */}
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
              <Feather className="h-7 w-7 text-white" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Word Incorporation</h1>
            <p className="text-muted-foreground">Incorporate target words naturally into your speech</p>
          </div>

          {/* Stats */}
          <div className="mb-8 flex items-center justify-center gap-6 animate-slide-up">
            <div className="rounded-xl glass p-4 text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <Trophy className="h-5 w-5" />
                {isComplete && !isAnalyzing ? score : "--"}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Score</div>
            </div>
            <div className="rounded-xl glass p-4 text-center min-w-[100px]">
              <div className="text-2xl font-bold text-foreground">{totalAttempts}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Attempts</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl glass p-8 shadow-2xl border border-white/10">
            {/* Minimalist Recording UI */}
            <div className={`transition-all duration-500 ease-in-out ${showResults ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100'}`}>
              
              {(isActive || isRecording) && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Session Progress</span>
                    <span className="text-xs font-bold text-primary">{timeLeft}s</span>
                  </div>
                  <Progress value={(30 - timeLeft) / 30 * 100} className="h-1.5" />
                </div>
              )}

              {currentPrompt && !isActive && !isRecording && !isComplete && (
                <div className="flex flex-col gap-8">
                  {/* Instructions/Prompt - Always visible initially */}
                  <div className="text-center animate-fade-in">
                    <h3 className="text-2xl font-bold text-foreground mb-4">{currentPrompt.prompt}</h3>
                    <p className="text-muted-foreground max-w-md mx-auto italic">
                      "Speak for 30 seconds. Incorporate the words that appear on screen naturally into your speech."
                    </p>
                  </div>
                  
                  {!isAnalyzing && (
                    <Button onClick={startSession} size="xl" variant="hero" className="w-full shadow-glow max-w-xs mx-auto">
                      <Play className="h-5 w-5 mr-2" />
                      Begin Exercise
                    </Button>
                  )}
                </div>
              )}

              {isActive && currentWordIndex >= 0 && (
                <div className="mb-12 text-center animate-in zoom-in duration-500">
                  <div className="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4 opacity-60">Next Word</div>
                  <div className="text-6xl font-black text-foreground mb-6 drop-shadow-xl tracking-tight">
                    {currentPrompt?.words[currentWordIndex]}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-white/5 w-fit mx-auto px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                    <Clock className="h-4 w-4 text-primary animate-pulse" />
                    <span className="font-medium">Switching in <span className="text-foreground font-bold">{wordDisplayTime}s</span></span>
                  </div>
                </div>
              )}

              {isActive && currentWordIndex < 0 && (
                <div className="mb-12 text-center py-8">
                  <div className="text-lg font-medium text-primary animate-pulse">Get ready to speak...</div>
                </div>
              )}

              {isAnalyzing && (
                  <div className="mb-12 text-center py-8">
                    <div className="flex flex-col items-center gap-4">
                       <Loader2 className="h-8 w-8 animate-spin text-primary" />
                       <div className="text-lg font-medium text-muted-foreground">Analyzing recording...</div>
                    </div>
                  </div>
              )}

                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  {isActive && (
                    <Button onClick={stopSession} variant="destructive" size="xl" className="w-full shadow-lg">
                      <Square className="h-5 w-5 mr-2 fill-current" />
                      Finish Early
                    </Button>
                  )}
                  {isComplete && !showResults && !isAnalyzing && (
                    <Button variant="accent" size="xl" className="w-full shadow-glow animate-bounce" onClick={() => setShowResults(true)}>
                      <Sparkles className="h-5 w-5 mr-2" />
                      Check Results
                    </Button>
                  )}
                </div>
            </div>

            {/* Post-Analysis Verification Table */}
            <div 
              className={`transition-all duration-300 ${
                showResults ? 'translate-y-0 opacity-100 relative' : 'translate-y-full opacity-0 absolute inset-0 pointer-events-none'
              }`}
              style={{ 
                maxHeight: showResults ? '2000px' : '0px',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="space-y-8 pt-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                    Word Verification
                  </h3>
                  <Button variant="ghost" size="sm" onClick={handleRestart} className="text-muted-foreground hover:text-foreground">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
                
                 {/* Audio Player */}
                {audioUrl && (
                  <div className="rounded-xl bg-white/5 p-4 border border-white/10 flex justify-center">
                    <audio controls src={audioUrl} className="w-full max-w-md h-10" />
                  </div>
                )}

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <table className="w-full text-left">
                    <thead className="bg-white/5 border-b border-white/10">
                      <tr>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-50">Target Word</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-50">Status</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-50">Count</th>
                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest opacity-50">First Used At</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {analysis.map((row) => (
                        <tr key={row.word} className="hover:bg-white/10 transition-colors">
                          <td className="px-6 py-4 font-semibold text-foreground italic">"{row.word}"</td>
                          <td className="px-6 py-4">
                            {row.found ? (
                              <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-full text-xs">
                                <CheckCircle2 className="h-3 w-3" /> VERIFIED
                              </div>
                            ) : (
                              <div className="inline-flex items-center gap-1.5 text-rose-400 font-bold bg-rose-400/10 px-3 py-1 rounded-full text-xs">
                                <XCircle className="h-3 w-3" /> MISSING
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-4 text-foreground font-medium">{row.count}x</td>
                          <td className="px-6 py-4 text-muted-foreground font-mono text-sm">
                            {row.found && row.timestamps.length > 0 ? `${row.timestamps[0].toFixed(1)}s` : "--"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showTranscript ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {showTranscript ? "Hide Transcript" : "View Full Transcript"}
                  </button>
                  
                  {showTranscript && (
                    <div className="rounded-2xl bg-white/5 p-6 border border-white/5 animate-in slide-in-from-top-4 duration-300">
                      <p className="text-lg leading-relaxed text-foreground/80 italic whitespace-pre-wrap">
                         "{finalTranscript}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center pt-4">
                  <Button variant="hero" size="lg" onClick={handleRestart} className="rounded-full px-12 shadow-glow">
                    Try New Prompt
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}