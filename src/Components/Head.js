import React from "react";

const Head = () => {
  return (
    <div className="flex">
      <img
        src="https://static.vecteezy.com/system/resources/previews/017/133/166/large_2x/eps10-grey-chicken-burger-hamburger-abstract-solid-art-icon-or-logo-isolated-on-black-background-fast-food-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-and-mobile-app-vector.jpg"
        className="w-40 h-40"
      />
      <ul className="font-sans flex gap-2">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      <div className="flex flex-row"></div>
    </div>
  );
};
export default Head;
