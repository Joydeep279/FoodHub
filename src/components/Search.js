import React from "react";
const Search = () => {
  return (
    <div className="flex gap-4 ml-20">
      <input className="bg-[#e8e8e8] rounded-lg outline-none px-4 focus: focus:outline-gray-500"></input>
      <button className="bg-[#8e8e93] px-4 rounded-md text-white  font-sans font-medium">
        Search
      </button>
    </div>
  );
};
export default Search;
