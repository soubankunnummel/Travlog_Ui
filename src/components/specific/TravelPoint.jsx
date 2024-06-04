import React from "react";
import taraveImg1 from "../../../public/assets/images/img/travelImg1.png";
import { data } from "../../../public/assets/data/TravelData";

export default function TravelPoint() {
  return (
    <div className="w-full h-full sm:w-[700px]  md:w-full  mt-10  flex flex-col md:flex-row justify-center md:justify-end md:items-end items-center gap-5 ">
      {/* // image */}

      <div className="object-cover sm:w-[650px] md:w-[530px] flex justify-center items-center  ">
        <img
          src={taraveImg1}
          alt="traveImages  "
          className=" md:absolute md:-left-10 md:w-[871px] md:top-[2300px] "
        />
      </div>

      {/* content */}
      <div className="  sm:w-[650px] md:w-[470px] w-full flex flex-col  justify-between p-[3%] gap-10  md:absolute md:top-[2300px] ">
        <div className="flex flex-col justify-between items-center text-center">
          <h4 className="text-font text-[16px] font-semibold  ">
            TRAVEL POINT
          </h4>
          <h1 className="text-[32px] font-bold ">
            We helping you find your dream location
          </h1>
          <p className="font-normal text-[16px] text-default ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="flex  flex-col sm:flex-row sm:flex-wrap md:w-[441px] md:h-[334px] sm:w-[650px] sm:h-[334px] justify-center items-center gap-6">
          {data.map((item) => (
            <div className="w-[398px] h-[151px] md:w-[204.5px] md:h-[151px] sm:w-[250px] sm:h-[151px] rounded-[32px] flex justify-center items-center flex-col border hover:shadow-lg ">
              <h1 className="text-[#FF5722] font-bold text-[32px] ">
                {item.count} +
              </h1>
              <p className="font-normal text-[18px] text-smalltxt ">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
