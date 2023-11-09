import React from "react";
import { FastButton } from "../app";
import SearchIcon from "../assets/icon-search.svg";

const SearchBar = ({ handleSearch, username, setUsername }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full">
      <img
        src={SearchIcon}
        alt="SearchIcon"
        className="absolute w-5 -translate-y-1/2 left-3 md:left-6 top-1/2"
      />
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onKeyDown={handleKeyDown}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full h-16 px-10 bg-white md:px-16 dark:text-white dark:bg-lightBlue rounded-xl placeholder:text-sm md:text-base shadow-custom"
      />
      <FastButton
        className="absolute font-bold -translate-y-1/2 rounded-md md:px-3 right-3 top-1/2 bg-bluePrimary"
        onClick={handleSearch}
      >
        Search
      </FastButton>
    </div>
  );
};

export default SearchBar;
