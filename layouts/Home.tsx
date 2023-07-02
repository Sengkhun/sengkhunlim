import React from "react";
import Image from "next/image";
import { AiOutlineSend } from "react-icons/ai";

import ProfilePicture from "../public/images/profile-picture.png";
import ProfilePictureSquare from "../public/images/profile-picture-square.png";

const Home = () => {
  return (
    <div id="home" className="section-container home-section">
      <div className="container">
        <div className="row">
          {/* left panel */}
          <div className="left-panel order-last order-md-first col-12 col-md-6">
            <h1 className="section-title">Hi, I&apos;m SengKhun</h1>
            <h6 className="section-subtitle">Full stack developer</h6>
            <p className="description">
              High level experience in web and mobile development knowledge,
              producing high quality work.
            </p>
            <button>
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
