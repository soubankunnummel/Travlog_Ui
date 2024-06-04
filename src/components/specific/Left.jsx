import React from "react";
import layer from "../../../public/assets/images/img/layer.png";
import Homeleft2 from "../../../public/assets/images/img/Homeleft2.png";
import send from "../../../public/assets/images/icons/send.svg";
import user from "../../../public/assets/images/icons/user.svg";
import location from "../../../public/assets/images/icons/location.svg";
import StaticInfoButton from "../common/StaticInfoButton";
import Button from "../common/Button";

export default function Left() {
  return (
    <div className="relative flex sm:h-[713px] sm:w-[772px] w-[396.29px] h-[366px] justify-center items-center flex-col">
      <img src={layer} alt="layer" className="  absolute top-0 " />
      <img
        src={Homeleft2}
        alt="layer"
        className="absolute sm:w-[575px] w-[295.16px] top-[65px]    "
      /> 
      <StaticInfoButton
        icon={send}
        postion={"left-16  sm:top-80  top-48 "}
        bagroundColor={"bg-font"}
      />
      <StaticInfoButton
        icon={user}
        postion={"top-[350px] sm:top-[620px] sm:right-[165px] right-[110px]   "}
        bagroundColor={"bg-[#FF5722] "}
      />
      <Button
        value={"Top Places"}
        textColor={"text-black"}
        backgroundColor={"bg-white"}
        paddingX="px-8"
        paddingY="py-4"
        icon={location}
        postions={"absolute right-0  sm:top-[470px] top-[270px] "}
        calssname={' sm:width-[166px] sm:h-[56px] width-[85.21px] h-[28.75px] text-[7.19px] '}
        iconsize={'sm:w-[24px] sm:h-[24px]  w-[12.32px] h-[12.32px] '}
      />
    </div>
  );
}
