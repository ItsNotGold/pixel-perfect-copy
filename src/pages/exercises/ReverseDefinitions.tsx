import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { reverseDefinitionsMultilingual } from "@/data/multilingualContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { BookOpen, ArrowRight, RotateCcw, Trophy, Lightbulb, CheckCircle2, XCircle, Zap } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";

interface ReverseDefinition {
  id: string;
  definition: string;
  answer: string;
  hints: string[];
  difficulty: "easy" | "medium" | "hard";
}

export default function ReverseDefinitions() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [shuffledChallenges, setShuffledChallenges] = useState<ReverseDefinition[]>([]);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  useEffect(() => {
    const definitions = reverseDefinitionsMultilingual[language] || reverseDefinitionsMultilingual.en;
    const shuffled = [...definitions].sort(() => Math.random() - 0.5);
    const desiredCount = 10;
    setShuffledChallenges(shuffled.slice(0, desiredCount));
    setCurrentIndex(0);
    setAnswer("");
    setShowResult(false);
    setShowHint(0);
    setScore(0);
    setStreak(0);
  }, [language]);

  const currentChallenge = shuffledChallenges[currentIndex];

  const handleSubmit = () => {
    if (!answer.trim() || !currentChallenge) return;

    const correct = answer.toLowerCase().trim() === currentChallenge.answer.toLowerCase();
    setIsCorrect(correct);
    setShowResult(true);

    const difficultyMultiplier = { easy: 1, medium: 1.5, hard: 2 };
    const hintPenalty = showHint * 10;
    const baseScore = correct ? 100 : 0;
    const earnedScore = Math.max(0, Math.round(baseScore * difficultyMultiplier[currentChallenge.difficulty] - hintPenalty));

    setScore((prev) => prev + earnedScore);

    if (correct) {
      setStreak((prev) => prev + 1);
      toast.success("Correct!", { description: `+${earnedScore} points` });
    } else {
      setStreak(0);
      toast.error("Not quite!", { description: `The answer was: ${currentChallenge.answer}` });
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledChallenges.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setAnswer("");
      setShowResult(false);
      setShowHint(0);
    } else {
      if (user) {
        saveAttempt({
          exerciseId: "reverse-definitions",
          score,
          maxScore: shuffledChallenges.length * 200,
        });
      }
      toast.success("Exercise Complete!", { description: `Final score: ${score}` });
    }
  };

  const handleRestart = () => {
    const definitions = reverseDefinitionsMultilingual[language] || reverseDefinitionsMultilingual.en;
    const shuffled = [...definitions].sort(() => Math.random() - 0.5);
    const desiredCount = 10;
    setShuffledChallenges(shuffled.slice(0, desiredCount));
    setCurrentIndex(0);
    setAnswer("");
    setShowResult(false);
    setShowHint(0);
    setScore(0);
    setStreak(0);
  };

  const handleHint = () => {
    if (currentChallenge && showHint < currentChallenge.hints.length) {
      setShowHint((prev) => prev + 1);
    }
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
      case "medium": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
      case "hard": return "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300";
      default: return "";
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 text-center animate-fade-in">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
            <BookOpen className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="mb-2 font-display text-3xl text-foreground">Reverse Definitions</h1>
          <p className="text-muted-foreground">Read the definition, guess the word</p>
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
              {currentIndex + 1}/{shuffledChallenges.length}
            </div>
            <div className="text-xs text-muted-foreground">Progress</div>
          </div>
        </div>

        <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full gradient-hero transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / shuffledChallenges.length) * 100}%` }}
            />
          </div>

          <div className="mb-2 flex items-center justify-center">
            <span className={cn("rounded-full px-3 py-1 text-xs font-medium", getDifficultyColor(currentChallenge?.difficulty || ""))}>
              {currentChallenge?.difficulty?.toUpperCase()}
            </span>
          </div>

          <div className="mb-8 text-center rounded-xl bg-muted/50 p-6">
            <p className="text-lg text-foreground italic">"{currentChallenge?.definition}"</p>
          </div>

          {showHint > 0 && currentChallenge && (
            <div className="mb-4 space-y-2">
              {currentChallenge.hints.slice(0, showHint).map((hint, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 rounded-lg px-3 py-2">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  {hint}
                </div>
              ))}
            </div>
          )}

          <div className="mb-6">
            <Input
              placeholder="Type your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={showResult}
              className="text-center text-lg"
              onKeyDown={(e) => e.key === "Enter" && !showResult && handleSubmit()}
            />
          </div>

          {showResult && currentChallenge && (
            <div className={cn(
              "mb-6 rounded-xl p-4 flex items-center gap-3 animate-slide-up",
              isCorrect ? "bg-emerald-50 dark:bg-emerald-900/20" : "bg-rose-50 dark:bg-rose-900/20"
            )}>
              {isCorrect ? (
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              ) : (
                <XCircle className="h-6 w-6 text-rose-500" />
              )}
              <div>
                <div className="font-medium text-foreground">
                  {isCorrect ? "Correct!" : `The answer was: ${currentChallenge.answer}`}
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            {!showResult ? (
              <>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleHint}
                  disabled={showHint >= (currentChallenge?.hints.length || 0)}
                >
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Hint ({currentChallenge?.hints.length - showHint})
                </Button>
                <Button
                  variant="hero"
                  size="lg"
                  className="flex-1"
                  onClick={handleSubmit}
                  disabled={!answer.trim()}
                >
                  Check Answer
                </Button>
              </>
            ) : currentIndex < shuffledChallenges.length - 1 ? (
              <Button variant="hero" size="lg" className="flex-1" onClick={handleNext}>
                Next Word
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
    </MainLayout>
  );
}
