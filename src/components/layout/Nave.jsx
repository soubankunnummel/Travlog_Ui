import React from "react";
import Logo from "../common/Logo";
import { data } from "../../../public/assets/data/NaveItems";
import menu from "../../../public/assets/images/icons/menu.svg";
import Button from "../common/Button";

export default function Nave() {
  return (
    <nav className="w-full bg-white h-[113px]   flex justify-between sticky top-0  z-10 ">
      
      {/* ///////////// log  ///////////////////*/}

      <div className="md:flex hidden justify-center items-center gap-3 ">
        <Logo />
      </div>
      {/*///////////////// menu bar ///////////////////// */}

      <div className="flex md:hidden justify-center items-center gap-3">
        <img src={menu} alt="memu" />
      </div>

      {/*///////////// Nave items /////////////// */}

      <div className="md:flex justify-center hidden  flex-1 items-center md:gap-[64px] gap-[18px]  ">
        {data.map((item, index) => (
          <div
            className="text-[14px] font-bold text-default hover:text-smalltxt  "
            key={item.id}
          >
            {item.title}{" "}
          </div>
        ))}
      </div>


      <div className="md:hidden flex justify-center items-center gap-3 ">
        <Logo />
      </div>

      {/* //////////////sing&login btns ///////////////// */}

      <div className="sm:flex  hidden justify-center gap-1 items-center">
        <Button
          value={"Log In"}
          backgroundColor={"bg-white"}
          paddingX="px-8"
          paddingY="py-4"
          textColor={"text-black"}
          calssname={"shadow-lg "}
        />
        <Button
          value={"Sign Up"}
          backgroundColor={"bg-btn"}
          paddingX="px-8"
          paddingY="py-4"
          textColor={"text-white"}
        />
      </div>
    </nav>
  );
}
