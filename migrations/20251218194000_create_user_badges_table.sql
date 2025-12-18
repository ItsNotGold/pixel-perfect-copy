-- Create user_badges table to track unlocked badges per user

create table if not exists user_badges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  badge_id text not null,
  unlocked_at timestamptz not null default now(),
  metadata jsonb default '{}'::jsonb,
  constraint user_badge_unique unique (user_id, badge_id)
);

create index if not exists idx_user_badges_user_id on user_badges (user_id);
create index if not exists idx_user_badges_badge_id on user_badges (badge_id);

-- Enable Row Level Security and policy for authenticated users to insert/select their own rows
alter table user_badges enable row level security;

create policy "allow authenticated inserts" on user_badges
  for insert
  with check ( auth.uid() = user_id );

create policy "allow authenticated select" on user_badges
  for select
  using ( auth.uid() = user_id );

create policy "allow authenticated delete" on user_badges
  for delete
  using ( auth.uid() = user_id );

-- Backfill with any existing achievements if needed (left as manual step)
-- Note: ensure pgcrypto extension is enabled in your database for gen_random_uuid()
