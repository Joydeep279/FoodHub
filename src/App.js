import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Restrurent from "./components/Restrurent";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
const AppLayout = () => {
  return (
    <React.Fragment>
      <Heading />
      <Outlet />
    </React.Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restruent/:id",
        element: <Menu />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
