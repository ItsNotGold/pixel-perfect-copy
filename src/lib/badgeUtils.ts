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
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");

    // Check if already unlocked
    const { data: existing, error: fetchError } = await supabase
      .from("user_badges")
      .select("*")
      .eq("user_id", user.id)
      .eq("badge_id", badgeId)
      .maybeSingle();

    if (fetchError) throw fetchError;

    if (existing) {
      return { success: true, row: existing as UserBadgeRow, alreadyUnlocked: true };
    }

    // Insert new badge row
    const { data: inserted, error: insertError } = await supabase
      .from("user_badges")
      .insert([{ user_id: user.id, badge_id: badgeId }])
      .select()
      .single();

    if (insertError) throw insertError;

    // Broadcast event for UI
    if (inserted) {
      try {
        const evt = new CustomEvent("badge-unlocked", { detail: { badgeId, row: inserted } });
        window.dispatchEvent(evt);
      } catch (_) {
        // ignore if window not available
      }
    }

    return {
      success: true,
      row: inserted as UserBadgeRow,
      alreadyUnlocked: false,
    };
  } catch (error) {
    console.error("Error unlocking badge:", error);
    return { success: false, error };
  }
}

export async function fetchUserBadges(userId: string): Promise<UserBadgeRow[]> {
  const { data } = await supabase.from("user_badges").select("*").eq("user_id", userId);
  return (data as any[] as UserBadgeRow[]) || [];
}
