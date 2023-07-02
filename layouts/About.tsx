import React from "react";
import { FiDownload } from "react-icons/fi";

function About() {
  return (
    <div id="about" className="section-container about-section">
      <div className="container">
        <h1 className="section-title">About Me</h1>
        <h6 className="section-subtitle">My Introduction</h6>
        <p className="description">
          Web and mobile developer, with extensive knowledge and years of
          experience, working with latest technologies to integrate in projects,
          delivering high quality work.
        </p>
        <div className="info-container">
          <div className="inner-container">
            <h2>02+</h2>
            <span>Years experience</span>
          </div>
          <div className="inner-container">
            <h2>05+</h2>
            <span>Completed projects</span>
          </div>
          <div className="inner-container">
            <h2>03+</h2>
            <span>Company worked</span>
          </div>
        </div>
        <button>
          Download CV <FiDownload className="animate-down" />
        </button>
      </div>
    </div>
  );
}

export default About;
