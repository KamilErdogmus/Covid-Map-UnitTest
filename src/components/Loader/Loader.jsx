import React from "react";
import { DNA } from "react-loader-spinner";
const Loader = ({ type }) => {
  if (type === "header") {
    return (
      <div
        data-testid="header-loader"
        className="flex items-center space-x-2 animate-pulse"
      >
        <div className="w-[120px] h-[32px] lg:h-[36px] rounded-md bg-gray-400" />
        <div className="w-16 lg:w-24 h-[32px] lg:h-[64px] rounded-md bg-gray-400" />
      </div>
    );
  }

  return (
    <DNA
      className="select-none"
      visible={true}
      height="40"
      width="40"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
};

export default Loader;
