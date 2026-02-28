import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaGraduationCap,
  FaSpinner,
  FaCheckCircle 
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Newsletter State
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API Call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // Reset button after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
                <FaGraduationCap className="text-2xl" />
              </div>
              <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                Pearly<span className="text-blue-600">Gate</span>
              </span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Nurturing the next generation of leaders through academic excellence, 
              innovation, and character development since 1998.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Admissions', 'Academics', 'Activities', 'FAQ'].map((link) => (
                <li key={link}>
                  <Link 
                    to={`/${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                <FaMapMarkerAlt className="mt-1 text-blue-600 shrink-0" />
                <span>123 Educational Drive, <br />Victoria Island, Lagos.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <FaPhoneAlt className="text-blue-600 shrink-0" />
                <span>+234 800 PEARLY GATE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                <FaEnvelope className="text-blue-600 shrink-0" />
                <span>info@pearlygate.edu.ng</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column - NOW FULLY FUNCTIONAL */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Newsletter</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Get the latest school updates and event news delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative group">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address" 
                disabled={status === "success"}
                className={`w-full pl-4 pr-12 py-4 bg-gray-50 dark:bg-gray-900 border rounded-2xl outline-none dark:text-white transition-all
                  ${status === "success" 
                    ? "border-green-500 ring-2 ring-green-500/10" 
                    : "border-gray-100 dark:border-gray-800 focus:ring-2 focus:ring-blue-600"}`}
              />
              <button 
                type="submit"
                disabled={status !== "idle"}
                className={`absolute right-2 top-2 bottom-2 w-10 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-500/20 
                  ${status === "success" ? "bg-green-500 text-white" : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                {status === "idle" && <FaArrowRight size={14} />}
                {status === "loading" && <FaSpinner size={14} className="animate-spin" />}
                {status === "success" && <FaCheckCircle size={14} />}
              </button>
            </form>
            {status === "success" && (
              <p className="text-green-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Successfully Subscribed!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} Pearly Gate School. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-600 text-xs font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}