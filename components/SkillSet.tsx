import React, { useEffect, useState } from "react";
import { IconBaseProps } from "react-icons/";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useTransition, animated } from "@react-spring/web";

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
  // hooks
  const [transitions, api] = useTransition(props.skills, () => ({
    from: { opacity: 0, y: 50, propgress: 0, width: `0%` },
    enter: (skill) => ({
      opacity: 1,
      y: 0,
      propgress: skill.percentage,
      width: `${skill.percentage}%`,
    }),
    config: { duration: 1000 },
    trail: 300,
  }));

  // states
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (props.visible) {
      api.start();
    }
  }, [props.visible]);

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
          {transitions(({ width, propgress, ...style }, skill) => (
            <animated.div style={style}>
              <div className="dropdown-label-container">
                <span className="label">{skill.label}</span>
                <div className="percentage">
                  <animated.span>
                    {propgress.to((num) => Math.round(num))}
                  </animated.span>
                  %
                </div>
              </div>
              <div className="progress-bar">
                <animated.span style={{ width }} />
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
