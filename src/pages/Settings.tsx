import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Volume2, Clock, User } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { settings, setSettings, save, loading } = useSettings();
  const { toast } = useToast();

  const update = async (mutator: (s: typeof settings) => typeof settings) => {
    const next = mutator(settings);
    setSettings(next);
    const { error } = await save(next);
    if (error) toast({ title: "Failed to save settings" });
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-2xl px-6 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="mb-2 font-display text-3xl text-foreground">Settings</h1>
          <p className="text-muted-foreground">Customize your VerbFlow experience</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Practice Settings */}
          <div className="rounded-2xl glass p-6 animate-slide-up">
            <h2 className="mb-4 font-display text-lg text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Practice Settings
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Daily Reminders</div>
                  <div className="text-sm text-muted-foreground">Get notified to practice</div>
                </div>
                <Switch checked={settings.practice.dailyReminders} onCheckedChange={(v) => update((s) => ({ ...s, practice: { ...s.practice, dailyReminders: v } }))} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Timer Sounds</div>
                  <div className="text-sm text-muted-foreground">Audio cues during exercises</div>
                </div>
                <Switch checked={settings.practice.timerSounds} onCheckedChange={(v) => update((s) => ({ ...s, practice: { ...s.practice, timerSounds: v } }))} />
              </div>
            </div>
          </div>

          {/* Audio Settings */}
          <div className="rounded-2xl glass p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="mb-4 font-display text-lg text-foreground flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-primary" />
              Audio
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Sound Effects</div>
                  <div className="text-sm text-muted-foreground">Feedback sounds for actions</div>
                </div>
                <Switch checked={settings.audio.soundEffects} onCheckedChange={(v) => update((s) => ({ ...s, audio: { ...s.audio, soundEffects: v } }))} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Voice Feedback</div>
                  <div className="text-sm text-muted-foreground">Read feedback aloud</div>
                </div>
                <Switch checked={settings.audio.voiceFeedback} onCheckedChange={(v) => update((s) => ({ ...s, audio: { ...s.audio, voiceFeedback: v } }))} />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl glass p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="mb-4 font-display text-lg text-foreground flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Streak Reminders</div>
                  <div className="text-sm text-muted-foreground">Don't lose your streak!</div>
                </div>
                <Switch checked={settings.notifications.streakReminders} onCheckedChange={(v) => update((s) => ({ ...s, notifications: { ...s.notifications, streakReminders: v } }))} />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Achievement Alerts</div>
                  <div className="text-sm text-muted-foreground">Celebrate your wins</div>
                </div>
                <Switch checked={settings.notifications.achievementAlerts} onCheckedChange={(v) => update((s) => ({ ...s, notifications: { ...s.notifications, achievementAlerts: v } }))} />
              </div>
            </div>
          </div>

          {/* Account Section (Placeholder) */}
          <div className="rounded-2xl glass p-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="mb-4 font-display text-lg text-foreground flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Account
            </h2>
            
            <p className="mb-4 text-sm text-muted-foreground">
              {user ? "Manage your account and sync your settings across devices." : "Create an account to sync your progress across devices and unlock more features."}
            </p>

            <Button variant="hero" size="lg" className="w-full" onClick={() => navigate(user ? "/account" : "/auth")}>
              {user ? "Manage Account" : "Create Account"}
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
