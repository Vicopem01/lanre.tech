import Image from "next/image";
import Header from "../components/UI/Header";
import Banner from "../public/img/colored-texts/banner.webp";
import blob1 from "../public/img/blobs/blob1.png";
import blob2 from "../public/img/blobs/blob2.png";
import blob3 from "../public/img/blobs/blob3.png";
import blob4 from "../public/img/blobs/blob4.png";
import Typed from "react-typed";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="relative">
        <Image
          src={blob1}
          alt=""
          width={500}
          className="fixed top-0 left-0 -z-10"
        />
        <Image
          src={blob2}
          alt=""
          width={140}
          className="fixed top-0 left-1/2 -z-10"
        />
        <Image
          src={blob3}
          alt=""
          className="fixed bottom-0 left-0 -z-10"
          width={120}
        />
        <Image
          src={blob4}
          alt=""
          width={150}
          className="fixed bottom-0 right-0 -z-10"
        />

        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-4/5 w-full">
          <span className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white block w-full h-[1px]"></span>
          <h1 className="text-white text-center border-y uppercase big-text px-s3">
            <Typed strings={[`Olanrewaju Ajao Workfolio`]} typeSpeed={80} />
          </h1>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
