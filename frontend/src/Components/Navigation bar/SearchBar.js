// SearchBar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useJobContext } from "../../JobContext";

const SearchBar = () => {
  const { searchInput, setSearchInput } = useJobContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white w-80 px-4 py-2 rounded-l-xl rounded-r-2xl text-left w-100"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="absolute right-0 bg-gray-700 text-white px-5 py-2 rounded-r-xl focus:outline-none"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
