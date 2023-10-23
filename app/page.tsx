"use client";
import Image from "next/image";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import localFont from "next/font/local";
import { SiAngellist } from "react-icons/si";
import { FiZap } from "react-icons/fi";
import kaleb from "../public/kaleb.jpeg";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";

const burtons = localFont({
  src: "../public/fonts/Burtons.otf",
});
const segoe = localFont({
  src: "../public/fonts/Segoe_UI.ttf",
});

export default function Home() {
  const divRef = useRef<HTMLDivElement | null>(null);

  // Function to handle the click event
  const handleClick = () => {
    console.log("Div clicked");
  };

  useEffect(() => {
    if (divRef.current) {
      divRef.current.click();
    }
  }, []);
  const [activeMobileNav, setActiveMobileNav] = useState(false);

  const [activeSection, setActiveSection] = useState("about-me"); // Initialize with the ID of the first section

  const aboutMeRef = useRef<HTMLLIElement | null>(null);
  const myWorksRef = useRef<HTMLLIElement | null>(null);
  const contactMeRef = useRef<HTMLLIElement | null>(null);
  const experienceRef = useRef<HTMLLIElement | null>(null);

  const sectionRefs: {
    [key: string]: React.RefObject<HTMLLIElement | null>;
  } = {
    "about-me": aboutMeRef,
    "my-works": myWorksRef,
    "contact-me": contactMeRef,
    experience: experienceRef,
  };
  useEffect(() => {
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
            console.log(activeSectionCandidate);
            setActiveSection(activeSectionCandidate);
            break; // Stop checking once a section is found within the viewport
          }
        }
      }
    };
    console.log("active section: ", activeSection);
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
          <ul className="bg-rich_black flex justify-end  md:flex lg:gap-10 md:gap-5  py-10 pr-[20%] text-xl">
            <li
              className={`${
                activeSection === "about-me"
                  ? "text-turquoise"
                  : "hover:scale-110 cursor-pointer text-crayola"
              }`}
              onClick={handleClick}
            >
              <Link
                activeClass={activeSection === "about-me" && "text-turquoise"}
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
                activeClass={activeSection === "my-works" && "text-turquoise"}
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
                activeSection === "contact-me"
                  ? "text-turquoise"
                  : "hover:scale-110 cursor-pointer text-crayola"
              }`}
            >
              <Link
                activeClass={activeSection === "contact-me" && "text-turquoise"}
                to="contact-me"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Me
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
                activeClass={activeSection === "experience" && "text-turquoise"}
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                Experience
              </Link>
            </li>
          </ul>
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
          <div className=" w-[55%] mr-10 h-auto"> </div>

          <div className="lg:w-[63%] w-full text-left flex-col items-start mt-12 ">
            {/* about me section*/}
            <section id="about-me" ref={aboutMeRef} className="md:pt-[16%]">
              <p className="text-cadet_gray text-2xl mt-2">
                I am passionate about bringing digital dreams to life. Whether
                it&apos;s inventing captivating products, conjuring enchanting
                features, or weaving the fabric of responsive websites, i&apos;m
                here to make it all happen. Explore my projects and journey, and{" "}
                <span className="text-turquoise">
                  {" "}
                  let&apos;s turn your visions into reality.{" "}
                </span>
              </p>
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
            </section>
            {/* My Works section */}
            <section id="my-works" ref={myWorksRef} className="md:pt-[16%]">
              <p className="text-cadet_gray text-2xl mt-2">
                I am passionate about bringing digital dreams to life. Whether
                it&apos;s inventing captivating products, conjuring enchanting
                features, or weaving the fabric of responsive websites, i&apos;m
                here to make it all happen. Explore my projects and journey, and{" "}
                <span className="text-turquoise">
                  {" "}
                  let&apos;s turn your visions into reality.{" "}
                </span>
              </p>
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
            </section>
            {/* Contact Me Section */}
            <section id="contact-me" ref={contactMeRef} className="md:pt-[16%]">
              <p className="text-cadet_gray text-2xl mt-2">
                I am passionate about bringing digital dreams to life. Whether
                it&apos;s inventing captivating products, conjuring enchanting
                features, or weaving the fabric of responsive websites, i&apos;m
                here to make it all happen. Explore my projects and journey, and{" "}
                <span className="text-turquoise">
                  {" "}
                  let&apos;s turn your visions into reality.{" "}
                </span>
              </p>
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
            </section>
            {/* Experience Section */}
            <section
              id="experience"
              ref={experienceRef}
              className="md:pt-[16%]"
            >
              <p className="text-cadet_gray text-2xl mt-2">
                I am passionate about bringing digital dreams to life. Whether
                it&apos;s inventing captivating products, conjuring enchanting
                features, or weaving the fabric of responsive websites, i&apos;m
                here to make it all happen. Explore my projects and journey, and{" "}
                <span className="text-turquoise">
                  {" "}
                  let&apos;s turn your visions into reality.{" "}
                </span>
              </p>
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
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
