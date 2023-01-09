import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <HiMagnifyingGlass />
      <input type="text" placeholder="Search New Location" />
    </div>
  );
};

export default SearchBar;
