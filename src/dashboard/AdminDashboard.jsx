import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

export default function AdminDashboard() {
  const { users } = useContext(AuthContext);
  
  // Filter out the admin themselves to show only students
  const studentList = users.filter(u => u.role === "student");

  return (
    <div className="min-h-screen bg-[#fcfcfc] p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black text-gray-900 mb-8 italic tracking-tighter">
          ADMIN <span className="text-indigo-600">CONSOLE</span>
        </h2>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="p-8 border-b border-gray-50">
            <h3 className="text-lg font-bold text-gray-800">Enrolled Students ({studentList.length})</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <th className="px-8 py-4">Full Name</th>
                  <th className="px-8 py-4">Email Address</th>
                  <th className="px-8 py-4">Account Type</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {studentList.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-gray-700">{student.name}</td>
                    <td className="px-8 py-5 text-gray-500">{student.email}</td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                        Standard
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="text-xs font-black text-indigo-600 hover:underline">VIEW FORM</button>
                    </td>
                  </tr>
                ))}
                {studentList.length === 0 && (
                  <tr>
                    <td colSpan="4" className="p-20 text-center text-gray-400 font-medium italic">
                      No students have enrolled yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}