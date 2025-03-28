
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import BuyMedicines from "./pages/BuyMedicines";
import MedicineDetail from "./pages/MedicineDetail";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";
import SellMedicine from "./pages/SellMedicine";
import DonateMedicine from "./pages/DonateMedicine";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buy" element={<BuyMedicines />} />
          <Route path="/medicine/:id" element={<MedicineDetail />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/sell" element={<SellMedicine />} />
          <Route path="/donate" element={<DonateMedicine />} />
          {/* These would be implemented in future iterations */}
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
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
