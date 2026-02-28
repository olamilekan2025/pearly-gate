import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaSearch, FaArrowLeft, FaQuestionCircle, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function AllFAQsPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const allFaqs = [
    { question: "What are the school's resumption and closing hours?", answer: "8:00 AM - 3:30 PM for Primary; 4:00 PM for Secondary." },
    { question: "How do I apply for admission?", answer: "Apply via our online portal or pick up forms at the school office." },
    { question: "Does Pearly Gate provide school bus services?", answer: "Yes, we offer air-conditioned buses with GPS tracking." },
    { question: "Are there extracurricular activities?", answer: "We offer Music, Coding, Robotics, Ballet, Swimming, and more." },
    { question: "What is the teacher-to-student ratio?", answer: "We maintain a 1:15 ratio to ensure personalized care for every child." },
    { question: "Is there a lunch program available?", answer: "Yes, our cafeteria provides healthy, balanced hot meals daily." },
    { question: "How does the school handle medical emergencies?", answer: "We have an on-site sickbay with certified nurses and hospital partners." },
    { question: "Are scholarships available?", answer: "We offer merit-based scholarships for high achievers in academics and sports." },
    { question: "What is the school's policy on bullying?", answer: "Zero-tolerance. We prioritize emotional safety and mutual respect." },
    { question: "How can parents track student progress?", answer: "Parents use our Digital Portal for real-time grades and attendance." }
  ];

  const filteredFaqs = allFaqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8 lg:py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation & Header */}
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-10 hover:-translate-x-2 transition-transform group">
          <FaArrowLeft className="text-sm" /> Back to Home
        </Link>

        <div className="mb-12 w-full text-center    ">
          <h1 className="text-4xl  lg:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-lg leading-relaxed">
            Welcome to the Pearly Gate Help Center. Whether you are a prospective parent 
            or a current member of our community, you'll find everything you need here. 
            Can't find what you're looking for? Use the search bar below.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-9">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for a question (e.g., 'admission' or 'bus')..." 
            className="w-full pl-14 pr-6 py-4 bg-white dark:bg-gray-900 border-none rounded-[20px] shadow-sm focus:ring-4 focus:ring-blue-500/10 outline-none dark:text-white transition-all text-lg"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-[10px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3 text-left   "
              >
                <span className="text-3 font-bold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? "bg-blue-600 text-white rotate-180" : "bg-gray-50 dark:bg-gray-800 text-gray-400"}`}>
                  <FaChevronDown />
                </div>
              </button>
              
              <div className={`transition-all duration-300 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="px-8 pb-8 text-gray-600 dark:text-gray-400 leading-relaxed text-lg pt-2 border-t border-gray-50 dark:border-gray-800/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions? */}
        <div className="mt-20 p-5 bg-blue-600 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-500/30">
           <FaQuestionCircle className="text-5xl mx-auto mb-6 opacity-50" />
           <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
           <p className="text-blue-100 mb-8 max-w-md mx-auto">
             If you couldn't find your answer in our FAQ, our support team is 
             always ready to assist you.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:jelilioladunjoye04@gmail.com" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors">
                <FaEnvelope /> Email Us
              </a>
              <a href="tel:+1249129069652" className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition-colors border border-blue-500">
                <FaPhoneAlt /> Call Admin
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}