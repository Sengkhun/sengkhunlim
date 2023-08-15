import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";

import SkillSet from "../components/SkillSet";
import { SKILL_SETS } from "../utils/constant";
import { AppState } from "../store";

interface SkillProps {
  yearsOfExperience: number;
}

const Skill = (props: SkillProps) => {
  // hooks
  const visibleSkill = useSelector(
    (state: AppState) => state.nav?.visibleSkill
  );
  const containerStyle = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 500 },
    pause: !visibleSkill,
  });

  return (
    <animated.div
      id="skill"
      className="section-container"
      style={containerStyle}
    >
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <h3 className="section-subtitle">My technical skill levels</h3>
        <div className="skill-content-container row">
          {/* frontend */}
          <SkillSet
            visible={visibleSkill}
            icon={<BiCodeBlock className="main-icon" />}
            title="Frontend Development"
            subtitle={`More than ${props.yearsOfExperience} years`}
            skills={SKILL_SETS.frontend}
          />

          {/* backend */}
          <SkillSet
            visible={visibleSkill}
            icon={<FaLaptopCode className="main-icon" />}
            title="Backend & Dev Ops"
            subtitle={`More than ${props.yearsOfExperience} years`}
            skills={SKILL_SETS.backend}
          />
        </div>
      </div>
    </animated.div>
  );
};

export default Skill;
