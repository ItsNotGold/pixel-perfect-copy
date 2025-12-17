import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export type SettingsShape = {
  practice: {
    dailyReminders: boolean;
    timerSounds: boolean;
  };
  audio: {
    soundEffects: boolean;
    voiceFeedback: boolean;
  };
  notifications: {
    streakReminders: boolean;
    achievementAlerts: boolean;
  };
  appearance?: {
    theme: "light" | "dark" | "system";
  };
  profile?: {
    selectedBadges?: string[];
    bio?: string;
  };
};

export const DEFAULT_SETTINGS: SettingsShape = {
  practice: { dailyReminders: false, timerSounds: true },
  audio: { soundEffects: true, voiceFeedback: false },
  notifications: { streakReminders: true, achievementAlerts: true },
  appearance: { theme: "system" },
  profile: { selectedBadges: [], bio: "" },
};

const LOCAL_KEY = "verbflow_settings";

export function useSettings() {
  const { user } = useAuth();
  const [settings, setSettings] = useState<SettingsShape>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const local = localStorage.getItem(LOCAL_KEY);
    if (local) {
      try {
        const parsed = JSON.parse(local);
        setSettings((s) => ({ ...s, ...parsed }));
      } catch (err) {
        // ignore
      }
    }

    if (!user) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        // Using any to work around types not being regenerated yet
        const result = await (supabase as any)
          .from("user_settings")
          .select("settings")
          .eq("user_id", user.id)
          .single();
        
        if (!result.error && result.data?.settings) {
          const settingsData = result.data.settings as SettingsShape;
          setSettings((s) => ({ ...s, ...settingsData }));
          localStorage.setItem(LOCAL_KEY, JSON.stringify({ ...settings, ...settingsData }));
        }
      } catch (err) {
        console.error("Failed to load settings", err);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Apply theme to document root when settings change. Supports 'system' to follow device/browser preference.
  useEffect(() => {
    try {
      const theme = settings.appearance?.theme || "system";

      const apply = (value: string) => {
        if (typeof document === "undefined") return;
        if (value === "system") {
          const prefersDark = typeof window !== "undefined" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
          document.documentElement.classList.toggle("dark", Boolean(prefersDark));
        } else {
          document.documentElement.classList.toggle("dark", value === "dark");
        }
      };

      apply(theme);

      // Listen to changes only when theme === 'system'
      const mql = typeof window !== "undefined" ? window.matchMedia?.("(prefers-color-scheme: dark)") : null;
      const listener = (e: MediaQueryListEvent | MediaQueryList) => {
        // Only respond when user preference is system
        if ((settings.appearance?.theme || "system") !== "system") return;
        const matches = 'matches' in e ? e.matches : (mql ? mql.matches : false);
        if (typeof document !== "undefined") document.documentElement.classList.toggle("dark", Boolean(matches));
      };

      if (mql && (mql as any).addEventListener) {
        (mql as any).addEventListener("change", listener);
      } else if (mql && (mql as any).addListener) {
        (mql as any).addListener(listener);
      }

      return () => {
        if (mql && (mql as any).removeEventListener) {
          (mql as any).removeEventListener("change", listener);
        } else if (mql && (mql as any).removeListener) {
          (mql as any).removeListener(listener);
        }
      };
    } catch (err) {
      // ignore
    }
  }, [settings.appearance?.theme]);

  const save = async (next: SettingsShape) => {
    setSettings(next);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next));

    if (!user) return { error: null };

    try {
      // Using any to work around types not being regenerated yet
      const result = await (supabase as any)
        .from("user_settings")
        .upsert({ user_id: user.id, settings: next }, { onConflict: "user_id" });
      return { error: result.error };
    } catch (err) {
      console.error("Failed to save settings", err);
      return { error: err };
    }
  };

  return { settings, setSettings, save, loading };
}
