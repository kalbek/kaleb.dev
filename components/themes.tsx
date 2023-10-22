import React from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

export default function themes() {
  return (
    <>
      <div className=" fixed bottom-[50%] bg-opacity-80 border-white">
        <BsFillMoonStarsFill />
        <BsSun />
      </div>
    </>
  );
}
