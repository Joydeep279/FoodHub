import React from "react";
const Card = (props) => {
  const { name, areaName, avgRating, cloudinaryImageId, id } = props.props.info;

  return (
    <>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h3>{areaName}</h3>
    </>
  );
};
export default Card;
