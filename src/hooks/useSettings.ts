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
};

export const DEFAULT_SETTINGS: SettingsShape = {
  practice: { dailyReminders: false, timerSounds: true },
  audio: { soundEffects: true, voiceFeedback: false },
  notifications: { streakReminders: true, achievementAlerts: true },
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
        const { data, error } = await supabase
          .from("user_settings")
          .select("settings")
          .eq("user_id", user.id)
          .single();
        if (!error && data?.settings) {
          setSettings((s) => ({ ...s, ...data.settings }));
          localStorage.setItem(LOCAL_KEY, JSON.stringify({ ...settings, ...data.settings }));
        }
      } catch (err) {
        console.error("Failed to load settings", err);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const save = async (next: SettingsShape) => {
    setSettings(next);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next));

    if (!user) return { error: null };

    try {
      const { error } = await supabase
        .from("user_settings")
        .upsert({ user_id: user.id, settings: next }, { onConflict: "user_id" });
      return { error };
    } catch (err) {
      console.error("Failed to save settings", err);
      return { error: err };
    }
  };

  return { settings, setSettings, save, loading };
}
