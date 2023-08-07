import React, { useEffect } from "react";
import Head from "next/head";
import ReactGA from "react-ga4";

import BasicNavbar from "../components/navbars/BasicNavbar";

import NotFound from "../layouts/NotFound";
import Footer from "../layouts/Footer";

const PageNotFound = () => {
  // variables
  const title = "404 | Page not found";
  const description = "This page could not be found.";

  useEffect(() => {
    // send GA page event
    ReactGA.send({
      hitType: "pageview",
      page: window.location.href,
      title,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="noindex" />
      </Head>

      <main>
        <BasicNavbar />
        <NotFound />
      </main>

      <Footer />
    </>
  );
};

export default PageNotFound;
