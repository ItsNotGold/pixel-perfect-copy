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

        // Fetch overrides
        const { data: overrides, error } = await supabase
            .from("exercise_overrides" as any)
            .select("*")
            .eq("exercise_id", exerciseId)
            .or(`user_id.is.null,user_id.eq.${user?.id || '00000000-0000-0000-0000-000000000000'}`);

        if (error) {
            console.error("Error fetching overrides:", error);
            return masterContent;
        }

        const globalOverride = overrides?.find(o => o.user_id === null);
        const userOverride = overrides?.find(o => o.user_id === user?.id);

        // Merge strategy: User > Global > Master
        // We expect the override to contain the full language content for that exercise
        let merged = { ...masterContent };
        if (globalOverride?.content?.[language]) {
            merged = { ...merged, ...globalOverride.content[language] };
        }
        if (userOverride?.content?.[language]) {
            merged = { ...merged, ...userOverride.content[language] };
        }

        return merged;
    }, [user]);

    const updateExercise = async (exerciseId: string, language: SupportedLanguage, updatedLanguageContent: any, targetIsGlobal: boolean) => {
        if (!user) throw new Error("Must be logged in");
        if (targetIsGlobal && !isAdmin) throw new Error("Admin required for global changes");
        if (!targetIsGlobal && !isPremium) throw new Error("Premium required for personal changes");

        setLoading(true);
        try {
            // Fetch existing override to get the object to merge into
            const userId = targetIsGlobal ? null : user.id;
            const { data: existing } = await supabase
                .from("exercise_overrides" as any)
                .select("*")
                .eq("exercise_id", exerciseId)
                .filter(targetIsGlobal ? "user_id" : "user_id", targetIsGlobal ? "is" : "eq", userId)
                .single();

            const newContent = existing?.content || {};
            newContent[language] = updatedLanguageContent;

            const { error } = await supabase
                .from("exercise_overrides" as any)
                .upsert({
                    user_id: userId,
                    exercise_id: exerciseId,
                    content: newContent,
                    updated_at: new Date().toISOString()
                }, { onConflict: targetIsGlobal ? "exercise_id" : "user_id,exercise_id" });

            if (error) throw error;
        } finally {
            setLoading(false);
        }
    };

    const resetExercise = async (exerciseId: string, targetIsGlobal: boolean) => {
        if (!user) throw new Error("Must be logged in");
        if (targetIsGlobal && !isAdmin) throw new Error("Admin required for global changes");

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
            if (error) throw error;
        } finally {
            setLoading(false);
        }
    };

    const getWordDetails = async (word: string, language: string): Promise<WordDetails | null> => {
        const { data, error } = await supabase
            .from("word_details" as any)
            .select("*")
            .eq("word", word.toLowerCase().trim())
            .eq("language", language)
            .single();

        if (error) {
            if (error.code !== "PGRST116") { // Not found
                console.error("Error fetching word details:", error);
            }
            return null;
        }
        return data as WordDetails;
    };

    const saveWordDetails = async (wordDetails: Partial<WordDetails>) => {
        if (!isAdmin) throw new Error("Admin required");
        const { error } = await supabase
            .from("word_details" as any)
            .upsert({
                ...wordDetails,
                word: wordDetails.word?.toLowerCase().trim(),
                updated_at: new Date().toISOString()
            });
        if (error) throw error;
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
