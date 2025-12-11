import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Volume2, Clock, Moon, User, Shield } from "lucide-react";

export default function Settings() {
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
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Timer Sounds</div>
                  <div className="text-sm text-muted-foreground">Audio cues during exercises</div>
                </div>
                <Switch defaultChecked />
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
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Voice Feedback</div>
                  <div className="text-sm text-muted-foreground">Read feedback aloud</div>
                </div>
                <Switch />
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
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">Achievement Alerts</div>
                  <div className="text-sm text-muted-foreground">Celebrate your wins</div>
                </div>
                <Switch defaultChecked />
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
              Create an account to sync your progress across devices and unlock more features.
            </p>
            
            <Button variant="hero" size="lg" className="w-full">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
