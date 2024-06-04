import React from "react";

export default function ServiceCard({ title, image, index , disc }) {
  return (
    <div
      className="md:w-[350px] w-[398px] h-[279px] sm:w-[288px]  sm:h-[443px] border md:h-[443px]  rounded-[32px] bg-white hover:shadow-2xl flex justify-center items-center flex-col px-[3%] gap-4"
      key={index}
      
    >
      <div>
        <img src={image} alt="images" />
      </div>
      <div className="text-[24px] font-semibold ">{title} </div>
      <p className="text-[19px] text-default  ">{disc} </p>
    </div>
  );
}
