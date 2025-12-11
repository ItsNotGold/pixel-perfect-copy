-- Create profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create exercise_attempts table for detailed history
CREATE TABLE public.exercise_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  exercise_id TEXT NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  max_score INTEGER NOT NULL DEFAULT 0,
  answers JSONB,
  completed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_progress table for scores & completion
CREATE TABLE public.user_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  exercise_id TEXT NOT NULL,
  best_score INTEGER NOT NULL DEFAULT 0,
  times_completed INTEGER NOT NULL DEFAULT 0,
  last_completed_at TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, exercise_id)
);

-- Create user_streaks table for streaks & achievements
CREATE TABLE public.user_streaks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_activity_date DATE,
  total_exercises_completed INTEGER NOT NULL DEFAULT 0
);

-- Create achievements table
CREATE TABLE public.achievements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  achievement_type TEXT NOT NULL,
  earned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, achievement_type)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exercise_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_streaks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

-- Exercise attempts policies
CREATE POLICY "Users can view their own attempts" ON public.exercise_attempts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own attempts" ON public.exercise_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User progress policies
CREATE POLICY "Users can view their own progress" ON public.user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own progress" ON public.user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own progress" ON public.user_progress FOR UPDATE USING (auth.uid() = user_id);

-- User streaks policies
CREATE POLICY "Users can view their own streaks" ON public.user_streaks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own streaks" ON public.user_streaks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own streaks" ON public.user_streaks FOR UPDATE USING (auth.uid() = user_id);

-- Achievements policies
CREATE POLICY "Users can view their own achievements" ON public.achievements FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own achievements" ON public.achievements FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'display_name');
  
  INSERT INTO public.user_streaks (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for profile updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();