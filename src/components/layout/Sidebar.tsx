import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { exercises } from "@/data/exercises";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Trophy,
  Settings,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useSettings } from "@/hooks/useSettings";
import { supabase } from "@/integrations/supabase/client";
import { parseAchievementId } from "@/data/achievements";

import { Avatar } from "@/components/ui/avatar";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { settings } = useSettings();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!user) return;
      try {
        const { data } = await (supabase as any).from('profiles').select('avatar_url').eq('user_id', user.id).maybeSingle();
        if (!mounted) return;
        setAvatarUrl(data?.avatar_url || null);
      } catch (err) {
        // ignore
      }
    })();
    return () => { mounted = false; };
  }, [user]);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen border-r border-border bg-sidebar transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
        {!isCollapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl text-sidebar-foreground">VerbFlow</span>
          </Link>
        )}
        {isCollapsed && (
          <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-3">
        {/* Home Link */}
        <Link
          to="/"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
            location.pathname === "/"
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent/50"
          )}
        >
          <Home className="h-5 w-5 shrink-0" />
          {!isCollapsed && <span>Home</span>}
        </Link>

        {/* Divider */}
        <div className="my-2 h-px bg-sidebar-border" />

        {/* Exercises Label */}
        {!isCollapsed && (
          <span className="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Exercises
          </span>
        )}

        {/* Exercise Links */}
        <div className="max-h-[calc(100vh-280px)] overflow-y-auto">
          {exercises.map((exercise) => {
            const Icon = exercise.icon;
            const isActive = location.pathname === exercise.path;

            return (
              <Link
                key={exercise.id}
                to={exercise.path}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br transition-transform duration-200 group-hover:scale-110",
                    exercise.color
                  )}
                >
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </div>
                {!isCollapsed && (
                  <span className="truncate">{exercise.shortTitle}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom Links */}
        <div className="mt-auto pt-2">
          <div className="h-px bg-sidebar-border mb-2" />

          <Link
            to="/progress"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
              location.pathname === "/progress"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <Trophy className="h-5 w-5 shrink-0 text-accent" />
            {!isCollapsed && <span>Progress</span>}
          </Link>

          <Link
            to="/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
              location.pathname === "/settings"
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            )}
          >
            <Settings className="h-5 w-5 shrink-0" />
            {!isCollapsed && <span>Settings</span>}
          </Link>
          {/* Profile / Sign In */}
          <div className="px-3 py-3">
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/account" className="flex items-center gap-3 flex-1">
                  <Avatar className="h-8 w-8">
                    {avatarUrl ? (
                      <img src={avatarUrl} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">{user?.user_metadata?.display_name?.[0] || user?.email?.[0]}</div>
                    )}
                  </Avatar>
                  {!isCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{user.user_metadata?.display_name || user.email}</div>
                      {settings?.profile?.selectedBadges?.length ? (
                        <div className="mt-1 flex items-center gap-2">
                          {settings.profile.selectedBadges.slice(0, 3).map((id) => {
                            const p = parseAchievementId(id);
                            const level = p.level || '';
                            const color = level === 'gold' ? 'bg-yellow-300' : level === 'silver' ? 'bg-slate-300' : level === 'bronze' ? 'bg-amber-300' : 'bg-muted';
                            return <div key={id} className={`h-4 w-4 rounded-full ${color} ring-1 ring-offset-1`} title={id} />;
                          })}
                        </div>
                      ) : null}
                    </div>
                  )}
                </Link>
                {!isCollapsed && <button onClick={() => signOut()} className="text-xs text-muted-foreground hover:underline">Sign out</button>}
              </div>
            ) : (
              <Link to="/auth" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-sidebar-accent/50">
                <Sparkles className="h-5 w-5" />
                {!isCollapsed && <span>Sign In</span>}
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Collapse Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 h-6 w-6 rounded-full border border-border bg-background shadow-sm hover:bg-accent"
      >
        {isCollapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>
    </aside>
  );
}
