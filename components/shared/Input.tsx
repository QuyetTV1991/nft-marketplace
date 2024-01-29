import React from "react";

interface InputProps {
  inputType: "input" | "textarea" | "number";
  title: string;
  placeholder: string;
  handleClick: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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

      {inputType === "number" ? (
        <div className="flexBetween mt-4 w-full flex-row rounded-lg border border-nft-gray-2 bg-white px-4 py-3 font-poppins text-base text-nft-gray-2 outline-none dark:border-nft-black-1 dark:bg-nft-black-1 dark:text-white">
          <input
            type="number"
            className="flex w-full bg-white outline-none dark:bg-nft-black-1"
            placeholder={placeholder}
            onChange={handleClick}
            id={title}
            name={title}
          />
          <p className="font-poppins text-xl font-semibold text-nft-black-1 dark:text-white">
            ETH
          </p>
        </div>
      ) : inputType === "textarea" ? (
        <textarea
          id={title}
          name={title}
          cols={30}
          rows={10}
          placeholder={placeholder}
          onChange={handleClick}
          className="mt-4 w-full rounded-lg border border-nft-gray-2 bg-white px-4 py-3 font-poppins text-base text-nft-gray-2 outline-none dark:border-nft-black-1 dark:bg-nft-black-1 dark:text-white"
        ></textarea>
      ) : (
        <input
          className="mt-4 w-full rounded-lg border border-nft-gray-2 bg-white px-4 py-3 font-poppins text-base text-nft-gray-2 outline-none dark:border-nft-black-1 dark:bg-nft-black-1 dark:text-white"
          placeholder={placeholder}
          onChange={handleClick}
          id={title}
          name={title}
        />
      )}
    </div>
  );
};

export default Input;
