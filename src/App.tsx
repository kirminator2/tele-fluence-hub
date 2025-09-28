import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Offers from "./pages/Offers";
import Statistics from "./pages/Statistics";
import Links from "./pages/Links";
import Finances from "./pages/Finances";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const Layout = () => (
  <>
    <Sidebar />
    <div className="flex-1 md:ml-64">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/links" element={<Links />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
);

export default App;
