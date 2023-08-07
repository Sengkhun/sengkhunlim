import React from "react";
import Image from "next/image";
import ReactGA from "react-ga4";
import { IoHome } from "react-icons/io5";

import NotFoundImage from "../public/images/page-not-found.svg";
import { GA_CATEGORIES } from "../utils/constant";

const NotFound = () => {
  const onHomeClick = () => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.buttonClick,
      action: "Go Back Home",
    });

    window.location.href = "/";
  };

  return (
    <div className="section-container not-found-section">
      <div className="container">
        <div className="row">
          {/* left panel */}
          <div className="left-panel col-12 col-md-6">
            <Image src={NotFoundImage} alt="Page not found" />
          </div>

          {/* right panel */}
          <div className="right-panel col-12 col-md-6">
            {/* title */}
            <h1 className="title">
              Oops,
              <br />
              <span className="text-gradient">nothing</span> here...
            </h1>

            {/* description */}
            <p className="description">
              Uh oh, the page you&apos;re looking for seems to have gone off the
              grid. No worries though! If you could click on the magic{" "}
              <span className="text-gradient">
                <b>Home</b>
              </span>{" "}
              button below, you&apos;ll be landing at my cozy home page.
            </p>

            {/* back button */}
            <div className="button-container">
              <button className="back-button" onClick={onHomeClick}>
                Home <IoHome className="animate-up" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
