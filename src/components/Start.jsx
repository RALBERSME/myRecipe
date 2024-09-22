import React, { useState } from "react";
import "./Start.css";
import Navigation from "./Navigation";

const Start = ({ statusShowStartPage }) => {
  const [welcome, setWelcome] = useState(
    "No idea what to cook? Hover over pic for solution"
  );

  const changeWelcomeText = () => {
    setWelcome("Click on the hot cauldron to enter the witch's kitchen.");
  };
  function handleClick() {
    statusShowStartPage(false);
  }
  return (
    <>
      <Navigation text={welcome} />
      <div
        className="underlying"
        onClick={handleClick}
        onMouseEnter={changeWelcomeText}
        onMouseLeave={() =>
          setWelcome("No idea what to cook? Hover over pic for solution")
        }
      >
        <div className="column">
          <div className="overlay"></div>
        </div>{" "}
        <div className="column">
          <div className="overlay"></div>
        </div>{" "}
        <div className="column">
          <div className="overlay"></div>
        </div>{" "}
        <div className="column">
          <div className="overlay"></div>
        </div>{" "}
        <div className="column">
          <div className="overlay"></div>
        </div>{" "}
        <div className="column">
          <div className="overlay"></div>
        </div>{" "}
        <div className="column">
          <div className="overlay"></div>
        </div>{" "}
        <div className="column">
          <div className="overlay"></div>
        </div>
        <div className="column">
          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
};

export default Start;
