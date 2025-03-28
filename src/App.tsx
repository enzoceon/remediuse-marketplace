
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuyMedicines from "./pages/BuyMedicines";
import MedicineDetail from "./pages/MedicineDetail";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/buy" element={<BuyMedicines />} />
        <Route path="/medicine/:id" element={<MedicineDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* These would be implemented in future iterations */}
        <Route path="/sell" element={<NotFound />} />
        <Route path="/donate" element={<NotFound />} />
        <Route path="/verification" element={<NotFound />} />
        <Route path="/help" element={<NotFound />} />
        <Route path="/emergency" element={<NotFound />} />
        <Route path="/partners" element={<NotFound />} />
        <Route path="/learn-more" element={<NotFound />} />
        <Route path="/login" element={<NotFound />} />
        <Route path="/register" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
