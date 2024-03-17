// Navbar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import { useJobContext } from "../../JobContext";

const Navbar = () => {
  const { setSearchInput } = useJobContext();

  return (
    <nav className="bg-gray-600 p-4 flex items-center justify-between">
      <span className="text-gray-500 text-lg font-semibold">Job-Portal</span>
      <div className="relative flex items-center">
        <SearchBar />
      </div>
      <div className="flex items-center mr-10">
        <button className="text-white mr-7 text-3xl">
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
        </button>
        <button className="text-white text-3xl">
          <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
          {/* Notification count placeholder */}
          <span className="absolute top-3 -right-[-50px] bg-red-500 text-white text-xs px-1 rounded-full z-10">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
