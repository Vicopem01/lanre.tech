import Image from "next/image";
import ExperienceText from "../../../public/img/colored-texts/experience.webp";
import Shadow from "../../UI/Shadow";

const Experience = () => {
  const WORK_EXPERIENCE = [
    {
      title: "PAST",
      history: [
        {
          company: "Grazac Academy",
          position: "Product designer (Internship)",
          location: "Lagos",
          duration: "Nigeria Feb 2021 - Oct 2021",
        },
        {
          company: "Godan Logistics",
          position: "Product designer (Contract)",
          location: "Lagos",
          duration: "Nigeria Aug 2020 - Jan 2021",
        },
        {
          company: "Spaceet Africa",
          position: "Product designer ( Full Time)",
          location: "Lagos",
          duration: "Nigeria Oct 2021 - March 2022",
        },
      ],
    },
    {
      title: "PRESENT",
      history: [
        {
          company: "Spaceet Africa",
          position: "Product designer ( Team Lead )",
          location: "Lagos",
          duration: "Nigeria March 2022 - Nov 2022",
        },
        {
          company: "WEDANCE",
          position: "Product designer ( Contract )",
          location: "Munich",
          duration: "GERMANY May 2017 - Present",
        },
      ],
    },
  ];
  return (
    <div className="mt-s23 m-horizontal" data-aos="fade-up">
      <div className="flex items-center justify-between mb-s4">
        <Image src={ExperienceText} alt="Experience" width={270} />
        <a className="text-green border-b-4 border-green">Download CV</a>
      </div>
      <div className="flex justify-center flex-col lg:flex-row items-start gap-s3">
        {WORK_EXPERIENCE.map((work, index) => (
          <Shadow key={`experience-${index}`} classes="p-s3 w-full lg:w-1/3">
            <h3 className="text-white text-xl">{work.title}</h3>
            {work.history.map((history, index) => (
              <div key={`history-${index}`}>
                <p className="text-green text-xl font-semibold mt-s2 mb-s1.5">
                  {history.company}
                </p>
                <p className="text-white text-base font-semibold pl-s4">
                  {history.position}
                </p>
                <small className="text-gray-1 text-base font-normal mt-s1 mb-s5 block pl-s4">
                  {history.location}&nbsp;&#8226;&nbsp;{history.duration}
                </small>
              </div>
            ))}
          </Shadow>
        ))}
        <Shadow classes="p-s3 w-full lg:w-1/3">
          <h3 className="text-white text-xl">FUTURE</h3>
          <a className="mb-5 text-green border-b-4 border-green text-xl mt-s2 inline-block">
            YOU DECIDE
          </a>
        </Shadow>
      </div>
    </div>
  );
};

export default Experience;
