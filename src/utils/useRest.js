import { useEffect, useState } from "react";

function useRest() {
  const [rest, setRestaur] = useState([]);
  async function getData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1157917&lng=91.7085933"
    );
    const Restrurent = await apiData.json();
    setRestaur(
      Restrurent.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }
  useEffect(() => {
    getData();
  }, []);
  return rest;
}
export default useRest;
