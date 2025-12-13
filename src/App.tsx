import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import PrecisionSwap from "./pages/exercises/PrecisionSwap";
import RapidContextSwitch from "./pages/exercises/RapidContextSwitch";
import FillerWordEliminator from "./pages/exercises/FillerWordEliminator";
import OneMinuteTalks from "./pages/exercises/OneMinuteTalks";
import ReverseDefinitions from "./pages/exercises/ReverseDefinitions";
import NarrativePuzzle from "./pages/exercises/NarrativePuzzle";
import ToneTransformer from "./pages/exercises/ToneTransformer";
import SynonymSpeedChain from "./pages/exercises/SynonymSpeedChain";
import QuestionCrafting from "./pages/exercises/QuestionCrafting";
import RepairRephrase from "./pages/exercises/RepairRephrase";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner position="top-center" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/exercise/precision-swap" element={<PrecisionSwap />} />
              <Route path="/exercise/rapid-context-switch" element={<RapidContextSwitch />} />
              <Route path="/exercise/filler-word-eliminator" element={<FillerWordEliminator />} />
              <Route path="/exercise/one-minute-talks" element={<OneMinuteTalks />} />
              <Route path="/exercise/reverse-definitions" element={<ReverseDefinitions />} />
              <Route path="/exercise/narrative-puzzle" element={<NarrativePuzzle />} />
              <Route path="/exercise/tone-transformer" element={<ToneTransformer />} />
              <Route path="/exercise/synonym-speed-chain" element={<SynonymSpeedChain />} />
              <Route path="/exercise/question-crafting" element={<QuestionCrafting />} />
              <Route path="/exercise/repair-rephrase" element={<RepairRephrase />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
