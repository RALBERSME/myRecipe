import React from "react";
import { useNavigate } from "react-router-dom";
import "./SpecialMealItem.css";
const SpecialMealItem = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      {!data
        ? "Sorry no data found"
        : data.map((item) => {
            return (
              <div
                className="mealCard"
                key={item.idMeal}
                onClick={() => {
                  navigate(`/${item.idMeal}`);
                }}
              >
                <img id="specialImg" src={item.strMealThumb} alt="" />
                <p id="specialText">{item.strMeal}</p>
              </div>
            );
          })}
    </>
  );
};

export default SpecialMealItem;
