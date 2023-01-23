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
        <title>Ajao Afeez Olanrewaju</title>
        <meta
          name="description"
          content="Product Designer . UI UX. II Cryptocurrency II Blockchain II Fintech II Webflow"
        />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
