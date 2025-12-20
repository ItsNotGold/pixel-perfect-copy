export interface DefinitionResult {
  definitions: string[];
}

export type SupportedLanguage = 'english' | 'french' | 'spanish';

const DICT_DEV_BASE = 'https://api.dictionaryapi.dev/api/v2/entries';
const RELYC_BASE = 'https://dictionary.relycapp.com/api/v1/dictionary/lookup';

const LANG_CODES: Record<SupportedLanguage, string> = {
  english: 'en',
  french: 'fr',
  spanish: 'es',
};

// --- Type Definitions ---

// DictionaryAPI.dev (English)
interface DictDevDefinition {
    definition: string;
}
interface DictDevMeaning {
    definitions: DictDevDefinition[];
}
interface DictDevEntry {
    word: string;
    meanings: DictDevMeaning[];
}

// Relyc (French/Spanish)
interface RelycDefItem {
    definitions: string[];
}
interface RelycEntry {
    lang: string; // 'fr', 'es', etc.
    definitions: RelycDefItem[];
}
interface RelycResponse {
    entries: RelycEntry[];
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

  // Check cache
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
      } else {
          result = await fetchRelycDefinition(normalizedWord, language);
      }
      
      // 3. Persist (even if empty, to avoid refetching 404s)
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
    return { definitions };
}

async function fetchRelycDefinition(word: string, language: SupportedLanguage): Promise<DefinitionResult> {
    const langCode = LANG_CODES[language]; // 'fr' or 'es'
    const url = `${RELYC_BASE}?word=${encodeURIComponent(word)}`;
    const apiRes = await fetch(url);

    if (apiRes.status === 404) return { definitions: [] };
    if (!apiRes.ok) throw new Error(`Relyc API Error: ${apiRes.statusText}`);

    const data: RelycResponse = await apiRes.json();
    let definitions: string[] = [];

    if (data.entries && Array.isArray(data.entries)) {
        // Find matching entry for language
        const entry = data.entries.find(e => e.lang === langCode);
        
        if (entry && entry.definitions && Array.isArray(entry.definitions)) {
             for (const defItem of entry.definitions) {
                 if (defItem.definitions && Array.isArray(defItem.definitions)) {
                     definitions.push(...defItem.definitions);
                 }
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
        console.error('Failed to persist definition to cache', e);
    }
}
