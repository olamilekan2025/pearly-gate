import CountUp from "./CountUp";
import OurMission from "./OurMission";
import ChoosePearlyGate from "./ChoosePearlyGate";
import OurMilestones from "./OurMilestones";

export default function AboutHeader() {
  return (
    <>
    <section className="relative bg-gray-50 dark:bg-gray-950 overflow-hidden">
      
      {/* Header */}
      <div className=" py-8 lg:py-24 text-center px-4">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
          About Our School
        </span>

        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-900 dark:text-white">
          Building Bright Futures
          <br className="hidden md:block" />
          <span className="text-blue-600"> Through Education</span>
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-sm lg:text-lg text-gray-600 dark:text-gray-400">
          We provide a safe learning environment, academic excellence, and
          dedicated teachers to shape confident and successful students.
        </p>
      </div>

      {/* Count Up Section */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 text-center">

          <div className="bg-white dark:bg-gray-900 py-7 px-1 rounded-xl hover:ring-2 hover:ring-blue-700 shadow">
            <h3 className="text-4xl font-black text-blue-600">
              <CountUp end={45} />+
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Qualified Teachers
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 py-7 px-1 rounded-xl hover:ring-2 hover:ring-blue-700  shadow">
            <h3 className="text-4xl font-black text-blue-600">
              <CountUp end={100} />%
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Secure Environment
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 py-7 px-1 rounded-xl hover:ring-2 hover:ring-blue-700  shadow">
            <h3 className="text-4xl font-black text-blue-600">
              <CountUp end={98} />%
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Academic Excellence
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 py-7 px-1 rounded-xl hover:ring-2 hover:ring-blue-700  shadow">
            <h3 className="text-4xl font-black text-blue-600">
              <CountUp end={1200} />+
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Successful Students
            </p>
          </div>

        </div>
      </div>
    </section>
    <OurMission />
    <ChoosePearlyGate/>
    <OurMilestones />
    </>
  );
}