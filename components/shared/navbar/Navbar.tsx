// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import ButtonGroup from "./ButtonGroup";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flexBetween fixed z-10 w-full flex-row border-b border-nft-gray-1 bg-white p-4 dark:border-nft-black-1 dark:bg-nft-dark">
      {/* Logo Component */}
      <Logo />
      <div className="flex flex-initial flex-row justify-end">
        {/* Theme Switch Tool */}
        <Theme />

        {/* Menu item path */}
        <div className="flex md:hidden">
          <MenuItems />
          <div className="ml-4">
            <ButtonGroup hasConnected={true} />
          </div>
        </div>
      </div>

      <div className="ml-2 hidden md:flex">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
