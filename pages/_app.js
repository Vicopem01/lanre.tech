import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect } from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <>
      <Head>
        <title>Product Designer - Ajao Afeez Olanrewaju</title>
        <meta
          name="description"
          content="Product Designer . UI UX. II Cryptocurrency II Blockchain II Fintech II Webflow"
        />
        <link rel="icon" href="/img/favicon/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
