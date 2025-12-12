-- Add language column to exercise_attempts and user_progress tables
ALTER TABLE public.exercise_attempts ADD COLUMN language TEXT NOT NULL DEFAULT 'en';
ALTER TABLE public.user_progress ADD COLUMN language TEXT NOT NULL DEFAULT 'en';

-- Drop existing unique constraint if any and add new one with language
ALTER TABLE public.user_progress DROP CONSTRAINT IF EXISTS user_progress_user_id_exercise_id_key;
ALTER TABLE public.user_progress ADD CONSTRAINT user_progress_user_id_exercise_id_language_key UNIQUE (user_id, exercise_id, language);

-- Create index for language-based queries
CREATE INDEX idx_exercise_attempts_language ON public.exercise_attempts(language);
CREATE INDEX idx_user_progress_language ON public.user_progress(language);