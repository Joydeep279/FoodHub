import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuList = (props) => {
  const { imageId, name, price, description } = props.props.card.info;
  const dispatch = useDispatch();
  const handleItem = () => {
    dispatch(addItem(name));
  };
  return (
    <div className="flex w-3/5 flex-row  gap-10 pr-5 rounded-md items-center justify-between bg-[#F7F7F7]">
      <img
        className="w-48 h-28 rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      />
      <div>
        <h1 className="font-bold font-sans font text-2xl text-gray-700">
          {name}
        </h1>
        <h1>{description}</h1>
      </div>
      <h2>Rs:{price / 100}</h2>
      <button
        onClick={() => {
          dispatch(addItem(name));
        }}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-5 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]">
        Add
      </button>
    </div>
  );
};
export default MenuList;
