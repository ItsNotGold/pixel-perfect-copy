import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { swapChallengesMultilingual } from "@/data/multilingualContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { ExerciseGate } from "@/components/ExerciseGate";
import { cn } from "@/lib/utils";
import {
  Target,
  ArrowRight,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  XCircle,
  Trophy,
  Zap
} from "lucide-react";
import { toast } from "sonner";
import { useSettings } from "@/hooks/useSettings";
import { playSuccess, playFail } from "@/lib/audio";
import { speak } from "@/lib/tts";

interface SwapChallenge {
  id: string;
  sentence: string;
  targetWord: string;
  targetWordIndex: number;
  options: { word: string; score: number; feedback: string }[];
  bestAnswer: string;
  explanation: string;
}

export default function PrecisionSwap() {
  const { language } = useLanguage();
  const { user } = useAuth();
  const { saveAttempt } = useProgress();
  const { settings } = useSettings();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [attemptSaved, setAttemptSaved] = useState(false);
  const [shuffledChallenges, setShuffledChallenges] = useState<SwapChallenge[]>([]);

  const pickShuffled = (items: SwapChallenge[], desiredCount: number, storageKey: string) => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    try {
      const lastId = localStorage.getItem(storageKey);
      if (lastId && shuffled.length > 1 && shuffled[0].id === lastId) {
        const idx = shuffled.findIndex((c) => c.id !== lastId);
        if (idx > 0) [shuffled[0], shuffled[idx]] = [shuffled[idx], shuffled[0]];
      }
      localStorage.setItem(storageKey, shuffled[0]?.id || "");
    } catch {
      // ignore storage errors
    }
    return shuffled.slice(0, desiredCount);
  };

  useEffect(() => {
    const challenges = swapChallengesMultilingual[language] || swapChallengesMultilingual.en;
    const desiredCount = 10;
    setShuffledChallenges(pickShuffled(challenges, desiredCount, `precision-swap-last-${language}`));
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setStreak(0);
    setCompleted(0);
    setAttemptSaved(false);
  }, [language]);

  const currentChallenge = shuffledChallenges[currentIndex];

  const handleSelect = (word: string) => {
    if (showResult) return;
    setSelectedOption(word);
  };

  const handleSubmit = () => {
    if (!selectedOption || !currentChallenge) return;

    setShowResult(true);
    const option = currentChallenge.options.find((o) => o.word === selectedOption);

    if (option) {
      setScore((prev) => prev + option.score);

      if (option.score >= 85) {
        setStreak((prev) => prev + 1);
        if (option.score === 100) {
          toast.success("Perfect choice!", { description: option.feedback });
          if (settings?.audio?.soundEffects) playSuccess();
          if (settings?.audio?.voiceFeedback) speak(option.feedback, language);
        } else {
          toast.success("Great choice!", { description: option.feedback });
          if (settings?.audio?.soundEffects) playSuccess();
          if (settings?.audio?.voiceFeedback) speak(option.feedback, language);
        }
      } else {
        setStreak(0);
        toast.info("Good try!", { description: option.feedback });
        if (settings?.audio?.soundEffects) playFail();
        if (settings?.audio?.voiceFeedback) speak(option.feedback, language);
      }
    }

    const newCompleted = completed + 1;
    setCompleted(newCompleted);

    // If this was the final challenge, save the aggregated attempt
    if (user && newCompleted >= shuffledChallenges.length && !attemptSaved) {
      const finalScore = score + (option?.score || 0);
      saveAttempt({ exerciseId: "precision-swap", score: finalScore, maxScore: shuffledChallenges.length * 100 }).then((res) => {
        if (res && res.success) setAttemptSaved(true);
      });
    }
  };

  const handleNext = async () => {
    if (currentIndex < shuffledChallenges.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      if (user && !attemptSaved) {
        const res = await saveAttempt({
          exerciseId: "precision-swap",
          score,
          maxScore: shuffledChallenges.length * 100,
        });
        if (!res || !res.success) toast.error("Failed to save progress");
        else setAttemptSaved(true);
      }
      toast.success("Exercise Complete!", {
        description: `Final score: ${score}. Completed: ${completed + 1} challenges.`,
      });
    }
  };

  const handleRestart = () => {
    const challenges = swapChallengesMultilingual[language] || swapChallengesMultilingual.en;
    const desiredCount = 10;
    setShuffledChallenges(pickShuffled(challenges, desiredCount, `precision-swap-last-${language}`));
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setStreak(0);
    setCompleted(0);
    setAttemptSaved(false);
  };

  const renderSentence = () => {
    if (!currentChallenge) return null;

    const words = currentChallenge.sentence.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, "");
      const punctuation = word.match(/[.,!?]/)?.[0] || "";
      const isTarget = cleanWord.toLowerCase() === currentChallenge.targetWord.toLowerCase();

      if (isTarget) {
        const replacement = showResult && selectedOption
          ? selectedOption
          : currentChallenge.targetWord;

        return (
          <span key={index}>
            <span
              className={cn(
                "inline-block rounded-md px-2 py-0.5 font-semibold transition-all duration-300",
                showResult
                  ? "bg-primary/20 text-primary"
                  : "bg-accent/20 text-accent animate-pulse"
              )}
            >
              {showResult ? replacement : `[${cleanWord}]`}
            </span>
            {punctuation}{" "}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  if (shuffledChallenges.length === 0) {
    return (
      <MainLayout>
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </MainLayout>
    );
  }

  const getOptionStyle = (word: string) => {
    if (!showResult) {
      return selectedOption === word
        ? "border-primary bg-primary/10 ring-2 ring-primary"
        : "border-border hover:border-primary/50 hover:bg-primary/5";
    }

    const option = currentChallenge?.options.find((o) => o.word === word);
    if (!option) return "";

    if (option.score === 100) {
      return "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10";
    }
    if (selectedOption === word) {
      if (option.score >= 85) {
        return "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10";
      }
      return "border-amber-500 bg-amber-50 dark:bg-amber-500/10";
    }
    return "border-border opacity-50";
  };

  return (
    <MainLayout>
      <ExerciseGate exerciseId="precision-swap">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg">
              <Target className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Precision Swap</h1>
            <p className="text-muted-foreground">Replace vague words with precise alternatives</p>
          </div>

          <div className="mb-8 grid grid-cols-3 gap-4 animate-slide-up">
            <div className="rounded-xl glass p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <Trophy className="h-5 w-5" />
                {score}
              </div>
              <div className="text-xs text-muted-foreground">Score</div>
            </div>
            <div className="rounded-xl glass p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-accent">
                <Zap className="h-5 w-5" />
                {streak}
              </div>
              <div className="text-xs text-muted-foreground">Streak</div>
            </div>
            <div className="rounded-xl glass p-4 text-center">
              <div className="text-2xl font-bold text-foreground">
                {completed}/{shuffledChallenges.length}
              </div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
          </div>

          <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
            <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full gradient-hero transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / shuffledChallenges.length) * 100}%` }}
              />
            </div>

            <div className="mb-8 rounded-xl bg-muted/50 p-6 text-center">
              <p className="text-xl leading-relaxed text-foreground">{renderSentence()}</p>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-3">
              {currentChallenge?.options.map((option) => (
                <button
                  key={option.word}
                  onClick={() => handleSelect(option.word)}
                  disabled={showResult}
                  className={cn(
                    "relative rounded-xl border-2 p-4 text-left transition-all duration-200 active:scale-[0.98] hover:shadow-md",
                    getOptionStyle(option.word)
                  )}
                >
                  <span className="font-medium text-foreground">{option.word}</span>

                  {showResult && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2">
                      {option.score === 100 ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : option.score >= 85 ? (
                        <Sparkles className="h-5 w-5 text-amber-500" />
                      ) : selectedOption === option.word ? (
                        <XCircle className="h-5 w-5 text-amber-500" />
                      ) : null}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {showResult && currentChallenge && (
              <div className="mb-6 rounded-xl bg-primary/5 border border-primary/20 p-4 animate-slide-up">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 text-primary shrink-0" />
                  <div>
                    <div className="font-medium text-foreground mb-1">
                      Best answer: <span className="text-primary">{currentChallenge.bestAnswer}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{currentChallenge.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              {!showResult ? (
                <Button variant="hero" size="lg" className="flex-1" onClick={handleSubmit} disabled={!selectedOption}>
                  Check Answer
                </Button>
              ) : currentIndex < shuffledChallenges.length - 1 ? (
                <Button variant="hero" size="lg" className="flex-1" onClick={handleNext}>
                  Next Challenge
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button variant="accent" size="lg" className="flex-1" onClick={handleRestart}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Play Again
                </Button>
              )}
            </div>
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}
