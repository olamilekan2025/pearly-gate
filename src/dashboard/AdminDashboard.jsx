import DashboardCard from "../components/DashboardCard";

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <DashboardCard title="Students" value="320" />
        <DashboardCard title="Courses" value="12" />
        <DashboardCard title="Payments" value="₦2.5M" />
        <DashboardCard title="Results Uploaded" value="Yes" />
      </div>
    </div>
  );
}