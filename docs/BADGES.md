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
