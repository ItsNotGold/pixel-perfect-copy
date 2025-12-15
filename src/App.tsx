import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SubscriptionProvider } from "@/hooks/useSubscription";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import PrecisionSwap from "./pages/exercises/PrecisionSwap";
import FillerWordEliminator from "./pages/exercises/FillerWordEliminator";
import ReverseDefinitions from "./pages/exercises/ReverseDefinitions";
import SynonymSpeedChain from "./pages/exercises/SynonymSpeedChain";
import WordIncorporation from "./pages/exercises/WordIncorporation";
import Progress from "./pages/Progress";
import ExerciseStats from "./pages/ExerciseStats";
import Settings from "./pages/Settings";
import ManageAccount from "./pages/ManageAccount";
import Subscription from "./pages/Subscription";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <SubscriptionProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner position="top-center" />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/exercise/precision-swap" element={<PrecisionSwap />} />
                <Route path="/exercise/filler-word-eliminator" element={<FillerWordEliminator />} />
                <Route path="/exercise/reverse-definitions" element={<ReverseDefinitions />} />
                <Route path="/exercise/synonym-speed-chain" element={<SynonymSpeedChain />} />
                <Route path="/exercise/word-incorporation" element={<WordIncorporation />} />
                <Route path="/exercise/:id/stats" element={<ExerciseStats />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/account" element={<ManageAccount />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </SubscriptionProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
