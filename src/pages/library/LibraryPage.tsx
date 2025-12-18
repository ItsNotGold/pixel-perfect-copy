import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Target,
    MessageCircle,
    BookOpen,
    Link as LinkIcon,
    Mic,
    ArrowLeft
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";

const libraryExercises = [
    { id: "filler-word-eliminator", title: "Filler Word Eliminator", icon: MessageCircle, description: "Master the art of speaking without fillers." },
    { id: "precision-swap", title: "Precision Swap", icon: Target, description: "Elevate your vocabulary with precise word choices." },
    { id: "reverse-definitions", title: "Reverse Definitions", icon: BookOpen, description: "Build vocabulary by identifying words from definitions." },
    { id: "synonym-speed-chain", title: "Synonym Speed Chain", icon: LinkIcon, description: "Quickly identify synonyms to broaden your lexicon." },
    { id: "word-incorporation", title: "Word Incorporation", icon: Mic, description: "Practice weaving complex words into natural speech." },
];

export default function LibraryPage() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto py-12 px-4 max-w-6xl">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <h1 className="text-4xl font-bold tracking-tight">Content Library</h1>
                </div>
                <LanguageSelector />
            </div>

            <p className="text-muted-foreground mb-12 max-w-2xl text-lg">
                Explore all available communication exercises. Browse full content,
                inspect question details, and understand precise word usage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {libraryExercises.map((exercise) => (
                    <Card
                        key={exercise.id}
                        className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 relative overflow-hidden"
                        onClick={() => navigate(`/library/${exercise.id}`)}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <exercise.icon className="w-24 h-24" />
                        </div>

                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <exercise.icon className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">{exercise.title}</CardTitle>
                            <CardDescription className="text-base line-clamp-2">
                                {exercise.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                                <span>Browse content</span>
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
