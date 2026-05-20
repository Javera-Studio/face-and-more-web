import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
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
import Wimpernkranzverdichtung from "./pages/Wimpernkranzverdichtung";
import Hautcoaching from "./pages/Hautcoaching.tsx";
import JugendlicheHaut from "./pages/hautcoaching/JugendlicheHaut.tsx";
import ReifeHaut from "./pages/hautcoaching/ReifeHaut.tsx";
import AllgemeineHautberatung from "./pages/hautcoaching/AllgemeineHautberatung.tsx";
import Produkte from "./pages/Produkte.tsx";
import ProdReinigung from "./pages/produkte/Reinigung.tsx";
import ProdSeren from "./pages/produkte/Seren.tsx";
import ProdAntiAging from "./pages/produkte/AntiAging.tsx";
import ProdProblemhaut from "./pages/produkte/Problemhaut.tsx";
import ProdFeuchtigkeit from "./pages/produkte/Feuchtigkeit.tsx";
import ProdSonnenschutz from "./pages/produkte/Sonnenschutz.tsx";
import ProdKoerperpflege from "./pages/produkte/Koerperpflege.tsx";
import ProdSets from "./pages/produkte/Sets.tsx";
import ProdZubehoer from "./pages/produkte/Zubehoer.tsx";
import Preise from "./pages/Preise.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/leistungen/wimpernkranzverdichtung" element={<Wimpernkranzverdichtung />} />
          <Route path="/leistungen/gesichtsbehandlung" element={<Gesichtsbehandlung />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/produkte" element={<Produkte />} />
          <Route path="/produkte/reinigung" element={<ProdReinigung />} />
          <Route path="/produkte/seren" element={<ProdSeren />} />
          <Route path="/produkte/anti-aging" element={<ProdAntiAging />} />
          <Route path="/produkte/problemhaut" element={<ProdProblemhaut />} />
          <Route path="/produkte/feuchtigkeit" element={<ProdFeuchtigkeit />} />
          <Route path="/produkte/sonnenschutz" element={<ProdSonnenschutz />} />
          <Route path="/produkte/koerperpflege" element={<ProdKoerperpflege />} />
          <Route path="/produkte/sets" element={<ProdSets />} />
          <Route path="/produkte/zubehoer" element={<ProdZubehoer />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/hautcoaching" element={<Hautcoaching />} />
          <Route path="/hautcoaching/jugendliche-haut" element={<JugendlicheHaut />} />
          <Route path="/hautcoaching/reife-haut" element={<ReifeHaut />} />
          <Route path="/hautcoaching/allgemeine-hautberatung" element={<AllgemeineHautberatung />} />
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
