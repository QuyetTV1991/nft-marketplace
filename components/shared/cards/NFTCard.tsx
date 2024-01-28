import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NFTCardProps {
  nft: {
    id: string;
    image: string;
    name: string;
    seller: string;
    owner: string;
    desc: string;
    price: number;
  };
}
const NFTCard = ({ nft }: NFTCardProps) => {
  return (
    <Link href={`/nft-details/${nft.id}`}>
      <div className="m-4 min-w-215 max-w-max flex-1 cursor-pointer rounded-2xl bg-white p-4 shadow-md dark:bg-nft-black-3 sm:m-2 sm:w-full sm:min-w-[255px] xs:max-w-none minmd:min-w-256 minlg:m-8 minlg:min-w-327">
        <div className="relative h-52 w-full overflow-hidden rounded-2xl sm:h-36 xs:h-56 minmd:h-60 minlg:h-300">
          <Image
            src={nft.image || "/assets/nft-default.png"}
            alt={nft.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins text-sm font-semibold text-nft-black-1 dark:text-white minlg:text-xl">
            {nft.name}
          </p>
          <div className="flexBetween mt-1 flex-row xs:mt-3 xs:flex-col xs:items-start minlg:mt-3">
            <p className="font-poppins text-xs font-semibold text-nft-black-1 dark:text-white minlg:text-lg">
              {nft.price.toFixed(2)} <span className="font-normal">ETH</span>
            </p>
            <p className="font-poppins text-xs font-semibold text-nft-black-1 dark:text-white minlg:text-lg">
              {nft.seller}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
