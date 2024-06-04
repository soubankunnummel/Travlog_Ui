import React from "react";

export default function StaticInfoButton({icon,postion, bagroundColor}) {
  return (
    <div className={`sm:h-[64px] sm:w-[64px] w-[32.85px] h-[32.85px] rounded-full  flex justify-center shadow-2xl items-center absolute ${bagroundColor} ${postion} `}>
      <img src={icon} alt="send " className=" sm:w-[32px] sm:h-[32px]    w-[13.69px] h-[13.69px] " />
    </div> 
  );
}
