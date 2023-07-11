import React, { Fragment, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import ReactGA from "react-ga4";

import { GA_CATEGORIES } from "../public/constant";

const qualificationCategories = [
  { label: "Work", icon: <MdWorkOutline /> },
  { label: "Education", icon: <MdOutlineSchool /> },
  { label: "Awards", icon: <PiMedal /> },
];

const workTimeline = [
  {
    title: "Full Stack Developer",
    subtitle: "Bigwig Advertising & Digital, Australia",
    year: "July 2021 - present",
  },
  {
    title: "Full Stack Project Lead Developer",
    subtitle: "TK CAPITAL PLC., Cambodia",
    year: "Aug 2018 - Jan 2020",
  },
  {
    title: "Backend Developer",
    subtitle: "GoSoccer, Cambodia",
    year: "2017 - 2019",
  },
  {
    title: "Full Stack Developer",
    subtitle: "Reaksmey Furniture, Cambodia",
    year: "2016 - 2019",
  },
];

const educationTimeline = [
  {
    title: "Master's degree in Information Technology",
    subtitle: "University of South Australia, Australia",
    year: "Jul 2020 -  Nov 2021",
  },
  {
    title: "Graduate Certificate in Information Technology",
    subtitle: "University of South Australia, Australia",
    year: "Mar 2020 - Jul 2020",
  },
  {
    title: "Bachelor's degree in Computer Science",
    subtitle: "Paragon International Univeristy, Cambodia",
    year: "2015 - 2019",
  },
  {
    title: "Android Application Development Course",
    subtitle: "Cambodia-Korea Cooperation Center, Cambodia",
    year: "Apr - Jun 2014",
  },
];

const awardTimeline = [
  {
    title: "Top 5% student in the Master's degree program",
    subtitle: "University of South Australia, Australia",
    year: "Mar 2022",
  },
  {
    title: "Honor Student Award",
    subtitle: "Paragon International Univeristy, Cambodia",
    year: "Jul 2019",
  },
  {
    title: "Winner of SmartStart Cycle 1 Grand Final",
    subtitle: "Smart Axiata, Cambodia",
    year: "Jan 2018",
  },
  {
    title: "Winner of the SmartStart Young Innovator Program",
    subtitle: "Smart Axiata, Cambodia",
    year: "May 2017",
  },
];

const allTimeline = [workTimeline, educationTimeline, awardTimeline];

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
                  {educationTimeline.length - 1 !== idx && (
                    <div className="line"></div>
                  )}
                </div>

                <div></div>
              </Fragment>
            ) : (
              <Fragment key={`${item.title} ${idx}`}>
                <div></div>
                <div className="divider">
                  <FaCircle />
                  {educationTimeline.length - 1 !== idx && (
                    <div className="line"></div>
                  )}
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
        <h6 className="section-subtitle">My personal journey</h6>

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
        <SwipeableViews index={activeTab}>
          {allTimeline.map(renderTimeline)}
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Qualification;
