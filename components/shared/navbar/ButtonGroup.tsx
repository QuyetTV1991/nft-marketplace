import React from "react";
import CustomBtn from "../CustomBtn";

interface ButtonGroupProps {
  hasConnected: boolean;
}

const ButtonGroup = ({ hasConnected }: ButtonGroupProps) => {
  return (
    <>
      {hasConnected ? (
        <CustomBtn
          btnName="Create"
          classStyles="mx-2 rounded-xl"
          route="/create-nft"
        />
      ) : (
        <CustomBtn btnName="Connect" classStyles="mx-2 rounded-xl" />
      )}
    </>
  );
};

export default ButtonGroup;
