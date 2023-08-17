import _ from "lodash";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface AnimatedNumberProps {
  animated: boolean;
  number: number;
}

const AnimatedNumber = (props: AnimatedNumberProps) => {
  // hooks
  const animatedNumber = useSpring({
    number: props.number,
    from: { number: 0 },
    config: { duration: 1500 },
    pause: !props.animated,
  });

  return (
    <animated.div>
      {animatedNumber.number.to((num) =>
        _.padStart(Math.round(num).toString(), 2, "0")
      )}
    </animated.div>
  );
};

export default AnimatedNumber;
