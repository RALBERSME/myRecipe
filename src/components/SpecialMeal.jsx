import React, { useEffect, useState } from "react";
import RecipeIndex from "./RecipeIndex";
import SpecialMealItem from "./SpecialMealItem";
import "./SpecialMeal.css";
const SpecialMeal = () => {
  const [url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [item, setItem] = useState();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals);
        setShow(true);
      });
  }, [url]);

  const setIndex = (alpha) => {
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
  };

  const searchRecipe = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    }
  };
  return (
    <>
      <div className="specialContainer">
        <div className="cta">
          <h1>Find your recipe</h1>
          <h6>
            Either press on one of the letters below or enter a recipe name (or
            terms like soup, cake) into the input field and press ENTER.
            <br></br>It might need a few seconds until images are loaded.
          </h6>
        </div>
        <div className="inputField">
          <input
            type="search"
            className="input"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchRecipe}
            placeholder="Enter here recipe name"
          />
        </div>
        <div className="outputContainer">
          <RecipeIndex letterIndex={(letter) => setIndex(letter)} />
        </div>
        <h6>Click on single dish to open the card</h6>
        <div className="output">
          {show ? <SpecialMealItem data={item} /> : "Sorry not found"}
        </div>
      </div>
    </>
  );
};

export default SpecialMeal;
