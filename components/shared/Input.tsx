import React from "react";

interface InputProps {
  inputType: string;
  title: string;
  placeholder: string;
  handleClick: () => void;
}

const Input = ({ inputType, title, placeholder, handleClick }: InputProps) => {
  return (
    <div className="mt-10 w-full">
      <label
        className="font-poppins text-xl font-semibold text-nft-black-1 dark:text-white"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        className="mt-4 w-full rounded-lg border border-nft-gray-2 bg-white px-4 py-3 font-poppins text-base text-nft-gray-2 outline-none dark:border-nft-black-1 dark:bg-nft-black-1 dark:text-white"
        placeholder={placeholder}
        onChange={handleClick}
        id={title}
        name={title}
      />
    </div>
  );
};

export default Input;