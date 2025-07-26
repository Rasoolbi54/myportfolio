// import { ArrowRight, ExternalLink } from 'lucide-react';
// import { useState } from 'react';
// import React from 'react'
// import './Projects.css';

// const projectData = [
//   {
//     id: 1,
//     title: "Chrome Extension for Lead Categorization",
//     description: "A Chrome extension that automates lead suggestions and categorization.",
//     techStack: ["JavaScript", "Hugging Face API"],
//     link: "#",
//     image: "/lovable-uploads/5dc4310b-91b6-411d-af0c-1f23277cba8e.png"
//   },
//   {
//     id: 2,
//     title: "Flavours Find - Recipe Discovery App",
//     description: "An interactive recipe app that helps users discover meals based on ingredients, mood, cooking time, and cuisine..",
//     techStack: ["React.js", "Tailwind CSS", "TheMealDB API"],
//     link: "https://flavours-findss.vercel.app/",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     description: "A modern, responsive portfolio website showcasing my skills and projects.",
//     techStack: ["React", "Tailwind CSS", "Framer Motion"],
//     link: "#",
//     image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
//   }
// ];

// const Project = () => {
//   const [hoveredProject, setHoveredProject] = useState(null);

//   return (
//     <div className="page-container">

//       <section className="projects-section" id="projects">
//         <div className="projects-header">
//           <h2 className="projects-title">Projects</h2>
//           <p className="projects-description">
//             Explore my latest work and technical projects that demonstrate my skills and passion.
//           </p>
//         </div>

//         <div className="projects-grid">
//           {projectData.map((project) => (
//             <div
//               key={project.id}
//               className="project-card"
//               onMouseEnter={() => setHoveredProject(project.id)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               <div className="project-image-container">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className={`project-image ${hoveredProject === project.id ? 'hovered' : ''}`}
//                 />
//               </div>
//               <div className="project-content">
//                 <div className="project-header">
//                   <h3 className="project-title">{project.title}</h3>
//                 </div>
//                 <p className="project-description">{project.description}</p>

//                 <div className="project-footer">
//                   <div className="tech-stack">
//                     {project.techStack.map((tech, idx) => (
//                       <span key={idx} className="tech-tag">{tech}</span>
//                     ))}
//                   </div>
//                   <a
//                     href={project.link}
//                     className="project-link"
//                   >
//                     View Project
//                     <ArrowRight size={16} className={`arrow-icon ${hoveredProject === project.id ? 'arrow-hovered' : ''}`} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <div className="view-all-container">
//           <a href="#" className="view-all-button">
//             View All Projects
//             <ExternalLink size={18} />
//           </a>
//         </div> */}
//       </section>
//     </div>
//   );
// };

// export default Project;

import React from "react";

const projects = [
  {
    
  title: "FlavorFind - Recipe App",
  tech: ["React", "Firebase", "Tailwind CSS"],
  description:
    "A modern recipe app where users can browse, search, and save their favorite dishes. Features include categorized recipes, ingredient checklists, cooking instructions, and user-uploaded creations.",
  image:
    "https://www.shutterstock.com/image-photo/fried-salmon-fillet-potatoes-lime-260nw-1826868410.jpg", // Replace with your own image if needed
  link: "https://flavours-findss.vercel.app/", // Replace with your actual deployed link


  },
  // {
  //   title: "Mobile Service Web App",
  //   tech: ["React", "Bootstrap", "Firebase"],
  //   description:
  //     "A mobile repair booking system where users can choose services, get cost estimates, and schedule doorstep service. Designed for fast and responsive mobile-first experience.",
  //   image:
  //     "https://img.freepik.com/premium-vector/computer-monitor-blank-display-screen-desktop-pc-laptop-flat-vector-illustration_768671-248.jpg?semt=ais_hybrid&w=740",
  //   link: "https://mobiserviceapp.netlify.app",
  // },
  {
    title: "Chrome Extension - Lead Manager",
    tech: ["JavaScript", "Chrome API", "Hugging Face"],
    description:
      "A Chrome extension for capturing and organizing leads with AI-powered suggestions using Hugging Face APIs. Built for digital marketers and freelancers.",
    image:
      "https://ideas.newsrx.com/hs-fs/hubfs/Chrome-Extensions.png?width=684&name=Chrome-Extensions.png",
    link: "https://chrome-extension-theta-nine.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-gray-50 text-black py-20 px-10 md:px-60 font-sans" id="projects">
      <p className="md:text-6xl text-5xl font-bold tracking-tight mb-14 border-b border-black pb-4">
        PROJECTS
      </p>

      <div className="space-y-20 py-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 group"
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-xl object-cover shadow-lg border border-white/10 hover:scale-[1.02] transition"
              />
            </div>

            {/* Project Info */}
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-2xl font-semibold group-">{project.title}</p>
              <p className="text-gray-400 text-xl">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-black rounded-full group-hover:text-black group-hover:border-black group-hover:bg-white transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm rounded-full bg-black text-white px-10 py-2 hover:opacity-80 transition"
                style={{ textDecoration: "none" }}
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
