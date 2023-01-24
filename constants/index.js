import SpaceetLogo from "../public/img/brand/spaceet.webp";
import SpaceetBanner from "../public/img/brand/spaceet-banner.webp";
import GodanBanner from "../public/img/brand/godan-banner.webp";
import GodanLogo from "../public/img/brand/godan.webp";
import QuantumBanner from "../public/img/brand/quantum-banner.webp";
import QuantumLogo from "../public/img/brand/quantum.webp";
import GTBanner from "../public/img/brand/gt-banner.webp";
import GTLogo from "../public/img/brand/gt.webp";
import CapitalExchangeBanner from "../public/img/brand/capital-exchange-banner.webp";
import CapitalExchangeLogo from "../public/img/brand/capital-exchange.webp";
import instagram from "../public/img/icons/instagram.svg";
import linkedin from "../public/img/icons/linkedin.svg";
import twitter from "../public/img/icons/twitter.svg";
import dribbble from "../public/img/icons/dribbble.svg";

export const LINKS = [
  {
    route: "/about",
    text: "About",
  },
  {
    route: "/projects",
    text: "Projects",
  },
  {
    route: "/shots",
    text: "Shots",
  },
  {
    route: "/contact-me",
    text: "Contact Me",
  },
];

export const SOCIALS = [
  {
    route: "https://www.instagram.com/sir_righteous_man/",
    img: instagram,
  },
  {
    route: "https://www.linkedin.com/in/ajaoafeez/",
    img: linkedin,
  },
  {
    route: "https://twitter.com/Righteous_man13/",
    img: twitter,
  },
  {
    route: "/dribbble",
    img: dribbble,
  },
];

export const PROJECTS = [
  {
    image: SpaceetLogo,
    company: "Spaceet Luxury Apartment",
    desc: "Spaceet is a Nigerian based company that operates an online marketing for lodging, primarily homestays for vacation rentals, and tourism activities. Based in Lagos ,Nigeria the platform is accessible via website and mobile app. Spaceet also owns an apartment on the websites and people who owns house are also permitted to host their home on the websites after some documentation ,it profits by receiving commission from each booking.",
    banner: SpaceetBanner,
    prototype:
      "https://www.figma.com/proto/avQ0WdEvv8GWFt1ED6o0ci/New-Portfolio?page-id=0%3A1&node-id=1328%3A4775&scaling=min-zoom&starting-point-node-id=1%3A160&show-proto-sidebar=1",
    hover: "#EAB221",
  },
  {
    image: GodanLogo,
    company: "Godan Logistics",
    desc: "Godan is a Nigerian based logistics company which provide shipping off items from one destination to another , They are very fast and affordable and they also are secure . Godan is a delivery service in Nigeria through its network office in Sagamu , Ogun-State .It also provide the shipping of heavy duty machines from destination to another and it ranked among one of the most reliable shipping companies.",
    banner: GodanBanner,
    prototype:
      "https://www.figma.com/proto/avQ0WdEvv8GWFt1ED6o0ci/New-Portfolio?page-id=0%3A1&node-id=1311%3A5661&scaling=min-zoom&starting-point-node-id=1%3A160&show-proto-sidebar=1",
    hover: "#417CFF",
  },
  {
    image: GTLogo,
    company: "GTB Bank (Redesign Project)",
    desc: "Guaranty Trust Bank Plc a.k.a GT Bank is an international financial institution that provides individuals, businesses, institutions both in the private and public sectors across Africa and the United Kingdom with a wide range of modern and flexible financial products and services.",
    banner: GTBanner,
    prototype:
      "https://www.figma.com/proto/avQ0WdEvv8GWFt1ED6o0ci?page-id=0%3A1&node-id=1130%3A3029&scaling=min-zoom&starting-point-node-id=1%3A160&show-proto-sidebar=1",
    hover: "#D84F00",
  },
  {
    image: CapitalExchangeLogo,
    company: "CAPITAL EXCHANGE",
    desc: "Capital exchange is a Financial institution whose business areas include, Investments, Loans, Exchange and Savings. This project is about designing a web application user interface for capital exchange",
    banner: CapitalExchangeBanner,
    prototype:
      "https://www.figma.com/proto/avQ0WdEvv8GWFt1ED6o0ci/New-Portfolio?page-id=0%3A1&node-id=1385%3A4555&scaling=min-zoom&starting-point-node-id=1%3A160&show-proto-sidebar=1",
    hover: "#001E2F",
  },
  {
    image: QuantumLogo,
    company: "Quantum Travel",
    desc: "Quantum is travel application where you can displace destination management in which you can reserve special location , transportion and also flight with the aid of the mobile application.",
    banner: QuantumBanner,
    prototype:
      "https://www.figma.com/proto/avQ0WdEvv8GWFt1ED6o0ci?page-id=0%3A1&node-id=1416%3A4620&scaling=min-zoom&starting-point-node-id=1%3A160&show-proto-sidebar=1",
    hover: "#006156",
  },
];
