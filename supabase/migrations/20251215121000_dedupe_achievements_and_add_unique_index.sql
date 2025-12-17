-- Deduplicate `achievements` by normalized `achievement_type` (lower(trim())) and add a UNIQUE index

BEGIN;

-- Keep the earliest (min id) row for each (user_id, normalized_type)
CREATE TEMP TABLE tmp_keep AS
SELECT MIN(id) AS id
FROM public.achievements
GROUP BY user_id, lower(trim(achievement_type));

-- Delete duplicates
DELETE FROM public.achievements a
WHERE a.id NOT IN (SELECT id FROM tmp_keep);

-- Add a UNIQUE index on normalized achievement_type to prevent future duplicates
CREATE UNIQUE INDEX IF NOT EXISTS achievements_user_normalized_type_unique ON public.achievements (user_id, (lower(trim(achievement_type))));

COMMIT;
