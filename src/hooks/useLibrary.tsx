import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";
import { useSubscription } from "./useSubscription";
import {
    ExerciseContent,
    ExerciseOverride,
    WordDetails,
    SupportedLanguage,
    ExerciseMaster
} from "@/data/types";
import { precisionSwapMaster } from "@/data/exercises/precisionSwap.master";
import { fillerWordEliminatorMaster } from "@/data/exercises/fillerWordEliminator.master";
import { reverseDefinitionsMaster } from "@/data/exercises/reverseDefinitions.master";
import { synonymSpeedChainMaster } from "@/data/exercises/synonymSpeedChain.master";
import { wordIncorporationMaster } from "@/data/exercises/wordIncorporation.master";
import { WORD_DEFINITIONS } from "@/data/wordDefinitions";

const MASTER_DATA: Record<string, ExerciseMaster<any>> = {
    "precision-swap": precisionSwapMaster,
    "filler-word-eliminator": fillerWordEliminatorMaster,
    "reverse-definitions": reverseDefinitionsMaster,
    "synonym-speed-chain": synonymSpeedChainMaster,
    "word-incorporation": wordIncorporationMaster,
};

export function useLibrary() {
    const { user } = useAuth();
    const { isPremium, isAdmin } = useSubscription();
    const [loading, setLoading] = useState(false);

    const getMergerExerciseContent = useCallback(async (exerciseId: string, language: SupportedLanguage): Promise<any> => {
        const master = MASTER_DATA[exerciseId];
        if (!master) throw new Error("Exercise not found");

        const masterContent = master.content.multilingual[language];
        if (!masterContent) return null;

        try {
            // Fetch overrides from Supabase
            const { data: overrides, error } = await supabase
                .from("exercise_overrides" as any)
                .select("*")
                .eq("exercise_id", exerciseId)
                .or(`user_id.is.null,user_id.eq.${user?.id || '00000000-0000-0000-0000-000000000000'}`);

            if (error) {
                console.warn("Could not fetch overrides from Supabase (is the migration applied?). Using master only.", error);
                return masterContent;
            }

            const globalOverride = overrides?.find(o => o.user_id === null);
            const userOverride = overrides?.find(o => o.user_id === user?.id);

            // Merge strategy: User > Global > Master
            let merged = { ...masterContent };
            if (globalOverride?.content?.[language]) {
                merged = { ...merged, ...globalOverride.content[language] };
            }
            if (userOverride?.content?.[language]) {
                merged = { ...merged, ...userOverride.content[language] };
            }

            return merged;
        } catch (e) {
            console.error("Critical merge error:", e);
            return masterContent;
        }
    }, [user]);

    const updateExercise = async (exerciseId: string, language: SupportedLanguage, updatedLanguageContent: any, targetIsGlobal: boolean) => {
        if (!user) throw new Error("Authentication required. Please sign in to save changes.");
        if (targetIsGlobal && !isAdmin) throw new Error("Unauthorized. Only administrators can modify global standard content.");
        if (!targetIsGlobal && !isPremium) throw new Error("Premium required. Please upgrade your plan to save personal content overrides.");

        setLoading(true);
        try {
            const userId = targetIsGlobal ? null : user.id;

            // 1. Fetch existing override for this SPECIFIC exercise and user
            // We store all language overrides in one JSON object per (user, exercise) pair
            const { data: existing, error: fetchError } = await supabase
                .from("exercise_overrides" as any)
                .select("*")
                .eq("exercise_id", exerciseId)
                .filter("user_id", userId === null ? "is" : "eq", userId)
                .maybeSingle();

            if (fetchError) {
                console.error("Fetch error during update:", fetchError);
                throw new Error(`Failed to check existing overrides: ${fetchError.message}`);
            }

            const newContent = existing?.content || {};
            newContent[language] = updatedLanguageContent;

            // 2. Upsert the merged content
            // The table should have a UNIQUE constraint on (user_id, exercise_id) or a primary key that includes both.
            // If targetIsGlobal is true, user_id is null.
            const upsertData: any = {
                exercise_id: exerciseId,
                content: newContent,
                updated_at: new Date().toISOString()
            };

            if (userId !== null) {
                upsertData.user_id = userId;
            } else {
                upsertData.user_id = null; // Explicitly set null for global
            }

            const { error: upsertError } = await supabase
                .from("exercise_overrides" as any)
                .upsert(upsertData, {
                    onConflict: 'user_id,exercise_id' // This is the most logical constraint
                });

            if (upsertError) {
                console.error("Upsert error:", upsertError);
                throw new Error(`Failed to save changes: ${upsertError.message}`);
            }
        } catch (err: any) {
            console.error("Save failed:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const resetExercise = async (exerciseId: string, targetIsGlobal: boolean) => {
        if (!user) throw new Error("Authentication required.");
        if (targetIsGlobal && !isAdmin) throw new Error("Admin required for global changes.");

        setLoading(true);
        try {
            const userId = targetIsGlobal ? null : user.id;
            const query = supabase
                .from("exercise_overrides" as any)
                .delete()
                .eq("exercise_id", exerciseId);

            if (targetIsGlobal) {
                query.is("user_id", null);
            } else {
                query.eq("user_id", userId);
            }

            const { error } = await query;
            if (error) throw new Error(`Reset failed: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const getWordDetails = async (word: string, language: string): Promise<WordDetails | null> => {
        const lowerWord = word.toLowerCase().trim();
        const lowerLang = language.toLowerCase();

        // 1. Try local dictionary first (New source of truth)
        const localEntry = (WORD_DEFINITIONS as any)[lowerLang]?.[lowerWord];
        if (localEntry) {
            return {
                id: `local-${lowerWord}-${lowerLang}`,
                word: lowerWord,
                language: lowerLang,
                definition: localEntry.definition,
                example: localEntry.example,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            } as WordDetails;
        }

        // 2. Fallback to Supabase
        try {
            const { data, error } = await supabase
                .from("word_details" as any)
                .select("*")
                .eq("word", lowerWord)
                .eq("language", lowerLang)
                .maybeSingle();

            if (data) return data as WordDetails;
        } catch (e) {
            console.warn("Supabase word_details fetch failed, no local entry found either.", e);
        }

        return null;
    };

    const saveWordDetails = async (wordDetails: Partial<WordDetails>) => {
        if (!isAdmin) throw new Error("Admin required to update dictionary.");
        const { error } = await supabase
            .from("word_details" as any)
            .upsert({
                ...wordDetails,
                word: wordDetails.word?.toLowerCase().trim(),
                updated_at: new Date().toISOString()
            });
        if (error) throw new Error(`Failed to save word details: ${error.message}`);
    };

    return {
        loading,
        getMergerExerciseContent,
        updateExercise,
        resetExercise,
        getWordDetails,
        saveWordDetails,
        isPremium,
        isAdmin
    };
}
