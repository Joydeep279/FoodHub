import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Head";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Errro";
import Instamart from "./components/Instamart";

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
    errorElement: <Error />,
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
      {
        path: "/instamart",
        element: <Instamart />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
