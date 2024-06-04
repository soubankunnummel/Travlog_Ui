import React from "react";

function Sapes({icon, bg}) {
  return (
    <div className={`w-[100px] h-[100px] md:w-[75px] md:h-[75px] rounded-[32px] flex justify-center items-center ${bg} `}>
      <img src={icon} alt="" />
    </div>
  );
}

export default Sapes;
