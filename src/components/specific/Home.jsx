import React from "react";
import Right from "./Right";
import Left from "./Left";
import Nave from "../layout/Nave";
import SponsorLogos from "./SponsorLogos";
import Services from "./Services";
import TopDestination from "./TopDestination";
import TravelPoint from "./TravelPoint";
import KeyFeatures from "./KeyFeatures";
import Footex from "../layout/Footex";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Nave />
      <div className="sm:w-full w-[398px] md:w-full  flex justify-between items-center md:flex-row flex-col-reverse relative  ">
        <Right />
        <div className="flex-1   ">
          <Left />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <SponsorLogos />
      </div>

      <div>
        <Services />
      </div>
      <div>
        <TopDestination />
      </div>
      <div>
        <TravelPoint />
      </div>
      <div>
        <KeyFeatures />
      </div>

      <Footex />
    </div>
  );
}
