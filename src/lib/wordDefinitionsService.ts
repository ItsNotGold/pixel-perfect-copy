export interface DefinitionResult {
  definitions: string[];
}

export type SupportedLanguage = 'english' | 'french' | 'spanish';

const DICT_DEV_BASE = 'https://api.dictionaryapi.dev/api/v2/entries';
const FRENCH_LEMONDE_BASE = 'https://api-definition.fgainza.fr';
const SPANISH_RAE_BASE = 'https://rae-api.com/api/words';


// --- Type Definitions ---

// English (DictionaryAPI.dev)
interface DictDevEntry {
    word: string;
    meanings: {
        definitions: { definition: string }[];
    }[];
}

// French (Fgainza / Wiktionnaire)
interface FrenchResponse {
    motWiki: string;
    natureDef: Record<string, string>[][]; // Array of arrays of objects like { "1": "def..." }
}

// Spanish (RAE)
interface SpanishResponse {
    word: string;
    entries: { definition: string }[];
}


// --- Main Service Function ---

export async function getWordDefinition(
  word: string,
  language: SupportedLanguage
): Promise<DefinitionResult> {
  const normalizedWord = word.toLowerCase().trim();

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
    Array.isArray(storedDefinitions[normalizedWord][language].definitions) &&
    storedDefinitions[normalizedWord][language].definitions.length > 0
  ) {
    console.log(`[Cache Hit] ${normalizedWord} (${language})`);
    return { definitions: storedDefinitions[normalizedWord][language].definitions };
  }

  // 2. Fetch from API (Dispatcher)
  console.log(`[Cache Miss] Fetching API for ${normalizedWord} (${language})`);
  let result: DefinitionResult = { definitions: [] };

  try {
      if (language === 'english') {
          result = await fetchEnglishDefinition(normalizedWord);
      } else if (language === 'french') {
          result = await fetchFrenchDefinition(normalizedWord);
      } else if (language === 'spanish') {
          result = await fetchSpanishDefinition(normalizedWord);
      }
      
      // 3. Persist (even if empty)
      await persistToCache(normalizedWord, language, result, storedDefinitions);
      return result;

  } catch (e) {
    console.error(`Failed to fetch definition for ${word}`, e);
    return { definitions: [] };
  }
}


// --- Helper Functions ---

async function fetchEnglishDefinition(word: string): Promise<DefinitionResult> {
    const url = `${DICT_DEV_BASE}/en/${encodeURIComponent(word)}`;
    const apiRes = await fetch(url);

    if (apiRes.status === 404) return { definitions: [] };
    if (!apiRes.ok) throw new Error(`DictionaryAPI Error: ${apiRes.statusText}`);

    const data: DictDevEntry[] = await apiRes.json();
    let definitions: string[] = [];

    if (Array.isArray(data)) {
        for (const entry of data) {
            if (entry.meanings && Array.isArray(entry.meanings)) {
                for (const meaning of entry.meanings) {
                    if (meaning.definitions && Array.isArray(meaning.definitions)) {
                        for (const def of meaning.definitions) {
                            if (def.definition) definitions.push(def.definition);
                        }
                    }
                }
            }
        }
    }
    return { definitions };
}

async function fetchFrenchDefinition(word: string): Promise<DefinitionResult> {
     const url = `${FRENCH_LEMONDE_BASE}/${encodeURIComponent(word)}`;
     const apiRes = await fetch(url);
     // Note: This API might return JSON directly or error. Wrap in try/catch safely.
     
     if (!apiRes.ok) {
        // API might return 404 or just empty
         if (apiRes.status === 404) return { definitions: [] };
         throw new Error(`French API Error: ${apiRes.statusText}`);
     }

    const data: FrenchResponse = await apiRes.json();
    let definitions: string[] = [];

    // Parse natureDef: [[ { "1": "...", "2": "..." } ], [ ... ]]
    if (data.natureDef && Array.isArray(data.natureDef)) {
        for (const group of data.natureDef) {
            if (Array.isArray(group)) {
                 for (const defObj of group) {
                      // Keys are dynamic numbers "1", "2" ... extract all string values
                      Object.values(defObj).forEach(val => {
                          if (typeof val === 'string' && val.trim().length > 0) {
                              definitions.push(val.trim());
                          }
                      });
                 }
            }
        }
    }
    return { definitions };
}

async function fetchSpanishDefinition(word: string): Promise<DefinitionResult> {
    const url = `${SPANISH_RAE_BASE}/${encodeURIComponent(word)}`;
    const apiRes = await fetch(url);

    if (apiRes.status === 404) return { definitions: [] };
    if (!apiRes.ok) throw new Error(`RAE API Error: ${apiRes.statusText}`);

    const data: SpanishResponse = await apiRes.json();
    let definitions: string[] = [];

    if (data.entries && Array.isArray(data.entries)) {
        for (const entry of data.entries) {
            if (entry.definition) {
                definitions.push(entry.definition);
            }
        }
    }
    return { definitions };
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
        // console.error('Failed to persist definition to cache', e);
    }
}
