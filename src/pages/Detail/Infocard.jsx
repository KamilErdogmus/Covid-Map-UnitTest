import React from "react";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import millify from "millify";

const Infocard = ({ covid }) => {
  const loading = useSelector((store) => store.isLoading);
  return (
    <div className="bg-gray-400 shadow-md p-4 rounded-lg text-grey-600">
      {loading ? (
        <Loader />
      ) : (
        <>
          <p className="capitalize text-lg mb-2 font-bold">
            {covid[0].split("_").join(" ")}
          </p>
          <p className="capitalize">
            {typeof covid[1] === "number"
              ? millify(covid[1])
              : covid[1]}
          </p>
        </>
      )}
    </div>
  );
};

export default Infocard;
