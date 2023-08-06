import Script from "next/script";
import ReactGA from "react-ga4";

import "../styles/main.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

import CONSTANT from "../utils/constant";

ReactGA.initialize("G-QNL6FQWWHW");

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* tags for SEO */}
        <title>{CONSTANT.title}</title>
        <meta name="keywords" content={CONSTANT.keywords} />
        <meta name="theme-color" content="#5b86e5" />
        <meta name="author" content={CONSTANT.author} />
        <meta name="geo.region" content="AU" />
        <meta name="geo.placename" content="Adelaide, South Australia" />
        <meta property="og:site_name" content={CONSTANT.title} />

        {/* tags for favicon */}
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* additional tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* structured data */}
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://sengkhun.com/",
              "@type": "WebSite",
              name: "Sengkhun Lim",
              alternateName: "Khun",
              url: "https://sengkhun.com/",
            }),
          }}
        />
      </Head>

      {/* bootstrap */}
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
