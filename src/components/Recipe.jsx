import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";
const Recipe = () => {
  let navigate = useNavigate();
  const [item, setItem] = useState();
  const { MealId } = useParams();
  if (MealId !== "") {
    fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }

  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <div className="info">
            <a
              id="close"
              href="#"
              onClick={() => {
                navigate(`/`);
              }}
            >
              click here to close open recipe
            </a>
            <img src={item.strMealThumb} alt="" />
            <br></br>
            <div className="details">
              <h1>{item.strMeal}</h1>

              <h3>
                {" "}
                {item.strCategory} / {item.strArea} origin{" "}
              </h3>
            </div>
          </div>
          <div className="detailsContainer">
            <div className="ingredients">
              <h3>Ingredients</h3>
              <br></br>
              <p className="ingredientItem">
                {item.strMeasure1} {item.strIngredient1}
              </p>
              <p className="ingredientItem">
                {item.strMeasure2}
                {item.strIngredient2}
              </p>
              <p className="ingredientItem">
                {item.strMeasure3}
                {item.strIngredient3}
              </p>

              <p className="ingredientItem">
                {item.strMeasure4} {item.strIngredient4}
              </p>
              <p className="ingredientItem">
                {item.strMeasure5} {item.strIngredient5}
              </p>
              <p className="ingredientItem">
                {item.strMeasure6} {item.strIngredient6}
              </p>
              <p className="ingredientItem">
                {item.strMeasure7} {item.strIngredient7}
              </p>
              <p className="ingredientItem">
                {item.strMeasure8}
                {item.strIngredient8}
              </p>
              <p className="ingredientItem">
                {item.strMeasure9}
                {item.strIngredient9}
              </p>
              <p className="ingredientItem">
                {item.strMeasure10}
                {item.strIngredient10}
              </p>
              <p className="ingredientItem">
                {item.strMeasure11}
                {item.strIngredient11}
              </p>
              <p className="ingredientItem">
                {item.strMeasure12}
                {item.strIngredient12}
              </p>
              <p className="ingredientItem">
                {item.strMeasure13}
                {item.strIngredient13}
              </p>
              <p className="ingredientItem">
                {item.strMeasure14}
                {item.strIngredient14}
              </p>
              <p className="ingredientItem">
                {item.strMeasure15}
                {item.strIngredient15}
              </p>
              <p className="ingredientItem">
                {item.strMeasure16}
                {item.strIngredient16}
              </p>
              <p className="ingredientItem">
                {item.strMeasure17}
                {item.strIngredient17}
              </p>
              <p className="ingredientItem">
                {item.strMeasure18}
                {item.strIngredient18}
              </p>
              <p className="ingredientItem">
                {item.strMeasure19}
                {item.strIngredient19}
              </p>
              <p className="ingredientItem">
                {item.strMeasure20}
                {item.strIngredient20}
              </p>
            </div>
            <div className="instructions">
              <h2>Instructions</h2>
              <br></br>
              <p>{item.strInstructions}</p>
              <br></br>
              <a href={item.strYoutube} target="_blank">
                click here to watch Youtube video
              </a>
              <br></br>
              <a
                href="#"
                onClick={() => {
                  navigate(`/`);
                }}
              >
                back to special meal page{" "}
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Recipe;
