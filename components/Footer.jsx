import Image from "next/image";
import { useTheme } from "next-themes";

import { instagram, twitter, telegram, discord, logo02 } from "../assets";
import { Button } from ".";

const FooterLinks = ({ heading, items }) => {
  return (
    <div className="flex-1 justify-start items-start">
      <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl mb-10">
        {heading}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 hover:text-nft-black-1 my-3"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flecCenter flex-col border-t dark:border-nft-black-1 border-nft-gray-1 sm:py-8 py-16">
      {/* Logo and services */}
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
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
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base mt-6">
            Get the latest updates
          </p>
          <div className="flexBetween md:w-full minlg:w-557 w-357 mt-6 dark:bg-nft-black-2 bg-white border border-nft-gray-2 dark:border-nft-black-2 rounded-md">
            <input
              type="email"
              placeholder="Your Email"
              className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-semibold text-base minlg:text-lg outline-none"
            />
            <div className="flex-initial">
              <Button className="rounded-md">Email me</Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flexBetweenStart flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks
            heading="CryptoKet"
            items={["Explore", "How it Works", "Contact Us"]}
          />
          <FooterLinks
            heading="Support"
            items={[
              "Help Center",
              "Terms of Service",
              "Legal",
              "Privay Policy",
            ]}
          />
        </div>
      </div>

      {/* Copyrights part */}
      <div className="flexCenter w-full mt-5 border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            CryptoKet, Inc. All Rights Reserved.
          </p>
          <div className="flex flex-row mt-4">
            {[instagram, twitter, telegram, discord].map((image, index) => (
              <div className="mx-2 cursor-pointer" key={index}>
                <Image
                  src={image}
                  alt="social"
                  width={24}
                  height={24}
                  className={`object-contain ${
                    theme === "light" ? "filter invert" : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
