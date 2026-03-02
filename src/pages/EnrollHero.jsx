import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

export default function EnrollHero() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white overflow-hidden">

        <div className=" flex gap-3 py-8 lg:py-14 items-center justify-center justify-center ">
          <div className="space-y-4 animate-fadeIn text-center md:text-left flex flex-col items-center md:items-center p-2">
            {/* Admissions Tag */}
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium ">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>Admissions Open for 2026/2027</span>
            </div>

            {/* Headline */}
            <h1 className=" text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight max-w-3xl">
              Apply  <span className="text-indigo-600">For </span>Admission
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm md:text-lg w-full lg:max-w-[60%] text-center space-y-4">
              Join a community dedicated to academic excellence, creative thinking, and character development. Our simplified online enrollment takes less than 10 minutes.
            </p>

           

            {/* Trust Markers */}
            <div className="grid grid-cols-2 gap-4 pt-6 justify-items-center md:justify-items-start">
              <div className="flex-col items-center text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-green-500 ml-15" />
                No physical paperwork required
              </div>
              <div className="flex-col  items-center text-sm text-slate-500">
                <ShieldCheck className="w-4 h-4 text-green-500 ml-15 " />
                Secure data encryption
              </div>
            </div>
          </div>

          

        
      </div>
    </section>
  );
}