import { useParams } from "react-router-dom";
import React from "react";
import useMenu from "../utils/useMenu";
import MenuList from "./MenuList";
import Shimmer from "./Shimmer";
MenuList;
const Menu = () => {
  const { id } = useParams();
  const menu = useMenu(id);
  if (menu.length===0) {
    return <Shimmer />;
  } 
  else {
    return menu.map((element) => (
      <MenuList props={element} key={element.card.info.id} />
    ));
  }
};

export default Menu;
