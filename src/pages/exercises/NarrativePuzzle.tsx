import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { narrativeChallenges, NarrativeChallenge } from "@/data/exerciseData";
import { cn } from "@/lib/utils";
import { Pen, ArrowRight, RotateCcw, Trophy, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";

export default function NarrativePuzzle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [story, setStory] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [wordsUsed, setWordsUsed] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState(0);
  const [shuffledChallenges, setShuffledChallenges] = useState<NarrativeChallenge[]>([]);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  useEffect(() => {
    const shuffled = [...narrativeChallenges].sort(() => Math.random() - 0.5);
    setShuffledChallenges(shuffled);
  }, []);

  const currentChallenge = shuffledChallenges[currentIndex];

  const checkWordsUsed = () => {
    if (!currentChallenge) return {};
    const storyLower = story.toLowerCase();
    const used: Record<string, boolean> = {};
    currentChallenge.requiredWords.forEach((word) => {
      used[word] = storyLower.includes(word.toLowerCase());
    });
    return used;
  };

  const handleSubmit = () => {
    if (!currentChallenge) return;

    const used = checkWordsUsed();
    setWordsUsed(used);
    setShowResult(true);

    const wordsCount = Object.values(used).filter(Boolean).length;
    const sentences = story.split(/[.!?]+/).filter((s) => s.trim()).length;
    const meetsMinSentences = sentences >= currentChallenge.minSentences;

    let earnedScore = 0;
    earnedScore += wordsCount * 30; // 30 points per word used
    if (meetsMinSentences) earnedScore += 20;
    if (wordsCount === currentChallenge.requiredWords.length && meetsMinSentences) {
      earnedScore += 20; // Bonus for complete
    }

    setScore((prev) => prev + earnedScore);

    if (wordsCount === currentChallenge.requiredWords.length && meetsMinSentences) {
      toast.success("Perfect! All words used beautifully!");
    } else if (wordsCount >= currentChallenge.requiredWords.length - 1) {
      toast.success("Great story! Almost all words used.");
    } else {
      toast.info("Good effort! Try using more required words.");
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledChallenges.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setStory("");
      setShowResult(false);
      setWordsUsed({});
    } else {
      if (user) {
        saveAttempt({
          exerciseId: "narrative-puzzle",
          score,
          maxScore: shuffledChallenges.length * 110,
        });
      }
      toast.success("Exercise Complete!", { description: `Final score: ${score}` });
    }
  };

  const handleRestart = () => {
    const shuffled = [...narrativeChallenges].sort(() => Math.random() - 0.5);
    setShuffledChallenges(shuffled);
    setCurrentIndex(0);
    setStory("");
    setShowResult(false);
    setWordsUsed({});
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
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
            <Pen className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="mb-2 font-display text-3xl text-foreground">Narrative Puzzle Builder</h1>
          <p className="text-muted-foreground">Weave target words into creative stories</p>
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
            <div className="text-xs text-muted-foreground">Story</div>
          </div>
        </div>

        <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
          <div className="mb-6 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full gradient-hero transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / shuffledChallenges.length) * 100}%` }}
            />
          </div>

          <div className="mb-6 text-center">
            <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground mb-2">
              Theme: {currentChallenge?.theme}
            </span>
            <div className="text-sm text-muted-foreground">
              Write at least {currentChallenge?.minSentences} sentences using these words:
            </div>
          </div>

          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {currentChallenge?.requiredWords.map((word) => (
              <span
                key={word}
                className={cn(
                  "rounded-full px-4 py-2 font-medium transition-all",
                  showResult
                    ? wordsUsed[word]
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                      : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                    : "bg-primary/10 text-primary"
                )}
              >
                {word}
                {showResult && (
                  <span className="ml-2">
                    {wordsUsed[word] ? (
                      <CheckCircle2 className="inline h-4 w-4" />
                    ) : (
                      <XCircle className="inline h-4 w-4" />
                    )}
                  </span>
                )}
              </span>
            ))}
          </div>

          <div className="mb-6">
            <Textarea
              placeholder="Once upon a time..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              disabled={showResult}
              className="min-h-[200px]"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>
                Sentences: {story.split(/[.!?]+/).filter((s) => s.trim()).length} / {currentChallenge?.minSentences} min
              </span>
              <span>{story.length} characters</span>
            </div>
          </div>

          <div className="flex gap-3">
            {!showResult ? (
              <Button
                variant="hero"
                size="lg"
                className="flex-1"
                onClick={handleSubmit}
                disabled={story.trim().length < 20}
              >
                Submit Story
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
