// ✅ File: src/sections/Projects.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import screen1 from "../assets/Screenshot-1.png";
import screen2 from "../assets/Screenshot-2.png";
import screen3 from "../assets/Screenshot-3.png";
const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio built with React. Hosted on Vercel Pages.",
    image: screen1,
    link: "https://neeraj-portfolio-rosy.vercel.app/"
  },
  {
    title: "🔮 AuraMind – Your AI Life Companion",
    description: "AuraMind is a full-stack AI assistant for health, productivity & knowledge.",
    image: "https://via.placeholder.com/600x300",
    link: "#"
  },
  {
    title: "SeaCities – Indian Beach Guide",
    description: "Tourist beach guide for India using HTML, CSS, and JS.",
    image: screen2,
    link: "https://seacities.netlify.app/"
  },
  {
    title: "Instagram clone-Both Frontend and Backend",
    description: "A full-stack social media app built with React and Django. Users can sign up, log in, upload photos with captions, like posts, and comment on them.",
    image: screen3,
    link: "https://assignment-6-instagram.vercel.app/"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="py-5 text-white" style={{ backgroundColor: "#000" }}>
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-5" data-aos="fade-down">Projects</h2>

        {/* Horizontal scroll container */}
        <div
          className="d-flex gap-4 overflow-auto pb-3"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-dark text-white border-light flex-shrink-0"
              style={{
                width: "320px",
                scrollSnapAlign: "start",
                minHeight: "180px"
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-outline-light mt-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
