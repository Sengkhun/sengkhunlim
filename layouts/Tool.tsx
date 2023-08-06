import React from "react";
import Image from "next/image";
import ReactGA from "react-ga4";

import { GA_CATEGORIES, TECHNOLOGIES } from "../utils/constant";

const Tool = () => {
  const onIconClick = (title: string) => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.iconClick,
      action: title,
    });
  };

  return (
    <div id="tool" className="section-container tool-section">
      <div className="container">
        <h2 className="section-title">Tools</h2>
        <h6 className="section-subtitle">A look into what I excel at</h6>

        <div className="image-container">
          {TECHNOLOGIES.map((item, idx) => (
            <a
              key={idx}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tool;
