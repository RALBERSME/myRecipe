import React from "react";
import { Routes, Route } from "react-router-dom";
import SpecialMeal from "./SpecialMeal";
import Recipe from "./Recipe";
const Special = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SpecialMeal />} />
        <Route path="/:MealId" element={<Recipe />} />
      </Routes>
    </>
  );
};

export default Special;
