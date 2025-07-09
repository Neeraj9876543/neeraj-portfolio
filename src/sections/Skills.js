// ✅ File: src/sections/Skills.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Python", "Django","Git", "GitHub","Bootstrap"
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="py-5 text-white" style={{ backgroundColor: "#000" }}>
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-5" data-aos="fade-down">Skills</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-pill bg-gradient text-white shadow-sm"
              style={{
                background: "linear-gradient(135deg, #6f42c1, #6610f2)",
                fontWeight: "bold",
                fontSize: "1rem",
                minWidth: "120px",
                textAlign: "center",
                animation: "fadeInUp 0.5s ease forwards",
                opacity: 0,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards"
              }}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* CSS Keyframes for animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
