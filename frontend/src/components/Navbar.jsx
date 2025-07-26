import React, { useState } from "react";
import { Link } from "react-scroll";
import { MoonIcon } from "lucide-react";
// import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Define the menuOpen state

  return (
    <div className="flex justify-between items-center md:px-20 px-4 py-6   border-b  ">
      <div className="text-3xl md:text-4xl">
        <span className=" font-bold ">Rasoolbi.</span>
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
          <button onClick={()=>document.getElementById('about').scrollIntoView({behavior:"smooth"})}>
            <li className="hover:text-black cursor-pointer">About.</li>
          </button>
          <button onClick={()=>document.getElementById('projects').scrollIntoView({behavior:"smooth"})}>
            <li className="hover:text-black cursor-pointer">Projects.</li>
          </button>
          <button onClick={()=>document.getElementById('contact').scrollIntoView({behavior:"smooth"})}>
            <li className="hover:text-black cursor-pointer">Contact.</li>
          </button>
        </ul>
      </div>

      {/* <div>
        <ThemeToggle />
      </div> */}
    </div>
  );
}

export default Navbar;
