// ✅ File: src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm" style={{ backgroundColor: "#000" }}>
      <div className="container d-flex justify-content-between align-items-center px-3 py-2">
        <a className="navbar-brand fw-bold fs-4 text-white" href="#home">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <a className="nav-link px-3 text-white" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 text-white" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 text-white" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3 text-white" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
