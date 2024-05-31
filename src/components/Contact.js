import React from "react";
import UserContext from "../utils/useContext";
import { useContext } from "react";

const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <span>This is a contact page</span>
      <span>{user.email}</span>
    </>
  );
};
export default Contact;
