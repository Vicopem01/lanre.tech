import Image from "next/image";
import SelectedProjectsText from "../../../public/img/colored-texts/selected-projects.webp";
import Button from "../../UI/Button";
import Shadow from "../../UI/Shadow";
import { PROJECTS } from "../../../constants";

const SelectedProjects = () => {
  return (
    <div className="mt-s20 m-horizontal" data-aos="fade-in-up">
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
            <Button
              classes="block w-[180px] my-s4"
              text="Read Case Study"
              href={PROJECTS[0].prototype}
            />
          </div>
          <Image
            src={PROJECTS[0].banner}
            alt=""
            className="self-end w-full md:w-2/5"
          />
        </div>
      </Shadow>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white mt-s15">
        {PROJECTS.slice(1).map((project, index) => (
          <div data-aos="fade-in-up" key={`project-${index}`}>
            <Shadow classes="h-full relative">
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
                  <Button
                    classes="block my-s9 w-[180px]"
                    text="Read Case Study"
                    href={project.prototype}
                  />
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
