import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhyChoosePearlyGate = () => {
  const features = [
    {
      title: "Fully Accredited",
      description: "Recognized by the Nigerian Educational Research and Development Council (NERDC).",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art classrooms, science labs, library, and sports facilities.",
    },
    {
      title: "Digital Learning",
      description: "Computer-based testing, online resources, and e-learning platforms.",
    },
    {
      title: "Holistic Development",
      description: "Focus on academics, sports, arts, and character building.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 font-sans" aria-labelledby="why-choose-heading">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            id="why-choose-heading"
            className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-4 tracking-tight"
          >
            Why Choose Pearly Gate?
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4 lg:mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            Providing a world-class education that balances academic excellence with character and innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start p-3 lg:p-6 bg-white rounded-2xl flex-col border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group gap-3"
            >
              <div className="flex-shrink-0 mt-1">
                <IoMdCheckmarkCircleOutline 
                  className="w-7 h-7 text-green-600 group-hover:scale-125 transition-transform duration-300" 
                  aria-hidden="true"
                />
              </div>
              <div className="">
                <h3 className=" text-sm lg:text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePearlyGate;