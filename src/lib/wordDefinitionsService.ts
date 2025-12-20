import { supabase } from "@/integrations/supabase/client";

export interface LanguageBlock {
  definitions: string[];
  examples: string[];
}

export interface WordDefinitionsResponse {
  word: string;
  definitions: {
    english: LanguageBlock;
    french: LanguageBlock;
    spanish: LanguageBlock;
  };
}

export async function fetchWordDefinitions(word: string): Promise<WordDefinitionsResponse> {
  if (!word || word.trim().length === 0) {
    return {
      word: word,
      definitions: {
        english: { definitions: [], examples: [] },
        french: { definitions: [], examples: [] },
        spanish: { definitions: [], examples: [] }
      }
    };
  }

  const body = { word };
  const { data, error } = await supabase.functions.invoke('word-definitions', {
    body: JSON.stringify(body),
  });

  if (error) {
    throw new Error(error.message || 'Failed to fetch word definitions');
  }

  return (data || {
    word,
    definitions: {
      english: { definitions: [], examples: [] },
      french: { definitions: [], examples: [] },
      spanish: { definitions: [], examples: [] },
    },
  }) as WordDefinitionsResponse;
}
