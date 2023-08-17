import React, { useEffect } from "react";
import Head from "next/head";
import ReactGA from "react-ga4";
import moment from "moment";

import MainNavbar from "../components/navbars/MainNavbar";

import Home from "../layouts/Home";
import About from "../layouts/About";
import Skill from "../layouts/Skill";
import Qualification from "../layouts/Qualification";
import Tool from "../layouts/Tool";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";

import CONSTANT from "../utils/constant";
import { stringFormatter } from "../utils/helpers";

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
      hitType: "pageview",
      page: window.location.href,
      title: CONSTANT.title,
    });
  }, []);

  const description = stringFormatter(CONSTANT.description, {
    yearsOfExperience: props.yearsOfExperience,
  });

  return (
    <>
      <Head>
        <title>{CONSTANT.title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={CONSTANT.title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`${props.baseUrl}/images/web-thumbnail.jpg`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sengkhun.com/" />
      </Head>

      <main>
        <MainNavbar />
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
