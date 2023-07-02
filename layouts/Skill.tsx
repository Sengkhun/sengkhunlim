import React from "react";
import { FaLaptopCode, FaDev } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";

import SkillSet from "../components/SkillSet";

const frontendSkills = [
  { label: "React & React Native", percentage: 100 },
  { label: "JavaScript", percentage: 95 },
  { label: "HTML", percentage: 90 },
  { label: "CSS", percentage: 90 },
];

const backendSkills = [
  { label: "ExpressJS", percentage: 100 },
  { label: "GraphQL", percentage: 90 },
  { label: "JavaScript", percentage: 95 },
  { label: "HTML", percentage: 90 },
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
            subtitle="More than 3 years"
            skills={frontendSkills}
          />

          {/* backend */}
          <SkillSet
            icon={<FaLaptopCode className="main-icon" />}
            title="Backend Development"
            subtitle="More than 3 years"
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