import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CONSTANT from "../public/constant";

function Footer() {
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
            <a href="#about">About</a>
            <a href="#qualification">Qualification</a>
            <a href="#contact">Contact</a>
          </section>

          {/* right section */}
          <section className="social-media col col-12 col-md-3">
            <a href={`mailto:${CONSTANT.email}`} target="_blank" title="Email">
              <MdEmail />
            </a>

            <a href={CONSTANT.linkedInLink} target="_blank" title="LinkedIn">
              <FaLinkedin />
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
