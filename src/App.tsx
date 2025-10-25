import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import PoliceLogin from "./pages/police/Login";
import PoliceDashboard from "./pages/police/Dashboard";
import PoliceQRID from "./pages/police/QRID";
import PoliceAttendance from "./pages/police/Attendance";
import CitizenHome from "./pages/citizen/Home";
import CitizenVerify from "./pages/citizen/Verify";
import CitizenNearby from "./pages/citizen/Nearby";
import CitizenSOS from "./pages/citizen/SOS";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminOfficers from "./pages/admin/Officers";
import AdminAttendance from "./pages/admin/Attendance";
import AdminStations from "./pages/admin/Stations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          {/* Police Routes */}
          <Route path="/police/login" element={<PoliceLogin />} />
          <Route path="/police/dashboard" element={<PoliceDashboard />} />
          <Route path="/police/qr-id" element={<PoliceQRID />} />
          <Route path="/police/attendance" element={<PoliceAttendance />} />
          
          {/* Citizen Routes */}
          <Route path="/citizen/home" element={<CitizenHome />} />
          <Route path="/citizen/verify" element={<CitizenVerify />} />
          <Route path="/citizen/nearby" element={<CitizenNearby />} />
          <Route path="/citizen/sos" element={<CitizenSOS />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/officers" element={<AdminOfficers />} />
          <Route path="/admin/attendance" element={<AdminAttendance />} />
          <Route path="/admin/stations" element={<AdminStations />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
