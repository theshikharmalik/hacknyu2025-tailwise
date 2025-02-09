
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Food from "./pages/Food";
import Diagnose from "./pages/Diagnose";
import Health from "./pages/Health";
import Shopping from "./pages/Shopping";
import Emergency from "./pages/services/Emergency";
import Grooming from "./pages/services/Grooming";
import PetSitting from "./pages/services/PetSitting";
import Adoption from "./pages/services/Adoption";
import Connect from "./pages/Connect";
import Services from "./pages/Services";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/food" element={<Food />} />
          <Route path="/diagnose" element={<Diagnose />} />
          <Route path="/health" element={<Health />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/emergency" element={<Emergency />} />
          <Route path="/services/grooming" element={<Grooming />} />
          <Route path="/services/pet-sitting" element={<PetSitting />} />
          <Route path="/services/adoption" element={<Adoption />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
