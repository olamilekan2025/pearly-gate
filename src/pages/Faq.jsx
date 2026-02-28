import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaChevronDown, 
  FaQuestionCircle, 
  FaArrowRight, 
  FaHeadset,
  FaLightbulb 
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

  return (
    <section className=" py-8 lg:py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Icon */}
          <div className="space-y-6 justify-center text-cen lg:items-start   flex flex-col">
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 w-fit px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/50">
               <FaLightbulb className="text-blue-600 dark:text-blue-400 text-sm" />
               <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase">Help Center</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              We understand that choosing the right school is a significant decision. 
              Here are answers to the questions parents ask us most frequently about life at Pearly Gate.
            </p>
            <div className="pt-4">
               <Link to="/faqs" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-xl group">
                 View All FAQs 
                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div key={index} className="group border border-gray-100 dark:border-gray-800 rounded-[2rem] bg-gray-50 dark:bg-gray-900/50 hover:border-blue-200 dark:hover:border-blue-900 transition-all">
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)} 
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-blue-600 text-white rotate-180" : "bg-white dark:bg-gray-800 text-gray-400 shadow-sm"}`}>
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}