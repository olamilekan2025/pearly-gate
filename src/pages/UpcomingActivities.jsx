import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaClock, FaArrowRight, FaCalendarAlt, FaBullhorn } from "react-icons/fa";

export default function HomeActivities() {
  const activities = [
    {
      id: 1,
      title: "Annual Inter-House Sports Festival",
      date: "Oct 12",
      month: "2025",
      time: "09:00 AM",
      location: "Main Sports Complex",
      type: "Sports Event",
      description: "Join us for a day of athletic excellence and teamwork. Students from all houses will compete in track and field events to claim the championship trophy.",
      color: "blue"
    },
    {
      id: 2,
      title: "STEM Innovation & Robotics Fair",
      date: "Nov 05",
      month: "2025",
      time: "10:30 AM",
      location: "Grand Assembly Hall",
      type: "Academic Activity",
      description: "Discover the future as our students showcase their innovative projects, custom-built robots, and creative solutions to modern scientific challenges.",
      color: "purple"
    },
    {
      id: 3,
      title: "End of Year Cultural Concert",
      date: "Dec 15",
      month: "2025",
      time: "04:00 PM",
      location: "School Theater",
      type: "Cultural Event",
      description: "A celebration of diversity and talent. Experience a vibrant evening of music, traditional dance, and drama performances by our talented performing arts students.",
      color: "pink"
    }
  ];

  const colorMap = {
    blue: "bg-blue-600 shadow-blue-500/40",
    purple: "bg-purple-600 shadow-purple-500/40",
    pink: "bg-pink-600 shadow-pink-500/40",
  };

  return (
    <section className="py-10  bg-gray-100 dark:bg-gray-950 transition-colors justify-center text-center">
      <div className="max-w-7xl mx-auto px-1 justify-center text-center">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 justify-center ">
          <div className="flex items-center  dark:bg-blue-900/20 gap-2 justify-center text-blue-600 dark:text-blue-400 font-bold tracking-widest text-[10px] uppercase">
            <FaBullhorn className="animate-bounce" />
            <span>Don't Miss Out</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
            Upcoming Activities <span className="text-blue-600">& Events</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Stay engaged with our vibrant school community. From academic fairs to 
            sporting spectacles, explore our upcoming schedule below.
          </p>
        </div>

        {/* List of Activities & Events */}
        <div className="grid Lg:grid-cols-2  gap-8 mb-16 px-3 lg:px-8">
          {activities.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white dark:bg-gray-900 p-4 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-6 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Date Box */}
              <div className={`w-full lg:w-26 h-32 lg:h-26 rounded-[2rem] flex flex-col items-center justify-center text-white shrink-0 shadow-lg ${colorMap[item.color]}`}>
                <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-90">{item.date.split(' ')[0]}</span>
                <span className="text-4xl font-black leading-none">{item.date.split(' ')[1]}</span>
                <span className="text-xs font-medium mt-1 opacity-80">{item.month}</span>
              </div>

              {/* Content Area */}
              <div className="flex-1 px-2 py-2 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                  <span className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-widest bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                    {item.type}
                  </span>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-gray-400 text-[11px] font-semibold uppercase tracking-tighter">
                    <div className="flex items-center gap-1.5">
                      <FaClock className="text-blue-500" /> {item.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-red-500" /> {item.location}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2">
                  {item.title}
                </h3>
                
                {/* New Paragraph Added Here */}
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
              </div>

              {/* Action Circle */}
             
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link 
            to="/activities" 
            className="group flex items-center gap-1 lg:gap-4 px-2 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-2xl shadow-gray-500/20"
          >
            <span className="uppercase tracking-widest text-sm">View All Activities & Events</span>
            <div className="bg-white/20 dark:bg-gray-100 p-1 rounded-lg group-hover:translate-x-1 transition-transform">
                <FaArrowRight className="text-xs" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}