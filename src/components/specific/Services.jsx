import React from "react";
import ServiceCard from "../common/ServiceCard";
import {data} from '../../../public/assets/data/Servicedatas'

function Services() {
  return (
    <div className=" flex md:w-full w-full  sm:w-full mt-10 justify-center items-center flex-col  md:flex-row  gap-5 ">
      <div className=" md:w-[444px] md:h-[150px] sm:w-full  sm:h-[92px]  flex flex-col  items-center justify-center sm:items-center md:items-start ">
        <h3 className="text-font text-[23px] font-semibold  ">Services</h3>
        <p className="md:text-[44px] sm:text-[35px] text-[19px] font-bold  ">
          Our top value categories for you
        </p>
      </div>
      <div className='flex-1 sm:w-full   flex   md:flex-row sm:flex-row md:overflow-x-auto sm:overflow-x-auto  hide-scrollbar'>
      <div className='flex md:space-x-4 sm:space-x-3 sm:flex-row flex-col gap-4 justify-center items-center space-x-0 '>
      {
        data.map((item,index) => (   <ServiceCard title={item.title} image={item.image} index={index}/>))
      }
      
      </div>
    </div>
    </div>
  );
}

export default Services;
