"use client";

import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import React, { useState } from "react";
import MenuItems from "./MenuItems";
import ButtonGroup from "./ButtonGroup";

interface MobileNavProps {
  hasConnected: boolean;
}

const MobileNav = ({ hasConnected }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode } = useTheme();
  return (
    <>
      {isOpen ? (
        <Image
          src="/assets/cross.png"
          alt="close tab"
          width={20}
          height={20}
          className={`object-contain ${mode === "light" && "invert"}`}
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <Image
          src="/assets/menu.png"
          alt="menu"
          width={25}
          height={25}
          className={`object-contain ${mode === "light" && "invert"}`}
          onClick={() => setIsOpen(true)}
        />
      )}

      {isOpen && (
        <div className="nav-h fixed inset-0 top-65 z-10 flex flex-col justify-between bg-white dark:bg-nft-dark">
          <div className="flex-1 p-4">
            <MenuItems isMobile />
          </div>
          <div className="border-t border-nft-gray-1 p-4 dark:border-nft-black-1">
            <ButtonGroup hasConnected={hasConnected} />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
