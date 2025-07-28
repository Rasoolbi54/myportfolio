import React from "react";


function About() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Next Js",
    "Git",
    "Tailwind CSS",
    "Responsive desgin",
    "PostgreSQL", "Node JS", "Express JS", "MongoDB",
    "VS Code", "GitHub", "Postman", ]

  return (
    <div id="about" className="bg-gray-50 dark:bg-gray-950 text-black dark:text-white  flex justify-center items-center md:px-60 px-10 md:-mt-48 -mt-22 md:pt-36 pt-20 pb-20 ">
      <div>
        <p className="md:text-6xl  text-5xl font-bold">
          I’m a full stack developer who codes with curiosity and coffee.
        </p>
        <p className="text-xl py-8">
          Frontend or backend, I love the whole process — from sketching out an
          idea to seeing it come alive in the browser.
        </p>
        <p className="text-xl">
          I spend most of my time vibecoding: building, breaking, fixing,
          learning — then doing it all over again. It’s less about chasing
          perfection, more about building something real{" "}
          <span className="bg-yellow-300 dark:bg-white dark:text-black">
            {" "}
            (and making sure dark mode feels just right).
          </span>
        </p>

        <p className="text-xl py-8">
          Whether it's a full web app or a small side project, I’m here for
          turning ideas into interactive things people can actually use.
        </p>




        <div className="flex flex-wrap gap-2 mt-6 ">
  {skills.map((skill, index) => (
    <span
      key={index}
      className="border-2 border-black dark:border-white rounded-full py-2 px-5 md:text-xl text-sm"
    >
      {skill}
    </span>
  ))}
</div>

      </div>


     
    </div>
  );
}

export default About;
