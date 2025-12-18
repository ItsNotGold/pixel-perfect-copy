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
import { resolveLocalDefinition } from "@/data/dictionary";

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

            // 1. Fetch existing override to ensure we don't wipe other languages
            const { data: existing, error: fetchError } = await supabase
                .from("exercise_overrides" as any)
                .select("*")
                .eq("exercise_id", exerciseId)
                .filter(targetIsGlobal ? "user_id" : "user_id", targetIsGlobal ? "is" : "eq", userId)
                .maybeSingle();

            if (fetchError) {
                throw new Error(`Failed to check existing overrides: ${fetchError.message}. Ensure the 'exercise_overrides' table exists.`);
            }

            const newContent = existing?.content || {};
            newContent[language] = updatedLanguageContent;

            // 2. Upsert the merged content
            const { error: upsertError } = await supabase
                .from("exercise_overrides" as any)
                .upsert({
                    user_id: userId,
                    exercise_id: exerciseId,
                    content: newContent,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: targetIsGlobal ? "exercise_id" : "user_id,exercise_id"
                });

            if (upsertError) {
                throw new Error(`Supabase error: ${upsertError.message}. Check database RLS policies and table structure.`);
            }
        } catch (err: any) {
            console.error("Save failed:", err);
            throw err; // Re-throw to be handled by the UI
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
        // 1. Try Supabase first
        try {
            const { data, error } = await supabase
                .from("word_details" as any)
                .select("*")
                .eq("word", word.toLowerCase().trim())
                .eq("language", language)
                .maybeSingle();

            if (data) return data as WordDetails;
        } catch (e) {
            // Ignore Supabase error and fall back to local
        }

        // 2. Fallback to local dictionary
        return resolveLocalDefinition(word, language);
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
