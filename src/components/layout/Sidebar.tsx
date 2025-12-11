import { useState } from "react";
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

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

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
