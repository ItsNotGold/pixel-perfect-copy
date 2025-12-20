import { supabase } from "@/integrations/supabase/client";
import { WORD_DEFINITIONS } from "@/data/wordDefinitions";

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

function localFallback(word: string): WordDefinitionsResponse {
  const key = word.toLowerCase().trim();
  const en = WORD_DEFINITIONS.en?.[key];
  const fr = (WORD_DEFINITIONS as any).fr?.[key];
  const es = (WORD_DEFINITIONS as any).es?.[key];

  return {
    word: key,
    definitions: {
      english: en ? { definitions: [en.definition], examples: [en.example] } : { definitions: [], examples: [] },
      french: fr ? { definitions: [fr.definition], examples: [fr.example] } : { definitions: [], examples: [] },
      spanish: es ? { definitions: [es.definition], examples: [es.example] } : { definitions: [], examples: [] }
    }
  };
}

export async function fetchWordDefinitions(word: string): Promise<WordDefinitionsResponse> {
  if (!word || word.trim().length === 0) {
    return localFallback(word);
  }

  const body = { word };

  try {
    const { data, error } = await supabase.functions.invoke('word-definitions', {
      body: JSON.stringify(body),
    });

    if (error) {
      // eslint-disable-next-line no-console
      console.warn('[word-definitions] supabase invoke error:', error);
      return localFallback(word);
    }

    // Supabase Functions may return a parsed object or a JSON string depending on environment.
    // Ensure we always return a proper object shape for the rest of the app.
    let parsed: any = data;
    if (typeof data === 'string') {
      try {
        parsed = JSON.parse(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('[word-definitions] invalid JSON response:', data);
        return localFallback(word);
      }
    }

    // If the function returned an error shape, fallback to local
    if (parsed && typeof parsed === 'object' && parsed.error) {
      // eslint-disable-next-line no-console
      console.warn('[word-definitions] function returned error:', parsed.error);
      return localFallback(word);
    }

    // Validate expected shape
    const isValid = parsed && parsed.definitions && (
      parsed.definitions.english || parsed.definitions.french || parsed.definitions.spanish
    );

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.warn('[word-definitions] unexpected response shape, falling back to local:', parsed);
      return localFallback(word);
    }

    return parsed as WordDefinitionsResponse;
  } catch (e) {
    // Network / unexpected error - fallback
    // eslint-disable-next-line no-console
    console.warn('[word-definitions] fetch failed, falling back to local:', e);
    return localFallback(word);
  }
}
