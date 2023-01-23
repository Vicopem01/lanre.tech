import Image from "next/image";
import Link from "next/link";
import MenuBurger from "../../public/img/icons/menu-burger.svg";
import Cancel from "../../public/img/icons/cancel.svg";
import instagram from "../../public/img/icons/instagram.svg";
import linkedin from "../../public/img/icons/linkedin.svg";
import twitter from "../../public/img/icons/twitter.svg";
import dribbble from "../../public/img/icons/dribbble.svg";
import { useState } from "react";

const LINKS = [
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

const SOCIALS = [
  {
    route: "/instagram",
    img: instagram,
  },
  {
    route: "/linkedin",
    img: linkedin,
  },
  {
    route: "/twitter",
    img: twitter,
  },
  {
    route: "/dribbble",
    img: dribbble,
  },
];
const Header = () => {
  return (
    <header className="text-white flex justify-between pt-s6 items-center">
      <Name />
      {/* <Menu /> */}
      <NavLinks />
    </header>
  );
};

const Name = () => (
  <h2 className="text-4xl">
    <Link href="/">AJAO AFEEZ 0.</Link>
  </h2>
);

const NavLinks = () => (
  <div>
    {LINKS.map((link, index) => (
      <Link
        key={`navlink-${index}`}
        href={link.route}
        className="mx-s2 text-xl uppercase hover:underline"
      >
        {link.text}
      </Link>
    ))}
  </div>
);

const Menu = () => {
  const [sidebar, showSidebar] = useState(false);
  return (
    <div>
      <button onClick={() => showSidebar(true)} className="p-s1">
        <Image src={MenuBurger} alt="" width={20} height={20} />
      </button>
      {sidebar && (
        <div>
          <div className="w-screen h-screen fixed top-0 left-0 bg-purple opacity-100 z-10"></div>
          <div className="w-screen h-screen fixed top-0 left-0 z-10">
            <button
              className="fixed right-0 top-10 right-20"
              onClick={() => showSidebar(false)}
            >
              <Image src={Cancel} alt="" width={20} height={20} />
            </button>
            <div className="text-9xl flex justify-center flex-col text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link className="pl-s8 mb-s3" href="/about" data-aos="fade-right">
                About
              </Link>
              <Link className="pr-s8" href="/projects" data-aos="fade-left">
                Projects
              </Link>
              <Link className="pl-s8 my-s3" href="/shots" data-aos="fade-right">
                Shots
              </Link>
              {/* <a
                className="pr-s8 inline opacity-100"
                href="/projects"
                data-aos="fade-left"
              >
                Contact Me
              </a> */}
            </div>
            <div className="flex justify-center fixed bottom-10 left-1/2 -translate-x-1/2">
              {SOCIALS.map((social, index) => (
                <a
                  key={`social-${index}`}
                  data-aos="fade-up"
                  className="mx-s3 flex place-content-center w-[46px] h-[46px] bg-gray-2 rounded-full"
                >
                  <Image src={social.img} alt="" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
