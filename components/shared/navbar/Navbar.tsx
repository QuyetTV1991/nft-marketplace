import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flexBetween fixed z-10 w-full flex-row border-b border-nft-gray-1 bg-white p-4 dark:border-nft-black-1 dark:bg-nft-dark">
      {/* Logo Component */}
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/" className="flexCenter cursor-pointer md:hidden">
          <Image
            src="/assets/logo02.png"
            alt="logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <p className="ml-1 text-lg font-semibold text-nft-black-1 dark:text-white">
            CrytoKet
          </p>
        </Link>
        <Link href="/">
          <div className="hidden md:flex">
            <Image
              src="/assets/logo02.png"
              alt="logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Theme Switch Tool */}
      <Theme />
    </nav>
  );
};

export default Navbar;
