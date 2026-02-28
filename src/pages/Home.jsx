
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css';
import WhyChooseUs from "./whyChooseUs";
import AboutUs from "./AboutUs";
import Announcements from "./Announcement";
import Faq from "./Faq";
import UpcomingActivities from "./UpcomingActivities";
// Import your images
import student1 from "../assets/student 1.jpg";
import student2 from "../assets/student 2.jpg";
import teacher from "../assets/teacher1.jpg";


export default function Home() {
  // 1. Array of images
  const images = [student1, student2, teacher];
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. Logic to go to next image
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 3. Logic to go to previous image
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // 4. Auto-play: changes image every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [currentIndex]);
     useEffect(() => {
            Aos.init({
                offset: 120,
                duration: 700,
                easing: 'ease-in-out',
                delay: 100,
                once: true,
            });
        }, []);

  return (
    <>
    <section 
      className="relative min-h-[75vh] flex items-center justify-center text-center px-6 bg-cover bg-center transition-all duration-1000 ease-in-out flex-col"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[currentIndex]})` 
      }}
    >
      {/* Left Arrow Button */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl lg:max-w-4xl animate-fadeIn py-5">
        <h1 className="text-5xl  lg:text-6xl  font-extrabold text-white drop-shadow-md">
          Welcome to <span className="text-blue-400">Pearly Gate School</span>
        </h1>

        <p className="mt-6 text-sm lg:text-xl text-gray-200 drop-shadow-sm">
          We provide quality education, strong discipline, and a supportive
          learning environment for future leaders.
        </p>

        <div className=" mt-10 flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-left">
          <Link
            to="/enrollNow"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-all shadow-lg hover:border-2 hover:scale-105 flex-col-row items-center justify-center inline-flex"
          >
            Apply Now <FaArrowRightLong className="ml-2" />
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-black transition-all shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Arrow Button */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all hidden md:block"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots Indicator (Optional but looks great) */}
      <div className="absolute bottom-8 flex gap-2">
        {images.map((_, index) => (
          <div 
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "bg-blue-500 w-6" : "bg-white/50"}`}
          />
        ))}
      </div>

    
    </section>
      <WhyChooseUs />
      <AboutUs />
      <Announcements />
      <UpcomingActivities />
      <Faq />
      </>
  );
}