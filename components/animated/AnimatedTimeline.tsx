import React, { Fragment, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { FiCalendar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

interface AnimatedTimelineProps {
  animated: boolean;
  delay: number;
  timeline: Array<{
    title: string;
    subtitle: string;
    year: string;
  }>;
}

const AnimatedTimeline = (props: AnimatedTimelineProps) => {
  // hooks
  const [transitions, api] = useTransition(props.timeline, () => ({
    from: { opacity: 0, line: "0%", left: -100, right: 100 },
    enter: { opacity: 1, line: "100%", left: 0, right: 0 },
    config: { duration: 300 },
    delay: props.delay,
    trail: 400,
  }));

  useEffect(() => {
    if (props.animated) {
      api.start();
    }
  }, [props.animated]);

  return transitions(
    ({ opacity, line, left, right }, timeline, transition, idx) => {
      const showLine = props.timeline.length - 1 !== idx;
      return (
        <Fragment key={`${timeline.title} ${idx}`}>
          {idx % 2 === 0 ? (
            <>
              <animated.div
                className="qualification-data"
                style={{ x: left, opacity }}
              >
                <span className="qualification-title">{timeline.title}</span>
                <span className="qualification-subtitle">
                  {timeline.subtitle}
                </span>
                <div className="qualification-year">
                  <FiCalendar />
                  <span>{timeline.year}</span>
                </div>
              </animated.div>

              <div className="divider">
                <animated.span style={{ opacity }}>
                  <FaCircle />
                </animated.span>
                {showLine ? (
                  <animated.div
                    className="line"
                    style={{ height: line }}
                  ></animated.div>
                ) : null}
              </div>

              <div></div>
            </>
          ) : (
            <>
              <div></div>
              <div className="divider">
                <animated.span style={{ opacity }}>
                  <FaCircle />
                </animated.span>
                {showLine ? (
                  <animated.div
                    className="line"
                    style={{ height: line }}
                  ></animated.div>
                ) : null}
              </div>
              <animated.div
                className="qualification-data"
                style={{ x: right, opacity }}
              >
                <span className="qualification-title">{timeline.title}</span>
                <span className="qualification-subtitle">
                  {timeline.subtitle}
                </span>
                <div className="qualification-year">
                  <FiCalendar />
                  <span>{timeline.year}</span>
                </div>
              </animated.div>
            </>
          )}
        </Fragment>
      );
    }
  );
};

export default AnimatedTimeline;
