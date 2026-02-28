import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaArrowLeft, FaFilter, FaCalendarCheck } from "react-icons/fa";

export default function AllActivities() {
  const allEvents = [
    { 
      id: 1, 
      title: "Annual Inter-House Sports Festival", 
      date: "12 Oct", 
      time: "09:00 AM", 
      location: "Main Sports Complex", 
      category: "Sports", 
      description: "A day of high-energy competition where students represent their houses in track, field, and team sports to promote physical fitness and school spirit."
    },
    { 
      id: 2, 
      title: "STEM Innovation & Robotics Fair", 
      date: "05 Nov", 
      time: "10:30 AM", 
      location: "Grand Assembly Hall", 
      category: "Academic", 
      description: "Witness the ingenuity of our students as they present science projects and live robotics demonstrations focusing on sustainable technology."
    },
    { 
      id: 3, 
      title: "End of Year Cultural Concert", 
      date: "15 Dec", 
      time: "04:00 PM", 
      location: "School Theater", 
      category: "Arts", 
      description: "A grand showcase of music, dance, and drama. This year's theme focuses on 'Global Harmony' featuring performances from all grade levels."
    },
    { 
      id: 4, 
      title: "Parent-Teacher Strategy Meeting", 
      date: "20 Sept", 
      time: "11:00 AM", 
      location: "Conference Room", 
      category: "Meeting", 
      description: "An essential dialogue between parents and faculty to discuss academic goals, school improvements, and student welfare for the upcoming term."
    },
    { 
      id: 5, 
      title: "Inter-School Debate Championship", 
      date: "28 Oct", 
      time: "09:00 AM", 
      location: "Auditorium", 
      category: "Academic", 
      description: "Our debate team takes on neighboring schools to discuss pressing global issues, fostering critical thinking and public speaking excellence."
    },
    { 
      id: 6, 
      title: "Visual Arts Gallery Exhibition", 
      date: "10 Nov", 
      time: "02:00 PM", 
      location: "Art Studio", 
      category: "Arts", 
      description: "A curated exhibition featuring paintings, sculptures, and digital art created by our Fine Arts students throughout the semester."
    },
    { 
      id: 7, 
      title: "Mid-Term Camping Trip", 
      date: "18 Nov", 
      time: "07:00 AM", 
      location: "Blue Valley Campsite", 
      category: "Outdoor", 
      description: "An adventurous outdoor learning experience for senior students focusing on leadership, survival skills, and environmental appreciation."
    },
    { 
      id: 8, 
      title: "Graduation Gown Fitting", 
      date: "05 Dec", 
      time: "10:00 AM", 
      location: "Admin Block", 
      category: "Graduation", 
      description: "Final measurements and gown collection for our graduating class. A significant milestone as we prepare for the commencement ceremony."
    }
  ];

  const [activeTab, setActiveTab] = useState("All");
  
  // Dynamically generate unique categories from the data
  const categories = ["All", ...new Set(allEvents.map(event => event.category))];

  const filteredEvents = allEvents.filter(e => activeTab === "All" || e.category === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 lg:py-20 transition-colors">
      <div className="max-w-5xl mx-auto px-6" >
        
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-10 hover:-translate-x-2 transition-all group">
          <FaArrowLeft className="group-hover:scale-110" /> Back to Home
        </Link>

        <header className="mb-8 lg:mb-12 dark:bg-blue-900/20 p-2 rounded-2xl text-center justify-center ">
          <h1 className="text-3xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            School <span className="text-blue-600">Calendar</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-lg max-w-5xl leading-relaxed">
            Stay up to date with the Pearly Gate community. Use the filters below to browse 
            specific types of activities, academic meetings, and special celebrations.
          </p>
        </header>

        {/* Tab Filters */}
        <div className="flex  items-center gap-2 overflow-x-auto pb-1 lg:pb-6 mb-12 scrollbar-hide">
          <div className="flex items-center gap-2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="p-2 text-gray-400">
                <FaFilter />
            </div>
            {categories.map(cat => (
                <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={` px-3 lg:px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === cat 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" 
                    : "text-gray-500 hover:text-blue-600 dark:text-gray-400"
                }`}
                >
                {cat}
                </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-12">
          {filteredEvents.map((event) => (
            <div key={event.id} className="relative group">
              {/* Timeline Connector for Desktop */}
              <div className="hidden lg:block absolute left-[3.5rem] top-24 bottom-[-3rem] w-px bg-gray-200 dark:bg-gray-800 group-last:hidden"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Date Side */}
                <div className="lg:w-28 text-center shrink-0 pt-2">
                   <div className="text-4xl font-black text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                     {event.date.split(' ')[0]}
                   </div>
                   <div className="text-sm font-black text-blue-600 uppercase tracking-[0.2em]">
                     {event.date.split(' ')[1]}
                   </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 bg-white dark:bg-gray-900 p-4 lg:p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-xl group-hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {event.title}
                    </h3>
                    <span className="shrink-0 px-4 py-1.5 rounded-full text-[10px] font-black uppercase bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 w-fit">
                      {event.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-50 dark:border-gray-800">
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">
                      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                        <FaClock />
                      </div>
                      {event.time}
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">
                      <div className="w-8 h-8 rounded-full bg-red-50 dark:bg-red-900/30 flex items-center justify-center text-red-600">
                        <FaMapMarkerAlt />
                      </div>
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <FaCalendarCheck className="mx-auto text-5xl text-gray-200 mb-4" />
            <h3 className="text-xl font-bold text-gray-500">No events found in this category.</h3>
            <button onClick={() => setActiveTab("All")} className="mt-4 text-blue-600 font-bold underline">Show all events</button>
          </div>
        )}
      </div>
    </div>
  );
}