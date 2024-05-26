import { useEffect, useState } from "react";
import { getCordinate } from "./useRest";

const { latitude, longitude } = getCordinate();

const useMenu = (Resid) => {
  const { Resid } = props;
  const [menuList, setMenuList] = useState([]);

  async function getMenuList() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=" +
        { latitude } +
        "&lng=" +
        { longitude } +
        "&restaurantId=" +
        { Resid }
    );
    const JSON = await apiData.json();
    setMenuList(JSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
  }
  useEffect(() => {
    getMenuList(Resid);
  }, []);
  return menuList;
};
