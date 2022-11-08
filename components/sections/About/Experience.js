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
          position: "Product designer ( Internship)",
          location: "Lagos",
          duration: "Nigeria Feb 2017 - May 2017",
        },
        {
          company: "Godanlogistics",
          position: "Product designer (Contract)",
          location: "Lagos",
          duration: "Nigeria Feb 2017 - May 2017",
        },
        {
          company: "Spaceet ( Team Lead )",
          position: "Product designer ( Full Time)",
          location: "Lagos",
          duration: "Nigeria Feb 2017 - May 2017",
        },
      ],
    },
    {
      title: "PRESENT",
      history: [
        {
          company: "Grazac Academy",
          position: "Product designer ( Internship)",
          location: "Lagos",
          duration: "Nigeria Feb 2017 - May 2017",
        },
        {
          company: "WEDANCE",
          position: "Product designer (Contract)",
          location: "Munich Germany",
          duration: "Nigeria Feb 2017 - May 2017",
        },
      ],
    },
  ];
  return (
    <div className="mt-s23">
      <div className="flex items-center justify-between mb-s4">
        <Image src={ExperienceText} alt="Experience" width={270} />
        <a className="text-green border-b-4 border-green">Download CV</a>
      </div>
      <div className="flex justify-center gap-s3">
        {WORK_EXPERIENCE.map((work, index) => (
          <Shadow key={`experience-${index}`} classes="p-s3 w-1/3">
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
        <Shadow classes="p-s3 w-1/3">
          <h3 className="text-white text-xl">FUTURE</h3>
          <a className="text-green border-b-4 border-green text-xl mt-s2 inline-block">
            YOU DECIDE
          </a>
        </Shadow>
      </div>
    </div>
  );
};

export default Experience;
