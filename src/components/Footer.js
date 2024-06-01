import { useContext } from "react";
import UserContext from "../utils/useContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return <span>Developed By {user.name}</span>;
};
export default Footer;
