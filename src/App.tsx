import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Materii from "./pages/Materii";
import SubjectPage from "./pages/SubjectPage";
import LessonPage from "./pages/LessonPage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Creators from "./pages/Creators";
import About from "./pages/About";
import Ajutor from "./pages/Ajutor";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/materii" element={<Materii />} />
            <Route path="/materii/:subjectId" element={<SubjectPage />} />
            <Route path="/materii/:subjectId/:levelId/lectie/:lessonId" element={<LessonPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/profil" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/creatori" element={<Creators />} />
            <Route path="/despre" element={<About />} />
            <Route path="/ajutor" element={<Ajutor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termeni" element={<Terms />} />
            <Route path="/confidentialitate" element={<Privacy />} />
            <Route path="/premium" element={<Premium />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
