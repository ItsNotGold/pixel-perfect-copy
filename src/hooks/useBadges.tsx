import React from "react";
import { unlockBadge } from "@/lib/badgeUtils";
import BadgeUnlockAnimation from "@/components/BadgeUnlockAnimation";
import { BADGES } from "@/data/badges";

export function useBadges() {
  const [active, setActive] = React.useState<string | null>(null);
  const [lastUnlocked, setLastUnlocked] = React.useState<any | null>(null);

  async function unlock(badgeId: string) {
    const result = await unlockBadge(badgeId);
    if (!result.success) return result;

    if (!result.alreadyUnlocked) {
      setActive(badgeId);
      setLastUnlocked(result.row ?? null);
    }

    return result;
  }

  function onAnimationComplete() {
    setActive(null);
  }

  const ActiveAnimation = active ? (
    <BadgeUnlockAnimation
      badge={BADGES.find((b) => b.id === active)!}
      onComplete={onAnimationComplete}
    />
  ) : null;

  return { unlock, ActiveAnimation, lastUnlocked };
}

export default useBadges;
