import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center py-6 dark:bg-black">
      <div className="w-full max-w-7xl px-4 md:px-10 flex justify-between items-center border-b pb-2 md:pb-6  ">
        <div className="text-3xl md:text-4xl">
          <span className="font-bold dark:text-white">Rasoolbi.</span>
        </div>

        <div className="hidden sm:block">
          <ul className="flex gap-6 text-xl font-bold text-gray-300">
            <button
              onClick={() =>
                document
                  .getElementById("details")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:text-black cursor-pointer">Home.</li>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:text-black cursor-pointer">About.</li>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:text-black cursor-pointer">Projects.</li>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <li className="hover:text-black cursor-pointer">Contact.</li>
            </button>
          </ul>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
