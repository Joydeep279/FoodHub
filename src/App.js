import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Instamart from "./components/Instamart";
import UserContext, { RestData, Cordinate, Loc } from "./utils/useContext";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/Store";
import Cart from "./components/Cart";
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Joydeep",
    email: "joydeepnath279@gmail.com",
  });
  const [Rest, setRest] = useState([]);
  const [Location, setCordinate] = useState({
    longitude: null,
    latitude: null,
  });
  const [place, setPlace] = useState("India");
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user.name,
          email: user.email,
          setUser: setUser,
        }}>
        <Header />
        <RestData.Provider
          value={{
            Rest: Rest,
            setRest: setRest,
            setCordinate: setCordinate,
          }}>
          <Cordinate.Provider
            value={{ cordinate: Location, setCordinate: setCordinate }}>
            <Loc.Provider value={{ place: place, setPlace }}>
              <Outlet />
            </Loc.Provider>
          </Cordinate.Provider>
        </RestData.Provider>
        <Footer></Footer>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
