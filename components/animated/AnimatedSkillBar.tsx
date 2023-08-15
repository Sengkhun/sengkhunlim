import _ from "lodash";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedSkillBarProps {
  animated: boolean;
  label: string;
  percentage: number;
  delay: number;
}

const AnimatedSkillBar = (props: AnimatedSkillBarProps) => {
  // hooks
  const { width, propgress, ...animatedBarStyle } = useSpring({
    from: { opacity: 0, y: 50, propgress: 0, width: `0%` },
    to: {
      opacity: 1,
      y: 0,
      propgress: props.percentage,
      width: `${props.percentage}%`,
    },
    config: { duration: 1000 },
    delay: props.delay,
    pause: !props.animated,
  });

  return (
    <animated.div style={animatedBarStyle}>
      <div className="dropdown-label-container">
        <span className="label">{props.label}</span>
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
  );
};

export default AnimatedSkillBar;
