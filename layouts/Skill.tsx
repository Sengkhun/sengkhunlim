import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";

import SkillSet from "../components/SkillSet";

const frontendSkills = [
  { label: "React & React Native", percentage: 100 },
  { label: "JavaScript & Typescript", percentage: 100 },
  { label: "HTML & CSS", percentage: 95 },
  { label: "UX & UI", percentage: 95 },
];

const backendSkills = [
  { label: "API Development", percentage: 100 },
  { label: "Database Management", percentage: 100 },
  { label: "Cloud Hosting", percentage: 95 },
  { label: "Security and Authentication", percentage: 95 },
];

const Skill = () => {
  return (
    <div id="skill" className="section-container skill-section">
      <div className="container">
        <h1 className="section-title">Skills</h1>
        <h6 className="section-subtitle">My technical level</h6>
        <div className="skill-content-container row">
          {/* frontend */}
          <SkillSet
            icon={<BiCodeBlock className="main-icon" />}
            title="Frontend Development"
            subtitle="More than 4 years"
            skills={frontendSkills}
          />

          {/* backend */}
          <SkillSet
            icon={<FaLaptopCode className="main-icon" />}
            title="Backend & Dev Ops"
            subtitle="More than 4 years"
            skills={backendSkills}
          />

          {/* dev ops */}
          {/* <SkillSet
            icon={<FaDev className="main-icon" />}
            title="DevOps"
            subtitle="More than 3 years"
            skills={frontendSkills}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Skill;
