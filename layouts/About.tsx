import _ from "lodash";
import React from "react";
import { FiDownload } from "react-icons/fi";
import ReactGA from "react-ga4";
import { useSelector } from "react-redux";
import { useSpring, animated } from "@react-spring/web";

import AnimatedNumber from "../components/animated/AnimatedNumber";
import CONSTANT, { ANIMATION_CONFIG, GA_CATEGORIES } from "../utils/constant";
import { stringFormatter } from "../utils/helpers";
import { AppState } from "../store";

interface AboutProps {
  baseUrl: string;
  yearsOfExperience: number;
}

const About = (props: AboutProps) => {
  // hooks
  const visibleAbout = useSelector(
    (state: AppState) => state.nav?.visibleAbout
  );
  const containerStyle = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { duration: ANIMATION_CONFIG.duration },
    pause: !visibleAbout,
  });

  const onDownloadClick = () => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.buttonClick,
      action: "Download CV",
    });

    const link = document.createElement("a");
    link.href = `${props.baseUrl}/documents/Sengkhun_Lim_CV.pdf`;
    link.download = CONSTANT.cvFilename;
    link.target = "_blank"; // Open in a new tab
    link.rel = "noopener noreferrer";

    link.click();
  };

  const description = stringFormatter(CONSTANT.description, {
    yearsOfExperience: props.yearsOfExperience,
  });

  return (
    <div id="about" className="section-container about-section">
      <animated.div className="container" style={containerStyle}>
        <h2 className="section-title">About Me</h2>
        <h3 className="section-subtitle">My Introduction</h3>
        <p className="description">{description}</p>
        <div className="info-container">
          <div className="inner-container">
            <div className="animated-number">
              <AnimatedNumber
                number={props.yearsOfExperience}
                animated={visibleAbout}
              />
              +
            </div>
            <span>Years experience</span>
          </div>
          <div className="inner-container">
            <div className="animated-number">
              <AnimatedNumber number={15} animated={visibleAbout} />+
            </div>
            <span>Completed projects</span>
          </div>
          <div className="inner-container">
            <div className="animated-number">
              <AnimatedNumber number={3} animated={visibleAbout} />+
            </div>
            <span>Company worked</span>
          </div>
        </div>
        <button title="Download" onClick={onDownloadClick}>
          Download CV <FiDownload className="animate-down" />
        </button>
      </animated.div>
    </div>
  );
};

export default About;
