import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { useLibrary } from "@/hooks/useLibrary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Quote } from "lucide-react";

interface WordDefinitionModalProps {
    word: string | null;
    onClear: () => void;
}

export function WordDefinitionModal({ word, onClear }: WordDefinitionModalProps) {
    const { language } = useLanguage();
    const { getWordDetails } = useLibrary();

    const [details, setDetails] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        if (!word) {
            setDetails(null);
            return;
        }

        setLoading(true);
        (async () => {
            try {
                const d = await getWordDetails(word, language);
                if (mounted) setDetails(d);
            } catch (e) {
                console.error('WordDefinitionModal: failed to fetch details', e);
                if (mounted) setDetails(null);
            } finally {
                if (mounted) setLoading(false);
            }
        })();

        return () => { mounted = false; };
    }, [word, language, getWordDetails]);

    return (
        <Dialog open={!!word} onOpenChange={(open) => !open && onClear()}>
            <DialogContent className="sm:max-w-[425px] overflow-hidden">
                <DialogHeader className="pb-4">
                    <Badge variant="outline" className="w-fit mb-2 uppercase tracking-widest text-[10px] opacity-70">
                        Dictionary Definition
                    </Badge>
                    <DialogTitle className="text-3xl font-bold tracking-tight first-letter:uppercase">
                        {word}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-primary/80 uppercase tracking-wider">
                            <BookOpen className="w-4 h-4" /> Meaning
                        </div>
                        {loading ? (
                            <Skeleton className="h-6 w-full" />
                        ) : details ? (
                            <div>
                                {/* Show first definition */}
                                <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                                    {details.definition}
                                </p>

                                {/* If there are other definitions, show a short list */}
                                {!!(details && details.otherDefinitions) && (
                                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                                        {details.otherDefinitions.map((d: string, idx: number) => (
                                            <li key={idx}>{d}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <p className="text-muted-foreground italic">
                                Definition not available yet for "{word}" in {language.toUpperCase()}.
                            </p>
                        )}
                    </section>

                    <section className="space-y-3 p-4 bg-muted/50 rounded-2xl border border-muted-foreground/10">
                        <div className="flex items-center gap-2 text-sm font-bold text-primary/80 uppercase tracking-wider">
                            <Quote className="w-4 h-4" /> Example
                        </div>
                        {loading ? (
                            <Skeleton className="h-6 w-full" />
                        ) : details ? (
                            <div>
                                <p className="text-base italic leading-relaxed text-muted-foreground">"{details.example}"</p>

                                {!!(details && details.otherExamples) && (
                                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                                        {details.otherExamples.map((d: string, idx: number) => (
                                            <li key={idx}>{d}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <p className="text-muted-foreground italic text-sm">
                                No example available.
                            </p>
                        )}
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
}
