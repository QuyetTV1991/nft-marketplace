"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface CustomBtnProps {
  classStyles: string;
  btnName: string;
  route?: string;
  action?: "submit";
}

const CustomBtn = ({ btnName, classStyles, route, action }: CustomBtnProps) => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };
  return (
    <button
      type="button"
      className={`nft-gradient px-6 py-2 font-poppins text-sm font-semibold text-white minlg:px-8 minlg:text-lg ${classStyles}`}
      onClick={() => handleClick(route ?? "")}
    >
      {btnName}
    </button>
  );
};

export default CustomBtn;
