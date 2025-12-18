import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLibrary } from "@/hooks/useLibrary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ArrowLeft,
    Edit3,
    Save,
    CheckCircle2,
    X,
    Target,
    MessageCircle,
    BookOpen,
    Mic
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WordDefinitionModal } from "@/components/library/WordDefinitionModal";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function QuestionDetailPage() {
    const { exerciseId, questionId } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { getMergerExerciseContent, updateExercise, isPremium, isAdmin } = useLibrary();

    const [content, setContent] = useState<any>(null);
    const [question, setQuestion] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [selectedWord, setSelectedWord] = useState<string | null>(null);
    const [editedQuestion, setEditedQuestion] = useState<any>(null);

    const loadData = async () => {
        if (!exerciseId || !questionId) return;
        setLoading(true);
        try {
            const data = await getMergerExerciseContent(exerciseId, language);
            if (!data) {
                setContent(null);
                setQuestion(null);
                return;
            }
            setContent(data);

            let found: any = null;
            if (exerciseId === "filler-word-eliminator") {
                const index = parseInt(questionId.split("-")[1]);
                found = data.topics?.[index] ? { prompt: data.topics[index], id: questionId } : null;
            } else if (exerciseId === "precision-swap") {
                found = data.questions?.find((q: any) => q.id === questionId);
            } else if (exerciseId === "reverse-definitions") {
                found = data.questions?.find((q: any) => q.id === questionId);
            } else if (exerciseId === "synonym-speed-chain") {
                found = data.challenges?.find((c: any) => c.id === questionId);
            } else if (exerciseId === "word-incorporation") {
                const index = parseInt(questionId.split("-")[1]);
                found = data.prompts?.[index] ? { ...data.prompts[index], id: questionId } : null;
            }

            setQuestion(found);
            setEditedQuestion(found ? JSON.parse(JSON.stringify(found)) : null);
        } catch (error) {
            console.error("Failed to load question details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [exerciseId, questionId, language, getMergerExerciseContent]);

    const handleSave = async (isGlobal: boolean) => {
        if (!exerciseId || !content) return;
        try {
            const newContent = { ...content };

            if (exerciseId === "filler-word-eliminator") {
                const index = parseInt(questionId!.split("-")[1]);
                newContent.topics[index] = editedQuestion.prompt;
            } else if (exerciseId === "precision-swap") {
                const index = newContent.questions.findIndex((q: any) => q.id === questionId);
                newContent.questions[index] = editedQuestion;
            } else if (exerciseId === "reverse-definitions") {
                const index = newContent.questions.findIndex((q: any) => q.id === questionId);
                newContent.questions[index] = editedQuestion;
            } else if (exerciseId === "synonym-speed-chain") {
                const index = newContent.challenges.findIndex((c: any) => c.id === questionId);
                newContent.challenges[index] = editedQuestion;
            } else if (exerciseId === "word-incorporation") {
                const index = parseInt(questionId!.split("-")[1]);
                newContent.prompts[index] = { prompt: editedQuestion.prompt, words: editedQuestion.words };
            }

            await updateExercise(exerciseId, language, newContent, isGlobal);
            toast.success("Changes saved successfully");
            setEditMode(false);
            loadData();
        } catch (error: any) {
            toast.error(error.message || "Failed to save changes");
        }
    };

    const renderContent = () => {
        if (loading) return (
            <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} className="h-20 w-full rounded-xl" />)}
            </div>
        );
        if (!question) return (
            <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed">
                <p className="text-muted-foreground">Content not found for this language ({language.toUpperCase()}).</p>
                <Button variant="link" onClick={() => navigate(`/library/${exerciseId}`)}>Back to List</Button>
            </div>
        );

        switch (exerciseId) {
            case "precision-swap":
                return renderPrecisionSwap();
            case "reverse-definitions":
                return renderReverseDefinitions();
            case "synonym-speed-chain":
                return renderSynonymSpeedChain();
            case "filler-word-eliminator":
                return renderFillerWordEliminator();
            case "word-incorporation":
                return renderWordIncorporation();
            default:
                return <div>Unsupported exercise type</div>;
        }
    };

    const renderPrecisionSwap = () => (
        <div className="space-y-8">
            <Card className="border-2 border-primary/10">
                <CardHeader>
                    <CardTitle className="text-xl text-primary/80 uppercase tracking-wider flex items-center gap-2">
                        <Target className="w-5 h-5" /> Sentence
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {editMode ? (
                        <Textarea
                            value={editedQuestion.sentence}
                            onChange={(e) => setEditedQuestion({ ...editedQuestion, sentence: e.target.value })}
                            className="text-lg min-h-[100px]"
                        />
                    ) : (
                        <p className="text-2xl font-medium leading-relaxed">
                            {question.sentence}
                        </p>
                    )}
                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-sm font-bold text-muted-foreground uppercase">Target Word:</span>
                        {editMode ? (
                            <Input
                                value={editedQuestion.targetWord}
                                onChange={(e) => setEditedQuestion({ ...editedQuestion, targetWord: e.target.value })}
                                className="w-40"
                            />
                        ) : (
                            <Badge variant="outline" className="text-lg px-3 py-1 border-primary/30 text-primary">{question.targetWord}</Badge>
                        )}
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(editMode ? editedQuestion.options : question.options).map((opt: any, idx: number) => (
                    <Card
                        key={idx}
                        className={`cursor-pointer transition-all border-2 ${!editMode && opt.word === question.bestAnswer
                            ? "bg-primary/5 border-primary/50 shadow-md ring-1 ring-primary/20"
                            : "hover:bg-accent border-transparent"
                            }`}
                        onClick={() => !editMode && setSelectedWord(opt.word)}
                    >
                        <CardContent className="p-4 flex items-center justify-between">
                            <div className="flex flex-col gap-2 w-full">
                                {editMode ? (
                                    <div className="space-y-2">
                                        <Input
                                            value={opt.word}
                                            onChange={(e) => {
                                                const newOptions = [...editedQuestion.options];
                                                newOptions[idx].word = e.target.value;
                                                setEditedQuestion({ ...editedQuestion, options: newOptions });
                                            }}
                                            className="font-bold"
                                        />
                                        <Input
                                            value={opt.feedback}
                                            onChange={(e) => {
                                                const newOptions = [...editedQuestion.options];
                                                newOptions[idx].feedback = e.target.value;
                                                setEditedQuestion({ ...editedQuestion, options: newOptions });
                                            }}
                                            placeholder="Feedback"
                                        />
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold">{opt.word}</span>
                                            {opt.word === question.bestAnswer && (
                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground italic">"{opt.feedback}"</p>
                                    </>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );

    const renderReverseDefinitions = () => (
        <div className="space-y-6">
            <Card className="border-2 border-primary/10">
                <CardHeader>
                    <CardTitle className="text-xl text-primary/80 uppercase tracking-wider flex items-center gap-2">
                        <BookOpen className="w-5 h-5" /> Definition
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {editMode ? (
                        <Textarea
                            value={editedQuestion.definition}
                            onChange={(e) => setEditedQuestion({ ...editedQuestion, definition: e.target.value })}
                            className="text-lg min-h-[100px]"
                        />
                    ) : (
                        <p className="text-2xl font-medium leading-relaxed italic text-foreground/80">
                            "{question.definition}"
                        </p>
                    )}
                </CardContent>
            </Card>

            <div className="flex flex-col items-center gap-4 py-8">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Answer</span>
                {editMode ? (
                    <Input
                        value={editedQuestion.answer}
                        onChange={(e) => setEditedQuestion({ ...editedQuestion, answer: e.target.value })}
                        className="text-3xl font-bold h-16 text-center max-w-md"
                    />
                ) : (
                    <Button
                        variant="ghost"
                        className="text-4xl font-extrabold tracking-tight h-auto p-4 hover:bg-primary/5 text-primary"
                        onClick={() => setSelectedWord(question.answer)}
                    >
                        {question.answer}
                    </Button>
                )}
            </div>
        </div>
    );

    const renderSynonymSpeedChain = () => (
        <div className="space-y-8">
            <div className="text-center py-10">
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 block">Base Word</span>
                {editMode ? (
                    <Input
                        value={editedQuestion.word}
                        onChange={(e) => setEditedQuestion({ ...editedQuestion, word: e.target.value })}
                        className="text-5xl font-extrabold text-center h-20 max-w-xl mx-auto"
                    />
                ) : (
                    <h2 className="text-6xl font-extrabold tracking-tighter text-foreground">{question.word}</h2>
                )}
            </div>

            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-2 mb-4 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        Common Synonyms
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {(editMode ? editedQuestion.commonSynonyms : question.commonSynonyms).map((s: string, i: number) => (
                            editMode ? (
                                <div key={i} className="flex gap-1">
                                    <Input
                                        value={s}
                                        onChange={(e) => {
                                            const newList = [...editedQuestion.commonSynonyms];
                                            newList[i] = e.target.value;
                                            setEditedQuestion({ ...editedQuestion, commonSynonyms: newList });
                                        }}
                                        className="w-32"
                                    />
                                    <Button variant="ghost" size="icon" onClick={() => {
                                        const newList = editedQuestion.commonSynonyms.filter((_: any, idx: number) => idx !== i);
                                        setEditedQuestion({ ...editedQuestion, commonSynonyms: newList });
                                    }}><X className="w-4 h-4" /></Button>
                                </div>
                            ) : (
                                <Badge
                                    key={i}
                                    variant="secondary"
                                    className="text-lg px-4 py-2 cursor-pointer hover:bg-secondary/70 transition-colors"
                                    onClick={() => setSelectedWord(s)}
                                >
                                    {s}
                                </Badge>
                            )
                        ))}
                        {editMode && <Button variant="outline" size="sm" onClick={() => setEditedQuestion({ ...editedQuestion, commonSynonyms: [...editedQuestion.commonSynonyms, ""] })}>Add</Button>}
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-4 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        Rare/Elegant Synonyms
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {(editMode ? editedQuestion.rareSynonyms : question.rareSynonyms).map((s: string, i: number) => (
                            editMode ? (
                                <div key={i} className="flex gap-1">
                                    <Input
                                        value={s}
                                        onChange={(e) => {
                                            const newList = [...editedQuestion.rareSynonyms];
                                            newList[i] = e.target.value;
                                            setEditedQuestion({ ...editedQuestion, rareSynonyms: newList });
                                        }}
                                        className="w-32"
                                    />
                                    <Button variant="ghost" size="icon" onClick={() => {
                                        const newList = editedQuestion.rareSynonyms.filter((_: any, idx: number) => idx !== i);
                                        setEditedQuestion({ ...editedQuestion, rareSynonyms: newList });
                                    }}><X className="w-4 h-4" /></Button>
                                </div>
                            ) : (
                                <Badge
                                    key={i}
                                    variant="default"
                                    className="text-lg px-4 py-2 cursor-pointer bg-primary/20 text-primary border-primary/20 hover:bg-primary/30 transition-colors"
                                    onClick={() => setSelectedWord(s)}
                                >
                                    {s}
                                </Badge>
                            )
                        ))}
                        {editMode && <Button variant="outline" size="sm" onClick={() => setEditedQuestion({ ...editedQuestion, rareSynonyms: [...editedQuestion.rareSynonyms, ""] })}>Add</Button>}
                    </div>
                </section>
            </div>
        </div>
    );

    const renderFillerWordEliminator = () => (
        <Card className="border-2 border-primary/10">
            <CardHeader>
                <CardTitle className="text-xl text-primary/80 uppercase tracking-wider flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" /> Speaking Prompt
                </CardTitle>
            </CardHeader>
            <CardContent>
                {editMode ? (
                    <Textarea
                        value={editedQuestion.prompt}
                        onChange={(e) => setEditedQuestion({ ...editedQuestion, prompt: e.target.value })}
                        className="text-xl min-h-[150px]"
                    />
                ) : (
                    <p className="text-3xl font-semibold leading-snug">
                        {question.prompt}
                    </p>
                )}
            </CardContent>
        </Card>
    );

    const renderWordIncorporation = () => (
        <div className="space-y-8">
            <Card className="border-2 border-primary/10">
                <CardHeader>
                    <CardTitle className="text-xl text-primary/80 uppercase tracking-wider flex items-center gap-2">
                        <Mic className="w-5 h-5" /> Prompt
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {editMode ? (
                        <Textarea
                            value={editedQuestion.prompt}
                            onChange={(e) => setEditedQuestion({ ...editedQuestion, prompt: e.target.value })}
                            className="text-xl min-h-[100px]"
                        />
                    ) : (
                        <p className="text-2xl font-medium">
                            {question.prompt}
                        </p>
                    )}
                </CardContent>
            </Card>

            <section>
                <div className="flex items-center gap-2 mb-4 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    Target Words to Incorporate
                </div>
                <div className="flex flex-wrap gap-4">
                    {(editMode ? editedQuestion.words : question.words).map((w: string, i: number) => (
                        editMode ? (
                            <div key={i} className="flex gap-1">
                                <Input
                                    value={w}
                                    onChange={(e) => {
                                        const newList = [...editedQuestion.words];
                                        newList[i] = e.target.value;
                                        setEditedQuestion({ ...editedQuestion, words: newList });
                                    }}
                                    className="w-32"
                                />
                                <Button variant="ghost" size="icon" onClick={() => {
                                    const newList = editedQuestion.words.filter((_: any, idx: number) => idx !== i);
                                    setEditedQuestion({ ...editedQuestion, words: newList });
                                }}><X className="w-4 h-4" /></Button>
                            </div>
                        ) : (
                            <Card
                                key={i}
                                className="cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all w-40 text-center"
                                onClick={() => setSelectedWord(w)}
                            >
                                <CardContent className="p-4">
                                    <span className="text-xl font-bold">{w}</span>
                                </CardContent>
                            </Card>
                        )
                    ))}
                    {editMode && <Button variant="outline" size="sm" onClick={() => setEditedQuestion({ ...editedQuestion, words: [...editedQuestion.words, ""] })}>Add</Button>}
                </div>
            </section>
        </div>
    );

    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <div className="flex items-center justify-between mb-12">
                <Button variant="ghost" className="gap-2" onClick={() => navigate(`/library/${exerciseId}`)}>
                    <ArrowLeft className="w-4 h-4" /> Back to List
                </Button>

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    {!editMode ? (
                        (isPremium || isAdmin) && question && (
                            <Button onClick={() => setEditMode(true)} className="gap-2 shadow-lg hover:shadow-primary/20">
                                <Edit3 className="w-4 h-4" /> Edit Content
                            </Button>
                        )
                    ) : (
                        <>
                            <Button variant="outline" onClick={() => {
                                setEditMode(false);
                                setEditedQuestion(JSON.parse(JSON.stringify(question)));
                            }}>
                                Cancel
                            </Button>
                            {isAdmin && (
                                <Button onClick={() => handleSave(true)} variant="secondary" className="gap-2">
                                    <Save className="w-4 h-4" /> Save Global
                                </Button>
                            )}
                            <Button onClick={() => handleSave(false)} className="gap-2">
                                <Save className="w-4 h-4" /> Save My Content
                            </Button>
                        </>
                    )}
                </div>
            </div>

            <div className="mb-10">
                <div className="flex items-center gap-3 mb-1">
                    {question?.id && (
                        <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-tighter opacity-60">
                            {question.id}
                        </Badge>
                    )}
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight">
                    {editMode ? "Editing Question" : "Question Details"}
                </h2>
            </div>

            {renderContent()}

            <WordDefinitionModal
                word={selectedWord}
                onClear={() => setSelectedWord(null)}
            />
        </div>
    );
}
