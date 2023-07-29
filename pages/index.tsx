import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import moment from "moment";

import Navbar from "../components/Navbar";

import Home from "../layouts/Home";
import About from "../layouts/About";
import Skill from "../layouts/Skill";
import Qualification from "../layouts/Qualification";
import Tool from "../layouts/Tool";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";

import CONSTANT from "../utils/constant";
import Head from "next/head";

export async function getServerSideProps({ req }: any) {
  const protocol = req?.headers.host.includes("localhost")
    ? "http://"
    : "https://";
  const baseUrl = req ? `${protocol}${req.headers.host}` : "";

  // calculate years of experience
  const now = moment();
  const startedDate = moment(CONSTANT.startedDate);
  const yearsOfExperience = now.diff(startedDate, "years");

  return {
    props: { baseUrl, yearsOfExperience },
  };
}

interface IndexProps {
  baseUrl: string;
  yearsOfExperience: number;
}

const Index = (props: IndexProps) => {
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
      <Head>
        <meta property="og:title" content={CONSTANT.title} />
        <meta property="og:description" content={CONSTANT.description} />
        <meta
          property="og:image"
          content={`${props.baseUrl}/images/web-thumbnail.png`}
        />
        <link rel="canonical" href="https://sengkhun.com/" />
      </Head>

      <main>
        <Navbar />
        <Home />
        <About
          baseUrl={props.baseUrl}
          yearsOfExperience={props.yearsOfExperience}
        />
        <Skill yearsOfExperience={props.yearsOfExperience} />
        <Qualification />
        <Tool />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
