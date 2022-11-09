import Image from "next/image";
import HelloWorldText from "../../../public/img/colored-texts/hello-world.webp";
import Avatar from "../../../public/img/avatar/avatar.webp";
import Button from "../../UI/Button";

const HelloWorld = () => {
  return (
    <div className="text-white mt-s20" data-aos="fade-up">
      <div className="flex">
        <div className="w-2/5 ">
          <Image
            src={Avatar}
            alt="Avatar"
            width={280}
            height={330}
            className="block m-auto"
          />
        </div>
        <div className="text-xl w-3/5 font-normal">
          <Image src={HelloWorldText} alt="Hello World" width={280} />
          <p className="mt-s7">
            I&#39;m a passionate product designer with over Four years
            experience in design and product. I am committed to the success of
            each project and channel my energy proffering solution that are
            simple, human-centered, and easy to implement aside the attaining
            set goals.
          </p>
          <p className="my-s2.5">
            My product experience spans UX Writing, User Research, Competitive
            Analysis, Design Systems Dashboards, Mobile Apps, Websites, and
            Operating Systems.
          </p>
          <p>
            I enjoy discussing and sharing ideas and thoughts that help us learn
            more. To improve our design skills, we should ask more questions. I
            believe that people and businesses can benefit from the use of
            design and technology.
          </p>
          <p>
            I am currently AVAILABLE to work on new (and exciting) ideas, so if
            you have one, please let me know
          </p>
          <Button text="Say Hello" />
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
