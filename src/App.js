import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Head";
import Body from "./components/Body";
const AppLayout = () => {
  return (
    <React.Fragment>
      <Heading />
      <Body />
    </React.Fragment>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppLayout />);
