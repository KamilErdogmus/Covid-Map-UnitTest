import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target.elements[0].value;
    console.log(`Navigating to: detail?q=${text}`);
    navigate(`detail?q=${text}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      data-testid="form"
      className="flex items-center border rounded"
    >
      <input
        className="indent-[1px] bg-transparent p-1 px-2 md:px-5 outline-none"
        type="text"
        placeholder="Search a country..."
      />
      <button className="bg-green-600 p-[6px] text-xl w-full h-full rounded transition hover:bg-green-700">
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
