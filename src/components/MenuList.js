const MenuList = (props) => {
  const {imageId, name, price } = props.props.card.info;
  return (
    <div className="flex row">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          imageId
        }
      />
      <h1>{name}</h1>
      <h2>Rs{price}</h2>
    </div>
  );
};
export default MenuList;
