import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaChevronDown, 
  FaArrowRight, 
  FaLightbulb,
  FaHeadset 
} from "react-icons/fa";

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const homeFaqs = [
    { 
      question: "What are the school's resumption and closing hours?", 
      answer: "Our academic day begins promptly at 8:00 AM. Pre-school and Primary students are dismissed at 3:30 PM, while Secondary students conclude their day at 4:00 PM. We also offer an after-school care program until 5:30 PM for busy parents." 
    },
    { 
      question: "How do I initiate the admission process for my child?", 
      answer: "Admission begins with purchasing an application form via our online portal or at the school administration office. Following submission, students undergo a baseline assessment to help us understand their unique learning needs." 
    },
    { 
      question: "Does the school provide reliable transportation?", 
      answer: "Yes, Pearly Gate operates a fleet of modern, air-conditioned buses. Each bus is equipped with GPS tracking and managed by a professional driver and a bus assistant to ensure the utmost safety of our students." 
    },
    { 
      question: "What extracurricular activities are available?", 
      answer: "We believe in holistic development. Students can participate in various clubs including Robotics, Coding, Music (Piano & Violin), Ballet, Swimming, and our award-winning Debate Society." 
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-8 lg:py-20 lg:py-32 bg-white dark:bg-gray-950 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-800/50 shadow-sm">
              <FaLightbulb className="text-blue-600 dark:text-blue-400 text-sm animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 font-black tracking-[0.2em] text-[10px] uppercase">
                Help Center
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-[1.1]">
                Frequently Asked<span className="text-blue-600"> Questions</span>
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-lg leading-relaxed max-w-xl">
              Everything you need to know about Pearly Gate School. If you can't find what you're looking for, our support team is just a call away.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link 
                to="/faqs" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-xl group"
              >
                Explore Full FAQ 
                <FaArrowRight className=" group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-300 font-bold rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                <FaHeadset className="text-sm" />
                Contact Support
              </Link>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4 w-full">
            {homeFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`group border transition-all duration-300 rounded-[10px] 
                    ${isOpen 
                      ? "border-blue-600 bg-white dark:bg-gray-900 shadow-xl shadow-blue-500/10" 
                      : "border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:border-blue-300 dark:hover:border-blue-800"
                    }`}
                >
                  <button 
                    onClick={() => toggleFAQ(index)} 
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left outline-none"
                  >
                    <span className={`font-bold text-sm md:text-lg transition-colors duration-300 
                      ${isOpen ? "text-blue-600" : "text-gray-800 dark:text-gray-200"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 
                      ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-white dark:bg-gray-800 text-gray-400 shadow-sm"}`}>
                      <FaChevronDown className="text-xs" />
                    </div>
                  </button>
                  
                  {/* Animated Answer Container */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="px-5 pb-5 text-sm text-gray-500 dark:text-gray-400 text-base leading-relaxed border-t border-gray-50 dark:border-gray-800/50 pt-3">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}