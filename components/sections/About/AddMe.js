import Shadow from "../../UI/Shadow";
import AddMeText from "../../../public/img/colored-texts/add-me.webp";
import Image from "next/image";
import Button from "../../UI/Button";
import instagram from "../../../public/img/icons/instagram.svg";
import linkedin from "../../../public/img/icons/linkedin.svg";
import twitter from "../../../public/img/icons/twitter.svg";
import dribbble from "../../../public/img/icons/dribbble.svg";

const AddMe = () => {
  const SOCIALS = [
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

  return (
    <div className="mt-s25 mb-s10" data-aos="zoom-in-up">
      <Shadow>
        <div className="p-s4 text-white">
          <Image src={AddMeText} alt="Add Me To Your Team" width={400} />
          <p className="text-4xl mt-s5">
            I am available for full-time, part-time and contract roles.
          </p>
          <p className="text-4xl mt-s3">Open to relocation.</p>
          <Button text="Send Message" classes="block ml-auto" />
          <hr className="border-[rgba(255,255,255,0.3)] my-s4" />
          <div className="flex justify-start">
            {SOCIALS.map((social, index) => (
              <a
                key={`social-${index}`}
                href={social.route}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-s3 flex place-content-center w-[46px] h-[46px] bg-gray-2 rounded-full"
              >
                <Image src={social.img} alt="" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </Shadow>
    </div>
  );
};

export default AddMe;
