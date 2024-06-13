import { useSelector } from "react-redux";
import CartLayout from "./CartLayout";
const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  return cardItems.map((items) => <CartLayout items={items} />);
};
export default Cart;
