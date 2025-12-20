export interface DefinitionResult {
  definition: string;
  example: string;
}

export type SupportedLanguage = 'english' | 'french' | 'spanish';

const API_BASE = 'https://freedictionaryapi.com/api/v1/entries';

const LANG_CODES: Record<SupportedLanguage, string> = {
  english: 'en',
  french: 'fr',
  spanish: 'es',
};

// Response Type Definitions based on Prompt
interface ApiEntry {
    language: { code: string };
    partOfSpeech: string;
    senses: ApiSense[];
}

interface ApiSense {
    definition: string;
    examples?: string[];
}

interface ApiResponse {
    word: string;
    entries: ApiEntry[];
}

const POS_PRIORITY: Record<string, number> = {
    'noun': 1,
    'verb': 2,
    'adjective': 3,
    'adverb': 4
};

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

  if (
    storedDefinitions[normalizedWord] &&
    storedDefinitions[normalizedWord][language] &&
    storedDefinitions[normalizedWord][language].definition
  ) {
    console.log(`[Cache Hit] ${normalizedWord} (${language})`);
    return storedDefinitions[normalizedWord][language];
  }

  // 2. Fetch from API
  console.log(`[Cache Miss] Fetching API for ${normalizedWord} (${langCode})`);
  const url = `${API_BASE}/${langCode}/${encodeURIComponent(normalizedWord)}`;

  try {
    const apiRes = await fetch(url);
    
    // Handle 404 gracefully
    if (apiRes.status === 404) {
         console.warn(`[Word Not Found] ${normalizedWord}`);
         const emptyResult: DefinitionResult = { definition: "", example: "" };
         await persistToCache(normalizedWord, language, emptyResult, storedDefinitions);
         return emptyResult;
    }

    if (!apiRes.ok) {
        throw new Error(`API Error: ${apiRes.statusText}`);
    }

    const data: ApiResponse | ApiResponse[] = await apiRes.json();
    const responseObj = Array.isArray(data) ? data[0] : data; // API might return array or object, handling both to be safe, though prompt implies object structure

    let definition = "";
    let example = "";

    if (responseObj && Array.isArray(responseObj.entries)) {
        // Filter by language code (just in case) and Sort by POS
        const validEntries = responseObj.entries.filter(e => e.language && e.language.code === langCode);
        
        validEntries.sort((a, b) => {
             const pA = POS_PRIORITY[a.partOfSpeech?.toLowerCase()] || 99;
             const pB = POS_PRIORITY[b.partOfSpeech?.toLowerCase()] || 99;
             return pA - pB;
        });

        // Pick first entry
        const bestEntry = validEntries[0];

        if (bestEntry && bestEntry.senses && bestEntry.senses.length > 0) {
            const bestSense = bestEntry.senses[0];
            definition = bestSense.definition || "";
            if (bestSense.examples && bestSense.examples.length > 0) {
                example = bestSense.examples[0];
            }
        }
    }

    const result: DefinitionResult = {
      definition,
      example
    };

    // 3. Persist
    await persistToCache(normalizedWord, language, result, storedDefinitions);
    return result;

  } catch (e) {
    console.error(`Failed to fetch definition for ${word}`, e);
    return { definition: "", example: "" };
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
