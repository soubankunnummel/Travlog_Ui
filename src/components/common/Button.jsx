import React from 'react'

export default function Button({value, paddingX,paddingY,backgroundColor, textColor,calssname,icon ,postions , iconsize}) {
  return (
    <div
    className={`rounded-full ${textColor}  sm:text-[14px] font-bold flex md:justify-between  items-center   gap-1 ${paddingX} ${paddingY} ${backgroundColor} ${calssname} ${postions}`}
  >
   {icon && <img src={icon} alt="icon" className={`${iconsize}   `} />}
      {value}
  </div>
  )
}
