# Badge System — Implementation Notes

This file explains how the badge system is organized and how to add or modify badges.

Highlights
- Master badge list: `src/data/badges.ts` (single source of truth for UI). Multi-language descriptions (en/fr/es).
- Assets: SVGs are stored in `public/assets/badges/` and referenced by `imageUrl` in the badge objects.
- Client helpers: `src/lib/badgeUtils.ts` provides `unlockBadge(badgeId)` and `fetchUserBadges(userId)`.
- UI animation: `src/components/BadgeUnlockAnimation.tsx` plays a micro-animation and triggers a toast.
- Hook: `src/hooks/useBadges.tsx` provides a simple `unlock()` function and `ActiveAnimation` component for app-level placement.
- Server function: `supabase/functions/unlock-badge` is an edge function that upserts into `user_badges`.
- Migration: `migrations/20251218194000_create_user_badges_table.sql` creates the `user_badges` table and RLS policies.

Migration note: this system replaces the legacy `achievements` table. A follow-up migration should be run to optionally migrate existing `achievements` rows into `user_badges` (mapping achievement types to badge ids) and to eventually deprecate the old table.

Running the backfill migration (example):

1. Review `migrations/20251219200000_migrate_achievements_to_user_badges.sql` and adjust mappings if you have custom achievement types.
2. From your project root, run the SQL in your staging DB with psql or the Supabase CLI:
   - psql "<connection_string>" -f migrations/20251219200000_migrate_achievements_to_user_badges.sql
   - or with supabase CLI: supabase db query --file migrations/20251219200000_migrate_achievements_to_user_badges.sql
3. Verify results: SELECT COUNT(*) FROM user_badges; and spot-check a few user rows.

Be sure to run this in staging before production; the migration is idempotent because of ON CONFLICT DO NOTHING.


Basic Usage
1. To unlock a badge from client code:
   - import { unlockBadge } from '@/lib/badgeUtils'
   - await unlockBadge('completion_first_step_bronze')

2. To show animation at app-level, mount `const { ActiveAnimation } = useBadges()` near top-level (e.g., `App.tsx`).

Adding a new badge
1. Add the new object to `src/data/badges.ts` (must include all fields from the `Badge` interface).
2. Add an optimized SVG in `public/assets/badges/<id>.svg` and reference it in `imageUrl`.
3. Add any badge-specific unlock logic to `src/hooks/useProgress.tsx` or other logic handlers.
4. Add tests or document the behaviour in this file.

Access control and performance
- The `unlock-badge` function requires a valid Supabase auth token. It is idempotent (returns `alreadyUnlocked` when present).
- Use SVG assets and CSS/SVG animations for minimal CPU; defer Lottie for very elaborate effects.

Accessibility
- `BadgeUnlockAnimation` respects `prefers-reduced-motion`.
- Unlocks are announced with `aria-live` messages.

If you want, I can also:
- Generate richer Lottie JSON animations for platinum/gold unlocks
- Add an App-level listener that renders `ActiveAnimation` automatically when a `badge-unlocked` event is received
- Add DB triggers to push real-time notifications via Realtime or Postgres NOTIFY
