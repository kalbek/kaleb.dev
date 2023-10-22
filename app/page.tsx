"use client";
import Image from "next/image";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import localFont from "next/font/local";
import { SiAngellist } from "react-icons/si";
import { FiZap } from "react-icons/fi";
import kaleb from "../public/kaleb.jpeg";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const burtons = localFont({
  src: "../public/fonts/Burtons.otf",
});
const segoe = localFont({
  src: "../public/fonts/Segoe_UI.ttf",
});

export default function Home() {
  const [activeMobileNav, setActiveMobileNav] = useState(false);
  useEffect(() => {
    console.log("active mobile menu nav: ", activeMobileNav);
  }, [activeMobileNav]);

  return (
    <>
      <head>
        <title>Kaleb&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main
        className={`${segoe.className} min-h-screen px-10 bg-magical text-white`}
      >
        <nav className="py-10 flex justify-between fixed bg-inherit z-10 w-full opacity-100">
          <h1
            className={`${burtons.className}  md:pl-[8.5%] text-2xl text-transparent bg-clip-text bg-gradient_primary`}
          >
            <div>kaleb bekele</div>
            {/* <div className="md:hidden">k. n.</div> */}
          </h1>
          {/* desktop menu */}
          <ul className="hidden max-lg:fixed md:flex lg:gap-10 md:gap-5 md:mt-2 md:absolute lg:right-[20%] md:right-[25%] ">
            <li className="hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary cursor-pointer">
              About me
            </li>
            <li className="hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary cursor-pointer">
              My Works
            </li>
            <li className="hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary cursor-pointer">
              Contact Me
            </li>
            <li className="hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary cursor-pointer">
              Experience
            </li>
          </ul>
          {/* Mobile menu */}
          <div
            onClick={() => setActiveMobileNav(!activeMobileNav)}
            className="md:hidden z-10 scale-150"
          >
            {!activeMobileNav ? <FaBars /> : <FaTimes />}
          </div>

          <ul
            className={
              !activeMobileNav
                ? "hidden"
                : "bg-magical absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
            }
          >
            {/* <li className="absolute top-10 left-10">
              <h1
                className={`${burtons.className} text-3xl text-transparent bg-clip-text bg-gradient_primary`}
              >
                k. n.
              </h1>
            </li> */}
            <li className="mt-[-20px] py-6 text-4xl hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary">
              About me
            </li>
            <li className="py-6 text-4xl hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary">
              My Works
            </li>
            <li className="py-6 text-4xl hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary">
              Contact Me
            </li>
            <li className="py-6 text-4xl hover:scale-110 hover:text-transparent bg-clip-text bg-gradient_primary">
              Experience
            </li>
          </ul>
          {/* <li className="fixed bottom-[50%] bg-opacity-80 border-white">
              <BsFillMoonStarsFill />
              <BsSun />
            </li> */}
          {/* <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-american_green text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul> */}
        </nav>
        {/* <div className="-mt-2 fixed outline pl-[8%] w-[50%] border-2 border-white text-left flex-col items-center justify-between"> */}
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row bg-red align-center items-start w-full max-md:pt-20 md:pt-20">
          <div className="max-md:mt-5 h-auto lg:fixed w-full md:mt-[8%] md:pl-[8%] md:w-[60%] lg:w-[50%] text-left flex-col items-center justify-between ">
            <h1
              className={` tracking-tighter md:text-7xl text-5xl  font-black text-crayola flex flex-col md:flex-row w-full `}
            >
              <span className="md:text-7xl relative ">
                Meet Kaleb <span className="text-sm">&nbsp;</span>
              </span>{" "}
              
            </h1>
            <h2 className="text-2xl pt-6 font-bold  py-2 text-crayola">
              A FullStack Developer &<br /> Software Sorcerer.
            </h2>
            <p className="text-cadet_gray text-md pt-2 pb-6 md:w-[80%] w-full leading-8 md:leading-2 md:text-lg sm:w-[70%] ">
              I am passionate about bringing digital dreams to life. Whether
              it&apos;s inventing captivating products, conjuring enchanting
              features, or weaving the fabric of responsive websites, i&apos;m
              here to make it all happen. Explore my projects and journey, and{" "}
              <span className="text-turquoise">
                {" "}
                let&apos;s turn your visions into reality.{" "}
              </span>
            </p>
            {/* Kaleb's Circular Photo */}
            <div className="opacity-70 relative bg-gradient_to_bottom rounded-md overflow-hidden w-[40%] h-[40%]  mt-2 ">
              <Image src={kaleb} alt="kalebs' image" />
            </div>
            <ul className="text-center mt-6 text-3xl flex gap-6 ">
              <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                <FaGithub />
              </li>
              <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                <AiFillTwitterCircle />
              </li>
              <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                <AiFillLinkedin />
              </li>
              <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                <SiAngellist />
              </li>
            </ul>
          </div>
          <div className=" w-[55%] mr-10 h-auto">
            {" "}
          </div>

          {/* about, experience, works and contact section */}
          <div className="pl-[8%] lg:w-[50%] w-full border-2 border-white text-left flex-col items-center justify-between">
            <div className="relative mx-auto bg-gradient_to_bottom rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src={kaleb} alt="kalebs' image" />
            </div>
            <div className=" ">cards</div>
            <div className="relative mx-auto bg-gradient_to_bottom rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src={kaleb} alt="kalebs' image" />
            </div>
            <div className=" ">cards</div>
            <div className="relative mx-auto bg-gradient_to_bottom rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src={kaleb} alt="kalebs' image" />
            </div>
            <div className=" ">cards</div>
            <div className="relative mx-auto bg-gradient_to_bottom rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src={kaleb} alt="kalebs' image" />
            </div>
            <div className=" ">cards</div>
            <div className="relative mx-auto bg-gradient_to_bottom rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src={kaleb} alt="kalebs' image" />
            </div>
            <div className=" ">cards</div>
          </div>
        </div>
      </main>
    </>
  );
}
