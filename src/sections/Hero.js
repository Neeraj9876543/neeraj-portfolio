import React, { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/profile.jpg"; // 🔁 Update with actual image path

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="position-relative" style={{ minHeight: "100vh" }}>
      {/* 🔲 Sticky Spline Background */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{ zIndex: 0, backgroundColor: "#000" }}
      >
        <Spline scene="https://prod.spline.design/bjgj-dojtNntZZBO/scene.splinecode" />
      </div>

      {/* 💬 Foreground Hero Section */}
      <section
        id="home"
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{ zIndex: 1, minHeight: "100vh" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* 📝 Left Text Content */}
            <div className="col-md-7" data-aos="fade-right">
              <h1 className="fw-bold mb-2">Hi, I’m Gajula Neeraj Kumar</h1>
              <h5 className="text-light mb-3">Full Stack Web Developer</h5>

              <p className="lead">
                Passionate developer with experience in React & Django. Skilled in REST APIs,
                version control, and real-world deployments.
              </p>

              <div className="mt-4">
                <a href="#contact" className="btn btn-outline-light me-3">
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* 👤 Right Circular Profile Image */}
            <div className="col-md-5 text-center" data-aos="fade-left">
              <div
                className="shadow mx-auto rounded-circle overflow-hidden"
                style={{
                  width: "400px",
                  height: "400px",
                }}
              >
                <img
                  src={profileImage}
                  alt="Neeraj"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
