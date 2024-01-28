/* eslint-disable no-unused-vars */
"use client";

import Image from "next/image";
import React, { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadForm = () => {
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(() => {
    // upload image to blockchain (ipfs)
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".gif", ".webm", ".jpg", ".svg"] },
    maxFiles: 5000000,
  });

  const filestyle = useMemo(() => {
    const applyStyle = `dark:bg-nft-black-1 bg-white border dark:border-white border-nft-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed 
    ${isDragActive && "boder-file-active"} 
    ${isDragAccept && "border-file-accept"} 
    ${isDragReject && "border-file-reject"}`;

    return applyStyle;
  }, [isDragActive, isDragAccept, isDragReject]);

  return (
    <>
      <label
        className="font-poppins text-xl font-semibold text-nft-black-1 dark:text-white"
        htmlFor="fileUpload"
      >
        Upload File
      </label>
      <div className="mt-4">
        <div {...getRootProps()} className={`${filestyle} cursor-pointer`}>
          <input {...getInputProps()} id="fileUpload" name="fileUpload" />

          <div className="flexCenter flex-col text-center">
            <p className="font-poppins text-base font-semibold text-nft-black-1 dark:text-white">
              JPG, PNG, GIF, SVG, WEBM Max 100mb.
            </p>
            <div className="my-12 flex w-full justify-center">
              <Image
                src="/assets/upload.png"
                alt="upload"
                width={100}
                height={100}
                className="object-contain invert dark:invert-0"
              />
            </div>
            <p className="font-poppins text-sm font-semibold text-nft-black-1 dark:text-white">
              Drag and Drop file
            </p>
            <p className="mt-2 font-poppins text-sm font-semibold italic text-nft-black-1 dark:text-white">
              or Browse media on your device
            </p>
          </div>
        </div>
        {fileUrl && (
          <aside>
            <div>
              <Image
                src={fileUrl}
                alt="asset_file"
                width={100}
                height={100}
                className="object-contain invert dark:invert-0"
              />
            </div>
          </aside>
        )}
      </div>
    </>
  );
};

export default UploadForm;
