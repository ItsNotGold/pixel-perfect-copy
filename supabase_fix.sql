-- PART 2 — SAVE ERROR (DATABASE FIX, MANUAL)
-- Run this SQL in the Supabase SQL Editor.
-- After running, Refresh the schema cache (Project Settings -> API -> Refresh Schema Cache).

-- 1. Create the exercise_overrides table
CREATE TABLE IF NOT EXISTS public.exercise_overrides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT NOT NULL,
    language TEXT NOT NULL,
    content JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, exercise_id, language)
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.exercise_overrides ENABLE ROW LEVEL SECURITY;

-- 3. Define RLS Policies

-- User Policy: Users can only see and modify their own overrides
CREATE POLICY "Users can manage their own overrides" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Admin Policy: Admins have full access to all overrides
CREATE POLICY "Admins have full access" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (
  (auth.jwt() ->> 'role' = 'admin') OR 
  (auth.jwt() -> 'app_metadata' ->> 'admin' = 'true')
);
