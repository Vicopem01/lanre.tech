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
import RiciaLogo from "../../../public/img/brand/ricia.webp";
import RiciaBanner from "../../../public/img/brand/ricia-banner.webp";

const SelectedProjects = () => {
  return (
    <div className="mt-s20" data-aos="fade-in-up">
      <div className="mb-s9">
        <Image src={SelectedProjectsText} alt="" width={400} />
      </div>
      <Shadow classes="relative text-white">
        <div className="flex justify-between">
        <div className="px-s3 md:px-s6 pt-s3 md:pt-s6 group w-1/2">
          <div
            className={`transition-all ease-in duration-300 absolute w-full h-full bg-[#EAB221] -z-10 rounded-[20px] opacity-0 transition-300 group-hover:opacity-20 top-0 left-0`}
          ></div>
          <Image
            src={SpaceetLogo}
            alt="Godan Logistics"
            width={75}
            height={75}
          />
          <h2 className="text-5xl font-bold mt-s8 mb-s4">
            Spaceet Luxury Apartment
          </h2>
          <p>
            I enjoy discussing and sharing ideas and thoughts that help us learn
            more. To improve our design skills, we should ask more questions. I
            believe that people and businesses can benefit from the use of
            design and technology.
          </p>
          <Button classes="my-s4" text="Read Case Study" />
        </div>
        <Image src={SpaceetBanner} alt="" className="self-end w-2/5" />
        </div>
      </Shadow>
      <div className="grid grid-cols-2 gap-5 text-white mt-s15" data-aos="zoom-in-up">
        <Shadow classes="relative">
          <div className="px-s3 md:px-s6 pt-s3 md:pt-s6 group">
            <div
              className={`transition-all ease-in duration-300 absolute w-full h-full bg-[#417CFF] -z-10 rounded-[20px] opacity-0 transition-300 group-hover:opacity-20 top-0 left-0`}
            ></div>
            <Image
              src={GodanLogo}
              alt="Godan Logistics"
              width={75}
              height={75}
            />
            <h2 className="text-5xl font-bold mt-s8 mb-s4">Godan Logistics</h2>
            <p>
              I enjoy discussing and sharing ideas and thoughts that help us
              learn more. To improve our design skills, we should ask more
              questions. I believe that people and businesses can benefit from
              the use of design and technology.
            </p>
            <Button classes="my-s4" text="Read Case Study" />
            <Image src={GodanBanner} alt="" />
          </div>
        </Shadow>
        <Shadow classes="relative">
          <div className="px-s3 md:px-s6 pt-s3 md:pt-s6 group transition-all ease-in-out duration-700">
            <div
              className={`transition-all ease-in duration-300 absolute w-full h-full bg-[#006156] -z-10 rounded-[20px] opacity-0 transition-300 group-hover:opacity-20 top-0 left-0`}
            ></div>
            <Image
              src={QuantumLogo}
              alt="Quantum Travel"
              width={75}
              height={75}
            />
            <h2 className="text-5xl font-bold mt-s8 mb-s4">Quantum Travel</h2>
            <p>
              I enjoy discussing and sharing ideas and thoughts that help us
              learn more. To improve our design skills, we should ask more
              questions. I believe that people and businesses can benefit from
              the use of design and technology.
            </p>
            <Button classes="my-s4" text="Read Case Study" />
            <Image src={QuantumBanner} alt="" />
          </div>
        </Shadow>
        <Shadow classes="relative">
          <div className="px-s3 md:px-s6 pt-s3 md:pt-s6 group">
            <div
              className={`transition-all ease-in duration-300 absolute w-full h-full bg-[#D84F00] -z-10 rounded-[20px] opacity-0 transition-300 group-hover:opacity-20 top-0 left-0`}
            ></div>
            <Image src={GTLogo} alt="GTB Bank" width={75} height={75} />
            <h2 className="text-5xl font-bold mt-s8 mb-s4">
              GTB Bank (Redesign Project)
            </h2>
            <p>
              I enjoy discussing and sharing ideas and thoughts that help us
              learn more. To improve our design skills, we should ask more
              questions. I believe that people and businesses can benefit from
              the use of design and technology.
            </p>
            <Button classes="my-s4" text="Read Case Study" />
            <Image src={GTBanner} alt="" />
          </div>
        </Shadow>
        <Shadow classes="relative">
          <div className="px-s3 md:px-s6 pt-s3 md:pt-s6 group">
            <div
              className={`transition-all ease-in duration-300 absolute w-full h-full bg-[#001E2F] -z-10 rounded-[20px] opacity-0 transition-300 group-hover:opacity-20 top-0 left-0`}
            ></div>
            <Image
              src={RiciaLogo}
              alt="RICIAL CAPITAL"
              width={75}
              height={75}
            />
            <h2 className="text-5xl font-bold mt-s8 mb-s4">RICIAL CAPITAL</h2>
            <p>
              I enjoy discussing and sharing ideas and thoughts that help us
              learn more. To improve our design skills, we should ask more
              questions. I believe that people and businesses can benefit from
              the use of design and technology.
            </p>
            <Button classes="my-s4" text="Read Case Study" />
            <Image src={RiciaBanner} alt="" />
          </div>
        </Shadow>
      </div>
    </div>
  );
};

export default SelectedProjects;
