import { useDispatch, useSelector } from "react-redux";
import CartLayout from "./CartLayout";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
    const dispatch=useDispatch();
  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-5">
      <button
        onClick={() => {
          dispatch(clearCart());
        }}>
        Clear Cart
      </button>
      {cardItems.map((items) => (
        <CartLayout items={items} />
      ))}
    </div>
  );
};
export default Cart;
