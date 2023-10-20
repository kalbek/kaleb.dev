import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import localFont from "next/font/local";
import { SiAngellist } from "react-icons/si";
import { FiZap } from "react-icons/fi";
import kaleb from "../public/kaleb.jpeg";

const burtons = localFont({
  src: "../public/fonts/Burtons.otf",
});

export default function Home() {
  return (
    <>
      <head>
        <title>Kaleb&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main className="min-h-scree px-10 bg-magical text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className={`${burtons.className} text-3xl`}>developedby</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill />
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-american_green text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h1 className="text-5xl py-2 text-transparent bg-clip-text bg-gradient_primary">
              Hello, I am Kaleb.{" "}
            </h1>
            <h2 className="text-3xl text-transparent bg-clip-text bg-gradient_primary">
              I&apos;m a Software Sorcerer.
            </h2>
            <h3 className="text-xl pt-2">
              Welcome to my world of code and creativity.
            </h3>
            <p className="text-md py-5 leading-8">
              I am passionate about bringing digital dreams to life. Whether
              it&apos;s inventing captivating products, conjuring enchanting
              features, or weaving the fabric of responsive websites, i&apos;m
              here to make it all happen. Explore my projects and journey, and
              let&apos;s turn your visions into reality.
            </p>
            <div>
              <ul className="text-3xl flex justify-center gap-8">
                <li>
                  <FaGithub />
                </li>
                <li>
                  <AiFillTwitterCircle />
                </li>
                <li>
                  <AiFillLinkedin />
                </li>
                <li>
                  <SiAngellist />
                </li>

                <li>
                  <FiZap />
                </li>
              </ul>
            </div>
            <div className="relative mx-auto bg-gradient_to_bottom rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src={kaleb} alt="kalebs' image"  />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
