import Image from "next/image";
import React from "react";

interface CreatorCardProps {
  rank: number;
  imgUrl: string;
  name: string;
  eths: number;
}

const CreatorCard = ({ rank, imgUrl, name, eths }: CreatorCardProps) => {
  return (
    <div className="m-4 flex min-w-190 flex-col rounded-3xl border border-nft-gray-1 bg-white p-4 dark:border-nft-black-3 dark:bg-nft-black-3 minlg:min-w-240">
      <div className="flexCenter size-8 rounded-full bg-nft-red-violet minlg:size-10">
        <p className="font-poppins text-base font-semibold text-nft-black-1 dark:text-white minlg:text-lg">
          {rank}
        </p>
      </div>
      <div className="my-2 flex justify-center">
        <div className="relative size-20 minlg:size-28">
          <Image
            src={imgUrl}
            alt={name}
            fill
            sizes="(min-width: 2100px) 112px, 80px"
            className="rounded-full object-cover"
          />
          <div className="absolute -right-0 bottom-2 size-4 minlg:size-7">
            <Image
              src="/assets/tick.png"
              alt="tick"
              fill
              sizes="(min-width: 2100px) 16px, 28px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flexCenter mt-3 flex-col text-center minlg:mt-7">
        <p className="font-poppins text-base font-semibold text-nft-black-1 dark:text-white">
          {name}
        </p>
        <p className="mt-1 font-poppins text-base font-semibold text-nft-black-1 dark:text-white">
          {eths.toFixed(2)} <span className="font-normal">ETH</span>
        </p>
      </div>
    </div>
  );
};

export default CreatorCard;
