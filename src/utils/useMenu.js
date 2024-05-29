import { useEffect, useState } from "react";

const useMenu = (id) => {
  const [apiData, setApiData] = useState([]);

  async function getMenuData(id) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +id
    );
    const JSON = await data.json();
    setApiData(JSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
  }
  useEffect(() => {
    getMenuData(id);
  }, []);
  return apiData;
};
export default useMenu;
