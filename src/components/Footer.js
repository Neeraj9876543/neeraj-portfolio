// ✅ File: src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-white" style={{ backgroundColor: "#000" }}>
      <div className="container border rounded p-4" style={{ backgroundColor: "#111" }}>
        <div className="text-center">
          <p className="mb-2">&copy; {new Date().getFullYear()} Gajula Neeraj Kumar</p>
          <p className="mb-2">Made with ❤️ using React, Bootstrap & AOS</p>
          <div className="d-flex justify-content-center gap-4">
            <a
              href="https://github.com/Neeraj9876543"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              GitHub
            </a>
            <a
              href="mailto:gajulaneerajkumar2005@gmail.com"
              className="text-white text-decoration-none"
            >
              Email
            </a>
            <a
              href="https://neeraj9876543.github.io/Assignment-1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
