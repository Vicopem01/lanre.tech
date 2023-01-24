import Image from "next/image";
import SelectedProjectsText from "../../../public/img/colored-texts/selected-projects.webp";
import Button from "../../UI/Button";
import Shadow from "../../UI/Shadow";
import SpaceetLogo from "../../../public/img/brand/spaceet.webp";
import SpaceetBanner from "../../../public/img/brand/spaceet-banner.webp";
import GodanBanner from "../../../public/img/brand/godan-banner.webp";
import GodanLogo from "../../../public/img/brand/godan.webp";
import QuantumBanner from "../../../public/img/brand/quantum-banner.webp";
import QuantumLogo from "../../../public/img/brand/quantum.webp";
import GTBanner from "../../../public/img/brand/gt-banner.webp";
import GTLogo from "../../../public/img/brand/gt.webp";
import CapitalExchangeBanner from "../../../public/img/brand/capital-exchange-banner.webp";
import CapitalExchangeLogo from "../../../public/img/brand/capital-exchange.webp";

const PROJECTS = [
  {
    image: SpaceetLogo,
    company: "Spaceet Luxury Apartment",
    desc: "Spaceet is a Nigerian based company that operates an online marketing for lodging, primarily homestays for vacation rentals, and tourism activities. Based in Lagos ,Nigeria the platform is accessible via website and mobile app. Spaceet also owns an apartment on the websites and people who owns house are also permitted to host their home on the websites after some documentation ,it profits by receiving commission from each booking.",
    banner: SpaceetBanner,
    hover: "#EAB221",
  },
  {
    image: GodanLogo,
    company: "Godan Logistics",
    desc: "Godan is a Nigerian based logistics company which provide shipping off items from one destination to another , They are very fast and affordable and they also are secure . Godan is a delivery service in Nigeria through its network office in Sagamu , Ogun-State .It also provide the shipping of heavy duty machines from destination to another and it ranked among one of the most reliable shipping companies.",
    banner: GodanBanner,
    hover: "#417CFF",
  },
  {
    image: GTLogo,
    company: "GTB Bank (Redesign Project)",
    desc: "Guaranty Trust Bank Plc a.k.a GT Bank is an international financial institution that provides individuals, businesses, institutions both in the private and public sectors across Africa and the United Kingdom with a wide range of modern and flexible financial products and services.",
    banner: GTBanner,
    hover: "#D84F00",
  },
  {
    image: CapitalExchangeLogo,
    company: "CAPITAL EXCHANGE",
    desc: "Capital exchange is a Financial institution whose business areas include, Investments, Loans, Exchange and Savings. This project is about designing a web application user interface for capital exchange",
    banner: CapitalExchangeBanner,
    hover: "#001E2F",
  },
  {
    image: QuantumLogo,
    company: "Quantum Travel",
    desc: "Quantum is travel application where you can displace destination management in which you can reserve special location , transportion and also flight with the aid of the mobile application.",
    banner: QuantumBanner,
    hover: "#006156",
  },
];

const SelectedProjects = () => {
  return (
    <div className="mt-s20" data-aos="fade-in-up">
      <div className="mb-s9">
        <Image src={SelectedProjectsText} alt="" width={400} />
      </div>
      <Shadow classes="relative text-white">
        <div className="flex justify-between md:flex-row flex-col">
          <div className="px-s3 md:px-s6 pt-s3 md:pt-s6 group w-full md:w-1/2">
            <div
              className={`transition-all ease-in duration-300 absolute w-full h-full -z-10 rounded-[20px] opacity-0 transition-300 group-hover:opacity-20 top-0 left-0`}
            ></div>
            <Image
              src={PROJECTS[0].image}
              alt={PROJECTS[0].company}
              width={75}
              height={75}
            />
            <h2 className="text-5xl font-bold mt-s8 mb-s2">
              {PROJECTS[0].company}
            </h2>
            <p className="leading-8">{PROJECTS[0].desc}</p>
            <Button classes="my-s4" text="Read Case Study" />
          </div>
          <Image
            src={PROJECTS[0].banner}
            alt=""
            // width={500}
            // height={480}
            className="self-end w-full md:w-2/5"
          />
        </div>
      </Shadow>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white mt-s15">
        {PROJECTS.slice(1).map((project, index) => (
          <div data-aos="fade-in-up">
            <Shadow classes="h-full relative" key={`project-${index}`}>
              <div className="px-s3 md:px-s8 pt-s3 md:pt-s7 group flex flex-col justify-between h-full">
                <div>
                  <div
                    style={{ backgroundColor: project.hover }}
                    className={`transition-all ease-in duration-300 absolute w-full h-full -z-10 rounded-[20px] opacity-0 transition-300 group-hover:opacity-20 top-0 left-0`}
                  ></div>
                  <Image
                    src={project.image}
                    alt={project.company}
                    width={75}
                    height={75}
                  />
                  <h2 className="text-5xl font-bold mt-s8 mb-s4">
                    {project.company}
                  </h2>
                  <p className="leading-8">{project.desc}</p>
                  <Button classes="my-s8 w-[180px]" text="Read Case Study" />
                </div>
                <Image src={project.banner} alt="" />
              </div>
            </Shadow>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedProjects;
