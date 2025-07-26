import React from "react";

const experiences = [
  {
    company: "Busitron IT Solutions Pvt Ltd",
    description: "Full-stack development company",
    position: "Junior Full Stack Developer",
    location: "India",
    duration: "01/2025 — 04/2025",
    industry: "IT Services",
    website: "",
    responsibilities: [
      "Developed full-stack web applications using React.js, Node.js, and Express.js.",
      "Built and optimized RESTful APIs using JWT, bcrypt, and Express Validator.",
      "Worked with PostgreSQL for backend data operations and queries.",
      "Designed responsive UI using Material UI, Tailwind CSS, and Bootstrap.",
      "Collaborated with senior developers on end-to-end features.",
      "Used Git/GitHub for version control and Postman for testing API endpoints.",
    ],
  },
  {
    company: "Zidio Development",
    description: "Tech startup for web solutions",
    position: "Junior Full Stack Developer (Internship)",
    location: "India",
    duration: "07/2024 — 10/2024",
    industry: "Software Development",
    website: "",
    responsibilities: [
      "Assisted in developing web applications using React.js and JavaScript.",
      "Gained experience in writing APIs and handling databases.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-white text-gray-900 py-16  pt-36 pb-20 md:px-60 px-10 font-sans" id="experience">
      <p className="md:text-6xl text-5xl font-bold tracking-tight mb-12 border-b pb-4">
        EXPERIENCE
      </p>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-12 pb-6 border-b last:border-b-0 last:pb-0"
        >
          <div className="mb-3">
            <h2 className="text-3xl font-semibold text-black">{exp.company}</h2>
            <p className="text-gray-600 text-xl">{exp.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 text-xl gap-y-2 gap-x-8 mb-4">
            <div>
              <p>
                <span className="font-medium text-gray-800">Position:</span>{" "}
                {exp.position}
              </p>
              <p>
                <span className="font-medium text-gray-800">Location:</span>{" "}
                {exp.location}
              </p>
              <p>
                <span className="font-medium text-gray-800">Duration:</span>{" "}
                {exp.duration}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium text-xl text-gray-800">Industry:</span>{" "}
                {exp.industry}
              </p>
              {exp.website && (
                <p>
                  <span className="font-medium text-gray-800">Website:</span>{" "}
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 transition"
                  >
                    {exp.website}
                  </a>
                </p>
              )}
            </div>
          </div>

          <ul className="list-disc list-inside text-xl text-gray-700 leading-relaxed space-y-1">
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
