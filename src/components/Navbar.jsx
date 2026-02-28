import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white dark:bg-gray-900 border-b dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="block w-fit">
          <h1 className="font-bold text-xl text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
            School App
          </h1>
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 items-center">
          {/* <Link to="/" className="hover:text-blue-500 dark:text-gray-300">
            Home
          </Link> */}
          <Link to="/about" className="hover:text-blue-500 dark:text-gray-300">
            About
          </Link>
          <Link
            to="/activities"
            className="hover:text-blue-500 dark:text-gray-300"
          >
            Activities
          </Link>
          {/* <Link
            to="/allAnnouncement"
            className="hover:text-blue-500 dark:text-gray-300"
          >
            All Announcement
          </Link> */}
          <DarkModeToggle />
          <Link to="/login" className="dark:text-white">
            Login
          </Link>
          <Link
            to="/enrollNow"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Enroll
          </Link>
        </div>

        {/* Mobile Controls (Toggle + Burger) */}
        <div className="flex md:hidden items-center gap-4 ">
          <DarkModeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 dark:text-white focus:outline-none "
          >
            {/* Toggle Icon: Changes from Burger to X */}
            <svg
              className="w-8 h-7 bg-blue-700 rounded px-2 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* 'absolute' ensures it floats over the content.
          'inset-x-0' makes it full width.
      */}
      <div
        className={`${
          open
            ? "opacity-100 translate-y-1"
            : "opacity-0 -translate-x-50 pointer-events-none"
        } absolute inset-x-0 top-16 h-100 transition-all duration-300 ease-in-out md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-xl`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium dark:text-white  dark:border-gray-800 pb-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="text-lg font-medium dark:text-white  dark:border-gray-800 pb-2"
          >
            About
          </Link>
          <Link
            to="/activities"
            onClick={() => setOpen(false)}
            className="text-lg font-medium dark:text-white dark:border-gray-800 pb-2"
          >
            Activities
          </Link>
          {/* <Link
            to="/allAnnouncement"
            onClick={() => setOpen(false)}
            className="text-lg font-medium dark:text-white dark:border-gray-800 pb-2"
          >
            All Announcement
          </Link> */}

          <div className="flex flex-col gap-3 pt-2">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="w-full text-center py-2 rounded-lg border dark:text-white dark:border-gray-700"
            >
              Login
            </Link>
            <Link
              to="/enroll"
              onClick={() => setOpen(false)}
              className="w-full text-center py-3 rounded-lg bg-blue-600 text-white font-bold"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
