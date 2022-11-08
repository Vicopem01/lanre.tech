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
    <header className="text-white flex justify-between">
      <NavLinks />
      <Name />
      <Menu />
    </header>
  );
};

const Name = () => (
  <h2>
    <Link href="/">AJAO AFEEZ 0.</Link>
  </h2>
);

const NavLinks = () => (
  <div>
    {LINKS.map((link, index) => (
      <Link key={`navlink-${index}`} href={link.route}>
        {link.text}
      </Link>
    ))}
  </div>
);
const Menu = () => {
  const [sidebar, showSidebar] = useState(false);
  return (
    <div>
      <button onClick={() => showSidebar(true)}>
        <Image src={MenuBurger} alt="" width={20} height={20} />
      </button>
      {sidebar && (
        <>
          <div className="w-screen h-screen fixed top-0 left-0 bg-purple opacity-60"></div>
          <div>
            <div className="w-screen h-screen fixed top-0 left-0 z-10">
              <button
                className="fixed right-0 top-0"
                onClick={() => showSidebar(false)}
              >
                <Image src={Cancel} alt="" width={20} height={20} />
              </button>
              <div className="text-9xl flex justify-center flex-col text-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link className="pl-s6 mb-s3" href="/about">
                  About
                </Link>
                <Link className="pr-s6" href="/projects">
                  Projects
                </Link>
                <Link className="pl-s6 my-s3" href="/shots">
                  Shots
                </Link>
                <Link className="pr-s6" href="/contact-me">
                  Contact Me
                </Link>
              </div>
              <div className="flex justify-center fixed bottom-10 left-1/2 -translate-x-1/2">
                {SOCIALS.map((social, index) => (
                  <a
                    key={`social-${index}`}
                    className="mx-s3 flex place-content-center w-[46px] h-[46px] bg-gray-2 rounded-full"
                  >
                    <Image src={social.img} alt="" width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Header;
