import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLibrary } from "@/hooks/useLibrary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ArrowLeft,
    Plus,
    RotateCcw,
    Edit2,
    ChevronRight,
    Search,
    Globe
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";

const EXERCISE_TITLES: Record<string, string> = {
    "filler-word-eliminator": "Filler Word Eliminator",
    "precision-swap": "Precision Swap",
    "reverse-definitions": "Reverse Definitions",
    "synonym-speed-chain": "Synonym Speed Chain",
    "word-incorporation": "Word Incorporation",
};

export default function ExerciseContentPage() {
    const { exerciseId } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { getMergerExerciseContent, resetExercise, isPremium, isAdmin } = useLibrary();
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    const loadContent = async () => {
        if (!exerciseId) return;
        setLoading(true);
        try {
            const data = await getMergerExerciseContent(exerciseId, language);
            setContent(data);
        } catch (error) {
            console.error("Failed to load content:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadContent();
    }, [exerciseId, language, getMergerExerciseContent]);

    const handleReset = async (isGlobal: boolean) => {
        if (!exerciseId) return;
        try {
            await resetExercise(exerciseId, isGlobal);
            loadContent();
        } catch (error) {
            console.error("Reset failed:", error);
        }
    };

    const getItems = () => {
        if (!content) return [];
        if (exerciseId === "filler-word-eliminator") return content.topics.map((t: string, i: number) => ({ id: `topic-${i}`, preview: t }));
        if (exerciseId === "precision-swap") return content.questions.map((q: any) => ({ id: q.id, preview: q.sentence }));
        if (exerciseId === "reverse-definitions") return content.questions.map((q: any) => ({ id: q.id, preview: q.definition }));
        if (exerciseId === "synonym-speed-chain") return content.challenges.map((c: any) => ({ id: c.id, preview: c.word }));
        if (exerciseId === "word-incorporation") return content.prompts.map((p: any, i: number) => ({ id: `prompt-${i}`, preview: p.prompt }));
        return [];
    };

    const items = getItems();
    const filteredItems = items.filter(item =>
        item.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-center justify-between">
                    <Button variant="ghost" className="gap-2" onClick={() => navigate("/library")}>
                        <ArrowLeft className="w-4 h-4" /> Back to Library
                    </Button>

                    <div className="flex gap-2">
                        {(isPremium || isAdmin) && (
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="gap-2 text-destructive hover:text-destructive">
                                        <RotateCcw className="w-4 h-4" /> Reset
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Reset Exercise to Standard?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This will delete your custom modifications for this exercise and revert to the standard version. This action cannot be undone.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        {isAdmin && (
                                            <AlertDialogAction onClick={() => handleReset(true)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                                Reset Global Standard
                                            </AlertDialogAction>
                                        )}
                                        <AlertDialogAction onClick={() => handleReset(false)}>
                                            Reset My Overrides
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        )}
                        {(isPremium || isAdmin) && (
                            <Button size="sm" className="gap-2">
                                <Plus className="w-4 h-4" /> Add Question
                            </Button>
                        )}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold">{EXERCISE_TITLES[exerciseId || ""] || "Exercise"}</h1>
                        <Badge variant="secondary" className="gap-1.5 uppercase text-[10px] tracking-wider font-bold">
                            <Globe className="w-3 h-3" /> {language}
                        </Badge>
                    </div>
                    <p className="text-muted-foreground text-lg">
                        {content?.instructions?.intro || "Browse and manage the full content list for this exercise."}
                    </p>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search questions or keywords..."
                        className="pl-10 h-11 text-base shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="space-y-3">
                {loading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-20 w-full rounded-xl" />
                    ))
                ) : filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <Card
                            key={item.id}
                            className="group cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                            onClick={() => navigate(`/library/${exerciseId}/${item.id}`)}
                        >
                            <CardContent className="p-4 flex items-center justify-between">
                                <div className="flex flex-col gap-1 min-w-0">
                                    <span className="text-[10px] font-bold text-muted-foreground border border-muted-foreground/20 w-fit px-1.5 rounded uppercase tracking-tighter">
                                        {item.id}
                                    </span>
                                    <p className="text-base font-medium truncate pr-4">
                                        {item.preview}
                                    </p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div className="text-center py-20 border-2 border-dashed rounded-3xl">
                        <p className="text-muted-foreground">No questions found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
