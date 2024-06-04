import React from "react";
import Logo from "../common/Logo";
import Socilamidea from "../common/Socilamidea";
import { data } from "../../../public/assets/data/Socilamedia";
import { footer } from "../../../public/assets/data/Socilamedia";
// import fb from '../../../public/assets/images/icons/fb.svg'
import fb from "../../../public/assets/images/icons/fb.png";
import dropdwon from "../../../public/assets/images/icons/dropdown.svg";

function Footex() {
  return (
    <div className="w-full  sm:w-[700px] flex mt-10 flex-col md:flex-row md:w-full justify-between gap-4 p-[4%] ">
      {/* // logo only */}

      <div className=" flex gap-2  md:hidden ">
        <Logo />
      </div>
      <div >
       <div className="md:flex gap-3 hidden">
       <Logo/>
       </div>
      <div className="flex justify-start flex-col items-start  gap-5  ">
        <p className="text-[16px] text-default ">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex justify-between gap-2">
          <img src={fb} alt="" />
          {data.map((itme, i) => (
            <Socilamidea icon={itme.icon} />
          ))}
        </div>
      </div>
      </div>
      <div className="w-[398px] h-[28px] md:w-[1100px] sm:w-[700px] sm:h-[272px]   flex justify-between flex-col sm:flex-row items-center md:p-1 p-[4%] ">
        {footer.map((itme, i) => ( 
          <div className="flex flex-col justify-between md:h-[260px] sm:h-[200px]  ">
            <div className=" flex justify-between w-[350px] md:w-40 sm:w-36  sm:h-10 ">
              <h1 className="text-[28px] font-semibold  ">{itme.title} </h1>
              <img src={dropdwon} alt="dropdwon" className=" sm:hidden flex " />
            </div>
            {itme.details.map((ite) => (
              <div className="w-full mt-4  sm:block hidden ">
                <h1 className="text-[18px] text-default ">{ite.data} </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footex;
