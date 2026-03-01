import React from 'react';
import { 
  IoSchoolOutline, 
  IoShieldCheckmarkOutline, 
  IoLaptopOutline, 
  IoTrophyOutline, 
  IoPeopleOutline, 
  IoStarOutline 
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Milestones = () => {
  const achievements = [
    {
      year: "2014",
      title: "School Founded",
      description: "Peace Cottage Model School was established with a vision to provide quality education.",
      icon: <IoSchoolOutline className="w-6 h-6" />,
    },
    {
      year: "2016",
      title: "NERDC Accreditation",
      description: "Received full accreditation from the Nigerian Educational Research and Development Council.",
      icon: <IoShieldCheckmarkOutline className="w-6 h-6" />,
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description: "Launched our state-of-the-art school management system and digital learning platform.",
      icon: <IoLaptopOutline className="w-6 h-6" />,
    },
    {
      year: "2020",
      title: "Academic Excellence Award",
      description: "Recognized as the top-performing school in the region with outstanding student results.",
      icon: <IoTrophyOutline className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "1000+ Students Milestone",
      description: "Reached a significant milestone of over 1000 successful students across all programs.",
      icon: <IoPeopleOutline className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "10 Years of Excellence",
      description: "Celebrating a decade of providing world-class education and shaping future leaders.",
      icon: <IoStarOutline className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm">Key Achievements</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">Our Milestones</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Dedicated to evolving every day to ensure our students reach their highest potential.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-100 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'
              }`}
            >
              {/* Dot / Icon on the line */}
              <div className="absolute top-0 -left-[25px] md:left-auto md:right-auto md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center text-white shadow-lg z-10">
                {item.icon}
              </div>

              {/* Content Card */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-full text-sm mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-blue-600 w-full h-[350px]'>
        <div className='flex items-center justify-center h-full flex-col gap-6 px-4 text-center'>
            <div className='text-center'>
                <h2 className="text-4xl font-black text-white mb-4">Join The Pearly Gate Family</h2>
                <p className="text-white max-w-2xl mx-auto">
                  Experience world-class education that nurtures both academic excellence and character development. Enroll your child today and be part of our success story.
                </p>
            </div>
            <div className='mt-12'>

            <Link to="/enrollNow" className="bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Enroll Now
            </Link>
            <Link to="/contact" className="ml-4 bg-transparent border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
            </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;