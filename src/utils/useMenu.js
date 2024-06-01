import { useEffect, useState } from "react";

const useMenu = (id, lat, lng) => {
  const [apiData, setApiData] = useState([]);

  async function getMenuData(id, lat, lng) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=" +
        lat +
        "&lng=" +
        lng +
        "&restaurantId=" +
        id
    );
    const JSON = await data.json();
    setApiData(
      JSON?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  }
  useEffect(() => {
    getMenuData(id, lat, lng);
  }, []);

  return apiData;
};
export default useMenu;
