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
    theme: "light" | "dark";
  };
};

export const DEFAULT_SETTINGS: SettingsShape = {
  practice: { dailyReminders: false, timerSounds: true },
  audio: { soundEffects: true, voiceFeedback: false },
  notifications: { streakReminders: true, achievementAlerts: true },
  appearance: { theme: "light" },
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

  // Apply theme to document root when settings change
  useEffect(() => {
    try {
      const theme = settings.appearance?.theme || "light";
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }
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
