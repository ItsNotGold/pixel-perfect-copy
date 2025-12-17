import { useState, useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { synonymSpeedChainMaster } from "@/data/exercises/synonymSpeedChain.master";
import { SynonymChallenge } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExerciseGate } from "@/components/ExerciseGate";
import { cn } from "@/lib/utils";
import { Link, Play, RotateCcw, Trophy, Zap, Clock, Star } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { useSettings } from "@/hooks/useSettings";
import { playTick, playDing } from "@/lib/audio";
import { speak } from "@/lib/tts";



export default function SynonymSpeedChain() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSynonym, setCurrentSynonym] = useState("");
  const [synonymList, setSynonymList] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [attemptSaved, setAttemptSaved] = useState(false);
  const [shuffledChallenges, setShuffledChallenges] = useState<SynonymChallenge[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();
  const { settings } = useSettings();

  useEffect(() => {
    const content = synonymSpeedChainMaster.content.multilingual[language] || synonymSpeedChainMaster.content.multilingual.en;
    const challenges = content.challenges;
    const shuffled = [...challenges].sort(() => Math.random() - 0.5);
    const desiredCount = 5;
    setShuffledChallenges(shuffled.slice(0, desiredCount));
    setCurrentIndex(0);
    setIsComplete(false);
    setSynonymList([]);
    setScore(0);
    setTotalScore(0);
    setAttemptSaved(false);
  }, [language]);

  const currentChallenge = shuffledChallenges[currentIndex];

  const startRound = () => {
    setIsPlaying(true);
    setIsComplete(false);
    setSynonymList([]);
    setScore(0);
    setTimeLeft(currentChallenge?.timeLimit || 30);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          endRound();
          return 0;
        }
        const next = prev - 1;
        // play tick on last 5 seconds if enabled
        if (settings?.practice?.timerSounds && next <= 5) {
          try { playTick(); } catch { }
        }
        return next;
      });
    }, 1000);

    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const endRound = () => {
    setIsPlaying(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsComplete(true);
    const newTotal = totalScore + score;
    setTotalScore(newTotal);

    // If this was the final round for the series, save the aggregated attempt
    if (user && currentIndex === shuffledChallenges.length - 1 && !attemptSaved) {
      saveAttempt({ exerciseId: "synonym-speed-chain", score: newTotal, maxScore: shuffledChallenges.length * 100 }).then((res) => {
        if (res && res.success) setAttemptSaved(true);
      });
    }

    if (score >= 50) {
      toast.success("Excellent vocabulary!");
      if (settings?.audio?.soundEffects) playDing();
      if (settings?.audio?.voiceFeedback) speak("Excellent vocabulary!");
    } else if (score >= 30) {
      toast.success("Good job!");
      if (settings?.audio?.soundEffects) playDing();
      if (settings?.audio?.voiceFeedback) speak("Good job!");
    } else {
      toast.info("Keep building your vocabulary!");
      if (settings?.audio?.voiceFeedback) speak("Keep building your vocabulary!");
    }
  };

  const addSynonym = () => {
    if (!currentSynonym.trim() || !currentChallenge) return;

    const word = currentSynonym.toLowerCase().trim();

    if (synonymList.includes(word)) {
      toast.error("Already added!");
      return;
    }

    if (word === currentChallenge.word.toLowerCase()) {
      toast.error("Can't use the target word!");
      return;
    }

    setSynonymList((prev) => [...prev, word]);

    let points = 5;
    if (currentChallenge.rareSynonyms.map((s) => s.toLowerCase()).includes(word)) {
      points = 15;
      toast.success(`+${points} Rare word!`);
    } else if (currentChallenge.commonSynonyms.map((s) => s.toLowerCase()).includes(word)) {
      points = 10;
      toast.success(`+${points} Great!`);
    }

    setScore((prev) => prev + points);
    setCurrentSynonym("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addSynonym();
    }
  };

  const handleNext = async () => {
    // Accumulate current round's score into total even when user clicks Next manually
    setTotalScore((prev) => prev + score);

    if (currentIndex < shuffledChallenges.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsComplete(false);
      setSynonymList([]);
      setScore(0);
    } else {
      // Ensure the final total includes the last round's points
      const finalTotal = totalScore + score;
      if (user && !attemptSaved) {
        const res = await saveAttempt({
          exerciseId: "synonym-speed-chain",
          score: finalTotal,
          maxScore: shuffledChallenges.length * 100,
        });
        if (!res || !res.success) toast.error("Failed to save progress");
        else setAttemptSaved(true);
      }
      toast.success("Exercise Complete!", { description: `Final score: ${finalTotal}` });
      setTotalScore(finalTotal);
    }
  };

  const handleRestart = () => {
    const content = synonymSpeedChainMaster.content.multilingual[language] || synonymSpeedChainMaster.content.multilingual.en;
    const challenges = content.challenges;
    const shuffled = [...challenges].sort(() => Math.random() - 0.5);
    const desiredCount = 5;
    setShuffledChallenges(shuffled.slice(0, desiredCount));
    setCurrentIndex(0);
    setIsComplete(false);
    setSynonymList([]);
    setScore(0);
    setTotalScore(0);
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
      <ExerciseGate exerciseId="synonym-speed-chain">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
              <Link className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Synonym Speed Chain</h1>
            <p className="text-muted-foreground">Race against the clock to list synonyms</p>
          </div>

          <div className="mb-8 grid grid-cols-3 gap-4 animate-slide-up">
            <div className="rounded-xl glass p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <Trophy className="h-5 w-5" />
                {totalScore}
              </div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
            <div className="rounded-xl glass p-4 text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-accent">
                <Zap className="h-5 w-5" />
                {score}
              </div>
              <div className="text-xs text-muted-foreground">Round</div>
            </div>
            <div className="rounded-xl glass p-4 text-center">
              <div className="text-2xl font-bold text-foreground">
                {currentIndex + 1}/{shuffledChallenges.length}
              </div>
              <div className="text-xs text-muted-foreground">Word</div>
            </div>
          </div>

          <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
            <div className="mb-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">Find synonyms for:</div>
              <div className="inline-block rounded-xl bg-gradient-to-br from-orange-500 to-red-500 px-8 py-4">
                <span className="text-3xl font-bold text-white">{currentChallenge?.word}</span>
              </div>
            </div>

            {isPlaying && (
              <div className="mb-6 text-center">
                <div
                  className={cn(
                    "text-5xl font-bold tabular-nums",
                    timeLeft <= 10 ? "text-destructive animate-pulse" : "text-foreground"
                  )}
                >
                  {timeLeft}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-1">
                  <Clock className="h-4 w-4" />
                  seconds remaining
                </div>
              </div>
            )}

            {isPlaying && (
              <div className="mb-6">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    placeholder="Type a synonym and press Enter..."
                    value={currentSynonym}
                    onChange={(e) => setCurrentSynonym(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button onClick={addSynonym} disabled={!currentSynonym.trim()}>
                    Add
                  </Button>
                </div>
              </div>
            )}

            {synonymList.length > 0 && (
              <div className="mb-6">
                <div className="text-sm text-muted-foreground mb-2">Your synonyms:</div>
                <div className="flex flex-wrap gap-2">
                  {synonymList.map((word, idx) => {
                    const isRare = currentChallenge?.rareSynonyms.map((s) => s.toLowerCase()).includes(word);
                    return (
                      <span
                        key={idx}
                        className={cn(
                          "rounded-full px-3 py-1 text-sm font-medium",
                          isRare
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
                            : "bg-muted text-foreground"
                        )}
                      >
                        {isRare && <Star className="inline h-3 w-3 mr-1" />}
                        {word}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {isComplete && currentChallenge && (
              <div className="mb-6 rounded-xl bg-muted/50 p-4 animate-slide-up">
                <div className="text-sm font-medium text-foreground mb-2">Example synonyms:</div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {currentChallenge.commonSynonyms.map((word) => (
                    <span key={word} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                      {word}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-2">Rare synonyms (bonus!):</div>
                <div className="flex flex-wrap gap-2">
                  {currentChallenge.rareSynonyms.map((word) => (
                    <span
                      key={word}
                      className="rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-700 dark:text-amber-300"
                    >
                      <Star className="inline h-3 w-3 mr-1" />
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              {!isPlaying && !isComplete && (
                <Button variant="hero" size="lg" className="flex-1" onClick={startRound}>
                  <Play className="mr-2 h-4 w-4" />
                  Start Round
                </Button>
              )}
              {isComplete && currentIndex < shuffledChallenges.length - 1 && (
                <Button variant="hero" size="lg" className="flex-1" onClick={handleNext}>
                  Next Word
                </Button>
              )}
              {isComplete && currentIndex === shuffledChallenges.length - 1 && (
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
