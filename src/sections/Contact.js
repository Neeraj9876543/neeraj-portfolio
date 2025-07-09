// ✅ File: src/sections/Contact.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="py-5 text-white" style={{ backgroundColor: "#000" }}>
      <div className="container border rounded p-4" style={{ backgroundColor: "#111" }} data-aos="fade-up">
        <h2 className="text-center mb-4" data-aos="fade-down">Contact Me</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">Name</label>
            <input type="text" className="form-control bg-secondary text-white border-0" id="name" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Email</label>
            <input type="email" className="form-control bg-secondary text-white border-0" id="email" placeholder="you@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">Message</label>
            <textarea className="form-control bg-secondary text-white border-0" id="message" rows="5" placeholder="Your message here..." required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
