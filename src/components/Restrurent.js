import React from "react";
import useRest from "../utils/useRest";
import Card from "./CardLayout";

const Restrurent = () => {
  const data = useRest();

  if (data.length === 0) {
    return <span>Loading</span>;
  } else {
    return data.map((data) => (
      <div key={data.info.id}>
        <Card props={data} />
      </div>
    ));
  }
};

export default Restrurent;
