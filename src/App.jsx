import { Routes, Route } from "react-router-dom";

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
import CountUp from "react-countup";

// Dashboards
import StudentDashboard from "./dashboard/StudentDashboard";
import AdminDashboard from "./dashboard/AdminDashboard";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="flex-grow">
        <Routes>
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
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
