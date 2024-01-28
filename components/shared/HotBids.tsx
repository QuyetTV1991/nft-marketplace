import React from "react";
import NFTCard from "./cards/NFTCard";
import { NFTList } from "@/contants/dummy";

const HotBids = () => {
  return (
    <>
      <div className="flexBetween mx-4 sm:flex-col sm:items-start xs:mx-0 minlg:mx-8">
        <h1 className="ml-4 flex-1 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white xs:mb-4 minlg:text-4xl">
          Hot Bids
        </h1>
        <div>SearchBar</div>
      </div>
      <div className="mt-3 flex w-full flex-wrap justify-start md:justify-center">
        {NFTList.map((item, index) => (
          <NFTCard
            key={index}
            nft={{
              id: item.id,
              image: item.image,
              name: item.name,
              seller: item.seller,
              owner: item.owner,
              desc: item.description,
              price: item.price,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HotBids;
