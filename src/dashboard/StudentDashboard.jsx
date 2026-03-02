import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { IoPersonCircleOutline, IoBookOutline, IoCalendarOutline } from "react-icons/io5";

export default function StudentDashboard() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <div className="p-10 text-center">Loading Profile...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
              <IoPersonCircleOutline size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight italic">
                WELCOME, {currentUser.name?.toUpperCase() || "STUDENT"}
              </h2>
              <p className="text-gray-500 font-medium">{currentUser.email}</p>
            </div>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-100">
            <span className="text-green-700 font-bold text-xs uppercase tracking-widest">Status: Enrolled</span>
          </div>
        </header>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <IoBookOutline className="text-indigo-600 mb-4" size={28} />
            <h3 className="font-bold text-gray-800">My Courses</h3>
            <p className="text-gray-400 text-sm">Curriculum pending review.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <IoCalendarOutline className="text-indigo-600 mb-4" size={28} />
            <h3 className="font-bold text-gray-800">Attendance</h3>
            <p className="text-gray-400 text-sm">98% Average</p>
          </div>
        </div>
      </div>
    </div>
  );
}