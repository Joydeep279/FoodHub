import React from "react";
import ReactDom from "react-dom";
import Heading from "./components/Head";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Heading />
    </React.Fragment>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
console.log(root);
root.render(<AppLayout/>);
