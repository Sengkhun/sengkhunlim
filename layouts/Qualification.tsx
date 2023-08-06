import React, { Fragment, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import ReactGA from "react-ga4";

import { GA_CATEGORIES, QUALIFICATION_TIMELINES } from "../utils/constant";

const qualificationCategories = [
  { label: "Work", icon: <MdWorkOutline /> },
  { label: "Education", icon: <MdOutlineSchool /> },
  { label: "Awards", icon: <PiMedal /> },
];

const allTimeline = [
  QUALIFICATION_TIMELINES.work,
  QUALIFICATION_TIMELINES.education,
  QUALIFICATION_TIMELINES.award,
];

const Qualification = () => {
  // states
  const [activeTab, setActiveTab] = useState(0);

  const onTabClick = (idx: number, label: string) => {
    setActiveTab(idx);

    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.tabClick,
      action: label,
    });
  };

  const onTabChange = (idx: number) => {
    setActiveTab(idx);
  };

  const renderTimeline = (timeline: any, timelineIdx: any) => {
    return (
      <div key={timelineIdx} className="qualification-timeline-container">
        <div className="qualification-timeline">
          {timeline.map((item: any, idx: any) =>
            idx % 2 === 0 ? (
              <Fragment key={`${item.title} ${idx}`}>
                <div className="qualification-data">
                  <span className="qualification-title">{item.title}</span>
                  <span className="qualification-subtitle">
                    {item.subtitle}
                  </span>
                  <div className="qualification-year">
                    <FiCalendar />
                    <span>{item.year}</span>
                  </div>
                </div>

                <div className="divider">
                  <FaCircle />
                  {timeline.length - 1 !== idx && <div className="line"></div>}
                </div>

                <div></div>
              </Fragment>
            ) : (
              <Fragment key={`${item.title} ${idx}`}>
                <div></div>
                <div className="divider">
                  <FaCircle />
                  {timeline.length - 1 !== idx && <div className="line"></div>}
                </div>
                <div className="qualification-data">
                  <span className="qualification-title">{item.title}</span>
                  <span className="qualification-subtitle">
                    {item.subtitle}
                  </span>
                  <div className="qualification-year">
                    <FiCalendar />
                    <span>{item.year}</span>
                  </div>
                </div>
              </Fragment>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="qualification" className="section-container qualification-section">
      <div className="container">
        <h1 className="section-title">Qualification</h1>
        <h6 className="section-subtitle">My career experience and journey</h6>

        {/* qualification tab */}
        <div className="tab-container">
          {qualificationCategories.map((qualification, idx) => (
            <div
              key={`${qualification.label} ${idx}`}
              title={qualification.label}
              className={`tab-item ${activeTab === idx && "active"}`}
              onClick={() => onTabClick(idx, qualification.label)}
            >
              {qualification.icon}
              <span>{qualification.label}</span>
            </div>
          ))}
        </div>

        {/* timeline */}
        <SwipeableViews index={activeTab} onChangeIndex={onTabChange}>
          {allTimeline.map(renderTimeline)}
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Qualification;
