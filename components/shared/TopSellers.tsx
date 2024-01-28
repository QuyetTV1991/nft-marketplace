"use client";

import React, { useEffect, useRef, useState } from "react";
import CreatorCard from "./cards/CreatorCard";
import { creatorList } from "@/contants/dummy";
import Image from "next/image";

const TopSellers = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (current) {
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current && parent) {
      if (current.scrollWidth >= parent.offsetWidth) {
        setHideButtons(false);
      } else {
        setHideButtons(true);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      isScrollable();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {!hideButtons && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
