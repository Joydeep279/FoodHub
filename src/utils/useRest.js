import { useEffect, useState } from "react";

function useRest() {
  const [Restrurent, setRestaurent] = useState([]);

  async function getData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1157917&lng=91.7085933"
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
