import Image from "next/image";
import HelloWorldText from "../../../public/img/colored-texts/hello-world.webp";
import Avatar from "../../../public/img/avatar/avatar.webp";
import Button from "../../UI/Button";
import Blur from "../../../public/img/blobs/blur.png";

const HelloWorld = () => {
  return (
    <div className="relative text-white mt-s20 m-horizontal" data-aos="fade-up">
      <div className="flex relative">
        <div className={`hidden lg:block w-2/5 relative`}>
          <div className="absolute top-1/2 left-1/2 w-screen h-[80vh] -z-10 -translate-x-1/2 -translate-y-2/3">
            <Image src={Blur} alt="" fill className="blur-3xl" />
          </div>
          <Image
            src={Avatar}
            alt="Avatar"
            width={280}
            height={330}
            className="block m-auto"
          />
        </div>
        <div className="text-xl w-full lg:w-3/5 font-normal leading-9 font-light text-xl">
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
          <Button
            classes="block w-[150px]"
            text="Say Hello"
            href="mailto:ajaoafeez93@gmail.com?subject=Hello%20Afeez&body=From%20your%20portfolio,%20"
          />
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
