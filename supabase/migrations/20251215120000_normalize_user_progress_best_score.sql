-- Recompute user_progress.best_score as a percentage (0-100)
-- Uses historical exercise_attempts to derive the maximum percent achieved per exercise per user.

BEGIN;

-- Compute best percent per user & exercise from attempts and update user_progress
WITH bests AS (
  SELECT
    user_id,
    exercise_id,
    ROUND(100.0 * MAX((score::numeric) / NULLIF(max_score, 0)))::int AS best_percent
  FROM public.exercise_attempts
  GROUP BY user_id, exercise_id
)
UPDATE public.user_progress up
SET best_score = b.best_percent
FROM bests b
WHERE up.user_id = b.user_id AND up.exercise_id = b.exercise_id;

COMMIT;
