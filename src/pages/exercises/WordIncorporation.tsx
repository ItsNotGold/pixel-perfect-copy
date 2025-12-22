import { useState, useEffect, useCallback } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInvisibleTranscription } from "@/contexts/TranscriptionContext";
import { ExerciseGate } from "@/components/ExerciseGate";
import { Feather, Mic, Square, RotateCcw, Trophy, Sparkles, Loader2, CheckCircle, XCircle, Clock } from "lucide-react";
import { wordIncorporationMaster } from "@/data/exercises/wordIncorporation.master";
import { useAuth } from "@/hooks/useAuth";
import { useProgress } from "@/hooks/useProgress";
import { Progress } from "@/components/ui/progress";

export default function WordIncorporation() {
  const { language, speechLanguageCode } = useLanguage();
  const { transcript, words, isRecording, startRecording, stopRecording } = useInvisibleTranscription();
  
  const [currentPrompt, setCurrentPrompt] = useState<{ prompt: string; words: string[] } | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [wordDisplayTime, setWordDisplayTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { user } = useAuth();
  const { saveAttempt } = useProgress();

  const pickNewPrompt = useCallback(() => {
    const content = wordIncorporationMaster.content.multilingual[language] || wordIncorporationMaster.content.multilingual.en;
    const prompts = content.prompts;
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setCurrentPrompt(randomPrompt);
  }, [language]);

  useEffect(() => {
    pickNewPrompt();
  }, [language, pickNewPrompt]);

  const showNextWord = useCallback(() => {
    if (!currentPrompt) return;
    setCurrentWordIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex < currentPrompt.words.length) {
        setWordDisplayTime(6);
        return nextIndex;
      }
      return prev;
    });
  }, [currentPrompt]);

  const handleStart = async () => {
    setShowResults(false);
    setTimeLeft(30);
    setCurrentWordIndex(-1);
    await startRecording(speechLanguageCode);
    setTimeout(() => {
      setCurrentWordIndex(0);
      setWordDisplayTime(6);
    }, 2000); // 2s lead-in
  };

  const handleStop = useCallback(() => {
    stopRecording();
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 1500);
  }, [stopRecording]);

  const checkWordUsage = useCallback((transcript: string, targets: string[]) => {
    const lowerTranscript = transcript.toLowerCase();
    return targets.map(word => {
      const regex = new RegExp(`\\b${word.toLowerCase()}(s|ing|ed|ly)?\\b`, 'i');
      return {
        word,
        used: regex.test(lowerTranscript)
      };
    });
  }, []);

  const handleSave = useCallback(async () => {
    if (user && transcript && currentPrompt) {
      const results = checkWordUsage(transcript, currentPrompt.words);
      const usedCount = results.filter(r => r.used).length;
      const score = Math.round((usedCount / currentPrompt.words.length) * 100);
      
      await saveAttempt({
        exerciseId: "word-incorporation",
        score,
        maxScore: 100,
        answers: { 
          transcript, 
          targetWords: currentPrompt.words,
          wordsUsed: results.filter(r => r.used).map(r => r.word),
          wordsMissed: results.filter(r => !r.used).map(r => r.word)
        }
      });
    }
  }, [user, transcript, currentPrompt, checkWordUsage, saveAttempt]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRecording && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
        setWordDisplayTime(prev => {
           if (prev <= 1 && currentWordIndex < (currentPrompt?.words.length || 0) - 1) {
              showNextWord();
              return 6;
           }
           return Math.max(0, prev - 1);
        });
      }, 1000);
    } else if (timeLeft === 0 && isRecording) {
      handleStop();
    }
    return () => clearInterval(timer);
  }, [isRecording, timeLeft, currentWordIndex, currentPrompt, showNextWord, handleStop]);

  useEffect(() => {
    if (!isRecording && transcript && !isAnalyzing) {
       handleSave();
    }
  }, [isRecording, transcript, isAnalyzing, handleSave]);

  const usageResults = currentPrompt ? checkWordUsage(transcript, currentPrompt.words) : [];
  const score = currentPrompt ? Math.round((usageResults.filter(r => r.used).length / currentPrompt.words.length) * 100) : 0;

  return (
    <MainLayout>
      <ExerciseGate exerciseId="word-incorporation">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8 text-center animate-fade-in">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
              <Feather className="h-7 w-7 text-primary-foreground" />
            </div>
            <h1 className="mb-2 font-display text-3xl text-foreground">Word Incorporation</h1>
            <p className="text-muted-foreground">"Master the art of lexical precision."</p>
          </div>

          <div className="rounded-2xl glass p-8 shadow-card overflow-hidden">
            {/* CLEAN RECORDING UI */}
            {(!showResults || isRecording) && (
              <div className="space-y-8 animate-in fade-in duration-500">
                {currentPrompt && (
                   <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/10">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Prompt</span>
                      <h3 className="text-xl font-medium text-foreground">{currentPrompt.prompt}</h3>
                   </div>
                )}

                <div className="flex flex-wrap justify-center gap-3">
                   {currentPrompt?.words.map((word, i) => (
                     <div 
                        key={word} 
                        className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
                          currentWordIndex === i 
                          ? "bg-primary text-primary-foreground border-primary scale-110 shadow-glow" 
                          : "bg-muted/50 text-muted-foreground border-border/50"
                        }`}
                      >
                        {word}
                      </div>
                   ))}
                </div>

                <div className="text-center">
                  <div className="max-w-xs mx-auto mb-6">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                       <span className={timeLeft <= 5 ? "text-destructive" : "text-muted-foreground"}>Session Time</span>
                       <span className="text-primary">{timeLeft}s</span>
                    </div>
                    <Progress value={(timeLeft / 30) * 100} className="h-2" />
                  </div>

                  {isRecording && currentWordIndex >= 0 && (
                    <div className="animate-in fade-in zoom-in duration-500 text-center mb-8">
                      <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">Active Word</div>
                      <div className="text-5xl font-black text-foreground mb-4 drop-shadow-xl">
                        {currentPrompt?.words[currentWordIndex]}
                      </div>
                      <div className="flex items-center justify-center gap-2 text-xs font-bold bg-white/5 py-2 px-4 rounded-full mx-auto w-fit">
                        <Clock className="h-4 w-4 text-primary" />
                        Next in: <span className="text-primary tabular-nums">{wordDisplayTime}s</span>
                      </div>
                    </div>
                  )}

                  {!isRecording && !isAnalyzing && !transcript && (
                    <Button onClick={handleStart} size="xl" variant="hero" className="shadow-glow group px-10">
                      <Mic className="mr-3 h-5 w-5 group-hover:scale-125 transition-transform" />
                      Begin Exercise
                    </Button>
                  )}

                  {isRecording && (
                    <div className="space-y-4">
                      <Button onClick={handleStop} size="xl" variant="destructive" className="shadow-lg px-10">
                        <Square className="mr-3 h-5 w-5" />
                        Finish Early
                      </Button>
                      <p className="text-xs font-bold text-destructive uppercase tracking-widest animate-pulse">
                        Invisible STT Listening...
                      </p>
                    </div>
                  )}

                  {isAnalyzing && (
                    <div className="py-10">
                      <Loader2 className="h-10 w-10 text-primary animate-spin mx-auto mb-4" />
                      <p className="font-medium">Validating word incorporation...</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* REVEAL + ANALYSIS */}
            {!isRecording && !isAnalyzing && transcript && (
              <div className="animate-in slide-in-from-bottom-5 duration-500">
                {!showResults ? (
                  <div className="text-center py-10">
                    <div className="mb-6 p-8 rounded-full bg-primary/10 w-fit mx-auto border-2 border-primary/20 animate-pulse">
                      <Sparkles className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Recording Captured</h3>
                    <p className="text-muted-foreground mb-8">Click below to check your lexical accuracy.</p>
                    <Button onClick={() => setShowResults(true)} size="xl" variant="accent" className="shadow-glow px-12 py-8 rounded-2xl group">
                       <CheckCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-all" />
                       View Results
                    </Button>
                  </div>
                ) : (
                  <div className="transcript-reveal open space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       <div className="bg-primary/10 p-6 rounded-2xl text-center border border-primary/20">
                          <Trophy className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-3xl font-black">{score}%</div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Final Score</div>
                       </div>
                       <div className="bg-emerald-500/10 p-6 rounded-2xl text-center border border-emerald-500/20 md:col-span-2 flex flex-col justify-center">
                          <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">Words Incorporated</div>
                          <div className="flex flex-wrap justify-center gap-2">
                             {usageResults.map(({word, used}) => (
                               <div key={word} className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                                  used ? "bg-emerald-500 text-white border-emerald-400" : "bg-muted text-muted-foreground border-border/50 opacity-40"
                               }`}>
                                 {used ? "✅" : "❌"} {word}
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>

                    <div className="p-6 bg-muted/30 rounded-2xl border border-border/50">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Speech Transcript</h4>
                       <p className="text-lg leading-relaxed text-foreground">
                         {transcript.split(' ').map((word, i) => {
                           const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
                           const isTarget = currentPrompt?.words.some(t => {
                             const lowerT = t.toLowerCase();
                             return cleanWord === lowerT || cleanWord.includes(lowerT);
                           });
                           return (
                             <span key={i} className={isTarget ? "bg-primary/20 px-1 rounded font-bold text-primary" : ""}>
                               {word}{' '}
                             </span>
                           );
                         })}
                       </p>
                    </div>

                    <Button onClick={handleStart} variant="hero" className="w-full py-8 text-lg rounded-2xl shadow-lg">
                      <RotateCcw className="mr-3 h-5 w-5" />
                      Try New Words
                    </Button>
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