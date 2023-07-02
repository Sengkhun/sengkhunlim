import React from "react";
import Navbar from "../components/Navbar";
import Home from "../layouts/Home";
import About from "../layouts/About";
import Skill from "../layouts/Skill";
import Qualification from "../layouts/Qualification";
import Media from "../layouts/Media";
import Tool from "../layouts/Tool";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";

const Index = () => {
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
