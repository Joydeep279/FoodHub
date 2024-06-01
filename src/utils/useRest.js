import { useContext, useEffect } from "react";
import { Cordinate, Loc, RestData } from "./useContext";
import API from "./API";
function useRest() {
  const { setRest } = useContext(RestData);
  const { setCordinate } = useContext(Cordinate);
  const { setPlace } = useContext(Loc);
  async function getData() {
    const apiData = await fetch(API[Math.floor(Math.random() * 10)]);
    const Restrurent = await apiData.json();
    setRest(
      Restrurent.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    const lat = Restrurent.data.cards[11].card.card.lat;
    const lng = Restrurent.data.cards[11].card.card.lng;
    setCordinate({ latitude: lat, longitude: lng });
    setPlace(Restrurent.data.cards[11].card.card.citySlug);
  }
  useEffect(() => {
    getData();
  }, []);
}
export default useRest;
