import React from 'react'
import suitcase from '../../../public/assets/images/icons/suitcase.svg'


export default function Explore() {
  return (
    <div  className="w-[224px] h-[56px] flex justify-center items-center bg-white rounded-full shadow-lg gap-2">
    <h3 className="text-[14px] font-bold text-font ">Explore the world!</h3>
    <img src={suitcase} alt="suitcase" />
  </div>
  )
}
