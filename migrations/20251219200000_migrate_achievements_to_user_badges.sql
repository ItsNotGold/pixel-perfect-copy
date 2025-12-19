-- Migrate certain legacy rows from achievements to user_badges
-- NOTE: Run this once after deploying the new schema. Review results and delete legacy table if desired.

-- Basic mappings for known legacy achievement types
insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'completion_first_step_bronze', created_at
from achievements
where lower(trim(achievement_type)) = 'first_exercise'
on conflict (user_id, badge_id) do nothing;

insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'completion_committed_silver', created_at
from achievements
where lower(trim(achievement_type)) = 'ten_exercises'
on conflict (user_id, badge_id) do nothing;

insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'completion_fifty_bronze', created_at
from achievements
where lower(trim(achievement_type)) = 'fifty_exercises'
on conflict (user_id, badge_id) do nothing;

insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'completion_marathon_gold', created_at
from achievements
where lower(trim(achievement_type)) = 'hundred_exercises'
on conflict (user_id, badge_id) do nothing;

-- Streaks
insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'streak_short_bronze', created_at
from achievements
where lower(trim(achievement_type)) = 'streak_3'
on conflict (user_id, badge_id) do nothing;

insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'streak_daily_week_bronze', created_at
from achievements
where lower(trim(achievement_type)) = 'streak_7'
on conflict (user_id, badge_id) do nothing;

insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'streak_monthly_consistency_silver', created_at
from achievements
where lower(trim(achievement_type)) = 'streak_30'
on conflict (user_id, badge_id) do nothing;

-- Totals: total:bronze|silver|gold
insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'total_progress_bronze', created_at
from achievements
where lower(trim(achievement_type)) = 'total:bronze'
on conflict (user_id, badge_id) do nothing;

insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'total_progress_silver', created_at
from achievements
where lower(trim(achievement_type)) = 'total:silver'
on conflict (user_id, badge_id) do nothing;

insert into user_badges (user_id, badge_id, unlocked_at)
select user_id, 'total_progress_gold', created_at
from achievements
where lower(trim(achievement_type)) = 'total:gold'
on conflict (user_id, badge_id) do nothing;

-- Exercise-specific achievements: convert exercise:{exercise_id}:{level} into Mastery badge when possible
-- This query attempts to match achievement_type pattern and insert corresponding mastery badges
insert into user_badges (user_id, badge_id, unlocked_at)
select a.user_id, m.id, a.created_at
from achievements a
join (
  select id, level, unnest(exercises) as exercise_id from (
    select id, level, exercises from user_defined_badge_helper()
  ) x
) m on (
  lower(trim(a.achievement_type)) = concat('exercise:', m.exercise_id, ':', m.level)
)
on conflict (user_id, badge_id) do nothing;

-- Note: The user_defined_badge_helper() referenced above is a placeholder indicating that this migration
-- could be extended to build a temporary table of badge ids -> exercise_id -> level mappings before joining.
-- For safety, verify and run this migration in a staging environment before production.
