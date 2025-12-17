# Migration verification & apply instructions ✅

This document contains safe instructions and SQL to apply the two migrations added:
- `20251215120000_normalize_user_progress_best_score.sql` — recompute `user_progress.best_score` as a percentage (0-100) from `exercise_attempts`.
- `20251215121000_dedupe_achievements_and_add_unique_index.sql` — dedupe `achievements` by normalized achievement_type and add a UNIQUE index on `(user_id, lower(trim(achievement_type)))`.

---

## Safety first: backup

Before running any migration, take a backup of affected tables (`achievements`, `user_progress`, `exercise_attempts`):

- Using `pg_dump` (replace placeholders):

  pg_dump --host=<DB_HOST> --port=<DB_PORT> --username=<DB_USER> --format=custom --file=backup_YYYYMMDD.dump --dbname=<DB_NAME> --table=public.achievements --table=public.user_progress --table=public.exercise_attempts

- Or create SQL dumps for the relevant tables:

  pg_dump --host=<DB_HOST> --port=<DB_PORT> --username=<DB_USER> --schema=public --table=public.achievements --table=public.user_progress --file=backup_tables.sql <DB_NAME>


## Applying the migrations

You can apply the SQL files directly with `psql` or from the Supabase SQL editor. Example with `psql`:

  psql "<CONNECTION_STRING>" -f supabase/migrations/20251215120000_normalize_user_progress_best_score.sql
  psql "<CONNECTION_STRING>" -f supabase/migrations/20251215121000_dedupe_achievements_and_add_unique_index.sql

If you use Supabase CLI or other migration tooling, run the appropriate apply command for your workflow.

---

## Pre-checks (optional but recommended)

1) Check for current duplicate achievements:

```sql
SELECT user_id, lower(trim(achievement_type)) AS normalized_type, COUNT(*) as cnt
FROM public.achievements
GROUP BY user_id, lower(trim(achievement_type))
HAVING COUNT(*) > 1
ORDER BY cnt DESC
LIMIT 50;
```

If this returns rows, it shows the duplicates the migration will remove.

2) Sample best_score distribution before normalization:

```sql
SELECT MIN(best_score) AS min_score, MAX(best_score) AS max_score, AVG(best_score)::numeric(10,2) AS avg_score
FROM public.user_progress;
```

If you see many values <= 1 (e.g., 0 or 1), it likely indicates scores stored on a 0–1 scale that will be scaled to percent.

---

## Post-migration verification SQL

1) Confirm no duplicate achievement types remain:

```sql
SELECT user_id, lower(trim(achievement_type)) AS normalized_type, COUNT(*) as cnt
FROM public.achievements
GROUP BY user_id, lower(trim(achievement_type))
HAVING COUNT(*) > 1;
```

This should return no rows.

2) Verify the unique index exists:

```sql
SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'achievements' AND indexdef ILIKE '%lower(trim(achievement_type))%';
```

3) Verify `user_progress.best_score` matches the best percent computed from `exercise_attempts`:

```sql
SELECT up.user_id, up.exercise_id, up.best_score, b.best_percent
FROM public.user_progress up
LEFT JOIN (
  SELECT user_id, exercise_id, ROUND(100.0 * MAX(score::numeric / NULLIF(max_score, 0)))::int AS best_percent
  FROM public.exercise_attempts
  GROUP BY user_id, exercise_id
) b ON up.user_id = b.user_id AND up.exercise_id = b.exercise_id
WHERE b.best_percent IS NOT NULL AND up.best_score <> b.best_percent
LIMIT 100;
```

This should return no rows once the migration has applied successfully and there are no mismatches.

4) Quick sanity counts:

```sql
SELECT COUNT(*) AS achievements, COUNT(DISTINCT user_id) AS users_with_achievements FROM public.achievements;
SELECT COUNT(*) AS progress_rows FROM public.user_progress;
```

---

## End-to-end checks (app-driven)

1) Create or use a test user. Sign in to the app.
2) Finish the multi-question exercises (Precision Swap 10/10, Reverse Definitions 10/10, Synonym Chain 5/5) and ensure the UI shows only a single attempt saved per completed series.
3) Visit the Progress page and confirm the total score is the sum of per-exercise percents (0–100 values summed across exercises as the app expects).
4) Visit Achievements. Unlock a new achievement and confirm it appears and the toast only shows once.
5) Update profile badges and avatar and verify they persist and show in the Sidebar.

---

If you'd like, I can prepare a single transactional SQL script that runs both changes and run through the checks line-by-line with you. I can also run these for you if you provide a short-lived Supabase connection string (temporary key) — otherwise I can guide you through each step.
