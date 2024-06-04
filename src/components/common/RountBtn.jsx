import React from 'react'


export default function RountBtn({icon,bg,more}) {
  return (
    <button className={`w-[100px] h-[100px] rounded-full hover:shadow-2xl   flex justify-center items-center  ${bg} ${more}`}>
    <img src={icon} alt="arow" />
</button>
  )
}
