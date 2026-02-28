// // import { Link } from "react-router-dom";
// // import DarkModeToggle from "./DarkModeToggle";

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-white text-black px-10 py-4 flex justify-between items-center dark:bg-red-400">
// //       <h1 className="font-bold text-xl">School App</h1>

// //       <div className="flex gap-6">
// //         <Link to="/" className="hover:text-blue-500 font-medium">
// //           Home
// //         </Link>
// //         <Link to="/about" className="hover:text-blue-500 font-medium">
// //           About
// //         </Link>
// //         <Link to="/courses" className="hover:text-blue-500 font-medium">
// //           Courses
// //         </Link>
       
// //       </div>

// //       <div className="flex gap-1">
// //         <DarkModeToggle />
// //         <Link to="/login" className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-lg text-sm">
// //           Login
// //         </Link>
        
// //          <Link to="/enroll" className="hover:text-gray-200 bg-blue-500 hover:bg-blue-700 text-white font-medium px-3 py-2 rounded-lg text-sm">
// //           Enroll Now
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // }




// import { useState } from "react";
// import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <h1 className="font-bold text-xl text-gray-900 dark:text-white">
//           School App
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 items-center">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//           <Link to="/about" className="nav-link">
//             About
//           </Link>
//           <Link to="/courses" className="nav-link">
//             Courses
//           </Link>
//         </div>

//         {/* Desktop Actions */}
//         <div className="hidden md:flex items-center gap-3">
//           <DarkModeToggle />

//           <Link
//             to="/login"
//             className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
//           >
//             Login
//           </Link>

//           <Link
//             to="/enroll"
//             className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
//           >
//             Enroll Now
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//          <DarkModeToggle />
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-white dark:text-white bg-blue-700 px-2 py-1 rounded-lg"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden h-screen position-relative px-4 pb-4 space-y-2 flex flex-col bg-blue-700 dark:bg-gray-900">
//           <Link to="/" className="mobile-link" onClick={() => setOpen(false)}>
//             Home
//           </Link>
//           <Link to="/about" className="mobile-link" onClick={() => setOpen(false)}>
//             About
//           </Link>
//           <Link to="/courses" className="mobile-link" onClick={() => setOpen(false)}>
//             Courses
//           </Link>

//           <div className="flex gap-3 pt-3 flex-col items-start">
           

//             <Link
//               to="/login"
//               className="mobile-btn border"
//               onClick={() => setOpen(false)}
//             >
//               Login
//             </Link>

//             <Link
//               to="/enroll"
//               className="mobile-btn bg-blue-600 text-white"
//               onClick={() => setOpen(false)}
//             >
//               Enroll Now
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   // Helper for mobile links to close menu on click
//   const closeMenu = () => setOpen(false);

//   return (
//     <nav className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
          
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             <h1 className="font-bold text-2xl tracking-tight text-blue-600 dark:text-blue-400">
//               School App
//             </h1>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition-colors">Home</Link>
//             <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition-colors">About</Link>
//             <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition-colors">Courses</Link>
//           </div>

//           {/* Desktop Actions */}
//           <div className="hidden md:flex items-center gap-4">
//             <DarkModeToggle />
//             <Link to="/login" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">
//               Login
//             </Link>
//             <Link to="/enroll" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg">
//               Enroll Now
//             </Link>
//           </div>

//           {/* Mobile Right Side (Toggle + Burger) */}
//           <div className="flex md:hidden items-center gap-2">
//             <DarkModeToggle />
//             <button
//               onClick={() => setOpen(!open)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Animated Hamburger Icon */}
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 {open ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <div className={`${open ? "block" : "hidden"} md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800`}>
//         <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
//           <Link to="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Home</Link>
//           <Link to="/about" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">About</Link>
//           <Link to="/courses" onClick={closeMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800">Courses</Link>
          
//           <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4 flex flex-col gap-3">
//             <Link to="/login" onClick={closeMenu} className="w-full text-center py-2 text-gray-700 dark:text-gray-200 font-medium">
//               Login
//             </Link>
//             <Link to="/enroll" onClick={closeMenu} className="w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold">
//               Enroll Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white dark:bg-gray-900 border-b dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-bold text-xl text-gray-900 dark:text-white">
          School App
        </h1>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:text-blue-500 dark:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-blue-500 dark:text-gray-300">About</Link>
          <Link to="/courses" className="hover:text-blue-500 dark:text-gray-300">Courses</Link>
          <Link to="/allAnnouncement" className="hover:text-blue-500 dark:text-gray-300">All Announcement</Link>
          <DarkModeToggle />
          <Link to="/login" className="dark:text-white">Login</Link>
          <Link to="/enroll" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Enroll</Link>
        </div>

        {/* Mobile Controls (Toggle + Burger) */}
        <div className="flex md:hidden items-center gap-4 ">
          <DarkModeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 dark:text-white focus:outline-none "
          >
            {/* Toggle Icon: Changes from Burger to X */}
            <svg className="w-8 h-7 bg-blue-700 rounded px-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
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
          open ? "opacity-100 translate-y-1" : "opacity-0 -translate-x-50 pointer-events-none"
        } absolute inset-x-0 top-16 h-100 transition-all duration-300 ease-in-out md:hidden bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-xl`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-lg font-medium dark:text-white  dark:border-gray-800 pb-2">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="text-lg font-medium dark:text-white  dark:border-gray-800 pb-2">
            About
          </Link>
          <Link to="/courses" onClick={() => setOpen(false)} className="text-lg font-medium dark:text-white dark:border-gray-800 pb-2">
            Courses
          </Link>
          <Link to="/allAnnouncement" onClick={() => setOpen(false)} className="text-lg font-medium dark:text-white dark:border-gray-800 pb-2">
            All Announcement
          </Link>
          
          <div className="flex flex-col gap-3 pt-2">
            <Link to="/login" onClick={() => setOpen(false)} className="w-full text-center py-2 rounded-lg border dark:text-white dark:border-gray-700">
              Login
            </Link>
            <Link to="/enroll" onClick={() => setOpen(false)} className="w-full text-center py-3 rounded-lg bg-blue-600 text-white font-bold">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}