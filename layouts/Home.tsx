import React from "react";
import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";
import ReactGA from "react-ga4";

import ProfilePicture from "../public/images/profile-picture.png";
import ProfilePictureSquare from "../public/images/profile-picture-square.png";
import { GA_CATEGORIES } from "../utils/constant";

const Home = () => {
  const onContactClick = () => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.buttonClick,
      action: "Contact Me",
    });

    window.location.href = "#contact";
  };

  return (
    <div id="home" className="section-container home-section">
      <div className="container">
        <div className="row">
          {/* left panel */}
          <div className="left-panel order-last order-md-first col-12 col-md-6">
            <h1 className="section-title">Hi, I&apos;m Khun</h1>
            <h3 className="section-subtitle">Full Stack Developer</h3>
            <p className="description">
              I love turning ideas into functional and elegant digital
              solutions. From front-end finesse to back-end expertise, I&apos;ve
              got you covered. Let&apos;s bring your visions to life!
            </p>
            <button onClick={onContactClick}>
              Contact Me <AiOutlineSend />
            </button>
          </div>

          {/* right panel */}
          <div className="right-panel col-12 col-md-6">
            {/* profile image */}
            <div className="profile-image-square-container">
              <Image src={ProfilePictureSquare} alt="Profile Picture" />
            </div>
          </div>
        </div>
      </div>

      {/* big side profile image */}
      <div className="big-profile-image-container">
        <Image src={ProfilePicture} alt="Profile Picture" />
      </div>

      {/* circle */}
      <div className="circle" />
    </div>
  );
};

export default Home;
