import React from "react";
import Image from "next/image";
import { FaCode, FaLink } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function experiences() {
  return (
    <>
      <div className="group">
        <a target="_blank" href="https://www.combanketh.et/">
          <div className="p-6 w-full h-auto  cursor-pointer group-hover:bg-light_cetacean_blue  hover:scale-[100.3%]   hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start ">
              <div className="w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">
                  DEVELOPER: COMMERCIAL BANK OF ETHIOPIA
                </p>
                <p className="text-cadet_gray text-md pt-1 pb-2 md:w-[60%] w-full leading-8 md:leading-2 md:text-lg sm:w-[70%] ">
                  FullStack Developer
                </p>
                <ul className="list-disc ml-5">
                  <li>
                    <p className="text-cadet_gray text-sm leading-5 w-full">
                      Led development of school fee application written in MERN
                      stack. Delivered ahead of time. Wrote 70% of the code.
                      Mentored 3 other developers in the process.
                    </p>
                  </li>
                  <li>
                    <p className="text-cadet_gray text-sm w-full">
                      Collaborated in the development of Foreign Currency
                      Allocation WebApp, written in ReactJS. I worked on the API
                      development. The app was the #1 currency allocation tool
                      for the company.
                    </p>
                  </li>
                </ul>

                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] mt-4     gap-4 ">
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      C#{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      React{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Redux{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      ReduxToolkit{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Jest{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Capybara{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Selenium{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      MongoDB{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      SQL{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Agile{" "}
                    </p>
                  </div>
                </div>
              </div>
              <FiExternalLink />
            </div>
          </div>
        </a>
      </div>
      <div className="group">
        <a target="_blank" href="https://www.microverse.org/blog/microverse-full-stack-web-development-program">
          <div className="p-6 w-full h-auto  cursor-pointer group-hover:bg-light_cetacean_blue  hover:scale-[100.3%]   hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start ">
              <div className="w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">MICROVERSE: MENTOR</p>
                <p className="text-cadet_gray text-md pt-1 pb-2 md:w-[60%] w-full leading-8 md:leading-2 md:text-lg sm:w-[70%] ">
                  Mentor (Volunteer)
                </p>
                <ul className="list-disc ml-5">
                  <li>
                    <p className="text-cadet_gray text-sm leading-5 w-full">
                      Mentored 3-5 junior developers per week. Used tools such
                      as Coderpad and TeamView for support and performed 10-15
                      code reviews (per week) while mentoring.
                    </p>
                  </li>
                  <li>
                    <p className="text-cadet_gray text-sm w-full">
                      Motivated more than 30 new developers by showcasing my
                      achievements as a software developer.
                    </p>
                  </li>
                </ul>

                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] mt-4     gap-4 ">
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Pair Programming{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Mentoring{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      React{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      ReduxToolkit{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Jest{" "}
                    </p>
                  </div>

                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Ruby{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      PostgresSQL{" "}
                    </p>
                  </div>
                  <div className="w-auto px-3  bg-robin_egg_blue py-4 flex justify-center items-center h-[20px] rounded-xl mt-[1px]">
                    <p className="text-turquoise text-sm tracking-widest">
                      {" "}
                      Ruby on Rails{" "}
                    </p>
                  </div>
                </div>
              </div>
              <FiExternalLink />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
