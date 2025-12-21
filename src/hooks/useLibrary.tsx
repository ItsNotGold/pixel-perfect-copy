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
import { getWordDefinition } from "@/lib/wordDefinitionsService";
import { paceCadenceMaster } from "@/data/exercises/paceCadence.master";

const MASTER_DATA: Record<string, ExerciseMaster<any>> = {
    "precision-swap": precisionSwapMaster,
    "filler-word-eliminator": fillerWordEliminatorMaster,
    "reverse-definitions": reverseDefinitionsMaster,
    "synonym-speed-chain": synonymSpeedChainMaster,
    "word-incorporation": wordIncorporationMaster,
    "pace-cadence-trainer": paceCadenceMaster,
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

    const updateExercise = useCallback(async (exerciseId: string, language: SupportedLanguage, updatedLanguageContent: any, targetIsGlobal: boolean) => {
        if (!user) throw new Error("Authentication required. Please sign in to save changes.");
        if (targetIsGlobal && !isAdmin) throw new Error("Unauthorized. Only administrators can modify global standard content.");
        if (!targetIsGlobal && !isPremium) throw new Error("Premium required. Please upgrade your plan to save personal content overrides.");

        setLoading(true);
        try {
            // 1. Fetch existing override for this SPECIFIC exercise and user
            // In the new schema, user_id is NOT NULL, so global overrides (user_id = null)
            // are actually not supported in the exact table definition requested by the user
            // "user_id uuid NOT NULL REFERENCES auth.users(id)"
            // HOWEVER, the user also requested: "Admins can SELECT/INSERT/UPDATE all rows"
            // We will stick to the user's EXACT schema: user_id is NOT NULL.
            // If they want global overrides, we would need a special admin user ID or a different table.

            const userId = user.id;

            const { data: existing, error: fetchError } = await supabase
                .from("exercise_overrides" as any)
                .select("*")
                .eq("exercise_id", exerciseId)
                .eq("user_id", userId)
                .maybeSingle();

            if (fetchError) {
                console.error("Fetch error during update:", fetchError);
                throw new Error(`Failed to check existing overrides: ${fetchError.message}`);
            }

            const newContent = existing?.content || {};
            newContent[language] = updatedLanguageContent;

            // 2. Upsert the merged content
            const upsertData: any = {
                user_id: userId,
                exercise_id: exerciseId,
                language: language, // Added language column as per exact schema
                content: newContent,
                updated_at: new Date().toISOString()
            };

            const { error: upsertError } = await supabase
                .from("exercise_overrides" as any)
                .upsert(upsertData, {
                    onConflict: 'user_id,exercise_id'
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
    }, [user, isAdmin, isPremium]);

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

    // Async: Fetch definitions from local cache or FreeDictionaryAPI via new service.
    const getWordDetails = useCallback(async (word: string, language: string): Promise<WordDetails | null> => {
        const lowerWord = word.toLowerCase().trim();
        const lowerLang = language.toLowerCase();

        try {
            // Map 'en'/'fr'/'es' code to 'english'/'french'/'spanish' for the service
            const langMap: Record<string, 'english' | 'french' | 'spanish'> = {
                'en': 'english',
                'fr': 'french',
                'es': 'spanish',
                // fallback for de or others if needed
                'de': 'english' 
            };
            const serviceLang = langMap[lowerLang] || 'english';

            const resp = await getWordDefinition(lowerWord, serviceLang);
            const defs = resp.definitions || [];

            if (defs.length > 0) {
                return {
                    id: `remote-${lowerWord}-${lowerLang}`,
                    word: lowerWord,
                    language: lowerLang,
                    definition: defs[0],
                    otherDefinitions: defs.slice(1),
                    example: "", // Explicitly empty as requested
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                } as any;
            }

            // No content found or 404
            return {
                id: `fallback-${lowerWord}-${lowerLang}`,
                word: lowerWord,
                language: lowerLang,
                definition: `No definition available for "${word}" in ${language.toUpperCase()}.`,
                example: ``,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            } as WordDetails;
        } catch (e) {
            console.error('[Library] getWordDefinition failed', e);
            return {
                id: `fallback-${lowerWord}-${lowerLang}`,
                word: lowerWord,
                language: lowerLang,
                definition: `Error fetching definition for "${word}".`,
                example: ``,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            } as WordDetails;
        }
    }, []);

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
