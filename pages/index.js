import Image from "next/image";
import Header from "../components/UI/Header";
import blob1 from "../public/img/blobs/blob1.png";
import blob2 from "../public/img/blobs/blob2.png";
import blob3 from "../public/img/blobs/blob3.png";
import blob4 from "../public/img/blobs/blob4.png";
import Typed from "react-typed";
import Arrow from "../public/img/icons/arrows.png";
import Link from "next/link";

const Home = () => {
  return (
    <>
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
          <h1 className="text-white text-center border-y uppercase big-text px-s3">
            <Typed
              strings={[`Olanrewaju Ajao`]}
              typeSpeed={120}
              showCursor={false}
            />
          </h1>
          <h1 className="text-white text-center border-y uppercase big-text px-s3">
            <Typed strings={[`Workfolio`]} typeSpeed={120} showCursor={false} />
          </h1>
        </div>
      </main>
      <footer>
        <div className="fixed bottom-5 flex justify-center w-full animate-bounce">
          <Link href="/projects">
            <Image src={Arrow} alt="" width={100} height={100} />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Home;
