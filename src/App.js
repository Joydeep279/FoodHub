import React from "react";
import ReactDom from "react-dom/client";
import Head from "./Components/Head";

const AppLayout = () => {
  return <Head />;
};
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
