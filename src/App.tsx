
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Stories from "./pages/Stories";
import SubmitStory from "./pages/SubmitStory";
import DoctorFinder from "./pages/DoctorFinder";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import ResourceDetails from "./pages/ResourceDetails";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTop";

// Import our updated CSS
import "./App.css";
import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/submit-story" element={<SubmitStory />} />
          <Route path="/doctors" element={<DoctorFinder />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/resources/:type" element={<ResourceDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
