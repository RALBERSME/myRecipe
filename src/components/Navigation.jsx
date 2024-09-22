import React from "react";
import "./Navigation.css";
const Navigation = ({ text }) => {
  return (
    <>
      <img alt="logo" width="50px" height="50px" src="/assets/logo.png" />
      <br></br>
      {text}{" "}
    </>
  );
};

export default Navigation;
