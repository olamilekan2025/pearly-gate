import DashboardCard from "../components/DashboardCard";

export default function StudentDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">
        Student Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="My Courses" value="5" />
        <DashboardCard title="Results" value="Available" />
        <DashboardCard title="Payments" value="₦45,000" />
      </div>
    </div>
  );
}