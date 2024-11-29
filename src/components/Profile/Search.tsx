import React from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="flex justify-between">
      <BiLogoMediumOld className="text-3xl" />
      <FiSearch className="text-xl" />
    </div>
  );
};

export default Search;
