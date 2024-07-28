import React from "react";
import { Link } from "react-router-dom";
import { FaVirusCovid } from "react-icons/fa6";
import { TbVaccine } from "react-icons/tb";
import Form from "./Form";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-zinc-900 text-white p-5 md:px-20">
      <Link className="flex items-center gap-3" to="/">
        <FaVirusCovid
          className="text-green-600 text-xl"
          data-testid="virus-icon"
        />
        <h1>Covid Tracking</h1>
      </Link>

      <Form />

      <div className="flex items-center gap-4 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Today Vaccinated:</span>
          <span className="text-gray-400">(57,606)</span>
        </p>
        <TbVaccine
          className="text-xl text-green-500"
          data-testid="vaccine-icon"
        />
      </div>
    </header>
  );
};

export default Header;
