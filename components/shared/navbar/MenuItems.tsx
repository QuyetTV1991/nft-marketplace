"use client";

import { NavLinks } from "@/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItems = () => {
  const pathname = usePathname();
  return (
    <ul className="flexCenter ml-3 list-none flex-row">
      {NavLinks.map((item, index) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <li
            key={index}
            className={`mx-3 flex flex-row items-center font-poppins text-base font-semibold hover:text-nft-dark dark:hover:text-white 
            ${
              isActive
                ? "text-nft-black-1 dark:text-white"
                : "text-nft-gray-2 dark:text-nft-gray-3"
            }`}
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
