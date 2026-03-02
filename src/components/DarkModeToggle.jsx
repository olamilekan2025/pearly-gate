import { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      document.documentElement.classList.contains("dark")
    );
  });
  const [mounted, setMounted] = useState(false);

  // only need to mark mounted after first render
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-3 rounded-full hover:bg-blue-700 dark:bg-gray-700
                 text-black hover:text-white  dark:text-gray-200 text-lg"
    >
      {darkMode ? <CiDark /> : <CiLight />}
    </button>
  );
}