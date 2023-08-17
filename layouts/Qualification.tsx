import _ from "lodash";
import React, { useEffect, useState } from "react";
import { MdWorkOutline, MdOutlineSchool } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
import ReactGA from "react-ga4";
import { useSelector } from "react-redux";
import { useSpring, animated, useTransition } from "@react-spring/web";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import AnimatedTimeline from "../components/animated/AnimatedTimeline";
import {
  ANIMATION_CONFIG,
  GA_CATEGORIES,
  QUALIFICATION_TIMELINES,
} from "../utils/constant";
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
    config: { duration: ANIMATION_CONFIG.duration },
    pause: !visibleQualification,
  });
  const [tabTransitions, tabApi] = useTransition(
    qualificationCategories,
    () => ({
      from: { opacity: 0, x: -100 },
      enter: { opacity: 1, x: 0 },
      config: { duration: 300 },
      trail: 200,
    })
  );

  // states
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (visibleQualification) {
      tabApi.start();
    }
  }, [visibleQualification]);

  const onTabClick = (idx: number, label: string) => {
    setActiveTab(idx);
    swiperRef.slideTo(idx);

    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.tabClick,
      action: label,
    });
  };

  const renderTimeline = (timeline: any, timelineIdx: any) => {
    return (
      <SwiperSlide key={timelineIdx}>
        <div className="qualification-timeline-container">
          <div className="qualification-timeline">
            <AnimatedTimeline
              key={timelineIdx}
              animated={visibleQualification && activeTab === timelineIdx}
              delay={timelineIdx === 0 ? 1000 : 0}
              timeline={timeline}
            />
          </div>
        </div>
      </SwiperSlide>
    );
  };

  return (
    <div id="qualification" className="section-container qualification-section">
      <animated.div className="container" style={containerStyle}>
        <h2 className="section-title">Qualification</h2>
        <h3 className="section-subtitle">My career experience and journey</h3>

        {/* qualification tab */}
        <div className="tab-container">
          {tabTransitions((style, qualification, transition, idx) => (
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
        </div>

        {/* timeline */}
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={({ activeIndex }) => setActiveTab(activeIndex)}
          onSwiper={setSwiperRef}
        >
          {allTimeline.map(renderTimeline)}
        </Swiper>
      </animated.div>
    </div>
  );
};

export default Qualification;
