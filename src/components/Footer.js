import { useContext } from "react";
import UserContext from "../utils/useContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return <h1>Developed By {user.name}</h1>;
};
export default Footer;
