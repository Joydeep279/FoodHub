import React, { useContext } from "react";
import Card from "./CardLayout";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RestData } from "../utils/useContext";
import useRest from "../utils/useRest";
let count = 0;
const Restrurent = () => {
  const { Rest } = useContext(RestData);
  if (count === 0) {
    useRest();
    count++;
  }

  if (Rest?.length === 0) {
    return <Shimmer />;
  } else {
    return Rest?.map((data) => (
      <Link
        to={"/restruent/" + data?.info?.id}
        key={data?.info?.id}
        className="flex w-60 h-72 flex-col overflow-hidden  font-sans font-semibold  text-[#444444] antialiased m-5 hover:shadow-md transition-all duration-300 rounded-xl cursor-pointer">
        <Card props={data} />
      </Link>
    ));
  }
};

export default Restrurent;
// add cart=> dispature action => reducer function => update the slice of the store.
