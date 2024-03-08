import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { cross, logo02, menu } from "../assets";
import { Button } from ".";

const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (index) => {
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/created-nfts";
      case 2:
        return "/my-nfts";
      default:
        return "/";
    }
  };
  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && "flex-col h-full"
      }`}
    >
      {["Explore NFTs", "Listed NFTs", "My NFTs"].map((item, index) => (
        <li
          key={index}
          onClick={() => setActive(item)}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-nft-dark mx-3 
                    ${
                      active === item
                        ? "dark:text-white text-nft-dark dark:hover:text-gray-200 hover:text-gray-500"
                        : "dark:text-nft-gray-1 text-nft-gray-2 hover:text-nft-gray-3"
                    }`}
        >
          <Link href={generateLink(index)} passHref>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = ({ setActive, router }) => {
  const hasConnected = true;

  return hasConnected ? (
    <Button
      className="mx-2 rounded-xl"
      handleClick={() => {
        setActive("");
        router.push("/create-nft");
      }}
    >
      Create
    </Button>
  ) : (
    <Button className="mx-2 rounded-xl" handleClick={() => {}}>
      Connect
    </Button>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("Explore NFTs");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/" passHref>
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {}}
          >
            <Image
              src={logo02}
              alt="Logo"
              width={32}
              height={32}
              objectFit="contain"
            />
            <p className="dark:text-white text-nft-black-1 text-lg ml-1 font-semibold">
              CryptoKet
            </p>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={logo02}
              alt="Logo"
              width={32}
              height={32}
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      {/*  Custom Toogle Theme */}
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="h-3 w-3 absolute bg-white rounded-full ball" />
          </label>
        </div>

        {/*  Menu Items */}
        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} />
          <div className="ml-4">
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>
      </div>

      {/* Toggle Menu Bar */}
      <div className="hidden md:flex ml-2">
        {isOpen ? (
          <Image
            src={cross}
            width={20}
            height={20}
            alt="close"
            onClick={() => setIsOpen(false)}
            className={`object-contain ${theme !== "dark" && "filter invert"}`}
          />
        ) : (
          <Image
            src={menu}
            width={25}
            height={25}
            alt="menu"
            onClick={() => setIsOpen(true)}
            className={`object-contain ${theme !== "dark" && "filter invert"}`}
          />
        )}

        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile />
            </div>
            <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
              <ButtonGroup setActive={setActive} router={router} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
