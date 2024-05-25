import React from "react";
const navbarTransition =
  "hover:bg-white rounded transition duration-200 cursor-pointer";
const Heading = () => {
  return (
    <div
      key="Mykey123"
      className="flex justify-between items-center px-11 py-6">
      <img
        className="w-28 h-28"
        src="https://static.vecteezy.com/system/resources/previews/017/133/166/original/eps10-grey-chicken-burger-hamburger-abstract-solid-art-icon-or-logo-isolated-on-black-background-fast-food-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg"
        alt="logo"
      />
      <ul className="flex flex-row gap-10 text-[#666666] font-sans font-semibold text-4xl bg-[#F7F7F7] items-center px-2.5 py-1 rounded-md backdrop-blur-sm sticky">
        <li className={navbarTransition}>Home</li>
        <li className={navbarTransition}>Contact</li>
        <li className={navbarTransition}>About</li>
        <li className={navbarTransition}>Cart</li>
      </ul>
      <div className="flex justify-center items-center gap-5">
        <img
          className="w-10 h-10"
          src="https://img.icons8.com/ios-filled/100/737373/user-male-circle.png"
          alt="user-male-circle"
        />
        <button className="bg-[#8E8E93] px-5 py-0.5 rounded text-white">
          LogIn
        </button>
      </div>
    </div>
  );
};
export default Heading;
