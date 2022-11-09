import AddMe from "../../components/sections/About/AddMe";
import Experience from "../../components/sections/About/Experience";
import HelloWorld from "../../components/sections/About/HelloWorld";
import HowCanI from "../../components/sections/About/HowCanI";
import Header from "../../components/UI/Header";

const About = () => {
  return (
    <>
      <Header />
      <HelloWorld />
      <Experience />
      <HowCanI />
      <AddMe />
    </>
  );
};

export default About;
