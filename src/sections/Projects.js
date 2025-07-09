// ✅ File: src/sections/Projects.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio built with HTML, CSS, and JS. Hosted on GitHub Pages.",
    image: "https://via.placeholder.com/600x300",
    link: "https://neeraj9876543.github.io/Assignment-1/"
  },
  {
    title: "Full Stack Blog Application",
    description: "Blog app with Django backend and React frontend. Features user auth, CRUD operations, and Heroku deployment.",
    image: "https://via.placeholder.com/600x300",
    link: "#"
  },
  {
    title: "SeaCities – Indian Beach Guide",
    description: "Web project helping tourists explore beaches in India. Built with HTML, CSS, and JS.",
    image: "https://via.placeholder.com/600x300",
    link: "#"
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
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card bg-dark text-white h-100 border-light">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <a href={project.link} className="btn btn-outline-light mt-3" target="_blank" rel="noopener noreferrer">
                    🔗 View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
