import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { LanguageProvider } from "./contexts/LanguageContext";
import { translations } from "./locales/translations";
import Landing from "./pages/Landing";
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
        <LanguageProvider translations={translations}>
          <Layout />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const Layout = () => (
  <Routes>
    {/* English routes */}
    <Route path="/" element={<Landing />} />
    <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
    <Route path="/offers" element={<DashboardLayout><Offers /></DashboardLayout>} />
    <Route path="/statistics" element={<DashboardLayout><Statistics /></DashboardLayout>} />
    <Route path="/links" element={<DashboardLayout><Links /></DashboardLayout>} />
    <Route path="/finances" element={<DashboardLayout><Finances /></DashboardLayout>} />
    <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
    
    {/* Russian routes */}
    <Route path="/ru" element={<Landing />} />
    <Route path="/ru/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
    <Route path="/ru/offers" element={<DashboardLayout><Offers /></DashboardLayout>} />
    <Route path="/ru/statistics" element={<DashboardLayout><Statistics /></DashboardLayout>} />
    <Route path="/ru/links" element={<DashboardLayout><Links /></DashboardLayout>} />
    <Route path="/ru/finances" element={<DashboardLayout><Finances /></DashboardLayout>} />
    <Route path="/ru/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
    
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Sidebar />
    <div className="flex-1 md:ml-64">
      {children}
    </div>
  </>
);

export default App;
