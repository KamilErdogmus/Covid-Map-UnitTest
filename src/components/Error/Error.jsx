import React from "react";
import { IoWarning } from "react-icons/io5";

const Error = ({ info, retry }) => {
  return (
    <div className="w-full flex flex-col gap-6 md:min-w-[500px] col-span-3">
      <div className="bg-red-500 gap-4 p-5 rounded-md flex items-center">
        <IoWarning className="text-4xl" />
        <div>
          <h2>Something went wrong!</h2>
          <p>{info}</p>
        </div>
      </div>
      <button onClick={retry} className="transition" id="retry">
        Retry
      </button>
    </div>
  );
};

export default Error;
