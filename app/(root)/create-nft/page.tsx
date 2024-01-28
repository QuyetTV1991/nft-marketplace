import UploadForm from "@/components/shared/forms/UploadForm";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center p-12 sm:px-4">
      <div className="w-3/5 md:w-full">
        <h1 className="ml-4 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white xs:ml-0 minlg:text-4xl">
          Create new NFT
        </h1>

        <div className="mt-16">
          <UploadForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
