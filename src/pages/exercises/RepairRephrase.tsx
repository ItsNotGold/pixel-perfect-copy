import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { repairChallenges, RepairChallenge } from "@/data/exerciseData";
import { cn } from "@/lib/utils";
import { RefreshCw, ArrowRight, RotateCcw, Trophy, Lightbulb, CheckCircle2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";

export default function RepairRephrase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledChallenges, setShuffledChallenges] = useState<RepairChallenge[]>([]);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  useEffect(() => {
    const shuffled = [...repairChallenges].sort(() => Math.random() - 0.5);
    setShuffledChallenges(shuffled);
  }, []);

  const currentChallenge = shuffledChallenges[currentIndex];

  const calculateScore = () => {
    if (!currentChallenge || !answer.trim()) return 0;
    
    // Score based on improvement
    const originalLength = currentChallenge.clunkySentence.length;
    const answerLength = answer.trim().length;
    
    let points = 50; // Base points for attempting
    
    // Bonus for making it shorter (more concise)
    if (answerLength < originalLength) {
      points += Math.min(30, Math.round((originalLength - answerLength) / originalLength * 50));
    }
    
    // Bonus for being different from original
    if (answer.toLowerCase() !== currentChallenge.clunkySentence.toLowerCase()) {
      points += 20;
    }
    
    return Math.min(100, points);
  };

  const handleSubmit = () => {
    const earnedScore = calculateScore();
    setScore((prev) => prev + earnedScore);
    setShowResult(true);

    if (earnedScore >= 80) {
      toast.success("Excellent repair!");
    } else if (earnedScore >= 50) {
      toast.success("Good improvement!");
    } else {
      toast.info("Compare with the improved versions.");
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledChallenges.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setAnswer("");
      setShowResult(false);
    } else {
      if (user) {
        saveAttempt({
          exerciseId: "repair-rephrase",
          score,
          maxScore: shuffledChallenges.length * 100,
        });
      }
      toast.success("Exercise Complete!", { description: `Final score: ${score}` });
    }
  };

  const handleRestart = () => {
    const shuffled = [...repairChallenges].sort(() => Math.random() - 0.5);
    setShuffledChallenges(shuffled);
    setCurrentIndex(0);
    setAnswer("");
    setShowResult(false);
    setScore(0);
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

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 text-center animate-fade-in">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-500 to-green-500 shadow-lg">
            <RefreshCw className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="mb-2 font-display text-3xl text-foreground">Repair & Rephrase</h1>
          <p className="text-muted-foreground">Fix clunky sentences for clarity and impact</p>
        </div>

        <div className="mb-8 flex items-center justify-center gap-6 animate-slide-up">
          <div className="rounded-xl glass p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
              <Trophy className="h-5 w-5" />
              {score}
            </div>
            <div className="text-xs text-muted-foreground">Score</div>
          </div>
          <div className="rounded-xl glass p-4 text-center">
            <div className="text-2xl font-bold text-foreground">
              {currentIndex + 1}/{shuffledChallenges.length}
            </div>
            <div className="text-xs text-muted-foreground">Sentence</div>
          </div>
        </div>

        <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full gradient-hero transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / shuffledChallenges.length) * 100}%` }}
            />
          </div>

          <div className="mb-6 rounded-xl bg-muted/50 p-6">
            <div className="text-sm text-muted-foreground mb-2">Clunky sentence:</div>
            <p className="text-lg text-foreground">"{currentChallenge?.clunkySentence}"</p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Issues:</span>
            {currentChallenge?.issues.map((issue, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-xs text-amber-700 dark:text-amber-300"
              >
                <AlertTriangle className="h-3 w-3" />
                {issue}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <Textarea
              placeholder="Write your improved version..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={showResult}
              className="min-h-[100px]"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>Your version: {answer.length} characters</span>
              <span>Original: {currentChallenge?.clunkySentence.length} characters</span>
            </div>
          </div>

          {showResult && currentChallenge && (
            <div className="mb-6 rounded-xl bg-primary/5 border border-primary/20 p-4 animate-slide-up">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-5 w-5 text-amber-500 shrink-0" />
                <div>
                  <div className="font-medium text-foreground mb-2">Improved versions:</div>
                  {currentChallenge.improvedVersions.map((version, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground mb-1">
                      • "{version}"
                    </p>
                  ))}
                  <p className="text-sm text-primary mt-3">{currentChallenge.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3">
            {!showResult ? (
              <Button
                variant="hero"
                size="lg"
                className="flex-1"
                onClick={handleSubmit}
                disabled={answer.trim().length < 5}
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Submit Repair
              </Button>
            ) : currentIndex < shuffledChallenges.length - 1 ? (
              <Button variant="hero" size="lg" className="flex-1" onClick={handleNext}>
                Next Sentence
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

        <div className="mt-8 rounded-xl glass p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="mb-3 font-display text-lg text-foreground">Repair Tips</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Remove redundant phrases ("at this point in time" → "now")</li>
            <li>• Use active voice when possible</li>
            <li>• Replace weak constructions ("is a person who" → direct statement)</li>
            <li>• Cut filler words and unnecessary qualifiers</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
