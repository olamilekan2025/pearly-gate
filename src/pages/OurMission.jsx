import React from "react";
import { FaBullseye, FaEye, FaHeart, FaCheckCircle } from "react-icons/fa";

const MissionVisionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Mission Card */}
        <div className="group bg-white dark:bg-gray-900 p-7 rounded-[1.5rem] border-2 border-gray-100 hover:border-blue-500 dark:border-gray-800 shadow-sm  hover:-translate-y-2 transition-all duration-500">
          <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-blue-600 text-white mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
            <FaBullseye className="text-2xl" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Mission
          </h3>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            To provide high-quality education in a safe and supportive
            environment, nurturing academic excellence, moral values, and
            lifelong learning skills in every student.
          </p>
        </div>

        {/* Vision Card */}
        <div className="group bg-white dark:bg-gray-900 p-7 rounded-[1.5rem] border-2 border-gray-100 hover:border-blue-500 dark:border-gray-800 shadow-sm  hover:-translate-y-2 transition-all duration-500">
          <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-indigo-600 text-white mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20">
            <FaEye className="text-2xl" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Vision
          </h3>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            To be a leading educational institution recognized for academic
            excellence, innovation, and the development of confident,
            responsible, and globally competitive students.
          </p>
        </div>

        {/* Values Card */}
        <div className="group bg-white dark:bg-gray-900 p-7 rounded-[1.5rem] border-2 border-gray-100 hover:border-blue-500 dark:border-gray-800 shadow-sm  hover:-translate-y-2 transition-all duration-500">
          <div className="w-13 h-13 flex items-center justify-center rounded-2xl bg-rose-500 text-white mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-rose-500/20">
            <FaHeart className="text-2xl" />
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Our Values
          </h3>
          <ul className="text-gray-500 dark:text-gray-400 space-y-3 font-semibold">
            {[
              "Academic Excellence",
              "Integrity & Discipline",
              "Respect & Responsibility",
              "Innovation & Creativity",
              "Student Well-being"
            ].map((value, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-rose-500 text-sm" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MissionVisionSection;