import { useState, useEffect, useRef, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { wordIncorporationPrompts } from "@/data/multilingualContent";
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
  const { isRecording: isVoiceRecording, transcript: voiceTranscript, rawTranscript: rawVoiceTranscript, startRecording: startVoice, stopRecording: stopVoice, resetTranscript, saveAudio, audioUrl } = useVoiceRecording();
  
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
    const prompts = wordIncorporationPrompts[language] || wordIncorporationPrompts.en;
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setCurrentPrompt(randomPrompt);
  }, [language]);

  useEffect(() => {
    pickNewPrompt();
  }, [language, pickNewPrompt]);

  const startSession = async () => {
    setIsActive(true);
    setTimeLeft(30);
    setCurrentWordIndex(-1);
    setWordDisplayTime(0);
    resetTranscript();
    setIsComplete(false);
    setAiFeedback(null);

    await startVoice(speechLanguageCode);

    // Start main timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopSession();
          return 0;
        }
        const next = prev - 1;
        if (settings?.practice?.timerSounds && next <= 5) {
          try { playTick(); } catch {}
        }
        return next;
      });
    }, 1000);

    // Start word progression
    setTimeout(() => showNextWord(), 3000); // Show first word after 3 seconds
  };

  const showNextWord = () => {
    if (!currentPrompt) return;

    setCurrentWordIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex < currentPrompt.words.length) {
        setWordDisplayTime(6); // 6 seconds per word
        wordTimerRef.current = setInterval(() => {
          setWordDisplayTime((time) => {
            if (time <= 1) {
              clearInterval(wordTimerRef.current!);
              setTimeout(() => showNextWord(), 100); // Brief pause before next word
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
  };

  const stopSession = async () => {
    setIsActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (wordTimerRef.current) {
      clearInterval(wordTimerRef.current);
    }
    await stopVoice();
    await analyzeTranscript();
    if (settings?.audio?.soundEffects) playDing();
    if (settings?.audio?.voiceFeedback) speak("Exercise complete. Check your results.");
  };

  const analyzeTranscript = async () => {
    const processedText = transcript.toLowerCase();
    const rawText = (rawVoiceTranscript || "").toLowerCase();
    const text = `${processedText} ${rawText}`.trim();
    
    if (!currentPrompt) return;

    // Check which words were used
    const wordsUsed: string[] = [];
    const wordsMissed: string[] = [];

    // Helper to escape regex special chars
    const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    currentPrompt.words.forEach((word) => {
      const w = word.toLowerCase();
      const patterns = [
        new RegExp(`\\b${escapeRegex(w)}\\b`, "i"), // exact
        new RegExp(`\\b${escapeRegex(w)}s?\\b`, "i"), // plural
        new RegExp(`\\b${escapeRegex(w)}(ing|ed|ly|'s)?\\b`, "i"), // common suffixes
        new RegExp(`${escapeRegex(w)}`, "i"), // anywhere (fallback)
      ];

      let found = false;
      patterns.forEach((pattern) => {
        if (pattern.test(text)) {
          found = true;
        }
      });

      if (found) {
        wordsUsed.push(word);
      } else {
        wordsMissed.push(word);
      }
    });

    const score = Math.round((wordsUsed.length / currentPrompt.words.length) * 100);

    setIsComplete(true);
    setTotalAttempts((prev) => prev + 1);

    // Get AI analysis if there's content
    if (text.trim().length >= 20) {
      setIsAnalyzing(true);
      try {
        const { data, error } = await supabase.functions.invoke("evaluate-exercise", {
          body: {
            type: "word-incorporation",
            language,
            data: { transcript: text, targetWords: currentPrompt.words },
          },
        });

        if (!error && data) {
          const result = data as AIFeedback;
          setAiFeedback(result);
          // If AI provides word-level results, prefer those for accuracy
          if (result.wordsUsed && result.wordsUsed.length > 0) {
            // override local detection
            wordsUsed.splice(0, wordsUsed.length, ...result.wordsUsed);
            wordsMissed.splice(0, wordsMissed.length, ...result.wordsMissed);
          }
        }
      } catch (err) {
        console.error("AI evaluation error:", err);
      } finally {
        setIsAnalyzing(false);
      }
    }

    if (user) {
      const audioUrl = await saveAudio();
      const res = await saveAttempt({
        exerciseId: "word-incorporation",
        score: aiFeedback?.score || score,
        maxScore: 100,
        answers: {
          transcript: text,
          targetWords: currentPrompt.words,
          wordsUsed,
          wordsMissed,
          audioUrl,
        },
      });
      if (!res || !res.success) toast.error("Failed to save progress");
    }

    if (wordsUsed.length === currentPrompt.words.length) {
      toast.success("Perfect! You incorporated all words!");
    } else if (wordsUsed.length >= currentPrompt.words.length * 0.8) {
      toast.success(`Great job! You used ${wordsUsed.length}/${currentPrompt.words.length} words.`);
    } else {
      toast.info(`You used ${wordsUsed.length}/${currentPrompt.words.length} words. Keep practicing!`);
    }
  };

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

            {/* Initial prompt */}
            {currentPrompt && !isActive && !isComplete && (
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{currentPrompt.prompt}</h3>
                <p className="text-muted-foreground">
                  You will have 30 seconds to speak. Words will appear one by one - incorporate them naturally into your speech.
                </p>
              </div>
            )}

            {/* Word display during exercise */}
            {isActive && currentWordIndex >= 0 && currentWordIndex < (currentPrompt?.words.length || 0) && (
              <div className="mb-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {currentPrompt?.words[currentWordIndex]}
                </div>
                <div className="text-sm text-muted-foreground">
                  Time left for this word: {wordDisplayTime}s
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Word {currentWordIndex + 1} of {currentPrompt?.words.length}
                </div>
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
                <Button onClick={startSession} size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Start Exercise
                </Button>
              )}

              {isActive && (
                <Button onClick={stopSession} variant="destructive" size="lg" className="gap-2">
                  <Square className="h-5 w-5" />
                  Stop Early
                </Button>
              )}

              {isComplete && (
                <Button onClick={handleRestart} size="lg" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Try Again
                </Button>
              )}
            </div>

            {/* Recording indicator */}
            {isVoiceRecording && (
              <div className="mt-4 flex items-center justify-center gap-2 text-red-500">
                <Mic className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-medium">Recording...</span>
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