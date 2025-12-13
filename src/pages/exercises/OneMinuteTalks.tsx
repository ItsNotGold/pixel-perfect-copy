import { useState, useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { speakingTopicsMultilingual } from "@/data/multilingualContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVoiceRecording } from "@/hooks/useVoiceRecording";
import { Mic, MicOff, Play, Square, RotateCcw, Trophy, Clock, Target, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { supabase } from "@/integrations/supabase/client";

interface AIFeedback {
  score: number;
  coherence: number;
  vocabulary: number;
  relevance: number;
  fluency: number;
  feedback: string;
  keyStrengths: string[];
  areasToImprove: string[];
}

export default function OneMinuteTalks() {
  const { language, speechLanguageCode } = useLanguage();
  const { isRecording: isVoiceRecording, transcript: voiceTranscript, startRecording: startVoice, stopRecording: stopVoice, resetTranscript } = useVoiceRecording();
  
  const [currentTopic, setCurrentTopic] = useState<{ topic: string; category: string } | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [useVoice, setUseVoice] = useState(false);
  const [manualTranscript, setManualTranscript] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isComplete, setIsComplete] = useState(false);
  const [stats, setStats] = useState({ wordCount: 0, uniqueWords: 0, avgWordLength: 0 });
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [aiFeedback, setAiFeedback] = useState<AIFeedback | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  const transcript = useVoice ? voiceTranscript : manualTranscript;

  useEffect(() => {
    pickNewTopic();
  }, [language]);

  const pickNewTopic = () => {
    const topics = speakingTopicsMultilingual[language] || speakingTopicsMultilingual.en;
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setCurrentTopic(randomTopic);
  };

  const startSession = async () => {
    setIsActive(true);
    setTimeLeft(60);
    setManualTranscript("");
    resetTranscript();
    setIsComplete(false);
    setAiFeedback(null);

    if (useVoice) {
      await startVoice(speechLanguageCode);
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopSession = async () => {
    setIsActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (useVoice) {
      stopVoice();
    }
    await analyzeTranscript();
  };

  const analyzeTranscript = async () => {
    const text = useVoice ? voiceTranscript : manualTranscript;
    const words = text.trim().split(/\s+/).filter((w) => w.length > 0);
    const wordCount = words.length;
    const uniqueWords = new Set(words.map((w) => w.toLowerCase())).size;
    const avgWordLength = words.length > 0 ? words.reduce((a, w) => a + w.length, 0) / words.length : 0;

    setStats({ wordCount, uniqueWords, avgWordLength: Math.round(avgWordLength * 10) / 10 });
    setIsComplete(true);
    setTotalAttempts((prev) => prev + 1);

    // Get AI feedback if there's enough content
    if (wordCount >= 20 && currentTopic) {
      setIsAnalyzing(true);
      try {
        const { data, error } = await supabase.functions.invoke("evaluate-exercise", {
          body: {
            type: "one-minute-talk",
            language,
            data: {
              topic: currentTopic.topic,
              transcript: text,
              wordCount,
              duration: 60 - timeLeft,
            },
          },
        });

        if (!error && data) {
          setAiFeedback(data as AIFeedback);
        }
      } catch (err) {
        console.error("AI evaluation error:", err);
      } finally {
        setIsAnalyzing(false);
      }
    }

    const fluencyScore = Math.min(50, (wordCount / 150) * 50);
    const diversityScore = Math.min(50, (uniqueWords / Math.max(wordCount, 1)) * 100);
    const score = Math.round(fluencyScore + diversityScore);

    if (user) {
      saveAttempt({
        exerciseId: "one-minute-talks",
        score: aiFeedback?.score || score,
        maxScore: 100,
        answers: { transcript: text, stats: { wordCount, uniqueWords, avgWordLength } },
      });
    }

    if (wordCount >= 150 && uniqueWords >= wordCount * 0.5) {
      toast.success("Excellent! Great fluency and vocabulary!");
    } else if (wordCount >= 100) {
      toast.success("Good job! Keep building your fluency.");
    } else if (wordCount >= 20) {
      toast.info("Try to speak more freely. Don't overthink!");
    }
  };

  const handleRestart = () => {
    pickNewTopic();
    setManualTranscript("");
    resetTranscript();
    setIsComplete(false);
    setTimeLeft(60);
    setStats({ wordCount: 0, uniqueWords: 0, avgWordLength: 0 });
    setAiFeedback(null);
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-8 text-center animate-fade-in">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg">
            <Mic className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="mb-2 font-display text-3xl text-foreground">One-Minute Micro-Talks</h1>
          <p className="text-muted-foreground">Speak for 60 seconds without stopping</p>
        </div>

        <div className="mb-8 grid grid-cols-3 gap-4 animate-slide-up">
          <div className="rounded-xl glass p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
              <Trophy className="h-5 w-5" />
              {aiFeedback?.score || stats.wordCount}
            </div>
            <div className="text-xs text-muted-foreground">{aiFeedback ? "AI Score" : "Words"}</div>
          </div>
          <div className="rounded-xl glass p-4 text-center">
            <div className="text-2xl font-bold text-accent">{stats.uniqueWords}</div>
            <div className="text-xs text-muted-foreground">Unique</div>
          </div>
          <div className="rounded-xl glass p-4 text-center">
            <div className="text-2xl font-bold text-foreground">{totalAttempts}</div>
            <div className="text-xs text-muted-foreground">Attempts</div>
          </div>
        </div>

        <div className="rounded-2xl glass p-8 shadow-card animate-scale-in">
          {/* Voice toggle */}
          {!isActive && !isComplete && (
            <div className="mb-6 flex justify-center">
              <button
                onClick={() => setUseVoice(!useVoice)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  useVoice 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {useVoice ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                {useVoice ? "Voice Input On" : "Voice Input Off"}
              </button>
            </div>
          )}

          <div className="mb-6 text-center">
            <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground mb-2">
              {currentTopic?.category}
            </span>
            <div className="text-lg font-medium text-foreground">{currentTopic?.topic}</div>
          </div>

          <div className="mb-6 text-center">
            <div className={`text-6xl font-bold tabular-nums ${timeLeft <= 10 ? "text-destructive animate-pulse" : "text-foreground"}`}>
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
              <Clock className="h-4 w-4" />
              {isActive ? (useVoice && isVoiceRecording ? "🔴 Recording..." : "Keep talking!") : isComplete ? "Time's up!" : "Ready when you are"}
            </div>
          </div>

          <div className="mb-6">
            {useVoice ? (
              <div className="min-h-[200px] rounded-lg border bg-muted/30 p-4">
                <p className="text-foreground whitespace-pre-wrap">
                  {voiceTranscript || (isActive ? "Start speaking..." : "Your speech will appear here...")}
                </p>
              </div>
            ) : (
              <Textarea
                placeholder="Type what you would say... The goal is to speak continuously for 60 seconds!"
                value={manualTranscript}
                onChange={(e) => setManualTranscript(e.target.value)}
                disabled={!isActive}
                className="min-h-[200px]"
              />
            )}
          </div>

          {isComplete && (
            <div className="mb-6 grid grid-cols-3 gap-4 rounded-xl bg-muted/50 p-4 animate-slide-up">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{stats.wordCount}</div>
                <div className="text-xs text-muted-foreground">Total Words</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{stats.uniqueWords}</div>
                <div className="text-xs text-muted-foreground">Unique Words</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">{stats.avgWordLength}</div>
                <div className="text-xs text-muted-foreground">Avg Length</div>
              </div>
            </div>
          )}

          {isAnalyzing && (
            <div className="mb-6 flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Getting AI feedback...</span>
            </div>
          )}

          {aiFeedback && (
            <div className="mb-6 rounded-xl bg-primary/5 border border-primary/20 p-4 animate-slide-up">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">AI Feedback</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{aiFeedback.feedback}</p>
              {aiFeedback.keyStrengths?.length > 0 && (
                <div className="mb-2">
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Strengths: </span>
                  <span className="text-xs text-muted-foreground">{aiFeedback.keyStrengths.join(", ")}</span>
                </div>
              )}
              {aiFeedback.areasToImprove?.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Areas to improve: </span>
                  <span className="text-xs text-muted-foreground">{aiFeedback.areasToImprove.join(", ")}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3">
            {!isActive && !isComplete && (
              <Button variant="hero" size="lg" className="flex-1" onClick={startSession}>
                <Play className="mr-2 h-4 w-4" />
                {useVoice ? "Start Recording" : "Start Talking"}
              </Button>
            )}
            {isActive && (
              <Button variant="destructive" size="lg" className="flex-1" onClick={stopSession}>
                <Square className="mr-2 h-4 w-4" />
                Finish Early
              </Button>
            )}
            {isComplete && (
              <Button variant="accent" size="lg" className="flex-1" onClick={handleRestart}>
                <RotateCcw className="mr-2 h-4 w-4" />
                New Topic
              </Button>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-xl glass p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="mb-3 font-display text-lg text-foreground flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Tips for Fluent Speaking
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Don't worry about perfection - focus on flow</li>
            <li>• Use transition phrases: "Another point is...", "This reminds me of..."</li>
            <li>• If you get stuck, describe an example or personal experience</li>
            <li>• Aim for 150+ words in 60 seconds (natural speech pace)</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
