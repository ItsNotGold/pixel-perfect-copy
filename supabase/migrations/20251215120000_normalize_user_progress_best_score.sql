-- Normalize user_progress.best_score to a percentage (0-100) based on historical attempts
-- For each user/exercise, compute the highest percent (score/max_score * 100) from exercise_attempts
-- and update user_progress.best_score accordingly.

update public.user_progress up
set best_score = sub.best_percent
from (
  select
    ea.user_id,
    ea.exercise_id,
    max(CAST(ROUND(100.0 * ea.score / nullif(ea.max_score, 0)) AS integer)) as best_percent
  from public.exercise_attempts ea
  group by ea.user_id, ea.exercise_id
) sub
where up.user_id = sub.user_id
  and up.exercise_id = sub.exercise_id
  and (up.best_score is null or up.best_score <> sub.best_percent);
