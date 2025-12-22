import { useState, useEffect, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInvisibleTranscription } from "@/hooks/useInvisibleTranscription";
import { ExerciseGate } from "@/components/ExerciseGate";
import { MessageCircle, Mic, Square, RotateCcw, Trophy, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { fillerWordEliminatorMaster } from "@/data/exercises/fillerWordEliminator.master";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { supabase } from "@/integrations/supabase/client";

const FillerAnalysis = ({ transcript, words }: { transcript: string; words: any[] }) => {
  const fillers = ['um', 'uh', 'like', 'you know', 'so'];
  const lowerTranscript = transcript.toLowerCase();
  
  const fillerDetails = fillers.map(filler => {
    const regex = new RegExp(`\\b${filler}\\b`, 'gi');
    const count = (lowerTranscript.match(regex) || []).length;
    return { filler, count };
  }).filter(f => f.count > 0);

  const totalFillers = fillerDetails.reduce((sum, f) => sum + f.count, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-rose-500 font-semibold">
        <AlertCircle className="h-5 w-5" />
        <h4>Total Fillers Detected: {totalFillers}</h4>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {fillerDetails.map(({ filler, count }) => (
          <span key={filler} className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
             "{filler}" × {count}
          </span>
        ))}
      </div>

      <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
        <h5 className="text-sm font-bold mb-2 uppercase tracking-wider text-muted-foreground">Detailed Transcript:</h5>
        <p className="text-foreground leading-relaxed">
          {transcript.split(' ').map((word, i) => {
            const isFiller = fillers.includes(word.toLowerCase().replace(/[^a-z]/g, ''));
            return (
              <span key={i} className={isFiller ? "bg-rose-200 dark:bg-rose-900/50 px-0.5 rounded" : ""}>
                {word}{' '}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default function FillerWordEliminator() {
  const { language, speechLanguageCode } = useLanguage();
  const { transcript, words, isRecording, startRecording, stopRecording } = useInvisibleTranscription();
  const [showTranscript, setShowTranscript] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  const content = fillerWordEliminatorMaster.content.multilingual[language] || fillerWordEliminatorMaster.content.multilingual.en;

  const pickNewTopic = useCallback(() => {
    const topics = content.topics;
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    setCurrentTopic(randomTopic);
  }, [content.topics]);

  useEffect(() => {
    pickNewTopic();
  }, [language, pickNewTopic]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && isRecording) {
      handleStop();
    }
    return () => clearInterval(timer);
  }, [isRecording, timeLeft]);

  const handleStart = async () => {
    setShowTranscript(false);
    setTimeLeft(60);
    await startRecording(speechLanguageCode);
  };

  const handleStop = useCallback(() => {
    stopRecording();
    setIsAnalyzing(true);
    // Simulate deep analysis delay
    setTimeout(() => setIsAnalyzing(false), 1500);
  }, [stopRecording]);

  const handleSave = useCallback(async () => {
     if (user && transcript) {
       const fillers = ['um', 'uh', 'like', 'you know', 'so'];
       const total = fillers.reduce((sum, f) => sum + (transcript.toLowerCase().match(new RegExp(`\\b${f}\\b`, 'gi')) || []).length, 0);
       const score = Math.max(0, 100 - total * 10);
       
       await saveAttempt({
         exerciseId: "filler-word-eliminator",
         score,
         maxScore: 100,
         answers: { transcript, totalFillers: total }
       });
     }
  }, [user, transcript, saveAttempt]);

  useEffect(() => {
    if (!isRecording && transcript && !isAnalyzing) {
       handleSave();
    }
  }, [isRecording, transcript, isAnalyzing]);

  return (
    <MainLayout>
      <ExerciseGate exerciseId="filler-word-eliminator">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg">
              <MessageCircle className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Filler Word Eliminator</h1>
            <p className="text-muted-foreground italic">"Clear speech is confident speech."</p>
          </div>

          <div className="rounded-2xl glass p-8 shadow-card overflow-hidden">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 block">Current Topic</span>
              <h2 className="text-2xl font-semibold text-foreground bg-muted/30 py-4 px-6 rounded-xl inline-block border border-border/50">
                {currentTopic}
              </h2>
            </div>

            <div className="flex justify-center flex-col items-center gap-6 mb-8">
               <div className={`text-6xl font-black tabular-nums transition-colors duration-500 ${timeLeft <= 10 ? "text-destructive" : "text-primary"}`}>
                  {timeLeft}s
               </div>
               
               {isRecording && (
                 <div className="flex flex-col items-center gap-2 animate-pulse">
                   <div className="h-3 w-3 rounded-full bg-destructive shadow-[0_0_10px_rgba(255,0,0,0.5)]" />
                   <span className="text-xs font-bold text-destructive uppercase tracking-widest">Recording Active</span>
                 </div>
               )}
            </div>

            {/* RECORDING UI - NO TRANSCRIPT */}
            {!transcript && !isRecording && !isAnalyzing && (
              <div className="text-center">
                <Button onClick={handleStart} size="xl" variant="hero" className="w-full sm:w-auto shadow-glow group">
                  <Mic className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Speaking
                </Button>
              </div>
            )}

            {isRecording && (
              <div className="text-center">
                <Button onClick={handleStop} size="xl" variant="destructive" className="w-full sm:w-auto shadow-lg">
                  <Square className="mr-2 h-5 w-5" />
                  Stop & Analyze
                </Button>
                <p className="mt-4 text-sm text-muted-foreground animate-pulse">
                  Background transcription active. Speak naturally...
                </p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-10">
                <Loader2 className="h-10 w-10 text-primary animate-spin mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Processing your speech patterns...</p>
              </div>
            )}

            {/* POST-RECORDING ANALYSIS REVEAL */}
            {!isRecording && !isAnalyzing && transcript && (
              <div className="space-y-6">
                {!showTranscript ? (
                  <div className="text-center py-6 animate-slide-up">
                    <Button onClick={() => setShowTranscript(true)} size="xl" variant="accent" className="shadow-lg group">
                      <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Reveal My Analysis
                    </Button>
                  </div>
                ) : (
                  <div className={`transcript-reveal open space-y-8`}>
                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 shadow-inner">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Trophy className="h-6 w-6 text-primary" />
                        Analysis Results
                      </h3>
                      <FillerAnalysis transcript={transcript} words={words} />
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={handleStart} variant="outline" className="flex-1 py-6">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Try Another Topic
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </ExerciseGate>
    </MainLayout>
  );
}
