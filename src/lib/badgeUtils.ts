import { supabase } from "@/integrations/supabase/client";
import type { Badge } from "@/data/badges";

export type UserBadgeRow = {
  id: string;
  user_id: string;
  badge_id: string;
  unlocked_at: string;
  metadata?: any;
};

export async function unlockBadge(badgeId: string): Promise<{ success: boolean; row?: UserBadgeRow; error?: any; alreadyUnlocked?: boolean }> {
  try {
    // Prefer edge function for server-side validation and consistency
    const { data, error } = await supabase.functions.invoke("unlock-badge", {
      body: JSON.stringify({ badge_id: badgeId }),
    });

    if (error) return { success: false, error };

    // data may be a JSON string; attempt to parse
    let parsed;
    try {
      parsed = typeof data === "string" ? JSON.parse(data) : data;
    } catch (err) {
      parsed = data;
    }

    return {
      success: true,
      row: parsed?.row ?? undefined,
      alreadyUnlocked: parsed?.alreadyUnlocked ?? false,
    };
  } catch (error) {
    return { success: false, error };
  }
}

export async function fetchUserBadges(userId: string): Promise<UserBadgeRow[]> {
  const { data } = await supabase.from<UserBadgeRow>("user_badges").select("*").eq("user_id", userId);
  return (data as UserBadgeRow[]) || [];
}
