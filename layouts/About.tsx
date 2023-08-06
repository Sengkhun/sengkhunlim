import _ from "lodash";
import React from "react";
import { FiDownload } from "react-icons/fi";
import ReactGA from "react-ga4";

import CONSTANT, { GA_CATEGORIES } from "../utils/constant";
import { stringFormatter } from "../utils/helpers";

interface AboutProps {
  baseUrl: string;
  yearsOfExperience: number;
}

const About = (props: AboutProps) => {
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
      <div className="container">
        <h1 className="section-title">About Me</h1>
        <h6 className="section-subtitle">My Introduction</h6>
        <p className="description">{description}</p>
        <div className="info-container">
          <div className="inner-container">
            <h2>{_.padStart(props.yearsOfExperience.toString(), 2, "0")}+</h2>
            <span>Years experience</span>
          </div>
          <div className="inner-container">
            <h2>12+</h2>
            <span>Completed projects</span>
          </div>
          <div className="inner-container">
            <h2>03+</h2>
            <span>Company worked</span>
          </div>
        </div>
        <button title="Download" onClick={onDownloadClick}>
          Download CV <FiDownload className="animate-down" />
        </button>
      </div>
    </div>
  );
};

export default About;
