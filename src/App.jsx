import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EnrollNow from "./pages/EnrollNow";
import Activities from "./pages/Activities";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AllAnnouncement from "./pages/AllAnnouncement";
import ChoosePearlyGate from "./pages/ChoosePearlyGate";
import AllFaq from "./pages/AllFaq";
import Gallery from "./pages/Gallery";
import CountUp from "./pages/CountUp";
import NotFound from "./pages/NotFound";

// Dashboards
import StudentDashboard from "./dashboard/StudentDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/**
 * PROTECTED ROUTE COMPONENT
 * Redirects to login if not authenticated.
 * Redirects to Home if the role doesn't match.
 */
const ProtectedRoute = ({ children, allowedRole }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && currentUser.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/enrollNow" element={<EnrollNow />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allAnnouncement" element={<AllAnnouncement />} />
          <Route path="/choosePearlyGate" element={<ChoosePearlyGate />} />
          <Route path="/countup" element={<CountUp />} />
          <Route path="/faqs" element={<AllFaq />} />
          <Route path="/gallery" element={<Gallery />} />

          {/* Student Protected Route */}
          <Route 
            path="/studentDashboard" 
            element={
              <ProtectedRoute allowedRole="student">
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Admin Protected Route */}
          <Route 
            path="/adminDashboard" 
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />

          {/* 404 page - catches any broken links */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}