# Word definitions: Wiktionary + DB cache

This project now uses a Supabase Edge Function called `word-definitions` to fetch word definitions and example sentences from Wiktionary (English, French, Spanish) and caches results in the database.

Key points:

- Endpoint: `supabase.functions.invoke('word-definitions', { body: JSON.stringify({ word }) })`
- Languages supported: English (`en` / `english`), French (`fr` / `french`), Spanish (`es` / `spanish`)
- Migration: see `migrations/20251220000000_create_word_definitions.sql`
- Table schema stores `definitions` and `examples` as JSON arrays to avoid repeated API calls.

Notes:
- The frontend helper is at `src/lib/wordDefinitionsService.ts`.
- The hook `useLibrary` now exposes `getWordDetails` as an async fetch from the new system.
- The `supabase/functions/word-definitions` Edge Function fetches from Wiktionary APIs and writes to the DB when results are not already cached.

Deployment:
- Apply the SQL migration to your Supabase DB.
- Deploy the Edge Function and ensure it has privileges to insert/upsert into `word_definitions` (use a role/service key if necessary).

Parsing behavior:
- The function extracts lines starting with `# ` as definitions and `#:` as example sentences from the Wiktionary `prop=extracts` plain-text response.
- Results are stored and returned as plain text arrays (`definitions`, `examples`).
