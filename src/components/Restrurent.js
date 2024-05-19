import React from "react";
import useRest from "../utils/useRest";
import Card from "./CardLayout";

const Restrurent = () => {
  const data = useRest();

  if (data.length === 0) {
    return <span>Loading</span>;
  } else {
    return data.map((data) => (
      <div
        key={data.info.id}
        className="flex w-52 h-64 flex-col overflow-hidden  font-sans font-semibold  text-[#444444] antialiased m-5 hover:shadow-md transition-all duration-200">
        <Card props={data} />
      </div>
    ));
  }
};

export default Restrurent;
