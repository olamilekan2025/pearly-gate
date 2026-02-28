export default function DashboardCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-indigo-600 mt-2">
        {value}
      </h3>
    </div>
  );
}