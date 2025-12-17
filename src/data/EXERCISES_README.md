# Editable exercise content

This project now centralizes editable exercise content in `src/data/exercises.content.json`.

How to edit
- Modify `src/data/exercises.content.json` to update exercise metadata and per-exercise content (precisionSwap, reverseDefinitions, synonymChain, etc.).
- The app loads this file at build time and exposes its content via `src/data/exercisesContent.ts`.

What to edit
- `exercises` array contains the basic metadata (id, title, description, icon name, color, path).
  - Use icon names from the `lucide-react` set (e.g., `MessageCircle`, `Target`, `BookOpen`, `Link`). The loader maps names to components.
- `precisionSwap`, `reverseDefinitions`, and `synonymChain` are namespaced by language (`en`, `fr`, `es`, ...). Add or update entries for each language.

Backwards compatibility
- Existing imports (e.g., `swapChallengesMultilingual`, `reverseDefinitionsMultilingual`, `synonymChallengesMultilingual`) still work and are exported from `src/data/exercisesContent.ts`.

Notes
- If you edit `exercises.content.json`, you will need to rebuild the app (e.g., `npm run dev` / `npm run build`) to see changes in the running app because JSON is bundled.
- The loader will prefer the JSON content for a language only if that JSON content has at least as many entries as the legacy content (to avoid accidental accidental truncation from a smaller JSON set). If your JSON intentionally replaces the legacy data, ensure you include a full set for that language.
- If you want runtime-editable content without rebuilding, consider adding a remote content source (CMS or storage) and switching the loader to fetch at runtime. I can help with that if desired.
