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

    // Pure, synchronous O(1) lookup
    const details = word ? getWordDetails(word, language) : null;

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
                        {details ? (
                            <p className="text-lg leading-relaxed text-foreground/90 font-medium">
                                {details.definition}
                            </p>
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
                        {details ? (
                            <p className="text-base italic leading-relaxed text-muted-foreground">
                                "{details.example}"
                            </p>
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
