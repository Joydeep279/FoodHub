import React from "react";
const Card = (props) => {
  const { name, areaName, avgRating, cloudinaryImageId, costForTwo } =
    props.props.info;

  return (
    <>
      <img
        className="w-[100%] h-[60%] rounded-2xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className=" flex flex-col px-2">
        <h1 className="font-bold font-mono text-lg  text-[#424242] text-nowrap">
          {name}
        </h1>
        <span className="text-black font-normal">{costForTwo}</span>
        <span className="text-black font-normal">{areaName}</span>
        <span className="font-bold">{avgRating}⭐</span>
      </div>
    </>
  );
};
export default Card;
