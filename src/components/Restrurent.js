import React from "react";
import useRest from "../utils/useRest";
import Card from "./CardLayout";
import Shimmer from "./Shimmer";

const Restrurent = () => {
  const data = useRest();

  if (data.length === 0) {
    return <Shimmer />;
  } else {
    return data.map((data) => (
      <div
        key={data.info.id}
        className="flex w-60 h-72 flex-col overflow-hidden  font-sans font-semibold  text-[#444444] antialiased m-5 hover:shadow-md transition-all duration-300 rounded-xl cursor-pointer">
        <Card props={data} />
      </div>
    ));
  }
};

export default Restrurent;
