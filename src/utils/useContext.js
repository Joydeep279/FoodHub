import { createContext } from "react";

const UserContext = createContext({
  user: "User",
  email: "example123@gmail.com",
});
export const theme = createContext({
  currentTheme: "",
  setTheme: null,
});
export const RestData = createContext({
  Rest: null,
});
export const Cordinate = createContext({
  cordinate: {},
});
export const Loc = createContext({
  place: "",
  setPlace: null,
});
export default UserContext;
