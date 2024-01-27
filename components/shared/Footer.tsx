import { FooterIcons, FooterLinks } from "@/contants";
import Image from "next/image";
import React from "react";
import Logo from "./navbar/Logo";
import CustomBtn from "./CustomBtn";

const Footer = () => {
  return (
    <footer className="flexCenter flex-col border-t border-nft-gray-1 py-16 dark:border-nft-black-1 sm:py-8">
      <div className="flex w-full flex-row px-16 md:flex-col sm:px-4 minmd:w-4/5">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Logo noHidden />
          </div>
          <p className="mt-6 font-poppins text-base font-semibold text-nft-black-1 dark:text-white">
            Get the latest Updates
          </p>

          <div className="flexBetween mt-6 w-357 rounded-md border border-nft-gray-2 bg-white dark:border-nft-black-2 dark:bg-nft-black-2 md:w-full minlg:w-557">
            <input
              type="email"
              placeholder="Your Email"
              className="size-full flex-1 rounded-md bg-white px-4 text-xs font-normal text-nft-black-1 outline-none dark:bg-nft-black-2 dark:text-white minlg:text-lg"
            />
            <div className="flex-initial">
              <CustomBtn classStyles="rounded-md" btnName="Email me" />
            </div>
          </div>
        </div>

        <div className="flexBetweenStart ml-10 flex-1 flex-wrap md:ml-0 md:mt-8">
          {FooterLinks.map((footerLink, index) => (
            <div
              key={index}
              className={`flex-1 items-start justify-start ${footerLink.heading === "Support" && "ml-4"}`}
            >
              <h3 className="mb-10 font-poppins text-xl font-semibold text-nft-black-1 dark:text-white">
                {footerLink.heading}
              </h3>
              {footerLink.items.map((item, index) => (
                <p
                  key={index}
                  className="my-3 cursor-pointer font-poppins text-base font-normal text-nft-black-1 hover:text-nft-gray-2 dark:text-white dark:hover:text-nft-gray-2"
                >
                  {item.label}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flexCenter mt-5 w-full border-t border-nft-gray-1 px-16 dark:border-nft-black-1 sm:px-4">
        <div className="flexBetween mt-7 w-full flex-row sm:flex-col minmd:w-4/5">
          <p className="font-poppins text-base font-semibold text-nft-black-1 dark:text-white">
            CryptoKet, Inc. All Rights Reserved.
          </p>
          <div className="flex flex-row sm:mt-4">
            {FooterIcons.map((icon, index) => (
              <div key={index} className="mx-2 cursor-pointer">
                <Image
                  src={icon.iconUrl}
                  alt={icon.label}
                  width={24}
                  height={24}
                  className="object-contain invert dark:invert-0"
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
