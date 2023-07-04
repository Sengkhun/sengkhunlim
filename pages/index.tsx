import React, { useEffect } from "react";
import ReactGA from "react-ga4";

import Navbar from "../components/Navbar";

import Home from "../layouts/Home";
import About from "../layouts/About";
import Skill from "../layouts/Skill";
import Qualification from "../layouts/Qualification";
import Media from "../layouts/Media";
import Tool from "../layouts/Tool";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";

import CONSTANT from "../public/constant";

const Index = () => {
  useEffect(() => {
    // send GA page event
    ReactGA.send({
      hitType: "Page View",
      page: "/",
      title: CONSTANT.title,
    });
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Qualification />
        {/* <Media /> */}
        <Tool />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
