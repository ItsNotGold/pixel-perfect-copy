import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toneChallenges, ToneChallenge } from "@/data/exerciseData";
import { cn } from "@/lib/utils";
import { Palette, ArrowRight, RotateCcw, Trophy, Lightbulb, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";

export default function ToneTransformer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledChallenges, setShuffledChallenges] = useState<ToneChallenge[]>([]);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  useEffect(() => {
    const shuffled = [...toneChallenges].sort(() => Math.random() - 0.5);
    setShuffledChallenges(shuffled);
  }, []);

  const currentChallenge = shuffledChallenges[currentIndex];

  const handleAnswerChange = (tone: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [tone]: value }));
  };

  const calculateScore = () => {
    if (!currentChallenge) return 0;
    let points = 0;
    currentChallenge.targetTones.forEach((tone) => {
      const answer = answers[tone]?.trim() || "";
      if (answer.length > 20 && answer !== currentChallenge.neutralSentence) {
        points += 100;
      } else if (answer.length > 10) {
        points += 50;
      }
    });
    return points;
  };

  const handleSubmit = () => {
    const earnedScore = calculateScore();
    setScore((prev) => prev + earnedScore);
    setShowResults(true);

    if (earnedScore === currentChallenge.targetTones.length * 100) {
      toast.success("Excellent tone transformations!");
    } else if (earnedScore >= currentChallenge.targetTones.length * 50) {
      toast.success("Good work! Compare with examples.");
    } else {
      toast.info("Keep practicing! Make each version distinct.");
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledChallenges.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setAnswers({});
      setShowResults(false);
    } else {
      if (user) {
        saveAttempt({
          exerciseId: "tone-transformer",
          score,
          maxScore: shuffledChallenges.length * 300,
        });
      }
      toast.success("Exercise Complete!", { description: `Final score: ${score}` });
    }
  };

  const handleRestart = () => {
    const shuffled = [...toneChallenges].sort(() => Math.random() - 0.5);
    setShuffledChallenges(shuffled);
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
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
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 shadow-lg">
            <Palette className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="mb-2 font-display text-3xl text-foreground">Tone Transformer</h1>
          <p className="text-muted-foreground">Rewrite sentences in different tones</p>
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
            <div className="text-xs text-muted-foreground">Challenge</div>
          </div>
        </div>

        <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full gradient-hero transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / shuffledChallenges.length) * 100}%` }}
            />
          </div>

          <div className="mb-8 text-center rounded-xl bg-muted/50 p-6">
            <div className="text-sm text-muted-foreground mb-2">Original (Neutral):</div>
            <p className="text-lg text-foreground">"{currentChallenge?.neutralSentence}"</p>
          </div>

          <div className="space-y-6">
            {currentChallenge?.targetTones.map((tone) => (
              <div key={tone} className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="font-medium text-foreground flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500" />
                    {tone} Tone
                  </label>
                  {showResults && answers[tone]?.length > 20 && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  )}
                </div>
                <Textarea
                  placeholder={`Rewrite in a ${tone.toLowerCase()} tone...`}
                  value={answers[tone] || ""}
                  onChange={(e) => handleAnswerChange(tone, e.target.value)}
                  disabled={showResults}
                  className="min-h-[80px]"
                />
                {showResults && currentChallenge.exampleTransformations[tone] && (
                  <div className="flex items-start gap-2 text-sm text-muted-foreground bg-primary/5 rounded-lg p-3">
                    <Lightbulb className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
                    <span>Example: "{currentChallenge.exampleTransformations[tone]}"</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            {!showResults ? (
              <Button
                variant="hero"
                size="lg"
                className="flex-1"
                onClick={handleSubmit}
                disabled={Object.keys(answers).length < (currentChallenge?.targetTones.length || 0)}
              >
                Check Transformations
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
    </MainLayout>
  );
}
