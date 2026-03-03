import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = login(email, password);

    if (user) {
      // after successful login send user to the dashboard route
      // make sure the path matches the routes declared in App.jsx
    if (user.role === "admin") navigate("/adminDashboard");
      else navigate("/studentDashboard");
    } else {
      alert("Invalid email or password. If you just enrolled, ensure you used the correct credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border dark:border-gray-700">
        <h2 className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-6 italic">LOGIN</h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition"
          >
            Access Portal
          </button>
        </div>
      </form>
    </div>
  );
}
