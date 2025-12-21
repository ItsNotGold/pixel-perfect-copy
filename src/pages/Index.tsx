
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ExerciseGrid } from "@/components/home/ExerciseGrid";
const Index = () => {
  return (
    <div className="space-y-12 pb-16">
      <div className="animate-fade-up opacity-0" style={{ animationFillMode: 'forwards' }}>
        <HeroSection />
      </div>
      
      <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <HowItWorksSection />
      </div>
      
      <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
        <ExerciseGrid />
      </div>
      
      {/* Footer */}
      <footer className="animate-fade-up opacity-0 border-t border-border/40 px-6 py-8" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground/80">
          <p>VerbFlow — Master the art of communication, one exercise at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
