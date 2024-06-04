import React from "react";

import image from "../../../public/assets/images/img/image1.jpg";
import star from "../../../public/assets/images/icons/Star.svg";
export default function ExploreCard() {
  return (
    <div className="w-[398px] h-[550px] sm:w-[278px] md:w-[373.33px] md:h-[575px] sm:h-[400px] border hover:shadow-lg flex rounded-b-[32px]  flex-col">
      <img src={image} alt="image" className="rounded-b-lg " />

      <div className="flex p-[5%]   flex-col justify-between  ">
        <div className=" flex flex-col justify-between h-[137px] ">
          <h1 className="text-font text-[23px] font-semibold  ">$550.16</h1>
          <h1 className="text-[23px] font-bold ">
            Paradise Beach, Bantayan Island
          </h1>
          <h1 className="text-[18px] font-normal text-default ">Rome, Italy</h1>
        </div>

        <h1 className="text-[23px] font-bold text-[#FF5722] flex gap-1 ">
          {" "}
          4.5 <img src={star} alt="star" />{" "}
        </h1>
      </div>
    </div>
  );
}

// TODO:// dynamice cred
