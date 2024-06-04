import React from "react";
import logo from "../../../public/assets/images/logos/logo.svg";


export default function Logo() {
  return (
    <>
      <img src={logo} alt="logo" width={40} height={40} title="logo" />
      <h1 className="text-[24px] font-bold font-Roboto">Travlog </h1>
    </>
  );
}
