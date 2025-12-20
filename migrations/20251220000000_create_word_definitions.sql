-- Create table for caching word definitions fetched from Wiktionary

CREATE TABLE IF NOT EXISTS public.word_definitions (
  word text NOT NULL,
  language text NOT NULL,
  definitions json NOT NULL,
  examples json NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  PRIMARY KEY (word, language)
);

-- Optional index for faster lookups
CREATE INDEX IF NOT EXISTS idx_word_definitions_word ON public.word_definitions (word);
