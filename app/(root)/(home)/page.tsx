import Banner from "@/components/shared/Banner";
import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-full minmd:w-4/5">
        <Banner
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          bannerDesc="Discover, collect and sell extraordinay NFTs"
        />
      </div>
    </div>
  );
};

export default Home;
