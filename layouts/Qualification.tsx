import React, { Fragment, useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import ReactGA from "react-ga4";
import { useSelector } from "react-redux";
import { useSpring, animated, useTransition } from "@react-spring/web";

import { GA_CATEGORIES, QUALIFICATION_TIMELINES } from "../utils/constant";
import { AppState } from "../store";

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
  // hooks
  const visibleQualification = useSelector(
    (state: AppState) => state.nav?.visibleQualification
  );
  const containerStyle = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 500 },
    pause: !visibleQualification,
  });
  const [transitions, api] = useTransition(qualificationCategories, () => ({
    from: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    config: { duration: 300 },
    trail: 200,
  }));

  // states
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (visibleQualification) {
      api.start();
    }
  }, [visibleQualification]);

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
    <animated.div
      id="qualification"
      className="section-container qualification-section"
      style={containerStyle}
    >
      <div className="container">
        <h2 className="section-title">Qualification</h2>
        <h3 className="section-subtitle">My career experience and journey</h3>

        {/* qualification tab */}
        <div className="tab-container">
          {transitions((style, qualification, transition, idx) => (
            <animated.div
              style={style}
              title={qualification.label}
              className={`tab-item ${activeTab === idx && "active"}`}
              onClick={() => onTabClick(idx, qualification.label)}
            >
              {qualification.icon}
              <span>{qualification.label}</span>
            </animated.div>
          ))}
          {/* {qualificationCategories.map((qualification, idx) => (
            <div
              key={`${qualification.label} ${idx}`}
              title={qualification.label}
              className={`tab-item ${activeTab === idx && "active"}`}
              onClick={() => onTabClick(idx, qualification.label)}
            >
              {qualification.icon}
              <span>{qualification.label}</span>
            </div>
          ))} */}
        </div>

        {/* timeline */}
        <SwipeableViews index={activeTab} onChangeIndex={onTabChange}>
          {allTimeline.map(renderTimeline)}
        </SwipeableViews>
      </div>
    </animated.div>
  );
};

export default Qualification;
