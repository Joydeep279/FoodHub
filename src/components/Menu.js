import { useParams } from "react-router-dom";
import React from "react";
import useMenu from "../utils/useMenu";
import MenuList from "./MenuList";
import Shimmer from "./Shimmer";
MenuList;
const Menu = () => {
  const { id } = useParams();
  const menu = useMenu(id);
  if (menu.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="font-sans font-extrabold text-gray-800 text-2xl">MENU</h1>

        {menu.map((res) => {
          return <MenuList props={res} key={res.card.info.id} />;
        })}
      </div>
    );
  }
};

export default Menu;
