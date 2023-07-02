import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { GiPlainCircle } from "react-icons/gi";

import Gallery from "../components/Gallery";
import { MEDIA_SOURCES } from "../public/constant";

const highlightMedia = MEDIA_SOURCES.slice(0, 3);

const Media = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {}, [activeIdx]);

  const onIndicatorClick = (idx: number) => () => {
    highlightMedia[0] = highlightMedia[idx];
    setActiveIdx(idx);
  };

  return (
    <div id="media" className="section-container media-section">
      <div className="container">
        <h1 className="section-title">News and Media</h1>
        <h6 className="section-subtitle">What media talks about me</h6>
        <div className="media-container">
          <a className="navigator">
            <FaChevronLeft />
          </a>
          <div className="media-gallery">
            {highlightMedia.map((source, idx) => (
              <Gallery
                key={idx}
                imgSrc={source.image}
                title={source.title}
                description={source.description}
                url={source.url}
              />
            ))}
          </div>
          <a className="navigator">
            <FaChevronRight />
          </a>
        </div>

        {/* Indicator */}
        <div className="indicator-container">
          {highlightMedia.map((source, idx) => (
            <GiPlainCircle
              className={activeIdx === idx ? "active" : ""}
              key={idx}
              onClick={onIndicatorClick(idx)}
            />
          ))}
        </div>

        <button>
          See All <BiRightArrowAlt />
        </button>
      </div>
    </div>
  );
};

export default Media;
