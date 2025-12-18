/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DATABASE FIX: public.exercise_overrides Table & Security
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INSTRUCTIONS:
1. Copy the entire SQL block below.
2. Go to your Supabase Dashboard -> SQL Editor.
3. Paste and RUN the SQL.
4. IMPORTANT: Go to Project Settings -> API and click "Refresh Schema Cache".
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

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

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.exercise_overrides ENABLE ROW LEVEL SECURITY;

-- 3. Define Security Policies

-- Policy for Users: Only manage their own data
CREATE POLICY "Users can manage their own exercise overrides" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy for Admins: Full access to all data
-- This check looks for 'admin' in the JWT role or app_metadata
CREATE POLICY "Admins have full access" 
ON public.exercise_overrides
FOR ALL 
TO authenticated
USING (
  (auth.jwt() ->> 'role' = 'admin') OR 
  (auth.jwt() -> 'app_metadata' ->> 'admin' = 'true')
);

-- 4. Create an update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.exercise_overrides
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
