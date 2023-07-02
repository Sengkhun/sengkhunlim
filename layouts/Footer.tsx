import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <section className="profile col col-12 col-md-4 col-lg-3">
            <h3>SengKhun</h3>
            <span>Full Stack Developer</span>
          </section>
          <section className="site-map col col-12 col-md-5 col-lg-6">
            {/* <a>News and Media</a> */}
            <a>Qualification</a>
            <a>Contact</a>
          </section>
          <section className="social-media col col-12 col-md-3">
            <FaFacebookSquare />
            <FaInstagram />
            <FaLinkedin />
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
