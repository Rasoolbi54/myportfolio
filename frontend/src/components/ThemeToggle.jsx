import { MoonIcon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full">
      {darkmode ? (
        <Sun className="w-5 h-5 text-white" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}

export default ThemeToggle;