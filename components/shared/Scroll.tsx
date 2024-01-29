"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Scroll = () => {
  const [hideButtons, setHideButtons] = useState(false);

  const handleScroll = (
    direction: "left" | "right",
    event: React.MouseEvent<HTMLElement>
  ) => {
    const container = event.currentTarget.closest(".overflow-x-scroll");
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const isScrollable = () => {
    const container = document.querySelector(
      ".overflow-x-scroll"
    ) as HTMLElement;
    const parent = document.querySelector(".max-w-full") as HTMLElement;

    if (container && parent) {
      const shouldHideButtons = container.scrollWidth <= parent.offsetWidth;
      setHideButtons(shouldHideButtons);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      isScrollable();
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    isScrollable();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!hideButtons && (
        <>
          <div
            className="absolute left-0 top-45 size-8 cursor-pointer minlg:size-12"
            onClick={(e) => handleScroll("left", e)}
          >
            <Image
              src="/assets/left.png"
              alt="left"
              fill
              sizes="(min-width: 2100px) 48px, 32px"
              className="object-contain invert dark:invert-0"
            />
          </div>
          <div
            className="absolute right-0 top-45 size-8 cursor-pointer minlg:size-12"
            onClick={(e) => handleScroll("right", e)}
          >
            <Image
              src="/assets/right.png"
              alt="right"
              fill
              sizes="(min-width: 2100px) 48px, 32px"
              className="object-contain invert dark:invert-0"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Scroll;
