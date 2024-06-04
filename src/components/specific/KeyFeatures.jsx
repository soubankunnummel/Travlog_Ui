import React from "react";
import bgimg1 from "../../../public/assets/images/img/bgimg1.png";
import Sapes from "../common/Sapes";
import BigLocation from "../../../public/assets/images/icons/BigLocation.svg";
import { data } from "../../../public/assets/data/featuresData";

export default function KeyFeatures() {
  return (
    <div className="w-full md:w-full md:h-[600px] md:mt-[700px] sm:w-[700px] sm:h-full h-full mt-10 flex flex-col md:flex-row-reverse justify-center gap-6  items-center">
      <div className=" md:w-[693px] ">
        <img src={bgimg1} alt="image1" className=" md:absolute md:w-[470px] md:top-[2950px] " />
      </div>
      <div className="flex flex-col justify-between items-center text-center md:justify-start md:items-start md:gap-2 gap-10 sm:gap-2">
        <div>
          <h4 className="text-font text-[14px] font-semibold ">Key features</h4>
          <h1 className="text-[32px] font-bold ">We offer best services</h1>
          <p className="text-[16px] text-default font-normal ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        {/* // items  */}
         
        {data.map((itme,i) => (
            <div className="w-full md:w-[549px] md:h-[164px] sm:w-[700px] flex justify-center items-center sm:p-5 md:p-2" key={i} >
            <div className="w-[334px]  md:h-[135px] sm:w-[832px] h-[290px] sm:h-[164px] border flex flex-col sm:flex-row  justify-center sm:justify-start sm:items-center    rounded-[32px] items-start text-start gap-8  p-5 bg-red-100  ">
              <Sapes bg={"bg-[#FF5722] "} icon={itme.icon} />
              <div>
                <h1 className="text-[23px] text-smalltxt font-bold ">
                  Schedule your trip
                </h1>
                <p className="text-[18px] font-normal text-default ">
                  Lorem Ipsum is not simply random text
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
