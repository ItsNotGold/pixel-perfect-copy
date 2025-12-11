import { useState, useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { fillerWords, speakingTopics } from "@/data/exerciseData";
import { MessageCircle, Play, Square, RotateCcw, Trophy, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";

export default function FillerWordEliminator() {
  const [currentTopic, setCurrentTopic] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [fillerCount, setFillerCount] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  useEffect(() => {
    pickNewTopic();
  }, []);

  const pickNewTopic = () => {
    const randomTopic = speakingTopics[Math.floor(Math.random() * speakingTopics.length)];
    setCurrentTopic(randomTopic);
  };

  const startRecording = () => {
    setIsRecording(true);
    setTimeLeft(60);
    setTranscript("");
    setFillerCount({});
    setIsComplete(false);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    analyzeTranscript();
  };

  const analyzeTranscript = () => {
    const text = transcript.toLowerCase();
    const counts: Record<string, number> = {};
    let total = 0;

    fillerWords.forEach((filler) => {
      const regex = new RegExp(`\\b${filler}\\b`, "gi");
      const matches = text.match(regex);
      if (matches) {
        counts[filler] = matches.length;
        total += matches.length;
      }
    });

    setFillerCount(counts);
    setIsComplete(true);
    setTotalAttempts((prev) => prev + 1);

    const score = Math.max(0, 100 - total * 10);
    
    if (user) {
      saveAttempt({
        exerciseId: "filler-word-eliminator",
        score,
        maxScore: 100,
        answers: { transcript, fillerCount: counts },
      });
    }

    if (total === 0) {
      toast.success("Perfect! No filler words detected!");
    } else if (total <= 3) {
      toast.success("Great job! Only a few fillers.");
    } else {
      toast.info(`You used ${total} filler words. Keep practicing!`);
    }
  };

  const handleRestart = () => {
    pickNewTopic();
    setTranscript("");
    setFillerCount({});
    setIsComplete(false);
    setTimeLeft(60);
  };

  const totalFillers = Object.values(fillerCount).reduce((a, b) => a + b, 0);
  const score = Math.max(0, 100 - totalFillers * 10);

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 text-center animate-fade-in">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg">
            <MessageCircle className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="mb-2 font-display text-3xl text-foreground">Filler Word Eliminator</h1>
          <p className="text-muted-foreground">Practice speaking without fillers like "um" and "uh"</p>
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
          <div className="mb-6 text-center">
            <div className="text-sm text-muted-foreground mb-2">Your topic:</div>
            <div className="inline-block rounded-xl bg-muted px-6 py-3">
              <span className="text-lg font-medium text-foreground">{currentTopic}</span>
            </div>
          </div>

          <div className="mb-6 text-center">
            <div className={`text-5xl font-bold tabular-nums ${timeLeft <= 10 ? "text-destructive" : "text-foreground"}`}>
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {isRecording ? "Recording..." : "Ready to start"}
            </div>
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Type what you would say (simulated speech):
            </label>
            <Textarea
              placeholder="Start typing your response here... Include any filler words you might naturally use."
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              disabled={!isRecording}
              className="min-h-[150px]"
            />
          </div>

          {isComplete && (
            <div className="mb-6 rounded-xl bg-muted/50 p-4 animate-slide-up">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <span className="font-medium text-foreground">Filler Words Detected:</span>
              </div>
              {totalFillers === 0 ? (
                <p className="text-emerald-600 dark:text-emerald-400">No filler words found! Excellent!</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(fillerCount).map(([word, count]) => (
                    <span
                      key={word}
                      className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-900/30 px-3 py-1 text-sm text-amber-800 dark:text-amber-200"
                    >
                      "{word}" × {count}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3">
            {!isRecording && !isComplete && (
              <Button variant="hero" size="lg" className="flex-1" onClick={startRecording}>
                <Play className="mr-2 h-4 w-4" />
                Start Speaking
              </Button>
            )}
            {isRecording && (
              <Button variant="destructive" size="lg" className="flex-1" onClick={stopRecording}>
                <Square className="mr-2 h-4 w-4" />
                Stop & Analyze
              </Button>
            )}
            {isComplete && (
              <Button variant="accent" size="lg" className="flex-1" onClick={handleRestart}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-xl glass p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="mb-3 font-display text-lg text-foreground">Filler Words to Avoid</h3>
          <div className="flex flex-wrap gap-2">
            {fillerWords.map((word) => (
              <span key={word} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
