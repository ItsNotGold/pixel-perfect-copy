import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { LanguageSelector } from "@/components/LanguageSelector";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="min-h-screen gradient-surface">
      <Sidebar />
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      <main className={cn("ml-64 min-h-screen transition-all duration-300", className)}>
        {children}
      </main>
    </div>
  );
}
