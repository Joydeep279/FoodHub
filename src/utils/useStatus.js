import { useEffect, useState } from "react";

const useStatus = () => {
  const [netState, setNetState] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setNetState(true);
    });
    window.addEventListener("offine", () => {
      setNetState(false);
    });
  }, []);
  return netState;
};
export default useStatus;
