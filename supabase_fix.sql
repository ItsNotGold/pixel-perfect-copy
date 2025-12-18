-- Run this SQL in the Supabase SQL editor
-- Then Refresh the schema cache (Project Settings -> API -> Refresh Schema Cache)

-- 1. Create the exercise_overrides table
CREATE TABLE IF NOT EXISTS public.exercise_overrides (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    exercise_id TEXT NOT NULL,
    exercise_type TEXT NOT NULL,
    original_data JSONB NOT NULL,
    modified_data JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, exercise_id, exercise_type)
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.exercise_overrides ENABLE ROW LEVEL SECURITY;

-- 3. Define RLS Policies

-- User Policy: Users can only see and modify their own rows
CREATE POLICY "Users can manage their own exercise overrides" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Admin Policy: Admins can see and modify all rows
-- This assumes a role or metadata flag for admins.
-- Adjust the condition based on your specific admin identification logic.
CREATE POLICY "Admins have full access" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (
  (auth.jwt() ->> 'role' = 'admin') OR 
  (auth.jwt() -> 'app_metadata' ->> 'admin' = 'true')
);
