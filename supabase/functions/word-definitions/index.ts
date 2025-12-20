import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function parseExtractToDefsAndExamples(extract: string) {
  const lines = extract.split(/\r?\n/);
  const definitions: string[] = [];
  const examples: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Definition lines in Wiktionary extracts often start with '# ' (one hash)
    const defMatch = line.match(/^#\s+(.*)$/);
    if (defMatch) {
      const clean = defMatch[1].replace(/^[:\d\.\)\s]+/, "").trim();
      if (clean.length > 0) definitions.push(clean);

      // collect immediate example lines that follow and start with '#:' or '# ' with a leading ':'
      let j = i + 1;
      while (j < lines.length) {
        const next = lines[j].trim();
        const exMatch = next.match(/^#:\s+(.*)$/);
        if (exMatch) {
          const e = exMatch[1].trim();
          if (e.length > 0) examples.push(e);
          j++;
          continue;
        }
        // break on next definition or header
        if (/^#\s+/.test(next) || /^==+/.test(next) || next === "") break;
        j++;
      }
    }

    // Sometimes examples are present as lines starting with '#:\s' separated from defs
    const exLine = line.match(/^#:\s+(.*)$/);
    if (exLine) {
      const e = exLine[1].trim();
      if (e.length > 0) examples.push(e);
    }
  }

  // Dedupe and trim
  const dedup = (arr: string[]) => Array.from(new Set(arr.map(s => s.trim())).values());
  return { definitions: dedup(definitions), examples: dedup(examples) };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    const body = (req.method === "GET") ? Object.fromEntries(new URL(req.url).searchParams.entries()) : await req.json();
    const rawWord = (body?.word || "").toString();
    if (!rawWord || rawWord.trim().length === 0) throw new Error("word is required");

    const word = rawWord.toLowerCase().trim();

    const languages = [
      { code: 'en', key: 'english', api: 'https://en.wiktionary.org/w/api.php' },
      { code: 'fr', key: 'french', api: 'https://fr.wiktionary.org/w/api.php' },
      { code: 'es', key: 'spanish', api: 'https://es.wiktionary.org/w/api.php' }
    ];

    const result: any = { word, definitions: {} };

    for (const lang of languages) {
      // Check DB first
      const { data: existing } = await supabaseClient
        .from('word_definitions')
        .select('definitions, examples')
        .eq('word', word)
        .eq('language', lang.code)
        .maybeSingle();

      if (existing) {
        result.definitions[lang.key] = {
          definitions: existing.definitions || [],
          examples: existing.examples || []
        };
        continue;
      }

      // Fetch from Wiktionary
      const url = `${lang.api}?action=query&format=json&titles=${encodeURIComponent(rawWord)}&prop=extracts&explaintext=true`;
      const resp = await fetch(url, { method: 'GET' });
      if (!resp.ok) {
        result.definitions[lang.key] = { definitions: [], examples: [] };
        continue;
      }
      const json = await resp.json();
      const pages = json?.query?.pages || {};
      let extract = '';
      for (const id in pages) {
        if (pages[id] && typeof pages[id].extract === 'string') {
          extract = pages[id].extract as string;
          break;
        }
      }

      if (!extract || extract.length === 0) {
        result.definitions[lang.key] = { definitions: [], examples: [] };
        // Store an empty placeholder to avoid re-fetching repeatedly
        await supabaseClient.from('word_definitions').upsert([
          {
            word: word,
            language: lang.code,
            definitions: JSON.stringify([]),
            examples: JSON.stringify([]),
            updated_at: new Date().toISOString()
          }
        ], { onConflict: 'word,language' });
        continue;
      }

      const parsed = parseExtractToDefsAndExamples(extract);

      // Persist to DB
      await supabaseClient.from('word_definitions').upsert([
        {
          word: word,
          language: lang.code,
          definitions: parsed.definitions,
          examples: parsed.examples,
          updated_at: new Date().toISOString()
        }
      ], { onConflict: 'word,language' });

      result.definitions[lang.key] = { definitions: parsed.definitions, examples: parsed.examples };
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('[WORD-DEFINITIONS] ERROR', message);
    return new Response(JSON.stringify({ error: message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400
    });
  }
});
