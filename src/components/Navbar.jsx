


import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ LOCK BODY SCROLL WHEN MENU IS OPEN
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup (important)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navClass = ({ isActive }) =>
    `relative transition font-medium ${
      isActive
        ? "text-blue-600 dark:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
        : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
    }`;

  return (
    <nav className="relative bg-white dark:bg-gray-900 border-b dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-gray-900 dark:text-white">
          PEARLY GATE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/activities" className={navClass}>Activities</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
          <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <DarkModeToggle />
          <NavLink to="/login" className="text-gray-700 dark:text-gray-300">
            Login
          </NavLink>
          <NavLink
            to="/enrollNow"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Enroll
          </NavLink>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <DarkModeToggle />
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 rounded-md bg-blue-600 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ MOBILE MENU – ONLY WHEN OPEN */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-lg z-40">
          <div className="flex flex-col p-4 space-y-4 overflow-y-auto">
            <NavLink to="/" end onClick={() => setOpen(false)} className={navClass}>
              Home
            </NavLink>
            <NavLink to="/activities" onClick={() => setOpen(false)} className={navClass}>
              Activities
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={navClass}>
              About
            </NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)} className={navClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={navClass}>
              Contact
            </NavLink>

            <div className="pt-4 space-y-3">
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="block text-center py-2 rounded-lg border dark:border-gray-700 dark:text-white"
              >
                Login
              </NavLink>

              <NavLink
                to="/enrollNow"
                onClick={() => setOpen(false)}
                className="block text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
              >
                Enroll Now
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}