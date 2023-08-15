import React, { useState } from "react";
import { IconBaseProps } from "react-icons/";
import { MdKeyboardArrowUp } from "react-icons/md";
import AnimatedSkillBar from "./animated/AnimatedSkillBar";

interface SkillList {
  label: string;
  percentage: number;
}

interface SkillSetProps {
  visible: boolean;
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  subtitle: string;
  skills: Array<SkillList>;
}

const SkillSet = (props: SkillSetProps) => {
  // states
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="skill-set-container col-12 col-md-6">
      {/* icon */}
      {props.icon}

      <div className="dropdown-container">
        {/* title */}
        <div className="title-container" onClick={() => setExpanded(!expanded)}>
          <div>
            <p className="title">{props.title}</p>
            <p className="subtitle">{props.subtitle}</p>
          </div>
          <MdKeyboardArrowUp
            className={`dropdown-icon ${expanded && "active"}`}
          />
        </div>

        {/* drop down */}
        <div className={`dropdown-item-container ${expanded ? "active" : ""}`}>
          {props.skills.map((skill, index) => (
            <AnimatedSkillBar
              key={index}
              animated={props.visible}
              label={skill.label}
              percentage={skill.percentage}
              delay={index * 300}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
