import { useState, useRef, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { fillerWordEliminatorMaster } from "@/data/exercises/fillerWordEliminator.master";
import { useLanguage } from "@/contexts/LanguageContext";
import { ExerciseGate } from "@/components/ExerciseGate";
import { MessageCircle, Mic, Square, RotateCcw, Trophy, AlertTriangle, Sparkles, ChevronUp, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { toast } from "sonner";

interface FillerDetection {
  word: string;
  count: number;
}

interface TranscriptWord {
  text: string;
  start: number;
  end: number;
  confidence: number;
}

export default function FillerWordEliminator() {
  const { language } = useLanguage();
  const [currentTopic, setCurrentTopic] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [fillers, setFillers] = useState<FillerDetection[]>([]);
  const [finalTranscript, setFinalTranscript] = useState("");
  const [score, setScore] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  const content = fillerWordEliminatorMaster.content.multilingual[language] || fillerWordEliminatorMaster.content.multilingual.en;

  const pickNewTopic = useCallback(() => {
    const topics = content.topics;
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setCurrentTopic(randomTopic);
  }, [content.topics]);

  // Initial topic
  useState(() => {
    pickNewTopic();
  });

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        uploadAndAnalyze(blob);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setIsComplete(false);
      setShowAnalysis(false);
      setFinalTranscript("");
      setFillers([]);
      setAudioUrl(null);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      toast.error("Could not access microphone");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // Stop all tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const uploadAndAnalyze = async (audioBlob: Blob) => {
    setIsAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm");

      // Use the newly created endpoint
      const response = await fetch("http://localhost:8000/transcribe", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const result = await response.json();
      
      setFinalTranscript(result.text);
      analyzeFillers(result.text, result.words);
      setIsComplete(true);
      setTotalAttempts(prev => prev + 1);
      setShowAnalysis(true); // Auto-show results

    } catch (error) {
      console.error("Transcription failed:", error);
      toast.error("Failed to analyze audio. Ensure server is running.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const analyzeFillers = (text: string, words: TranscriptWord[]) => {
    const targets = content.targetFillerWords;
    const sortedTargets = [...targets].sort((a, b) => b.length - a.length);

    const detections: FillerDetection[] = [];
    let totalCount = 0;

    sortedTargets.forEach(filler => {
      const escaped = filler.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Simple regex matching for now, similar to previous logic
      const regex = new RegExp(`(?<=^|[^a-zA-Z0-9À-ÿ])(${escaped})(?=[^a-zA-Z0-9À-ÿ]|$)`, 'gi');
      
      const matches = text.match(regex);
      if (matches) {
        detections.push({
          word: filler,
          count: matches.length
        });
        totalCount += matches.length;
      }
    });

    setFillers(detections);
    const calculatedScore = Math.max(0, 100 - totalCount * 10);
    setScore(calculatedScore);

    if (user) {
      saveAttempt({
        exerciseId: "filler-word-eliminator",
        score: calculatedScore,
        maxScore: 100,
        answers: { 
          transcript: text, 
          fillerCount: totalCount,
          detections 
        },
      });
    }
  };

  const handleRestart = () => {
    pickNewTopic();
    setIsComplete(false);
    setShowAnalysis(false);
    setAudioUrl(null);
    setFinalTranscript("");
    setFillers([]);
  };

  return (
    <MainLayout>
      <ExerciseGate exerciseId="filler-word-eliminator">
        <div className="mx-auto max-w-3xl px-6 py-12">
          {/* Header */}
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Filler Word Eliminator</h1>
            <p className="text-muted-foreground">Master the art of pause and precision</p>
          </div>

          {/* Stats */}
          <div className="mb-8 flex items-center justify-center gap-6">
            <div className="rounded-xl glass p-4 text-center min-w-[100px]">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold text-primary">
                <Trophy className="h-5 w-5" />
                {isComplete ? score : "--"}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Score</div>
            </div>
            <div className="rounded-xl glass p-4 text-center min-w-[100px]">
              <div className="text-2xl font-bold text-foreground">{totalAttempts}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Attempts</div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl glass p-8 shadow-2xl border border-white/10">
            
            {/* Recording UI */}
            <div className={`transition-all duration-500 ease-in-out ${showAnalysis ? 'opacity-0 scale-95 pointer-events-none absolute' : 'opacity-100 scale-100'}`}>
              <div className="mb-8 text-center">
                <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-widest">Your Topic</div>
                <div className="inline-block rounded-2xl bg-white/5 px-8 py-4 border border-white/10 backdrop-blur-md">
                  <span className="text-xl font-semibold text-foreground">{currentTopic}</span>
                </div>
              </div>

              <div className="mb-12 text-center">
                <div className="mt-4 flex items-center justify-center gap-2">
                  {isRecording && (
                    <>
                      <div className="h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                      <span className="text-sm font-semibold text-rose-500 uppercase tracking-widest">Recording...</span>
                    </>
                  )}
                  {isAnalyzing && (
                     <>
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span className="text-sm font-semibold text-primary uppercase tracking-widest">Analyzing...</span>
                     </>
                  )}
                  {!isRecording && !isAnalyzing && !isComplete && <span className="text-sm text-muted-foreground font-medium">Ready to record</span>}
                </div>
              </div>

              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                {!isRecording && !isAnalyzing && (
                  <Button variant="hero" size="xl" className="w-full shadow-glow" onClick={startRecording}>
                    <Mic className="mr-2 h-5 w-5" />
                    Start Speaking
                  </Button>
                )}
                
                {isRecording && (
                  <Button variant="destructive" size="xl" className="w-full shadow-lg" onClick={stopRecording}>
                    <Square className="mr-2 h-5 w-5 fill-current" />
                    Stop Recording
                  </Button>
                )}
                
                {/* Disabled state during analysis */}
                {isAnalyzing && (
                   <Button disabled variant="outline" size="xl" className="w-full">
                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                     Processing...
                   </Button>
                )}
              </div>
            </div>

            {/* Analysis Results */}
            <div 
              className={`transition-all duration-300 ${
                showAnalysis ? 'translate-y-0 opacity-100 relative' : 'translate-y-full opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="space-y-8 py-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-primary" />
                    Speech Analysis
                  </h3>
                  <Button variant="ghost" size="sm" onClick={handleRestart} className="text-muted-foreground hover:text-foreground">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                </div>

                {/* Audio Player */}
                {audioUrl && (
                  <div className="rounded-xl bg-white/5 p-4 border border-white/10 flex justify-center">
                    <audio controls src={audioUrl} className="w-full max-w-md h-10" />
                  </div>
                )}

                {/* Heatmap/Counts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4 text-rose-400">
                      <AlertTriangle className="h-5 w-5" />
                      <span className="font-semibold uppercase tracking-wider text-xs">Fillers Detected</span>
                    </div>
                    {fillers.length === 0 ? (
                      <div className="text-emerald-400 font-medium">Perfect! No fillers detected.</div>
                    ) : (
                      <div className="space-y-3">
                        {fillers.map((f, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3 border border-white/5">
                            <span className="font-medium text-foreground capitalize">"{f.word}"</span>
                            <span className="bg-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-xs font-bold">
                              {f.count}x
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
                    <div className="flex items-center gap-2 mb-4 text-primary">
                      <Trophy className="h-5 w-5" />
                      <span className="font-semibold uppercase tracking-wider text-xs">Performance</span>
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2">{score}%</div>
                    <p className="text-sm text-muted-foreground">
                      {score === 100 ? "Flawless delivery! Your speech was incredibly clean." : 
                       score > 80 ? "Great job! Minor fillers detected but overall very clear." :
                       "Keep practicing! Reducing fillers will make you sound more confident."}
                    </p>
                  </div>
                </div>

                {/* Transcript Reveal */}
                <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                   <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center">
                     <span className="text-sm font-bold uppercase tracking-widest opacity-50">Full Transcript</span>
                   </div>
                   <div className="p-6 max-h-[300px] overflow-y-auto custom-scrollbar">
                     <p className="text-lg leading-relaxed text-foreground/90 whitespace-pre-wrap">
                        {finalTranscript || "No speech captured."}
                     </p>
                   </div>
                </div>

                <div className="flex justify-center pt-4">
                  <Button variant="hero" size="lg" onClick={handleRestart} className="rounded-full px-8 shadow-glow">
                    Next Topic
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Guide */}
          <div className={`mt-8 transition-opacity duration-500 ${isRecording ? 'opacity-0' : 'opacity-100'}`}>
            <div className="rounded-2xl glass p-6 border border-white/10">
              <h3 className="mb-4 font-display text-lg text-foreground flex items-center gap-2">
                <ChevronUp className="h-5 w-5 text-primary" />
                Target Filler Words
              </h3>
              <div className="flex flex-wrap gap-2">
                {["um", "uh", "like", "you know", "so"].map((word) => (
                  <span key={word} className="rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-muted-foreground font-medium">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}
