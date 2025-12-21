export interface DefinitionResult {
  definitions: string[];
}

export type SupportedLanguage = 'english' | 'french' | 'spanish';

const API_BASE = 'https://api.dictionaryapi.dev/api/v2/entries';

const LANG_CODES: Record<SupportedLanguage, string> = {
  english: 'en',
  french: 'fr',
  spanish: 'es',
};

// Response Type Definitions (Common for all dictionaryapi.dev calls)
interface ApiDefinition {
    definition: string;
}

interface ApiMeaning {
    definitions: ApiDefinition[];
}

interface ApiEntry {
    word: string;
    meanings: ApiMeaning[];
}

export async function getWordDefinition(
  word: string,
  language: SupportedLanguage
): Promise<DefinitionResult> {
  const normalizedWord = word.toLowerCase().trim();
  const langCode = LANG_CODES[language];
  const cacheKey = `${langCode}:${normalizedWord}`; // MANDATORY: cache key format

  // 1. Check Local Cache
  let storedDefinitions: Record<string, DefinitionResult> = {};
  try {
    const res = await fetch('/__api/definitions');
    if (res.ok) {
        storedDefinitions = await res.json();
    }
  } catch (e) {
    console.warn('Failed to fetch local definitions cache', e);
  }

  // Check cache (using new flat key)
  if (
    storedDefinitions[cacheKey] &&
    Array.isArray(storedDefinitions[cacheKey].definitions) &&
    storedDefinitions[cacheKey].definitions.length > 0
  ) {
    console.log(`[Cache Hit] ${cacheKey}`);
    return { definitions: storedDefinitions[cacheKey].definitions };
  }

  // 2. Fetch from API
  console.log(`[Cache Miss] Fetching API for ${cacheKey}`);
  const url = `${API_BASE}/${langCode}/${encodeURIComponent(normalizedWord)}`;

  try {
    const apiRes = await fetch(url);
    
    // Handle 404 gracefully
    if (apiRes.status === 404) {
         console.warn(`[Word Not Found] ${normalizedWord}`);
         const emptyResult: DefinitionResult = { definitions: [] };
         await persistToCache(cacheKey, emptyResult, storedDefinitions);
         return emptyResult;
    }

    if (!apiRes.ok) {
        throw new Error(`API Error: ${apiRes.statusText}`);
    }

    const data: ApiEntry[] = await apiRes.json();
    const definitions: string[] = [];

    if (Array.isArray(data)) {
        for (const entry of data) {
            if (entry.meanings && Array.isArray(entry.meanings)) {
                for (const meaning of entry.meanings) {
                    if (meaning.definitions && Array.isArray(meaning.definitions)) {
                        for (const defObj of meaning.definitions) {
                            if (defObj.definition) {
                                definitions.push(defObj.definition);
                            }
                        }
                    }
                }
            }
        }
    }

    const result: DefinitionResult = {
      definitions
    };

    // 3. Persist
    await persistToCache(cacheKey, result, storedDefinitions);
    return result;

  } catch (e) {
    console.error(`Failed to fetch definition for ${word}`, e);
    return { definitions: [] };
  }
}

async function persistToCache(
    cacheKey: string,
    result: DefinitionResult, 
    currentCache: Record<string, DefinitionResult>
) {
    const newEntry = {
        [cacheKey]: result
    };

    try {
        await fetch('/__api/definitions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEntry)
        });
    } catch (e) {
        console.error('Failed to persist definition to cache', e);
    }
}
