import React, { useEffect, useState } from "react";
import "./RandomMeal.css";
const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState({});

  const getNewRandomMeal = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRandomMeal({
          meal: data.meals[0].strMeal,
          area: data.meals[0].strArea,
          instructions: data.meals[0].strInstructions,
          url: data.meals[0].strMealThumb,
          category: data.meals[0].strCategory,
          youtube: data.meals[0].strYoutube,
          source: data.meals[0].strSource,
          ingredients: [
            {
              measure: data.meals[0].strMeasure1,
              ingredient: data.meals[0].strIngredient1,
            },
            {
              measure: data.meals[0].strMeasure2,
              ingredient: data.meals[0].strIngredient2,
            },
            {
              measure: data.meals[0].strMeasure3,
              ingredient: data.meals[0].strIngredient3,
            },
            {
              measure: data.meals[0].strMeasure4,
              ingredient: data.meals[0].strIngredient4,
            },
            {
              measure: data.meals[0].strMeasure5,
              ingredient: data.meals[0].strIngredient5,
            },
            {
              measure: data.meals[0].strMeasure6,
              ingredient: data.meals[0].strIngredient6,
            },
            {
              measure: data.meals[0].strMeasure7,
              ingredient: data.meals[0].strIngredient7,
            },
            {
              measure: data.meals[0].strMeasure8,
              ingredient: data.meals[0].strIngredient8,
            },
            {
              measure: data.meals[0].strMeasure9,
              ingredient: data.meals[0].strIngredient9,
            },
            {
              measure: data.meals[0].strMeasure10,
              ingredient: data.meals[0].strIngredient10,
            },
            {
              measure: data.meals[0].strMeasure11,
              ingredient: data.meals[0].strIngredient11,
            },
            {
              measure: data.meals[0].strMeasure12,
              ingredient: data.meals[0].strIngredient12,
            },
            {
              measure: data.meals[0].strMeasure12,
              ingredient: data.meals[0].strIngredient12,
            },
            {
              measure: data.meals[0].strMeasure14,
              ingredient: data.meals[0].strIngredient14,
            },
            {
              measure: data.meals[0].strMeasure15,
              ingredient: data.meals[0].strIngredient15,
            },
            {
              measure: data.meals[0].strMeasure16,
              ingredient: data.meals[0].strIngredient16,
            },
            {
              measure: data.meals[0].strMeasure17,
              ingredient: data.meals[0].strIngredient17,
            },
            {
              measure: data.meals[0].strMeasure18,
              ingredient: data.meals[0].strIngredient18,
            },
            {
              measure: data.meals[0].strMeasure19,
              ingredient: data.meals[0].strIngredient19,
            },
            {
              measure: data.meals[0].strMeasure20,
              ingredient: data.meals[0].strIngredient20,
            },
          ],
        });
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getNewRandomMeal();
  }, []);
  return (
    <div className="card">
      <h1>{randomMeal.meal}</h1>
      <h3>
        {" "}
        category {randomMeal.category} / {randomMeal.area} origin{" "}
      </h3>{" "}
      <br></br>
      <p>ingredients:</p>
      {randomMeal.ingredients &&
        randomMeal.ingredients.map((item, index) => {
          return (
            <>
              <span id="mapSpan" key={index}>
                {item.measure} {item.ingredient} <span id="space"></span>
              </span>
            </>
          );
        })}{" "}
      <br></br>
      <p id="instructions">{randomMeal.instructions} </p>
      <img id="randomImg" src={randomMeal.url} alt={randomMeal.meal} />
      <div className="links">
        {randomMeal.youtube && (
          <a href={randomMeal.youtube} target="_blank">
            click to watch Youtube video
          </a>
        )}
        <a href={randomMeal.source} target="_blank">
          {" "}
          click for source
        </a>{" "}
      </div>
      <button type="button" className="colorize" onClick={getNewRandomMeal}>
        Get new random meal
      </button>
    </div>
  );
};

export default RandomMeal;
