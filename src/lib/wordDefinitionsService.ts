export interface DefinitionResult {
  definition: string;
  example: string;
}

export type SupportedLanguage = 'english' | 'french' | 'spanish';

const FREE_DICT_API_BASE = 'https://api.dictionaryapi.dev/api/v2/entries';

// Supported language codes for FreeDictionaryAPI
const LANG_CODES: Record<SupportedLanguage, string> = {
  english: 'en',
  french: 'fr',
  spanish: 'es',
};

export async function getWordDefinition(
  word: string,
  language: SupportedLanguage
): Promise<DefinitionResult> {
  const normalizedWord = word.toLowerCase().trim();
  
  // 1. Check Local Cache (via Middleware)
  let storedDefinitions: any = {};
  try {
    const res = await fetch('/__api/definitions');
    if (res.ok) {
        storedDefinitions = await res.json();
    }
  } catch (e) {
    console.warn('Failed to fetch local definitions cache', e);
  }

  // Check if exists in cache
  // Structure: { [word]: { [language]: { definition: string, example: string } } }
  if (
    storedDefinitions[normalizedWord] &&
    storedDefinitions[normalizedWord][language] &&
    storedDefinitions[normalizedWord][language].definition
  ) {
    console.log(`[Cache Hit] ${normalizedWord} (${language})`);
    return storedDefinitions[normalizedWord][language];
  }

  // 2. Fetch from API
  console.log(`[Cache Miss] Fetching API for ${normalizedWord} (${language})`);
  const langCode = LANG_CODES[language];
  const url = `${FREE_DICT_API_BASE}/${langCode}/${encodeURIComponent(normalizedWord)}`;
  
  try {
    const apiRes = await fetch(url);
    
    if (apiRes.status === 404) {
        // 404 Not Found - Store empty result to prevent re-fetch
        console.warn(`[Word Not Found] ${normalizedWord}`);
        const emptyResult: DefinitionResult = { definition: "", example: "" };
        await persistToCache(normalizedWord, language, emptyResult, storedDefinitions);
        return emptyResult;
    }

    if (!apiRes.ok) {
        throw new Error(`API Error: ${apiRes.statusText}`);
    }

    const data = await apiRes.json();
    
    // Parse logic: First entry -> First meaning -> First definition
    // Expected structure: [ { "meanings": [ { "definitions": [ { "definition": "...", "example": "..." } ] } ] } ]
    
    let definition = "";
    let example = "";

    if (Array.isArray(data) && data.length > 0) {
        const firstEntry = data[0];
        if (firstEntry.meanings && firstEntry.meanings.length > 0) {
            const firstMeaning = firstEntry.meanings[0];
            if (firstMeaning.definitions && firstMeaning.definitions.length > 0) {
                const firstDef = firstMeaning.definitions[0];
                definition = firstDef.definition || "";
                example = firstDef.example || "";
            }
        }
    }

    const result: DefinitionResult = {
      definition,
      example
    };

    // 3. Persist to Cache
    await persistToCache(normalizedWord, language, result, storedDefinitions);

    return result;

  } catch (e) {
    console.error(`Failed to fetch definition for ${word}`, e);
    // Return empty on failure/network error, but maybe don't cache network errors?
    // User said: "If network error: Show graceful UI error. Do NOT fallback."
    // We will return empty strings which the UI handles as "No definition available".
    return { definition: "", example: "" };
  }
}

async function persistToCache(
    word: string, 
    language: SupportedLanguage, 
    result: DefinitionResult, 
    currentCache: any
) {
    // Merge into the structure: { [word]: { [language]: { definition, example } } }
    const newEntry = {
        [word]: {
            ...currentCache[word], // Keep other languages for this word
            [language]: result
        }
    };

    try {
        await fetch('/__api/definitions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEntry)
        });
    } catch (e) {
        console.error('Failed to persist definition to cache', e);
    }
}
