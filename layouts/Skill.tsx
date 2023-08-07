import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";

import SkillSet from "../components/SkillSet";
import { SKILL_SETS } from "../utils/constant";

interface SkillProps {
  yearsOfExperience: number;
}

const Skill = (props: SkillProps) => {
  return (
    <div id="skill" className="section-container">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <h3 className="section-subtitle">My technical skill levels</h3>
        <div className="skill-content-container row">
          {/* frontend */}
          <SkillSet
            icon={<BiCodeBlock className="main-icon" />}
            title="Frontend Development"
            subtitle={`More than ${props.yearsOfExperience} years`}
            skills={SKILL_SETS.frontend}
          />

          {/* backend */}
          <SkillSet
            icon={<FaLaptopCode className="main-icon" />}
            title="Backend & Dev Ops"
            subtitle={`More than ${props.yearsOfExperience} years`}
            skills={SKILL_SETS.backend}
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
