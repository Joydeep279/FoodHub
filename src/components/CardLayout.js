import React from "react";
const Card = (props) => {
  const { name, areaName, avgRating, cloudinaryImageId } = props.props.info;

  return (
    <>
      <img
        className="w-52 h-36 rounded-md"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className=" flex flex-col px-2">
        <h1 className="font-bold font-mono text-lg  text-[#424242]">{name}</h1>
        <span className="text-[#343a40]">{areaName}</span>
        <span className="font-bold">{avgRating}⭐</span>
      </div>
    </>
  );
};
export default Card;
