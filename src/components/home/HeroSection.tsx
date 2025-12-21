import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:py-32 bg-noise">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] animate-pulse-slow" />
        <div className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary animate-fade-in">
          <Sparkles className="h-4 w-4" />
          <span>6 exercises to master communication</span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl animate-slide-up">
          Transform Your{" "}
          <span className="text-gradient">Communication Skills</span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Build vocabulary agility, eliminate filler words, sharpen your word choice, and become a more confident communicator through interactive exercises.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Link to="/exercise/precision-swap">
            <Button variant="hero" size="xl">
              Start Training
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button variant="glass" size="xl" asChild>
            <a href="#exercises">
              Browse Exercises
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="rounded-xl glass p-4">
            <div className="font-display text-3xl text-primary">5</div>
            <div className="text-sm text-muted-foreground">Unique Exercises</div>
          </div>
          <div className="rounded-xl glass p-4">
            <div className="font-display text-3xl text-primary">5min</div>
            <div className="text-sm text-muted-foreground">Daily Practice</div>
          </div>
          <div className="rounded-xl glass p-4">
            <div className="font-display text-3xl text-primary">∞</div>
            <div className="text-sm text-muted-foreground">Growth Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
}
