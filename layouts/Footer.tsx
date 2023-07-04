import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ReactGA from "react-ga4";

import CONSTANT, { GA_CATEGORIES } from "../public/constant";

const Footer = () => {
  const onNavClick = (title: string) => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.navClick,
      action: title,
      label: "Footer navigation",
    });
  };

  const onLinkClick = (title: string) => {
    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.linkClick,
      action: title,
      label: "Link at footer",
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* left section */}
          <section className="profile col col-12 col-md-4 col-lg-3">
            <h3>SengKhun</h3>
            <span>Full stack developer</span>
          </section>

          {/* middle section */}
          <section className="site-map col col-12 col-md-5 col-lg-6">
            <a href="#about" onClick={() => onNavClick("About")}>
              About
            </a>
            <a
              href="#qualification"
              onClick={() => onNavClick("Qualification")}
            >
              Qualification
            </a>
            <a href="#contact" onClick={() => onNavClick("Contact")}>
              Contact
            </a>
          </section>

          {/* right section */}
          <section className="social-media col col-12 col-md-3">
            <a
              href={`mailto:${CONSTANT.email}`}
              target="_blank"
              title="Email"
              onClick={() => onLinkClick("Email")}
            >
              <MdEmail />
            </a>

            <a
              href={CONSTANT.linkedInLink}
              target="_blank"
              title="LinkedIn"
              onClick={() => onLinkClick("LinkedIn")}
            >
              <FaLinkedin />
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
