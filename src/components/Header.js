import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useStatus";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const navbarTransition =
  "hover:bg-white rounded transition duration-200 cursor-pointer";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const { user } = useContext(UserContext);
  const isOnline = useOnline();
  return (
    <div
      className="flex justify-between items-center px-10 flex-wrap"
      key={12121}>
      <img
        data-testid="logo"
        className="w-28 h-28 mix-blend-multiply"
        src="https://static.vecteezy.com/system/resources/previews/017/133/166/original/eps10-grey-chicken-burger-hamburger-abstract-solid-art-icon-or-logo-isolated-on-black-background-fast-food-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg"
        alt="logo"
      />
      <div className="p-7 h-10 flex flex-row gap-10 text-[#666666] font-sans font-semibold text-3xl bg-[#F7F7F7] items-center  rounded-md">
        <Link to={"/"} className={navbarTransition} key={"home"}>
          Home
        </Link>
        <Link to={"/about"} className={navbarTransition} key={"about"}>
          About
        </Link>
        <Link to={"/contact"} className={navbarTransition} key={"contact"}>
          Contact
        </Link>
        <Link to={"/instamart"} className={navbarTransition} key={"insta"}>
          Insta
        </Link>
      </div>

      <div className="flex justify-center items-center gap-5 mix-blend-multiply">
        {isOnline ? (
          <img
            data-testid="status"
            src="https://static.wixstatic.com/media/4ea17e_a962cd2cf30b4c01a8d76b9629b42148~mv2.gif"
            className="w-10 h-10"
          />
        ) : (
          <h1 className="font-bold text-2xl text-[#555555]">🔴</h1>
        )}
        <Link to={"./cart"} className="p-0 m-0 flex flex-col items-center">
          <span
            data-testid="cartLength"
            className="font-semibold relative top-[2.37rem]">
            {cartItem.length}
          </span>
          <img
            className="w-14 h-16"
            src="https://svgmix.com/uploads/phosphor-duotone/b92392-shopping-cart-duotone.svg"
            alt="Cart"
          />
        </Link>
        <img
          className="w-10 h-10"
          src="https://img.icons8.com/ios-filled/100/737373/user-male-circle.png"
          alt="user-male-circle"
        />
        <button className="bg-[#8E8E93] px-5 py-0.5 rounded text-white">
          {user}
        </button>
      </div>
    </div>
  );
};
export default Header;
