const CartLayout = (props) => {
  const { imageId, name, price, category, id } = props.items;

  return (
    <>
      <img
        className="w-48 h-28 rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
      />
      <div>
        <h1 className="font-sans font text-gray-700">{name}</h1>
        <h1>{category}</h1>
      </div>
      <h2>Rs:{price / 100}</h2>
    </>
  );
};
export default CartLayout;
