import React from "react";

function Detail() {
  return (
    <div
      className="text-center pt-16 dark:bg-black dark:text-white   px-10  md:px-0"
      id="details"
    >
      <div>
        <div>
          <span className="text-2xl font-semibold md:text-2xl ">
            Hey, I'm Rasool bi
          </span>
          <div className="font-bold md:text-7xl py-1 text-5xl ">
            I build things on the web.
          </div>
          <div className="pt-3">
            <p className="text-xl ">
              Sometimes I design, sometimes I debug endlessly — but always with
              coffee and curiosity. <br />
              Welcome to my little digital playground — glad you’re here!
            </p>
          </div>

          {/* <div className="flex justify-center items-center md:pt-10 pt-3"> */}
          <a
            href="mailto:smbrasoolbi138@gmail.com"
            className="flex justify-center items-center pt-10 "
          >
            <div className="text-xl bg-black dark:bg-white text-white dark:text-black  hover:cursor-pointer   px-8 py-3 rounded-full gap-2 flex items-center hover:bg-gray-800 transition">
              Get in Touch <span className="ml-2">→</span>
            </div>
          </a>

          {/* Scroll Indicator */}
          {/* <div className="flex justify-center items-center mt-20">
            <div className="w-8 h-15 border-3 border-gray-400 hover:border-black rounded-full flex items-start justify-center relative">
              <div className="w-1 h-1 bg-gray-400 rounded-full absolute top-1 animate-scroll"></div>
            </div>
          </div> */}

          <div className="flex justify-center items-center md:-mt-16">
            {/* Light mode image */}
            <img
              src="computerr.png"
              alt="Computer"
              className="w-full max-w-2xl block dark:hidden"
            />

            {/* Dark mode image */}
            <img
              src="darktheme.png" // Replace with your dark mode image path
              alt="Computer Dark"
              className="w-full max-w-2xl hidden dark:block"
            />
          </div>
        </div>
      </div>

      {/* Add custom animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(50px);
              opacity: 0;
            }

          }
          .animate-scroll {
            animation: scroll 3s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Detail;
