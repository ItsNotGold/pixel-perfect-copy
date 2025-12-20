export interface DefinitionResult {
  definitions: string[];
}

export type SupportedLanguage = 'english' | 'french' | 'spanish';

const API_BASE = 'https://freedictionaryapi.com/api/v1/entries';

const LANG_CODES: Record<SupportedLanguage, string> = {
  english: 'en',
  french: 'fr',
  spanish: 'es',
};

// Response Type Definitions
interface ApiEntry {
    language: { code: string };
    senses: ApiSense[];
}

interface ApiSense {
    definition: string;
}

interface ApiResponse {
    entries: ApiEntry[];
}

export async function getWordDefinition(
  word: string,
  language: SupportedLanguage
): Promise<DefinitionResult> {
  const normalizedWord = word.toLowerCase().trim();
  const langCode = LANG_CODES[language];

  // 1. Check Local Cache
  let storedDefinitions: any = {};
  try {
    const res = await fetch('/__api/definitions');
    if (res.ok) {
        storedDefinitions = await res.json();
    }
  } catch (e) {
    console.warn('Failed to fetch local definitions cache', e);
  }

  // Check cache for array of definitions
  if (
    storedDefinitions[normalizedWord] &&
    storedDefinitions[normalizedWord][language] &&
    Array.isArray(storedDefinitions[normalizedWord][language].definitions) &&
    storedDefinitions[normalizedWord][language].definitions.length > 0
  ) {
    console.log(`[Cache Hit] ${normalizedWord} (${language})`);
    return { definitions: storedDefinitions[normalizedWord][language].definitions };
  }

  // 2. Fetch from API
  console.log(`[Cache Miss] Fetching API for ${normalizedWord} (${langCode})`);
  const url = `${API_BASE}/${langCode}/${encodeURIComponent(normalizedWord)}`;

  try {
    const apiRes = await fetch(url);
    
    // Handle 404 gracefully
    if (apiRes.status === 404) {
         console.warn(`[Word Not Found] ${normalizedWord}`);
         const emptyResult: DefinitionResult = { definitions: [] };
         await persistToCache(normalizedWord, language, emptyResult, storedDefinitions);
         return emptyResult;
    }

    if (!apiRes.ok) {
        throw new Error(`API Error: ${apiRes.statusText}`);
    }

    const data: ApiResponse | ApiResponse[] = await apiRes.json();
    const responseObj = Array.isArray(data) ? data[0] : data;

    let definitions: string[] = [];

    if (responseObj && Array.isArray(responseObj.entries) && responseObj.entries.length > 0) {
        // Rule: First Entry -> All Senses -> definitions
        const firstEntry = responseObj.entries[0];
        if (firstEntry.senses && firstEntry.senses.length > 0) {
            definitions = firstEntry.senses
                .map(s => s.definition)
                .filter(d => !!d); // Ensure no empty definitions
        }
    }

    const result: DefinitionResult = {
      definitions
    };

    // 3. Persist
    await persistToCache(normalizedWord, language, result, storedDefinitions);
    return result;

  } catch (e) {
    console.error(`Failed to fetch definition for ${word}`, e);
    return { definitions: [] };
  }
}

async function persistToCache(
    word: string, 
    language: SupportedLanguage, 
    result: DefinitionResult, 
    currentCache: any
) {
    const newEntry = {
        [word]: {
            ...currentCache[word],
            [language]: result
        }
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
