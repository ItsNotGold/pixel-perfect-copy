-- SUPABASE SQL FIX: Create exercise_overrides table and setup RLS
-- Run this in the Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql
-- IMPORTANT: Refresh the schema cache after running! (Project Settings -> API -> Refresh Schema Cache)

-- 1. Create the table
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

-- 2. Enable Row Level Security
ALTER TABLE public.exercise_overrides ENABLE ROW LEVEL SECURITY;

-- 3. Define Security Policies

-- Policy: Users can only manage their own data
DROP POLICY IF EXISTS "Users can manage their own exercise overrides" ON public.exercise_overrides;
CREATE POLICY "Users can manage their own exercise overrides" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy: Admins have full access to everything
DROP POLICY IF EXISTS "Admins have full access" ON public.exercise_overrides;
CREATE POLICY "Admins have full access" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (
  (auth.jwt() ->> 'role' = 'admin') OR 
  (auth.jwt() -> 'app_metadata' ->> 'admin' = 'true')
);
