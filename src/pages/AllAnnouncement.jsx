import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight, FaSearch, FaFilter, FaPlus, FaGlobe } from "react-icons/fa";

export default function AllAnnouncements() {
  const announcements = [
    { id: 1, title: "New Academic Session 2025/2026", date: "Aug 15, 2025", category: "Academic", color: "blue", desc: "Official resumption dates and orientation schedule for new and returning students." },
    { id: 2, title: "Digital Library Upgrade", date: "Aug 10, 2025", category: "Facility", color: "purple", desc: "Access 5,000+ new e-books and journals via the student portal." },
    { id: 3, title: "Fee Payment Deadline", date: "Aug 20, 2025", category: "Finance", color: "red", desc: "Please ensure all outstanding balances are cleared before the term begins." },
    { id: 4, title: "Exam Results Published", date: "Aug 05, 2025", category: "Results", color: "green", desc: "Third-term results are now live. Login to the portal to download your report card." },
    { id: 5, title: "Parent-Teacher Conference", date: "Sept 12, 2025", category: "Meeting", color: "indigo", desc: "A mandatory session to discuss the curriculum and student growth strategies." },
    { id: 6, title: "Inter-House Sports Competition", date: "Oct 02, 2025", category: "Sports", color: "orange", desc: "The annual sports festival is here! Let the games begin." },
    { id: 7, title: "National Holiday Observance", date: "Oct 01, 2025", category: "Holiday", color: "red", desc: "School remains closed for Independence Day celebrations." },
    { id: 8, title: "Science Fair 2025", date: "Nov 15, 2025", category: "Event", color: "cyan", desc: "Showcasing the best innovative projects from our brilliant science students." },
    { id: 9, title: "School Uniform Updates", date: "Aug 12, 2025", category: "Policy", color: "slate", desc: "Review the new dress code guidelines for the upcoming session." }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // NEW: State to control how many items are visible
  const [visibleLimit, setVisibleLimit] = useState(3);

  const categories = ["All", "Academic", "Facility", "Finance", "Results", "Meeting", "Sports"];

  const filteredData = announcements.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Slice the data based on our visibleLimit
  const displayedData = filteredData.slice(0, visibleLimit);

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 lg:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 italic">
            Pearly Gate <span className="text-blue-600 tracking-tighter not-italic">News</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Stay informed with the latest updates, academic schedules, and facility news from our campus.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6 lg:mb-10 items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="relative w-full lg:w-1/2">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search announcements..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 dark:text-white outline-none"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleLimit(3); // Reset limit when searching
              }}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleLimit(3); // Reset limit when filtering
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {displayedData.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {displayedData.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-900  p-4 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${colorMap[item.color]}`}>
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                        <FaCalendarAlt className="text-blue-500" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                 
                </div>
              ))}
            </div>

            {/* NEW: Dynamic Button Logic */}
            <div className="mt-16 text-center">
              {visibleLimit === 3 && filteredData.length > 3 && (
                <button 
                  onClick={() => setVisibleLimit(6)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-black rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-blue-600 transition-all shadow-xl group"
                >
                  <FaPlus className="text-blue-600 group-hover:rotate-90 transition-transform" />
                  Show More
                </button>
              )}

              {visibleLimit === 6 && filteredData.length > 6 && (
                <button 
                  onClick={() => setVisibleLimit(announcements.length)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 group"
                >
                  <FaGlobe className="group-hover:animate-spin" />
                  Show All Announcements
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 text-xl font-medium">No updates found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}