import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  MdWorkOutline,
  MdOutlineBackHand,
  MdOutlineSchool,
} from "react-icons/md";
import { FiCalendar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const qualificationCategories = [
  { label: "Work", icon: <MdWorkOutline /> },
  { label: "Education", icon: <MdOutlineSchool /> },
  { label: "Volunteer", icon: <MdOutlineBackHand /> },
];

const workTimeline = [
  { title: "Work Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
];

const educationTimeline = [
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
];

const volunteerTimeline = [
  { title: "Volunteer Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
  { title: "Tech Mentor", subtitle: "Smart Axiata, Cambodia", year: 2018 },
];

const allTimeline = [workTimeline, educationTimeline, volunteerTimeline];

const Qualification = () => {
  // states
  const [activeTab, setActiveTab] = useState(0);

  const renderTimeline = (timeline: any) => {
    return (
      <div className="qualification-timeline-container">
        <div className="qualification-timeline">
          {timeline.map((item: any, idx: any) =>
            idx % 2 === 0 ? (
              <>
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
              </>
            ) : (
              <>
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
              </>
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
              title={qualification.label}
              className={`tab-item ${activeTab === idx && "active"}`}
              key={qualification.label}
              onClick={() => setActiveTab(idx)}
            >
              {qualification.icon}
              <span>{qualification.label}</span>
            </div>
          ))}
        </div>

        {/* timeline */}
        <SwipeableViews index={activeTab}>
          {allTimeline.map((timeline) => renderTimeline(timeline))}
        </SwipeableViews>
      </div>
    </div>
  );
};

export default Qualification;
