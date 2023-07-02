import React, { useState } from "react";
import { IconBaseProps } from "react-icons/";
import { MdKeyboardArrowUp } from "react-icons/md";

interface skillList {
  label: string;
  percentage: number;
}

interface Props {
  icon: React.ReactElement<IconBaseProps>;
  title: string;
  subtitle: string;
  skills: Array<skillList>;
}

const SkillSet = (props: Props) => {
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
            <div key={index}>
              <div className="dropdown-label-container">
                <span className="label">{skill.label}</span>
                <span className="percentage">{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <span style={{ width: `${skill.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
