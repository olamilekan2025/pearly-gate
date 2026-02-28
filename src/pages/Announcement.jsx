import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight, FaBullhorn } from "react-icons/fa";

export default function Announcements() {
  const allAnnouncements = [
    {
      id: 1,
      title: "New Academic Session 2025/2026",
      date: "Aug 15, 2025",
      category: "Academic",
      desc: "Resumption dates for the new session have been fixed. All students are expected to return on Sept 5th.",
      color: "blue"
    },
    {
      id: 2,
      title: "Digital Library Upgrade",
      date: "Aug 10, 2025",
      category: "Facility",
      desc: "Our library now features 5,000+ new e-books and research journals accessible from home.",
      color: "purple"
    },
    {
      id: 3,
      title: "Fee Payment Deadline",
      date: "Aug 20, 2025",
      category: "Finance",
      desc: "Final deadline for tuition fee payment is Sept 1st. Please clear all balances to avoid delays.",
      color: "red"
    },
    {
      id: 4,
      title: "Exam Results Published",
      date: "Aug 05, 2025",
      category: "Results",
      desc: "Third-term results for the previous session are now available on the student portal.",
      color: "green"
    }
  ];

  // FIX: This object maps your color names to actual Tailwind classes
  const colorMap = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    green: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
    orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    cyan: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
    slate: "bg-slate-100 text-slate-600 dark:bg-slate-900/30 dark:text-slate-400",
  };

  const displayedAnnouncements = allAnnouncements.slice(0, 4);

  return (
    <section className=" py-10 lg:py-20 bg-gray-50 dark:bg-gray-900 transition-colors justify-center items-center flex flex-col gap-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-col justify-center items-start md:items-end mb-12 gap-6 ">
          <div className="text-center md:text-left gap-5 lg:w-[90%] justify-center items-center flex flex-col">
            <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 w-fit px-3 py-1 rounded-full ">
              <FaBullhorn className="text-blue-600 dark:text-blue-400 text-xs" />
              <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-[10px] uppercase">
                Stay Updated
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              Latest Announcements
            </h2>
          </div>
          
         
        </div>
        
        {/* Announcements Grid */}
        <div className="grid  grid-cols-1 lg:grid-cols-2 lg:grid-cols-1 gap-6" >
          
          {displayedAnnouncements.map((item) => (
            <div 
              key={item.id} 
              className="bg-white w-full dark:bg-gray-800 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                
                <div className="flex justify-between items-start mb-4">
                  {/* FIX: Applying the colorMap here */}
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${colorMap[item.color]}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] font-medium">
                    <FaCalendarAlt />
                    {item.date}
                  </div>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>

             
            </div>
            
          ))}
         
         
        </div>
        
      </div>
         <Link 
            to="/allAnnouncement" 
            className="group flex items-center w-[85%] lg:w-[15%] justify-center ring-2 ring-blue-700 gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 text-sm"
          >
            View All
            <FaArrowRight className="group-hover:translate-x-1  transition-transform text-blue-600" />
          </Link>
    </section>
  );
}