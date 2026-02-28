import {
  FaAward,
  FaSchool,
  FaLaptopCode,
  FaChild,
  FaBullseye,
  FaEye,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function About() {
  const missionPoints = [
    "Inculcating permanent literacy and numeracy.",
    "Effective communication among peers.",
    "Scientific and reflective thinking.",
    "Adapting to a changing environment.",
    "Character and moral training.",
    "Tools for further advancement.",
    "Developing manipulative skills.",
  ];

  const highlights = [
    {
      title: "Fully Accredited",
      icon: <FaAward className="text-yellow-500" />,
      desc: "Recognized nationally for maintaining top-tier educational standards.",
    },
    {
      title: "Modern Facilities",
      icon: <FaSchool className="text-blue-500" />,
      desc: "State-of-the-art labs and sports complexes designed for growth.",
    },
    {
      title: "Digital Learning",
      icon: <FaLaptopCode className="text-purple-500" />,
      desc: "Integrating smart technology into every classroom experience.",
    },
    {
      title: "Holistic Development",
      icon: <FaChild className="text-green-500" />,
      desc: "Nurturing character, arts, and athletics alongside academics.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 lg:px-8 justify-center items-center flex flex-col ">
        {/* Header */}
        <div className="text-center mb-20 justify-center items-center flex flex-col">
          <div className="flex items-center gap-2 w-fit bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/50 mb-4 transition-all hover:bg-blue-100 dark:hover:bg-blue-900/40">
            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
              <IoIosCheckmarkCircleOutline className="text-lg stroke-[10]" />About Pearly Gate 
            </span>
          </div>

          <h2 className="mt-4 text-3xl  md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            About    
            <span className="text-blue-600 text-[2rem] "> Pearly Gate </span>
             Model School
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-sm lg:text-base text-gray-600 dark:text-gray-400">
          "At Pearly Gate School, we believe education is about more than just grades—it’s about the person your child becomes. For over a decade, we have combined a warm, supportive environment with the latest modern tools to help students flourish. From our advanced digital campus to our focus on character training, we ensure that the bridge between home and school is always strong, clear, and focused on your child's success."
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT CONTENT */}
          <div className="space-y-14 ">
            {/* Mission */}
            <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-4 bg-blue-600 rounded-2xl shadow-md">
                  <FaBullseye className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Our Mission
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {missionPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <FaCheckCircle className="text-blue-500 mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="flex gap-5">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                <FaEye className="text-purple-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Our Vision
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  To raise confident, responsible individuals who aspire to
                  their full potential in a safe, happy, and supportive learning
                  environment.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex gap-5">
              <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-2xl">
                <FaHeart className="text-red-600 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Our Values
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Discipline", "Excellence", "Integrity", "Learning"].map(
                    (value) => (
                      <span
                        key={value}
                        className="px-4 py-1 text-xs font-semibold uppercase rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                      >
                        {value}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4 transition-transform group-hover:scale-110">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
