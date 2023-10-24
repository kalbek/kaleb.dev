import Image from "next/image";
import { FaCode, FaLink } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import hack_summit from "../public/Hack-Summit.png";
import adventure from "../public/snowboarding.png";
import math from "../public/Math-Magicians.png";
import shopwise from "../public/shop-wise.png";
import bookstore from "../public/bookstore.png";

export default function works() {
  return (
    <section className="md:mt-[16%] flex flex-col items-start gap-2 View Full Résumé">
      <div className="group">
        <a href="https://kalbek.github.io/Capstone-1-Hack-Summit/">
          {/* Hacksummit works card. */}
          <div className=" p-6 w-full h-auto cursor-pointer group-hover:bg-cetacean_blue hover:scale-[100.3%]   hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start ">
              <div className="w-full md:w-[30%] opacity-80 group-hover:opacity-100">
                <Image
                  src={hack_summit}
                  alt="hack_summit website image."
                  className="border border-sky-500"
                />
              </div>
              <div className=" w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">
                  May 2023: Hack Summit&apos;s virtual event.
                </p>
                <p className="text-cadet_gray text-sm mt-4 w-full">
                  Hack Summit was an online virtual event held on May 2023, and
                  this is it&apos;s website. Go and see some of the most
                  esteemed speakers and more about the event.
                </p>
                <div className="flex gap-4 ml-[-1.7rem]  scale-75 py-4">
                  <div className="inline-flex items-center gap-2">
                    <FaLink />{" "}
                    <a href="https://kalbek.github.io/Capstone-1-Hack-Summit/">
                      Webapp
                    </a>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <FaCode />{" "}
                    <a href="https://github.com/kalbek/Hack-Summit">
                      Source Code
                    </a>
                  </div>
                </div>
                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] gap-4 ">
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
                </div>
              </div>
              <FiExternalLink />
            </div>
          </div>
        </a>
      </div>
      {/* Outdoor adventures works card. */}
      <div className="group">
        <a href="https://outdoor-adventures-booking.onrender.com/">
          <div className="p-6 w-full h-auto cursor-pointer hover:scale-[100.3%] group-hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start">
              <div className="w-full md:w-[30%]  opacity-80 group-hover:opacity-100">
                <Image src={adventure} alt="outdoor adventure website image." />
              </div>
              <div className="w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">
                  Outdoor Adventures: Explore and book various thrilling outdoor
                  activities and adventures.
                </p>
                <p className="text-cadet_gray text-sm mt-4 w-full">
                  A platform where users can explore and book various thrilling
                  outdoor activities and adventures. The website can offer a
                  range of experiences such as hiking, rock climbing, kayaking,
                  camping trips, wildlife tours, and more.
                </p>
                <div className="flex gap-4 ml-[-1.7rem]  scale-75 py-4">
                  <div className="inline-flex items-center gap-2">
                    <FaLink />{" "}
                    <a href="https://outdoor-adventures-booking.onrender.com/">
                      Webapp
                    </a>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <FaCode />{" "}
                    <a href="https://github.com/bilalrajput09/Outdoor-Adventure-Bookings">
                      Source Code
                    </a>
                  </div>
                </div>
                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] gap-4 ">
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
                      Ruby{" "}
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

      {/* Shopwise works card. */}
      <div className="group">
        <a href="https://shopwise-ss77.onrender.com/">
          <div className="p-6 w-full h-auto cursor-pointer group-hover:bg-light_cetacean_blue hover:scale-[100.3%]   hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start ">
              <div className="w-full md:w-[30%]  opacity-80 group-hover:opacity-100">
                <Image src={shopwise} alt="hack_summit website image." />
              </div>
              <div className="w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">
                  ShopWise🛍️, the next-generation e-commerce platform
                </p>
                <p className="text-cadet_gray text-sm mt-4 w-full">
                  ShopWise combines cutting-edge technology with user-centric
                  features to provide a seamless and delightful shopping
                  journey. With a user-friendly interface, personalized
                  recommendations, and a wide array of products organized into
                  categories, ShopWise makes it easier than ever to discover and
                  purchase your favorite items.
                </p>
                <div className="flex gap-4 ml-[-1.7rem]  scale-75 py-4">
                  <div className="inline-flex items-center gap-2">
                    <FaLink />{" "}
                    <a href="https://shopwise-ss77.onrender.com/">Webapp</a>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <FaCode />{" "}
                    <a href="https://github.com/kalbek/ShopWise">Source Code</a>
                  </div>
                </div>
                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] gap-4 ">
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
                </div>
              </div>
              <FiExternalLink />
            </div>
          </div>
        </a>
      </div>

      {/* Bookstore CMS works card. */}
      <div className="group">
        <a href="https://bookstore-vc4k.onrender.com/">
          <div className="p-6 w-full h-auto  cursor-pointer group-hover:bg-light_cetacean_blue  hover:scale-[100.3%]   hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start ">
              <div className="w-full md:w-[30%]  opacity-80 group-hover:opacity-100">
                <Image src={bookstore} alt="hack_summit website image." />
              </div>
              <div className="w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">
                  Bookstore CMS: Track books with BookstoreCMS and API
                  integration.
                </p>
                <p className="text-cadet_gray text-sm mt-4 w-full">
                  Bookstore CMS is an interesting website to track books fetched
                  directly from API.Bookstore CMS is an interesting website to
                  track books fetched directly from API.
                </p>
                <div className="flex gap-4 ml-[-1.7rem]  scale-75 py-4">
                  <div className="inline-flex items-center gap-2">
                    <FaLink />{" "}
                    <a href="https://bookstore-vc4k.onrender.com/">Webapp</a>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <FaCode />{" "}
                    <a href="https://github.com/kalbek/bookstore">
                      Source Code
                    </a>
                  </div>
                </div>
                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] gap-4 ">
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
                </div>
              </div>
              <FiExternalLink />
            </div>
          </div>
        </a>
      </div>
      {/* Math works card. */}
      <div className="group">
        <a href="https://math-magicians-cnxf.onrender.com/">
          <div className="p-6 w-full h-auto  cursor-pointer group-hover:bg-light_cetacean_blue  hover:scale-[100.3%]   hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start ">
              <div className="w-full md:w-[30%] opacity-80 group-hover:opacity-100">
                <Image src={math} alt="hack_summit website image." />
              </div>
              <div className="w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">
                  Math Magicians: Math fun for kids and enthusiasts alike!
                </p>
                <p className="text-cadet_gray text-sm mt-4 w-full">
                  A fun website for kids and Math enthusiasts.
                </p>
                <div className="flex gap-4 ml-[-1.7rem]  scale-75 py-4">
                  <div className="inline-flex items-center gap-2">
                    <FaLink />{" "}
                    <a href="https://math-magicians-cnxf.onrender.com/">
                      Webapp
                    </a>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <FaCode />{" "}
                    <a href="https://github.com/kalbek/Math-Magicians">
                      Source Code
                    </a>
                  </div>
                </div>
                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] gap-4 ">
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
                </div>
              </div>
              <FiExternalLink />
            </div>
          </div>
        </a>
      </div>
      {/* SpaceTravellers hub. */}
      <div className="group">
        <a href="https://space-travellers-6soy.onrender.com">
          <div className="p-6 w-full h-auto  cursor-pointer group-hover:bg-light_cetacean_blue  hover:scale-[100.3%]   hover:bg-light_cetacean_blue rounded-lg ">
            <div className="flex flex-col items-start md:flex-row justify-start ">
              <div className="w-full md:w-[30%] opacity-80 group-hover:opacity-100">
                <Image src={math} alt="hack_summit website image." />
              </div>
              <div className="w-full md:w-[60%] py-2 md:py-0 flex flex-col items-start md:ml-4 text-lg font-bold text-crayola">
                <p className="group-hover:text-turquoise">
                  Space Travelers hub:🚀 Plan rocket missions, explore space –
                  an epic adventure!
                </p>
                <p className="text-cadet_gray text-sm mt-4 w-full">
                  Website for space travellers'. Fetching space API, schedule
                  rockets and mission. It gets even exciting once you get there.
                </p>
                <div className="flex gap-4 ml-[-1.7rem]  scale-75 py-4">
                  <div className="inline-flex items-center gap-2">
                    <FaLink />{" "}
                    <a href="https://space-travellers-6soy.onrender.com">
                      Webapp
                    </a>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <FaCode />{" "}
                    <a href="https://github.com/kalbek/react-group-project">
                      Source Code
                    </a>
                  </div>
                </div>
                {/* tech stack tags */}
                <div className="flex flex-wrap w-[110%] gap-4 ">
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
                </div>
              </div>
              <FiExternalLink />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
