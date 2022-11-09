import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
