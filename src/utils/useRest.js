import { useEffect, useState } from "react";
const cordinate = {
  longitude: null,
  latitude: null,
};
function useRest() {
  const [Restrurent, setRestaurent] = useState([]);

  async function getData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627"
    );
    const Restrurent = await apiData.json();
    setRestaurent(
      Restrurent.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  useEffect(() => {
    getData();
  }, []);

  return Restrurent;
}
export default useRest;
export function getCordinate() {
  return cordinate;
}
