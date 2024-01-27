import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex flex-1 flex-row justify-start">
      <Link href="/">
        <div className="flexCenter cursor-pointer md:hidden">
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
        </div>
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
  );
};

export default Logo;