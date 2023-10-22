"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import localFont from "next/font/local";
import { SiAngellist } from "react-icons/si";
import { FiZap } from "react-icons/fi";
import kaleb from "../public/kaleb.jpeg";
import { useEffect, useState } from "react";

const HomePage = () => {
  return (
    <>
      <div className=" text-center flex-col items-center justify-between">
        <h1 className="text-5xl py-2 text-transparent bg-clip-text bg-gradient_primary">
          Hello, I am Kaleb.
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
          features, or weaving the fabric of responsive websites, i&apos;m here
          to make it all happen. Explore my projects and journey, and let&apos;s
          turn your visions into reality.
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
          <Image src={kaleb} alt="kalebs' image" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
