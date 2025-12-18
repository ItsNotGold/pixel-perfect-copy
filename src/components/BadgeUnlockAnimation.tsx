import React, { useEffect, useRef } from "react";
import type { Badge } from "@/data/badges";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Props = {
  badge: Badge;
  onComplete?: () => void;
  playSound?: boolean; // optional, app may block by user settings
};

export function BadgeUnlockAnimation({ badge, onComplete, playSound = true }: Props) {
  const toast = useToast();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Announce for screen readers
    const liveMsg = `${badge.name} unlocked. ${badge.description.en}`;
    const sr = document.createElement("div");
    sr.setAttribute("aria-live", "polite");
    sr.style.position = "absolute";
    sr.style.left = "-10000px";
    sr.innerText = liveMsg;
    document.body.appendChild(sr);
    setTimeout(() => document.body.removeChild(sr), 2000);

    // Optional sound, only if allowed and user has not enabled reduced motion.
    if (playSound && window && "Audio" in window) {
      try {
        const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!prefersReduced) {
          // Soft chime (short): using WebAudio would require assets; just create an oscillator for a short chime
          const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "sine";
          o.frequency.value = 700;
          g.gain.value = 0.0018; // very subtle
          o.connect(g);
          g.connect(ctx.destination);
          o.start();
          o.stop(ctx.currentTime + 0.12);
          setTimeout(() => ctx.close(), 400);
        }
      } catch (err) {
        // ignore audio errors silently
      }
    }

    // show a toast using existing toast system
    toast.toast({
      title: badge.name,
      description: badge.description.en,
      action: undefined,
    });

    // The visual animation will last ~900ms; call onComplete after
    const timer = setTimeout(() => {
      onComplete && onComplete();
    }, 900);

    return () => clearTimeout(timer);
  }, [badge, toast, onComplete, playSound]);

  return (
    <div
      ref={containerRef}
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
    >
      <div className="bg-transparent flex items-center justify-center">
        <div className="badge-anim relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
          <img
            src={badge.imageUrl}
            alt={badge.name}
            width={180}
            height={180}
            className="badge-img select-none"
            style={{ filter: badge.level === "gold" || badge.level === "platinum" ? "drop-shadow(0 8px 20px rgba(0,0,0,0.35))" : "none" }}
          />
          <div className="sparkles absolute inset-0 pointer-events-none" aria-hidden />
        </div>
      </div>

      <style>{`
        .badge-anim { transform: translateY(8px); }
        .badge-img { border-radius: 18px; transform-origin: center; animation: badge-pop 700ms cubic-bezier(.2,.9,.2,1); }
        .sparkles::after { content: ""; position: absolute; left: 50%; top: 12%; width: 12px; height: 12px; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.0) 60%); transform: translateX(-50%); animation: sparkle 900ms ease-out; opacity: 0.95; border-radius: 50%; filter: blur(0.2px); }

        @keyframes badge-pop {
          0% { transform: scale(0.6) rotate(-8deg); opacity: 0; }
          60% { transform: scale(1.06) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes sparkle {
          0% { transform: translate(-50%, 0) scale(0.1); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translate(-50%, -18px) scale(1.6); opacity: 0; }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .badge-img { animation: none !important; opacity: 1 !important; transform: none !important; }
          .sparkles::after { animation: none !important; display: none; }
        }
      `}</style>
    </div>
  );
}

export default BadgeUnlockAnimation;
