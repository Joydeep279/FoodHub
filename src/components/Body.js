import React from "react";
import Search from "./Search";
import Restrurent from "./Restrurent";
import useRest from "../utils/useRest";
const Body = () => {
  useRest();
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
