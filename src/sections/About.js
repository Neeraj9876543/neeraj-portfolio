import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/about-img.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-5 text-white" style={{ backgroundColor: "#000" }}>
      <div
        className="container border rounded p-4"
        style={{ backgroundColor: "#111" }}
        data-aos="fade-up"
      >
        <div className="row align-items-center">
          {/* Left: Text Content */}
          <div className="col-md-7" data-aos="fade-right">
            <h2 className="mb-4">About Me</h2>
            <p className="lead">
              I'm <strong>Gajula Neeraj Kumar</strong>, a passionate full stack developer based in Guntur.
              Skilled in React, Django, REST APIs, and deployment workflows.
            </p>

            <ul className="list-group list-group-flush my-4">
              <li className="list-group-item bg-dark text-white">
                🎓 <strong>Education:</strong> B.Tech in CSE, Vignan University (2023–2027)
              </li>
              <li className="list-group-item bg-dark text-white">
                🛠️ <strong>Skills:</strong> HTML, CSS, JavaScript, React.js, Python, Django, REST APIs
              </li>
              <li className="list-group-item bg-dark text-white">
                🏆 <strong>Achievements:</strong> Participated in Web Hackathon during Department Fest
              </li>
            </ul>

            <div className="mt-4">
              <a
                href="/resume.pdf"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Download Resume
              </a>
            </div>
          </div>

          {/* Right: Reduced Image Size */}
          <div className="col-md-5 text-center" data-aos="fade-left">
            <img
              src={profileImage}
              alt="Profile"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
