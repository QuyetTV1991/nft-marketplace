import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Banner, CreatorCard } from "../components";
import {
  creator10,
  creator9,
  creator8,
  creator7,
  creator6,
  left,
  right,
} from "../assets";
import { makeId } from "../utils/makeId";
import { useTheme } from "next-themes";

const Home = () => {
  const [hideButton, setHideButton] = useState(false);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { theme } = useTheme();

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);

    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  }, []);

  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          name="Discover, collect and sell extraordinary NFTs"
        />

        {/* Top Creators */}
        <div>
          <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
            Best Creators
          </h1>
          <div className="relative flex-1 max-w-full flex mt-3" ref={parentRef}>
            <div
              className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
              ref={scrollRef}
            >
              {[6, 7, 8, 9, 10].map((i) => {
                const imageUrl =
                  i === 6
                    ? creator6
                    : i === 7
                    ? creator7
                    : i === 8
                    ? creator8
                    : i === 9
                    ? creator9
                    : i === 10
                    ? creator10
                    : "";
                return (
                  <CreatorCard
                    key={`creator-${i}`}
                    rank={i}
                    creatorImage={imageUrl}
                    creatorName={`0x${makeId(3)}...${makeId(4)}`}
                    creatorEths={10 - i * 0.5}
                  />
                );
              })}

              {/* render backwards and towards */}
              {!hideButton && (
                <>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
                    onClick={() => handleScroll("left")}
                  >
                    <Image
                      src={left}
                      alt="left arrow"
                      layout="fill"
                      className={`object-contain ${
                        theme === "light" && "filter invert"
                      }`}
                    />
                  </div>
                  <div
                    className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
                    onClick={() => handleScroll("right")}
                  >
                    <Image
                      src={right}
                      alt="right arrow"
                      layout="fill"
                      className={`object-contain ${
                        theme === "light" && "filter invert"
                      }`}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
