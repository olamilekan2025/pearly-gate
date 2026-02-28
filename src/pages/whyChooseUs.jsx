import { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// Import React Icons
import {
  FaAward,
  FaChartLine,
  FaUserGraduate,
  FaUserShield,
  FaChalkboardTeacher,
  FaUserCheck,
} from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineUsers } from "react-icons/hi";
import { MdTrackChanges } from "react-icons/md";

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    {
      label: "Qualified Teachers",
      value: 50,
      suffix: "+",
      icon: <FaChalkboardTeacher />,
    },
    {
      label: "Secure Environment",
      value: 100,
      suffix: "%",
      icon: <FaUserShield />,
    },
    { label: "Academic Excellence", value: 98, suffix: "%", icon: <FaAward /> },
    {
      label: "Successful Students",
      value: 5000,
      suffix: "+",
      icon: <FaUserGraduate />,
    },
  ];

  const features = [
    {
      title: "Proven Academic Excellence",
      desc: "Consistently ranked among the top schools for curriculum mastery.",
      icon: <FaAward className="text-blue-500" />,
    },
    {
      title: "Higher Pass Rates",
      desc: "Our students maintain a 99% pass rate in national examinations.",
      icon: <FaChartLine className="text-green-500" />,
    },
    {
      title: "Personalized Learning Paths",
      desc: "Tailored education plans to suit every child's unique pace.",
      icon: <HiOutlineLightBulb className="text-purple-500" />,
    },
    {
      title: "Outstanding Results",
      desc: "Recognized awards in sports, arts, and science competitions.",
      icon: <FaUserCheck className="text-yellow-500" />,
    },
    {
      title: "Comprehensive Progress Tracking",
      desc: "Real-time data on student performance and growth.",
      icon: <MdTrackChanges className="text-red-500" />,
    },
    {
      title: "Enhanced Parent Engagement",
      desc: "Active communication portal for parents and teachers.",
      icon: <HiOutlineUsers className="text-cyan-500" />,
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-gray-100 dark:bg-gray-950 transition-colors ">
      <div className="max-w-7xl mx-auto px-6 justify-center items-center flex flex-col">
        {/* Header */}
        <div className="text-center  gap-5 lg:w-[60%] mb-10 justify-center items-center flex flex-col ">
          <div className="flex items-center gap-2 w-fit bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
            <IoIosCheckmarkCircleOutline className="text-blue-600 dark:text-blue-400 text-lg stroke-[10]" />
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase">
              Why Choose Us
            </h2>
          </div>
          <h3 className="text-3xl md:text-5xl font-black mt-3 text-gray-900 dark:text-white">
            The "Prestige & Legacy" Approach
          </h3>
          <p className="text-sm lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed italic  lg:pl-6">
            Join an elite community dedicated to scholastic mastery. Our
            holistic framework empowers students to reach their peak potential,
            enables educators to lead with precision, and bridges the gap
            between school life and home through active parent partnership.
          </p>
        </div>

        {/* Stats Counter Bar */}
        <div
          ref={ref}
          className="grid grid-cols-2 w-full lg:grid-cols-4 gap-6 mb-10 lg:mb-20  dark:bg-blue-800 lg:p-5 lg:p-12 rounded-[2rem] shadow-2xl shadow-blue-500/20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-blue-700 hover:ring-2 hover:ring-blue-500 hover:bg-white hover:text-blue-700 dark:bg-blue-900 text-white border border-transparent hover:border-white/30 rounded-2xl p-2 transition-all duration-300"
            >
              <span className="text-3xl mb-3 opacity-80 hover:scale-110 transition-transform duration-300 ">
                {stat.icon}
              </span>
              <div className="text-4xl md:text-5xl font-bold hover:text-blue-500 transition-colors duration-300">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : "0"}
                {stat.suffix}
              </div>
              <p className="text-blue-100 mt-2 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-transparent hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="text-4xl mb-6 bg-white dark:bg-gray-800 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
