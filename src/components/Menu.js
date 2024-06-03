import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import useMenu from "../utils/useMenu";
import MenuList from "./MenuList";
import MenuShimmer from "./MenuShimmer";
import { Cordinate } from "../utils/useContext";
const Menu = () => {
  const { cordinate } = useContext(Cordinate);
  const lat = cordinate.latitude;
  const lng = cordinate.longitude;
  const { id } = useParams();
  const menu = useMenu(id, lat, lng);
  if (menu?.length === 0) {
    return (
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="font-sans font-extrabold text-gray-800 text-2xl">
          MENU
        </h1>
        <MenuShimmer />;
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="font-sans font-extrabold text-gray-800 text-2xl">
          MENU
        </h1>

        {menu?.map((res) => {
          return <MenuList props={res} key={res.card.info.id} />;
        })}
      </div>
    );
  }
};

export default Menu;
