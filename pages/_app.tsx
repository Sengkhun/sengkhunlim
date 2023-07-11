import Script from "next/script";
import ReactGA from "react-ga4";

import "../styles/main.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

import CONSTANT from "../public/constant";

ReactGA.initialize("G-QNL6FQWWHW");

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{CONSTANT.title}</title>
        <meta name="description" content={CONSTANT.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1abc9c"></meta>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
