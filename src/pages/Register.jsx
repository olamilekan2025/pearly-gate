export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6">
          Register
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded"
        />

        <button className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
          Register
        </button>
      </form>
    </div>
  );
}