import Image from "next/image";
import HowCanIAssistYou from "../../../public/img/colored-texts/how-I-can-assist-you.webp";
import Shadow from "../../UI/Shadow";

const HowCanI = () => {
  const TECHSKILLS = [
    {
      title: "PRODUCT DESIGN",
      text: "As a product designer, I develop product design strategies and concepts according to customer requirements. Working closely with stakeholders and product owners, providing insight into customer behaviour, guiding focus and planning and desigining product features.",
    },
    {
      title: "UI DEVELOPMENT",
      text: "As a visual designer, I aim to shape and improve the user experience through considering the effects of illustrations, photography, typography, space, layouts, and color on the usability of products and on their aesthetic appeal",
    },
  ];
  return (
    <div className="mt-s23">
      <div className="mb-s4">
        <Image src={HowCanIAssistYou} alt="Experience" width={270} />
      </div>
      <div className="flex items-stretch gap-s3">
        {TECHSKILLS.map((skill, index) => (
          <Shadow classes="p-s3 w-1/2 text-white" key={`skill-${index}`}>
            <h3 className="text-white text-5xl mb-s2">{skill.title}</h3>
            <p className="lined">{skill.text}</p>
          </Shadow>
        ))}
      </div>
    </div>
  );
};

export default HowCanI;
