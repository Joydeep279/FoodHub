import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/Head";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Heading />
    </React.Fragment>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppLayout />);
  