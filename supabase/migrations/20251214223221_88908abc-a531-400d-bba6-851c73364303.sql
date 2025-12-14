-- Create enum for subscription status
CREATE TYPE public.subscription_status AS ENUM ('active', 'canceled', 'past_due', 'trialing');

-- Create subscriptions table
CREATE TABLE public.subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  status subscription_status NOT NULL DEFAULT 'active',
  plan_type TEXT NOT NULL DEFAULT 'monthly',
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS policies for subscriptions
CREATE POLICY "Users can view their own subscription"
ON public.subscriptions
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own subscription"
ON public.subscriptions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own subscription"
ON public.subscriptions
FOR UPDATE
USING (auth.uid() = user_id);

-- Create admin_users table (users who get free premium access)
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  display_name TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admin_users (anyone can read to check if they're admin)
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow anyone to check if a display_name is in the admin list
CREATE POLICY "Anyone can check admin status"
ON public.admin_users
FOR SELECT
USING (true);

-- Create trigger for updated_at on subscriptions
CREATE TRIGGER update_subscriptions_updated_at
BEFORE UPDATE ON public.subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial admin user "Test"
INSERT INTO public.admin_users (display_name) VALUES ('Test');