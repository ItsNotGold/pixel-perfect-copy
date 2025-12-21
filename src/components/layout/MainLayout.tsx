import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-body text-foreground selection:bg-primary/30">
      {/* Nature Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop")',
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      />
      
      {/* Gradient Overlay for Readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80 pointer-events-none backdrop-blur-[2px]" />

      {/* Glass Texture Overlay (Noise) */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* We can add a global header here if needed later, but existing app might handle it per page */}
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-700">
           {children}
        </main>
      </div>

       {/* Toast Notifications */}
      <Toaster />
      <Sonner position="top-center" />
    </div>
  );
};
