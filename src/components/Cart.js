import { useDispatch, useSelector } from "react-redux";
import CartLayout from "./CartLayout";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cardItems.length);
  return (
    <div className="flex flex-wrap justify-center">
      {cardItems.length !== 0 ? (
        <button
          className="w-24 h-10 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-5 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
          onClick={() => {
            dispatch(clearCart());
          }}>
          Clear
        </button>
      ) : (
        <span className="text-[#666666] font-sans font-semibold text-3xl">
          Cart is Empty
        </span>
      )}
      <div className="flex flex-row items-center justify-center flex-wrap gap-5">
        {cardItems.map((items) => (
          <CartLayout items={items} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
