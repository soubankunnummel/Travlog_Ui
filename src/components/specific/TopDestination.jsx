import React from "react";
import RountBtn from "../common/RountBtn";
import rightArrow from "../../../public/assets/images/icons/rightArrow.svg";
import leftArrow from "../../../public/assets/images/icons/leftArrow.svg";
import ExploreCard from "./ExploreCard";

export default function TopDestination() {
  return (
    <div className="w-full flex flex-col mt-10 ">
      <div className="flex md:justify-between flex-col justify-center items-center ">
        <div>
          <h3 className="text-font text-[23px] font-semibold text-center ">
            TOP DESTINATIONS{" "}
          </h3>
          <h1 className="md:text-[44px] text-[30px] font-bold text-center ">
            Explore top destination
          </h1>
        </div>
        <div className="flex gap-[32px] justify-between w-full p-2 sm:justify-center   ">
          <RountBtn icon={leftArrow} bg={"bg-white"} more={"border"} />
          <RountBtn icon={rightArrow} bg={"bg-btn"} />
        </div>
      </div>
      <div className="mt-5 flex flex-col sm:flex-row gap-5">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </div>
    </div>
  );
}
