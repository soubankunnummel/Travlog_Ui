import React from "react";
import { data } from "../../../public/assets/data/SponsorData";

function SponsorLogos() {
  return (
    <div className=" w-[398px] sm:w-[896px] md:w-full   mt-16 flex justify-center gap-10 flex-wrap mx-10 relative  ">
      {data.map((itme, index) => (
        <img src={itme.logo} alt="sponsers" key={index} className="w-[25%] sm:w-[28%] md:w-[16%] " />
      ))}
      {/* <div className="w-[406px] h-[406px] bg-[#FACD49] opacity-[10%] rounded-full absolute  -right-64 blur-3xl "></div> */}
    </div>
  );
}

export default SponsorLogos;
