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

  // Supabase Functions may return a parsed object or a JSON string depending on environment.
  // Ensure we always return a proper object shape for the rest of the app.
  let parsed: any = data;
  if (typeof data === 'string') {
    try {
      parsed = JSON.parse(data);
    } catch (e) {
      throw new Error('Invalid response from word-definitions function');
    }
  }

  // If the function returned an error shape, throw so callers can see it
  if (parsed && typeof parsed === 'object' && parsed.error) {
    throw new Error(parsed.error);
  }

  // Validate expected shape - if it's not present, surface a helpful console
  // message and return an empty-but-valid fallback so UI shows its fallback copy.
  const isValid = parsed && parsed.definitions && (
    parsed.definitions.english || parsed.definitions.french || parsed.definitions.spanish
  );

  if (!isValid) {
    // eslint-disable-next-line no-console
    console.warn('[word-definitions] unexpected response:', parsed);
    return {
      word,
      definitions: {
        english: { definitions: [], examples: [] },
        french: { definitions: [], examples: [] },
        spanish: { definitions: [], examples: [] },
      },
    } as WordDefinitionsResponse;
  }

  return parsed as WordDefinitionsResponse;
}
