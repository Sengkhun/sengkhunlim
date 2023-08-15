import React, { useEffect } from "react";
import Image from "next/image";
import ReactGA from "react-ga4";
import { useSelector } from "react-redux";
import { useSpring, animated, useTransition } from "@react-spring/web";

import { GA_CATEGORIES, TECHNOLOGIES } from "../utils/constant";
import { AppState } from "../store";

const Tool = () => {
  // hooks
  const visibleTool = useSelector((state: AppState) => state.nav?.visibleTool);
  const containerStyle = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 500 },
    pause: !visibleTool,
  });
  const [transitions, api] = useTransition(TECHNOLOGIES, () => ({
    from: { opacity: 0, x: 100 },
    enter: (item, index) => ({ opacity: 1, x: 0, delay: index * 100 }),
    config: { duration: 200 },
  }));

  useEffect(() => {
    if (visibleTool) {
      api.start();
    }
  }, [visibleTool]);

  const onIconClick = (title: string) => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.iconClick,
      action: title,
    });
  };

  return (
    <animated.div
      id="tool"
      className="section-container tool-section"
      style={containerStyle}
    >
      <div className="container">
        <h2 className="section-title">Tools</h2>
        <h3 className="section-subtitle">A look into what I excel at</h3>

        <div className="image-container">
          {transitions((style, item) => (
            <animated.div style={style}>
              <a
                title={item.title}
                className="image-inner-container"
                href={item.link}
                target={item.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={() => onIconClick(item.title)}
              >
                <Image src={item.imgSrc} alt={item.alt} />
                <span>{item.title}</span>
              </a>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default Tool;
