import React from "react";

import plybtn from "../../../public/assets/images/icons/plyabtn.svg";
import Explore from "./Explore";
import Button from "../common/Button";

export default function Right() {
  return (
    <div className=" sm:w-[421px] md:-[421px] w-[396.29px]  rounded-sm md:mt-0 sm:mt-[64px] mt-[32px] sm:py-[32px] py-0 flex flex-col gap-y-[33px] justify-between  relative ">
      <div className="flex justify-center sm:justify-center items-center sm:items-center ">
        <Explore />
      </div>
      <div className="sm:text-[40px] w-full md:text-[50px] text-[40px] font-bold flex justify-center items-center sm:justify-center text-center sm:items-start ">
        {/* on mobile  */}
        <h1 className="sm:hidden block ">
          Travel{" "}
          <span className="text-font ">
            {" "}
            top <br /> destination
          </span>{" "}
          of the <br />
          world{" "}
        </h1>
        {/* on tablet  */}
        <h1 className="sm:block hidden md:hidden">
          Travel <span className="text-font "> top destination</span> <br /> of
          the world{" "}
        </h1>
        {/* on desck top  */}
        <h1 className=" md:block hidden">
          Travel <span className="text-font "> tops destination</span> <br /> of
          the world{" "}
        </h1>
      </div>

 
      <div className="md:text-[18px] text-center md:text-start flex justify-center items-center text-[16px]  font-normal text-default  ">
        <p className=" hidden md:block sm:hidden ">
          We always make our customer happy by <br /> providing <br /> as many
          choices as possible{" "}
        </p>

        {/* // on mobile & tab  // */}
        <p className="md:hidden sm:block flex ">
          We always make our customer happy by providing <br /> as many
          choices as possible{" "}
        </p>
      </div>
      <div className=" md:items-start flex flex-col md:flex-row sm:flex-row md:justify-start sm:justify-start  justify-center items-center gap-2">
        <Button
          value={"Get Started"}
          textColor={"text-white"}
          backgroundColor={"bg-btn"}
          paddingX="px-8"
          paddingY="py-4"
          calssname={' md:w-fit w-[398px] h-[65px] justify-center'}
          
          />
        <Button
          value={"Watch Demo"}
          textColor={"text-black"}
          backgroundColor={"bg-white"}
          paddingX="px-8"
          paddingY="py-4"
          icon={plybtn}
          calssname={' md:w-fit w-[398px] h-[65px] justify-center'}  
        />
      </div>
    </div>
  );
}
