import React from "react";
import "./RecipeIndex.css";
const RecipeIndex = ({ letterIndex }) => {
  const letter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let num = 0;
  return (
    <>
      {letter.map((item) => {
        return (
          <div
            className="letterBox"
            key={num++}
            onClick={() => letterIndex(item)}
          >
            <h3 id="singleLetter">{item}</h3>
          </div>
        );
      })}
    </>
  );
};

export default RecipeIndex;
