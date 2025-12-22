import { useState, useEffect, useRef, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { wordIncorporationMaster } from "@/data/exercises/wordIncorporation.master";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVoiceRecording } from "@/hooks/useVoiceRecording";
import { ExerciseGate } from "@/components/ExerciseGate";
import { Mic, MicOff, Play, Square, RotateCcw, Trophy, Clock, Feather, Sparkles, Loader2, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { supabase } from "@/integrations/supabase/client";
import { useSettings } from "@/hooks/useSettings";
import { playTick, playDing } from "@/lib/audio";
import { speak } from "@/lib/tts";

interface AIFeedback {
  score: number;
  wordsUsed: string[];
  wordsMissed: string[];
  feedback: string;
}

export default function WordIncorporation() {
  const { language, speechLanguageCode } = useLanguage();
  const { isRecording: isVoiceRecording, transcript: voiceTranscript, rawTranscript: rawVoiceTranscript, startRecording: startVoice, stopRecording: stopVoice, resetTranscript, saveAudio, audioUrl, audioBlob } = useVoiceRecording();

  const [currentPrompt, setCurrentPrompt] = useState<{ prompt: string; words: string[] } | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [useVoice, setUseVoice] = useState(true); // Force voice for this exercise
  const [timeLeft, setTimeLeft] = useState(30);
  const [isComplete, setIsComplete] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [wordDisplayTime, setWordDisplayTime] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<AIFeedback | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const wordTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();
  const { settings } = useSettings();

  const transcript = voiceTranscript;

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
        setWordDisplayTime(6); // 6 seconds per word
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
    setIsActive(true);
    setTimeLeft(30);
    setCurrentWordIndex(-1);
    setWordDisplayTime(0);
    resetTranscript();
    setIsComplete(false);
    setAiFeedback(null);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;

    await startVoice(speechLanguageCode);
    setTimeout(() => showNextWord(), 3000);
  };

  const analyzeTranscript = useCallback(async (transcriptOverride?: string, audioUrlOverride?: string | null) => {
    const processedText = (transcriptOverride || transcript).toLowerCase();
    const rawText = (rawVoiceTranscript || "").toLowerCase();
    const text = `${processedText} ${rawText}`.trim();

    let effectiveTranscript = text;
    if (!currentPrompt) return;

    const wordsUsed: string[] = [];
    const wordsMissed: string[] = [];

    const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const recalculateWords = (newTranscript: string) => {
      wordsUsed.length = 0;
      wordsMissed.length = 0;
      currentPrompt.words.forEach((word) => {
        const w = word.toLowerCase();
        const patterns = [
          new RegExp(`\\b${escapeRegex(w)}\\b`, "i"),
          new RegExp(`\\b${escapeRegex(w)}s?\\b`, "i"),
          new RegExp(`\\b${escapeRegex(w)}(ing|ed|ly|'s)?\\b`, "i"),
          new RegExp(`${escapeRegex(w)}`, "i"),
        ];
        let found = false;
        patterns.forEach((pattern) => { if (pattern.test(newTranscript.toLowerCase())) found = true; });
        if (found) wordsUsed.push(word); else wordsMissed.push(word);
      });
    };

    recalculateWords(effectiveTranscript);
    setIsComplete(true);
    setTotalAttempts((prev) => prev + 1);

    if (text.trim().length >= 20) {
      setIsAnalyzing(true);
      try {
        const { data, error } = await supabase.functions.invoke("evaluate-exercise", {
          body: {
            type: "word-incorporation",
            language,
            data: { transcript: text, targetWords: currentPrompt.words, audioUrl: audioUrlOverride },
          },
        });

        if (!error && data) {
          const result = data as AIFeedback;
          setAiFeedback(result);
          if (result.wordsUsed && result.wordsUsed.length > 0) {
            wordsUsed.splice(0, wordsUsed.length, ...result.wordsUsed);
            wordsMissed.splice(0, wordsMissed.length, ...result.wordsMissed);
          } else if ((data as any)?._raw) {
            const raw = (data as any)._raw;
            if (raw.transcript && raw.transcript.length > effectiveTranscript.length) {
              effectiveTranscript = raw.transcript;
              recalculateWords(effectiveTranscript);
            }
            if (raw.words && Array.isArray(raw.words) && raw.words.length > 0) {
              const tokenTexts = raw.words.map((w: any) => (w.word || "").toLowerCase());
              currentPrompt.words.forEach((word) => {
                const w = word.toLowerCase();
                const found = tokenTexts.some((t: string) => t === w || t.includes(w) || w.includes(t));
                if (found && !wordsUsed.includes(word)) {
                   wordsUsed.push(word);
                   const mIdx = wordsMissed.indexOf(word);
                   if (mIdx > -1) wordsMissed.splice(mIdx, 1);
                }
              });
            }
          }
        }
      } catch (err) {
        console.error("AI evaluation error:", err);
      } finally {
        setIsAnalyzing(false);
      }
    }

    if (user) {
      const finalUrl = audioUrlOverride ?? (await saveAudio());
      const res = await saveAttempt({
        exerciseId: "word-incorporation",
        score: Math.round((wordsUsed.length / currentPrompt.words.length) * 100),
        maxScore: 100,
        answers: {
          transcript: effectiveTranscript,
          targetWords: currentPrompt.words,
          wordsUsed,
          wordsMissed,
          audioUrl: finalUrl,
        },
      });
      if (!res?.success) toast.error("Failed to save progress");
    }

    if (wordsUsed.length === currentPrompt.words.length) {
      toast.success("Perfect! You incorporated all words!");
    } else {
      toast.info(`You used ${wordsUsed.length}/${currentPrompt.words.length} words.`);
    }
  }, [transcript, rawVoiceTranscript, currentPrompt, language, user, saveAudio, saveAttempt]);

  const stopSession = useCallback(async () => {
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
    if (wordTimerRef.current) clearInterval(wordTimerRef.current);
    
    const { blob, transcript: finalTranscript } = await stopVoice();
    let url: string | null = null;
    if (blob) {
      url = await saveAudio(blob);
    }

    await analyzeTranscript(finalTranscript, url);
    if (settings?.audio?.soundEffects) playDing();
  }, [stopVoice, saveAudio, analyzeTranscript, settings]);

  const startMainTimer = useCallback(() => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopSession();
          return 0;
        }
        const next = prev - 1;
        if (settings?.practice?.timerSounds && next <= 5) {
          try { playTick(); } catch (e) { console.warn(e); }
        }
        return next;
      });
    }, 1000);
  }, [stopSession, settings]);

  useEffect(() => {
    if (isActive && currentWordIndex === 0) {
      startMainTimer();
    }
  }, [isActive, currentWordIndex, startMainTimer]);



  const handleRestart = () => {
    pickNewPrompt();
    resetTranscript();
    setIsComplete(false);
    setTimeLeft(30);
    setCurrentWordIndex(-1);
    setWordDisplayTime(0);
    setAiFeedback(null);
  };

  const progress = ((30 - timeLeft) / 30) * 100;
  const wordsUsed = aiFeedback?.wordsUsed || [];
  const wordsMissed = aiFeedback?.wordsMissed || [];
  const score = aiFeedback?.score || Math.round((wordsUsed.length / (currentPrompt?.words.length || 1)) * 100);

  return (
    <MainLayout>
      <ExerciseGate exerciseId="word-incorporation">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
              <Feather className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Word Incorporation</h1>
            <p className="text-muted-foreground">Incorporate specific words into your speech</p>
          </div>

          <div className="mb-8 flex items-center justify-center gap-6 animate-slide-up">
            <div className="rounded-xl glass p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <Trophy className="h-5 w-5" />
                {isComplete ? score : "--"}
              </div>
              <div className="text-xs text-muted-foreground">Score</div>
            </div>
            <div className="rounded-xl glass p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{totalAttempts}</div>
              <div className="text-xs text-muted-foreground">Attempts</div>
            </div>
          </div>

          <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
            {/* Progress bar */}
            {isActive && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Time Remaining</span>
                  <span className="text-sm text-muted-foreground">{timeLeft}s</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {/* Initial prompt - Persistent at the top */}
            {currentPrompt && !isComplete && (
              <div className="mb-6 text-center border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{currentPrompt.prompt}</h3>
                {!isActive && (
                  <p className="text-muted-foreground text-sm max-w-md mx-auto">
                    You will have 30 seconds to speak. Words will appear one by one — incorporate them naturally into your speech.
                  </p>
                )}
              </div>
            )}

            {/* Word display during exercise */}
            {isActive && currentWordIndex >= 0 && currentWordIndex < (currentPrompt?.words.length || 0) && (
              <div className="mb-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2 opacity-70">Target Word</div>
                <div className="text-5xl font-extrabold text-foreground mb-4 drop-shadow-sm">
                  {currentPrompt?.words[currentWordIndex]}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-white/5 w-fit mx-auto px-4 py-1.5 rounded-full">
                  <Clock className="h-3.5 w-3.5" />
                  Next word in: <span className="font-mono font-bold text-primary">{wordDisplayTime}s</span>
                </div>
                <div className="text-[10px] text-muted-foreground/50 mt-4 uppercase tracking-widest font-medium">
                  Word {currentWordIndex + 1} of {currentPrompt?.words.length}
                </div>
              </div>
            )}

            {/* Lead-in countdown */}
            {isActive && currentWordIndex < 0 && (
              <div className="mb-12 text-center py-8">
                <div className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Get ready...</div>
                <div className="text-4xl font-bold text-primary animate-pulse italic">Starting soon</div>
              </div>
            )}

            {/* Results */}
            {isComplete && currentPrompt && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-green-600 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Words Used ({wordsUsed.length})
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {wordsUsed.map((word, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-red-600 flex items-center gap-2">
                      <XCircle className="h-4 w-4" />
                      Words Missed ({wordsMissed.length})
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {wordsMissed.map((word, index) => (
                        <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {aiFeedback?.feedback && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm">{aiFeedback.feedback}</p>
                  </div>
                )}
                {audioUrl && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Play className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">Listen to Your Recording</span>
                    </div>
                    <audio controls className="w-full">
                      <source src={audioUrl} type="audio/webm" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
            )}

            {/* Controls */}
            <div className="flex justify-center gap-4">
              {!isActive && !isComplete && (
                <Button onClick={startSession} size="xl" variant="hero" className="gap-2 shadow-glow">
                  <Play className="h-5 w-5" />
                  Start Exercise
                </Button>
              )}

              {isActive && (
                <Button onClick={stopSession} variant="destructive" size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                  <Square className="h-5 w-5 fill-current" />
                  Stop Early
                </Button>
              )}

              {isComplete && (
                <Button onClick={handleRestart} size="lg" variant="outline" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Try Again
                </Button>
              )}
            </div>

            {/* Recording indicator */}
            {isVoiceRecording && (
              <div className="mt-8 flex flex-col items-center justify-center gap-3 animate-fade-in">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute inset-0 animate-ping rounded-full bg-destructive/20" />
                  <div className="absolute inset-0 animate-pulse rounded-full bg-destructive/10" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-lg">
                    <Mic className="h-6 w-6" />
                  </div>
                </div>
                <span className="text-sm font-medium text-destructive animate-pulse">Recording active...</span>
              </div>
            )}

            {/* Local playback so user can listen to their recording */}
            {audioBlob && (
              <div className="mt-4 p-4 rounded-lg bg-muted/10">
                <div className="mb-2 text-sm font-medium">Play your recording</div>
                <audio controls className="w-full">
                  <source src={URL.createObjectURL(audioBlob)} type={audioBlob.type || "audio/webm"} />
                  Your browser does not support audio playback.
                </audio>
              </div>
            )}

            {/* Analyzing indicator */}
            {isAnalyzing && (
              <div className="mt-4 flex items-center justify-center gap-2 text-blue-500">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="text-sm font-medium">Analyzing your speech...</span>
              </div>
            )}
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}