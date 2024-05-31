import { createContext } from "react";

const UserContext = createContext({
  user: "User",
  email: "example123@gmail.com",
});
export default UserContext;
