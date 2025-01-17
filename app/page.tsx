"use client";
import Image from "next/image";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt, FaBars, FaTimes } from "react-icons/fa";
import localFont from "next/font/local";
import { SiAngellist } from "react-icons/si";
import kaleb from "../public/kaleb.jpeg";
import Works from "@/components/works";
import Experiences from "@/components/experiences";

import { useEffect, useState, useRef } from "react";
import Contact from "@/components/contact";
import { Link } from "react-scroll";

const burtons = localFont({
  src: "../public/fonts/Burtons.otf",
});
const segoe = localFont({
  src: "../public/fonts/Segoe_UI.ttf",
});

export default function Home() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenu, setActiveMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setActiveMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };
  useEffect(() => {
    if (divRef.current) {
      divRef.current.click();
    }
  }, []);

  const [activeSection, setActiveSection] = useState("about-me"); // Initialize with the ID of the first section

  const aboutMeRef = useRef<HTMLLIElement | null>(null);
  const myWorksRef = useRef<HTMLLIElement | null>(null);
  const contactMeRef = useRef<HTMLLIElement | null>(null);
  const experienceRef = useRef<HTMLLIElement | null>(null);
  // const waveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionRefs: {
      [key: string]: React.RefObject<HTMLLIElement | null>;
    } = {
      "about-me": aboutMeRef,
      "my-works": myWorksRef,
      "contact-me": contactMeRef,
      experience: experienceRef,
    };

    const handleScroll = () => {
      let activeSectionCandidate = "about-me";
      for (const sectionId in sectionRefs) {
        const sectionRef = sectionRefs[
          sectionId
        ] as React.RefObject<HTMLLIElement | null>;

        if (sectionRef.current) {
          const sectionTop = sectionRef.current.getBoundingClientRect().top;

          // You can adjust this threshold value as needed
          if (sectionTop >= 0 && sectionTop <= window.innerHeight * 0.5) {
            activeSectionCandidate = sectionId;
            setActiveSection(activeSectionCandidate);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [activeSection, aboutMeRef, myWorksRef, contactMeRef, experienceRef]);

  // Now, 'activeSection' state will contain the ID of the section in view
  return (
    <>
      <head>
        <title>Kaleb&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main
        className={`${segoe.className} min-h-screen px-10 bg-magical text-white`}
      >
        <nav className="flex justify-between fixed  z-10 w-full opacity-100 bg-rich_black">
          <h1
            className={`${burtons.className}  md:pl-[8.5%] text-2xl text-transparent bg-clip-text bg-gradient_primary`}
          >
            <div className="mt-10">kaleb bekele</div>
            {/* <div className="md:hidden">k. n.</div> */}
          </h1>
          {/* desktop menu */}
          <ul className="hidden md:flex bg-rich_black justify-end lg:gap-10 md:gap-5  py-10 pl-[4%] text-lg font-bold text-crayola">
            <li
              className={`${
                activeSection === "about-me"
                  ? "text-turquoise"
                  : "hover:scale-110 cursor-pointer text-crayola"
              }`}
            >
              <Link
                activeClass={
                  activeSection === "about-me" ? "text-turquoise" : ""
                }
                to="about-me"
                spy={true}
                smooth={true}
                duration={500}
              >
                <p ref={divRef}>About me</p>
              </Link>
            </li>
            <li
              className={`${
                activeSection === "my-works"
                  ? "text-turquoise"
                  : "hover:scale-110 cursor-pointer text-crayola"
              }`}
            >
              <Link
                activeClass={
                  activeSection === "my-works" ? "text-turquoise" : ""
                }
                to="my-works"
                spy={true}
                smooth={true}
                duration={500}
              >
                My Works
              </Link>
            </li>
            <li
              className={`${
                activeSection === "experience"
                  ? "text-turquoise"
                  : "hover:scale-110 cursor-pointer text-crayola"
              }`}
            >
              <Link
                activeClass={
                  activeSection === "experience" ? "text-turquoise" : ""
                }
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li
              className={`${
                activeSection === "contact-me"
                  ? "text-turquoise"
                  : "hover:scale-110 cursor-pointer text-crayola"
              }`}
            >
              <Link
                activeClass={
                  activeSection === "contact-me" ? "text-turquoise" : ""
                }
                to="contact-me"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          <div className=""></div>
          {/* mobile menu */}
          <div
            className="md:hidden fixed top-12 right-10 z-20 scale-110 sm:flex"
            onClick={handleMobileMenu}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </div>
          {mobileMenu ? (
            <div className="absolute bg-magical flex items-center justify-center h-screen w-full  left-[-2rem]">
              <ul>
                <li
                  className={`${
                    activeSection === "about-me"
                      ? "text-turquoise"
                      : "hover:scale-110 cursor-pointer text-crayola"
                  }`}
                >
                  <Link
                    activeClass={
                      activeSection === "contact-me" ? "text-turquoise" : ""
                    }
                    to="about-me"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div
                      onClick={() => setActiveMobileMenu(false)}
                      className="text-3xl py-6"
                    >
                      <p ref={divRef}>About me</p>
                    </div>
                  </Link>
                </li>
                <li
                  className={`${
                    activeSection === "my-works"
                      ? "text-turquoise"
                      : "hover:scale-110 cursor-pointer text-crayola"
                  }`}
                >
                  <Link
                    activeClass={
                      activeSection === "my-works" ? "text-turquoise" : ""
                    }
                    to="my-works"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div onClick={() => setActiveMobileMenu(false)}>
                      <p className="text-3xl py-6">My Works</p>
                    </div>
                  </Link>
                </li>
                <li
                  className={`${
                    activeSection === "experience"
                      ? "text-turquoise"
                      : "hover:scale-110 cursor-pointer text-crayola"
                  }`}
                >
                  <Link
                    activeClass={
                      activeSection === "experience" ? "text-turquoise" : ""
                    }
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div onClick={() => setActiveMobileMenu(false)}>
                      <p className="text-3xl py-6">Experience</p>
                    </div>
                  </Link>
                </li>
                <li
                  className={`${
                    activeSection === "contact-me"
                      ? "text-turquoise"
                      : "hover:scale-110 cursor-pointer text-crayola"
                  }`}
                >
                  <Link
                    activeClass={
                      activeSection === "contact-me" ? "text-turquoise" : ""
                    }
                    to="contact-me"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div onClick={() => setActiveMobileMenu(false)}>
                      <p className="text-3xl py-6">Contact Me</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </nav>
        {/* <div className="-mt-2 fixed outline pl-[8%] w-[50%] border-2 border-white text-left flex-col items-center justify-between"> */}
        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row bg-red align-center items-start w-full max-md:pt-20 md:pt-20">
          <div className="lg:mt-[-4px] lg:pt-12 h-auto lg:fixed w-full md:mt-[8%] md:pl-[8%] md:w-[60%] lg:w-[50%] text-left flex-col items-center justify-between ">
            <h1
              className={` tracking-tighter md:text-7xl text-5xl  font-black flex flex-col md:flex-row w-full text-crayola`}
            >
              <span className="md:text-7xl relative ">
                Meet Kaleb <span className="text-sm">&nbsp;</span>
              </span>{" "}
            </h1>
            <h2 className="text-2xl pt-6 font-bold  py-2 text-crayola">
              A FullStack Developer &<br /> Software Enthusiast.
            </h2>
            <p className="text-cadet_gray text-md pt-2 pb-6 md:w-[60%] w-full leading-8 md:leading-2 md:text-lg sm:w-[70%] ">
              Bringing digital dreams to life: crafting captivating products,
              enchanting features, and weaving responsive websites.
            </p>
            {/* Kaleb's Circular Photo */}
            <div className=" opacity-90 hover:opacity-100 flex  flex-col gap-4 md:flex-row justify-start  relative rounded-md  md:w-[40%] md:h-[40%] w-[70%] ">
              <Image src={kaleb} alt="kalebs' image"  className="  rounded-md"/>
              <ul className="text-center  md:absolute left-[100%] text-3xl flex gap-6 md:ml-2 md:gap-4   md:flex-col md:scale-75 scale-[90%]">
                <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                  <a target="_blank" href="https://github.com/kalbek bg-white">
                    <FaGithub />
                  </a>
                </li>
                <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                  <a target="_blank" href="https://twitter.com/knuramo">
                    <AiFillTwitterCircle />
                  </a>
                </li>
                <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/kaleb-nuramo/"
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
                <li className="opacity-50 cursor-pointer hover:opacity-100 hover:scale-110">
                  <a
                    target="_blank"
                    href="https://wellfound.com/u/kaleb-nuramo"
                  >
                    <SiAngellist />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-[55%] mr-10 h-auto"> </div>

          <div className="lg:w-[63%] w-full text-left flex-col items-start mt-12 ">
            {/* about me section*/}
            <section id="about-me" ref={aboutMeRef} className="md:pt-[16%]">
              <p className="text-cadet_gray text-lg mt-2">
                <span className="hidden md:flex absolute mt-[-8%] cursor-pointer">
                  <span
                    onClick={() => {
                      if (divRef.current) {
                        divRef.current.click();
                      }
                    }}
                  >
                    {" "}
                    🔝{" "}
                  </span>
                </span>
                <span className="text-turquoise">
                  Passionate about bringing your innovative ideas to life?
                </span>{" "}
                Look no further! With a keen eye for detail and a wealth of
                experience, I&apos;m here to help you transform your vision into
                reality. <br />
                <div className="py-2">
                  From crafting exceptional products, designing captivating
                  features, to building stunning websites,{" "}
                  <span className="text-turquoise">
                    I&apos;ve got you covered.
                  </span>{" "}
                  Take a moment to
                  <span className="text-turquoise"> explore my portfolio </span>
                  and discover the artistry in my work.{" "}
                </div>{" "}
                If you&apos;re excited about what you see and have a project
                that&apos;s ready to take flight,
                <span className="text-turquoise">
                  {" "}
                  don&apos;t hesitate to get in touch.
                </span>{" "}
                <br />
              </p>
            </section>
            <div className=" mt-10 w-fit">
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1-81GPZdvsElOPzOzqAUYaPSMo81-6jz39pCQbtBnEwU/edit?usp=sharing"
                className="flex gap-2 flex-inline items-center"
              >
                <p className="">View Resumé </p>
                <div className="scale-75">
                  <FaExternalLinkAlt />
                </div>
              </a>
            </div>

            {/* My Works section */}
            <section
              id="my-works"
              ref={myWorksRef}
              className=" flex flex-col items-start gap-2"
            >
              <Works />
            </section>
            {/* Experience Section */}
            <section
              id="experience"
              ref={experienceRef}
              className="md:pt-[16%]"
            >
              <Experiences />
            </section>
            {/* Contact Me Section */}
            <section id="contact-me" ref={contactMeRef} className="md:pt-[16%]">
              <Contact />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
