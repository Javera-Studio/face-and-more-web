import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Leistungen from "./pages/Leistungen.tsx";
import Hautanalyse from "./pages/Hautanalyse.tsx";
import Akne from "./pages/Akne.tsx";
import Microneedling from "./pages/Microneedling.tsx";
import Fruchtsaeure from "./pages/Fruchtsaeure.tsx";
import AntiAging from "./pages/AntiAging.tsx";
import Problemhaut from "./pages/Problemhaut.tsx";
import Microblading from "./pages/Microblading.tsx";
import Gesichtsbehandlung from "./pages/Gesichtsbehandlung.tsx";
import UeberMich from "./pages/UeberMich.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/hautanalyse" element={<Hautanalyse />} />
          <Route path="/leistungen/akne" element={<Akne />} />
          <Route path="/leistungen/microneedling" element={<Microneedling />} />
          <Route path="/leistungen/fruchtsaeure" element={<Fruchtsaeure />} />
          <Route path="/leistungen/anti-aging" element={<AntiAging />} />
          <Route path="/leistungen/problemhaut" element={<Problemhaut />} />
          <Route path="/leistungen/microblading" element={<Microblading />} />
          <Route path="/leistungen/gesichtsbehandlung" element={<Gesichtsbehandlung />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
