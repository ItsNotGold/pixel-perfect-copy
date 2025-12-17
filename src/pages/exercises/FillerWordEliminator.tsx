import { useState, useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { fillerWordsMultilingual, speakingTopicsMultilingual } from "@/data/multilingualContent";
import { useLanguage } from "@/contexts/LanguageContext";
import { useVoiceRecording } from "@/hooks/useVoiceRecording";
import { withTimeout } from "@/lib/asyncUtils";
import { ExerciseGate } from "@/components/ExerciseGate";
import { MessageCircle, Mic, MicOff, Play, Square, RotateCcw, Trophy, AlertTriangle, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { supabase } from "@/integrations/supabase/client";

interface AIFeedback {
  fillerWords?: Record<string, number>;
  totalFillers?: number;
  score?: number;
  feedback?: string;
  // raw analyzer payload when available (phonetic detections, lexical with timestamps, etc.)
  _raw?: any;
}

export default function FillerWordEliminator() {
  const { language, speechLanguageCode } = useLanguage();
  const { isRecording: isVoiceRecording, transcript: voiceTranscript, startRecording: startVoice, stopRecording: stopVoice, resetTranscript, saveAudio, audioUrl } = useVoiceRecording();
  
  const [currentTopic, setCurrentTopic] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [useVoice, setUseVoice] = useState(false);
  const [manualTranscript, setManualTranscript] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [fillerCount, setFillerCount] = useState<Record<string, number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<AIFeedback | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  const transcript = useVoice ? voiceTranscript : manualTranscript;
  const fillerWords = fillerWordsMultilingual[language] || fillerWordsMultilingual.en;

  useEffect(() => {
    pickNewTopic();
  }, [language]);

  const pickNewTopic = () => {
    const topics = speakingTopicsMultilingual[language] || speakingTopicsMultilingual.en;
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setCurrentTopic(randomTopic.topic);
  };

  const startSession = async () => {
    setIsActive(true);
    setTimeLeft(60);
    setManualTranscript("");
    resetTranscript();
    setFillerCount({});
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
      // Ensure recording is fully stopped and processed before analyzing/saving
      await stopVoice();
    }
    await analyzeTranscript();
  };

  const analyzeTranscript = async () => {
    const text = useVoice ? voiceTranscript : manualTranscript;
    
    // Improved local analysis with better pattern matching
    const counts: Record<string, number> = {};
    let total = 0;
    const lowerText = text.toLowerCase();

    fillerWords.forEach((filler) => {
      let count = 0;
      
      // Create multiple patterns for better detection
      const patterns = [
        new RegExp(`\\b${filler}\\b`, "gi"), // exact word boundary
        new RegExp(`\\b${filler}[s]?\\b`, "gi"), // with optional plural
        new RegExp(`${filler}`, "gi"), // anywhere in text
      ];
      
      // Special handling for common filler variations
      if (filler === "uh") {
        patterns.push(new RegExp("\\buhm?\\b", "gi"));
        patterns.push(new RegExp("\\bah\\b", "gi"));
      }
      if (filler === "um") {
        patterns.push(new RegExp("\\bum+h?\\b", "gi"));
      }
      if (filler === "hmm") {
        patterns.push(new RegExp("\\bh+m+\\b", "gi"));
        patterns.push(new RegExp("\\bhm+\\b", "gi"));
      }
      if (filler === "er") {
        patterns.push(new RegExp("\\ber+r?\\b", "gi"));
        patterns.push(new RegExp("\\ber\\b", "gi"));
      }
      
      patterns.forEach(pattern => {
        const matches = lowerText.match(pattern);
        if (matches) {
          count += matches.length;
        }
      });
      
      if (count > 0) {
        counts[filler] = count;
        total += count;
      }
    });

    setFillerCount(counts);
    setIsComplete(true);
    setTotalAttempts((prev) => prev + 1);

    // Get AI analysis if there's content
    if (text.trim().length >= 20) {
      setIsAnalyzing(true);
      let evaluatedScore: number | null = null;
      try {
        const { data, error } = await withTimeout(
          supabase.functions.invoke("evaluate-exercise", {
            body: {
              type: "filler-words",
              language,
              data: { transcript: text, audioUrl },
            },
          }),
          8000
        );

        if (!error && data) {
          setAiFeedback(data as AIFeedback);
          evaluatedScore = (data as any)?.score ?? evaluatedScore;
          // Prefer analyzer's structured output if provided
          if (data.fillerWords || data._raw) {
            // If _raw is present (local analyzer), it includes total_filler_count and arrays
            if (data._raw) {
              const raw = data._raw;
              // map lexical counts
              const counts: Record<string, number> = {};
              (raw.lexical_fillers || []).forEach((f: any) => counts[f.word] = (counts[f.word] || 0) + 1);
              // include phonetic fillers counts by type as first-class
              (raw.phonetic_fillers || []).forEach((p: any) => {
                const key = `(phonetic) ${p.type}${p.phoneme ? `:${p.phoneme}` : ""}`;
                counts[key] = (counts[key] || 0) + 1;
              });
              setFillerCount(counts);
              total = raw.total_filler_count || raw.total_filler_count === 0 ? raw.total_filler_count : total;
              // also attach raw to AI feedback for UI rendering
              setAiFeedback((prev) => ({ ...(prev as any), _raw: raw }));
            } else if (data.fillerWords) {
              setFillerCount(data.fillerWords);
              total = data.totalFillers || total;
            }
          }
        }
      } catch (err: any) {
        if (err?.name === "TimeoutError") {
          toast.error("Analysis timed out. Try again or save without AI evaluation.");
        } else {
          console.error("AI evaluation error:", err);
        }
      } finally {
        setIsAnalyzing(false);
      }

    const finalScore = evaluatedScore ?? aiFeedback?.score ?? Math.max(0, 100 - total * 10);
    
    if (user) {
      const audioUrl = useVoice ? await saveAudio() : null;
      const res = await saveAttempt({
        exerciseId: "filler-word-eliminator",
        score: finalScore,
        maxScore: 100,
        answers: { transcript: text, fillerCount: counts, audioUrl },
      });
      if (!res || !res.success) toast.error("Failed to save progress");
    }

    if (total === 0) {
      toast.success("Perfect! No filler words detected!");
    } else if (total <= 3) {
      toast.success("Great job! Only a few fillers.");
    } else {
      toast.info(`You used ${total} filler words. Keep practicing!`);
    }
    }
  };

  const handleRestart = () => {
    pickNewTopic();
    setManualTranscript("");
    resetTranscript();
    setFillerCount({});
    setIsComplete(false);
    setTimeLeft(60);
    setAiFeedback(null);
  };

  const totalFillers = Object.values(fillerCount).reduce((a, b) => a + b, 0);
  const score = aiFeedback?.score || Math.max(0, 100 - totalFillers * 10);

  return (
    <MainLayout>
      <ExerciseGate exerciseId="filler-word-eliminator">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg">
              <MessageCircle className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Filler Word Eliminator</h1>
            <p className="text-muted-foreground">Practice speaking without fillers</p>
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
                {isActive ? (useVoice && isVoiceRecording ? "🔴 Recording..." : "Speaking...") : "Ready to start"}
              </div>
            </div>

            <div className="mb-6">
              {useVoice ? (
                <div className="min-h-[150px] rounded-lg border bg-muted/30 p-4">
                  <p className="text-foreground whitespace-pre-wrap">
                    {voiceTranscript || (isActive ? "Start speaking..." : "Your speech will appear here...")}
                  </p>
                </div>
              ) : (
                <>
                  <label className="text-sm font-medium text-foreground mb-2 block">Type what you would say:</label>
                  <Textarea
                    placeholder="Start typing your response here... Include any filler words you might naturally use."
                    value={manualTranscript}
                    onChange={(e) => setManualTranscript(e.target.value)}
                    disabled={!isActive}
                    className="min-h-[150px]"
                  />
                </>
              )}
            </div>

            {isAnalyzing && (
              <div className="mb-6 flex items-center justify-center gap-2 text-muted-foreground">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Analyzing speech...</span>
              </div>
            )}

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

            {/* Phonetic detections (from local audio analyzer) */}
            {aiFeedback?._raw?.phonetic_fillers && aiFeedback._raw.phonetic_fillers.length > 0 && (
              <div className="mb-6 rounded-xl bg-muted/40 p-4 animate-slide-up">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <span className="font-medium text-foreground">Phonetic Fillers Detected (audio-based)</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  These detections are made directly from the audio waveform (nasal hums, prolonged vowels, breathy hesitations) and count as first-class events.
                </div>
                <div className="mt-3 grid gap-2">
                  {aiFeedback._raw.phonetic_fillers.map((p: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between rounded-md bg-muted p-2">
                      <div>
                        <div className="text-sm font-medium text-foreground">{p.type}</div>
                        <div className="text-xs text-muted-foreground">{p.start?.toFixed?.(2) ?? p.start}s → {p.end?.toFixed?.(2) ?? p.end}s ({Math.round((p.end - p.start || p.duration || 0) * 1000)} ms)</div>
                      </div>
                      <div className="text-xs text-muted-foreground">conf: {p.confidence ?? "-"}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {aiFeedback?.feedback && (
              <div className="mb-6 rounded-xl bg-primary/5 border border-primary/20 p-4 animate-slide-up">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">AI Feedback</span>
                </div>
                <p className="text-sm text-muted-foreground">{aiFeedback.feedback}</p>
              </div>
            )}

            {isComplete && useVoice && audioUrl && (
              <div className="mb-6 rounded-xl bg-muted/50 p-4 animate-slide-up">
                <div className="flex items-center gap-2 mb-3">
                  <Play className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">Listen to Your Recording</span>
                </div>
                <audio controls className="w-full">
                  <source src={audioUrl} type="audio/webm" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            <div className="flex gap-3">
              {!isActive && !isComplete && (
                <Button variant="hero" size="lg" className="flex-1" onClick={startSession}>
                  <Play className="mr-2 h-4 w-4" />
                  {useVoice ? "Start Recording" : "Start Speaking"}
                </Button>
              )}
              {isActive && (
                <Button variant="destructive" size="lg" className="flex-1" onClick={stopSession}>
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
      </ExerciseGate>
    </MainLayout>
  );
}
