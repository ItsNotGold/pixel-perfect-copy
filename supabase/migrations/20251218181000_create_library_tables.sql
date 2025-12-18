-- Create exercise_overrides table
CREATE TABLE public.exercise_overrides (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  exercise_id TEXT NOT NULL,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Ensure only one override per user/exercise
CREATE UNIQUE INDEX exercise_overrides_user_exercise_idx ON public.exercise_overrides (user_id, exercise_id) WHERE user_id IS NOT NULL;
CREATE UNIQUE INDEX exercise_overrides_global_exercise_idx ON public.exercise_overrides (exercise_id) WHERE user_id IS NULL;

-- Create word_details table
CREATE TABLE public.word_details (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  word TEXT NOT NULL,
  language TEXT NOT NULL,
  definition TEXT NOT NULL,
  example TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(word, language)
);

-- Enable RLS
ALTER TABLE public.exercise_overrides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.word_details ENABLE ROW LEVEL SECURITY;

-- Exercise Overrides Policies

-- Anyone can read global overrides or their own overrides
CREATE POLICY "View overrides" ON public.exercise_overrides
FOR SELECT USING (user_id IS NULL OR auth.uid() = user_id);

-- Premium users can manage their own overrides
-- Note: We trust the client for now, but RLS could check subscription status if we had a function
CREATE POLICY "Users can manage their own overrides" ON public.exercise_overrides
FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Admin users can manage global overrides (user_id IS NULL)
-- We need a way to check if the user is an admin in RLS.
-- Based on the existing schema, we have an admin_users table.
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users a
    JOIN public.profiles p ON p.display_name = a.display_name
    WHERE p.user_id = auth.uid()
  );
$$ LANGUAGE sql SECURITY DEFINER;

CREATE POLICY "Admins can manage global overrides" ON public.exercise_overrides
FOR ALL USING (public.is_admin() AND user_id IS NULL) WITH CHECK (public.is_admin() AND user_id IS NULL);

-- Word Details Policies

-- Anyone can read word details
CREATE POLICY "View word details" ON public.word_details
FOR SELECT USING (true);

-- Only admins can manage word details
CREATE POLICY "Admins can manage word details" ON public.word_details
FOR ALL USING (public.is_admin()) WITH CHECK (public.is_admin());

-- Update updated_at trigger for both tables
CREATE TRIGGER update_exercise_overrides_updated_at
BEFORE UPDATE ON public.exercise_overrides
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_word_details_updated_at
BEFORE UPDATE ON public.word_details
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
