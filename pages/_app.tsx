import Script from "next/script";

import "../styles/main.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

import CONSTANT from "../public/constant";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{CONSTANT.title}</title>
        <meta name="description" content={CONSTANT.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        /> */}
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;