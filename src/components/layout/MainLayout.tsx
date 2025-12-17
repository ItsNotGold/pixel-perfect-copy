import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { LanguageSelector } from "@/components/LanguageSelector";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { exercises } from "@/data/exercises";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

import { PageTransition } from "@/components/PageTransition";

export function MainLayout({ children, className }: MainLayoutProps) {
  const location = useLocation();
  const match = location.pathname.match(/^\/exercise\/(?<id>[^/]+)/);
  const showLang = !!(match && exercises.some((e) => e.id === match.groups?.id));

  return (
    <div className="min-h-screen gradient-surface">
      <Sidebar />
      {showLang && (
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>
      )}
      <main className={cn("ml-64 min-h-screen transition-all duration-300", className)}>
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
}
