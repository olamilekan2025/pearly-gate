import { useContext } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="px-3 py-3 rounded-full hover:bg-blue-700 dark:bg-gray-700
                 text-black hover:text-white  dark:text-gray-200 text-lg"
    >
      {darkMode ? <CiDark /> : <CiLight />}
    </button>
  );
}
