import React from "react";
import Search from "./Search";
import Restrurent from "./Restrurent";
const Body = () => {
  return (
    <>
      <Search />
      <div className="flex flex-wrap justify-center">
        <Restrurent />
      </div>
    </>
  );
};
export default Body;
