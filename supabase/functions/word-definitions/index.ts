import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

import { parseExtractToDefsAndExamples } from "./parseExtract.ts";

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

      // Treat cached entries with no definitions/examples as absent so we can
      // re-attempt fetching from Wiktionary (they may have been empty due to
      // a previous transient failure).
      const hasExistingContent = !!existing && (
        (Array.isArray(existing.definitions) && existing.definitions.length > 0) ||
        (Array.isArray(existing.examples) && existing.examples.length > 0)
      );

      if (hasExistingContent) {
        result.definitions[lang.key] = {
          definitions: existing.definitions || [],
          examples: existing.examples || []
        };
        continue;
      }

      // Fetch from Wiktionary
      const url = `${lang.api}?action=query&format=json&titles=${encodeURIComponent(rawWord)}&prop=extracts&explaintext=true`;
      const resp = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'PixelPerfect/1.0 (+https://github.com/ItsNotGold/pixel-perfect-copy)',
          'Accept': 'application/json'
        }
      });
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
        // Store an empty placeholder to avoid re-fetching repeatedly, only if there
        // wasn't an existing row. This allows us to re-check Wiktionary later if
        // a previous fetch resulted in an empty record.
        if (!existing) {
          await supabaseClient.from('word_definitions').upsert([
            {
              word: word,
              language: lang.code,
              definitions: [],
              examples: [],
              updated_at: new Date().toISOString()
            }
          ], { onConflict: 'word,language' });
        }
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
