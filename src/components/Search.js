import React, { useContext } from "react";
import { Loc } from "../utils/useContext";
const Search = () => {
  const { place } = useContext(Loc);
  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-4 ml-20">
        <input className="bg-[#e8e8e8] rounded-lg outline-none px-4 focus: focus:outline-gray-500"></input>
        <button className="bg-[#8e8e93] px-4 rounded-md text-white  font-sans font-medium">
          Search
        </button>
      </div>
      <div className="flex items-center gap-4">
        <img
          className="w-4 h-5"
          src="https://static-00.iconduck.com/assets.00/location-indicator-emoji-335x512-4ujynvwv.png"
          alt="location-image"
        />
        <span className="pr-28 text-[#666666] text-base font-semibold font-sans">
          {place?.toUpperCase()}
        </span>
      </div>
    </div>
  );
};
export default Search;
