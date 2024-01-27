"use client";

import React, { useRef } from "react";
import CreatorCard from "./cards/CreatorCard";
import { creatorList } from "@/contants/dummy";
import Image from "next/image";

const TopSellers = () => {
  const parentRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const { current } = scrollRef;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= 100;
      } else if (direction === "right") {
        current.scrollLeft += 100;
      }
    }
  };

  return (
    <div>
      <h1 className="ml-4 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white xs:ml-0 minlg:text-4xl">
        Best Creators
      </h1>

      <div className="relative mt-3 flex max-w-full flex-1" ref={parentRef}>
        <div
          className="no-scrollbar flex w-max select-none flex-row overflow-x-scroll"
          ref={scrollRef}
        >
          {creatorList.map((item, index) => (
            <CreatorCard
              key={index}
              rank={item.rank}
              imgUrl={item.creatorImage}
              name={item.creatorName}
              eths={item.creatorEths}
            />
          ))}
          <>
            <div
              className="absolute left-0 top-45 size-8 cursor-pointer minlg:size-12"
              onClick={() => handleScroll("left")}
            >
              <Image
                src="/assets/left.png"
                alt="left"
                fill
                className="object-contain invert dark:invert-0"
              />
            </div>
            <div
              className="absolute right-0 top-45 size-8 cursor-pointer minlg:size-12"
              onClick={() => handleScroll("right")}
            >
              <Image
                src="/assets/right.png"
                alt="right"
                fill
                className="object-contain invert dark:invert-0"
              />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
