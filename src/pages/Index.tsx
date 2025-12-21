import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ExerciseGrid } from "@/components/home/ExerciseGrid";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <HowItWorksSection />
      <ExerciseGrid />
      
      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>VerbFlow — Master the art of communication, one exercise at a time.</p>
        </div>
      </footer>
    </MainLayout>
  );
};

export default Index;
