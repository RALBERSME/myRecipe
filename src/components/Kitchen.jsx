import React, { useState } from "react";
import RandomMeal from "./RandomMeal";
import "./Kitchen.css";
import Special from "./Special";
const Kitchen = () => {
  const [showRandom, setShowRandom] = useState(false);
  const [showSpecial, setShowSpecial] = useState(false);

  const getRandomMeal = () => {
    setShowRandom(true);
    setShowSpecial(false);
  };
  const getSpecialMeal = () => {
    setShowRandom(false);
    setShowSpecial(true);
  };

  return (
    <>
      <nav>
        <ul>
          <li onClick={getRandomMeal} className="liAnimation">
            Get random recipes
          </li>
          <li onClick={getSpecialMeal} className="liAnimation">
            Search for special recipe <br></br>(close open<br></br> recipe
            first)
          </li>

          <li className="liAnimation">
            <div className="dropdown">
              <button className="dropbtn">Coffee Types</button>
              <div className="dropdown-content">
                <a id="separator1" href="#">
                  Types of coffee:
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=kqbw6bVB01I"
                  target="_blank"
                >
                  Americano
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=2PANTqg8M30"
                  target="_blank"
                >
                  TIRAMISU ESPRESSO
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=-j2IhKTMb4c"
                  target="_blank"
                >
                  Cappuccino
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=CGBp5xKA2f0"
                  target="_blank"
                >
                  Latte Macchiato vs Caffè Latte
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=BlfiKiKxpo0"
                  target="_blank"
                >
                  MOKA
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=qkxKUQPacAs"
                  target="_blank"
                >
                  Cortado
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=AV_u3GCg5kc"
                  target="_blank"
                >
                  Espresso Macchiato
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=LcSYKsdZCM8"
                  target="_blank"
                >
                  Cold Coffee
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=FS62VrptbTk"
                  target="_blank"
                >
                  Cappuccino vs Flat White
                </a>
              </div>
            </div>
          </li>
          <li className="liAnimation">
            <div className="dropdown">
              <button className="dropbtn">Coffee Recipes</button>
              <div className="dropdown-content">
                <a id="separator2" href="#">
                  Coffee lists:
                </a>
                <a
                  className="dropDown"
                  href="https://tasty.co/article/michelleno/coffee-drinks-recipes"
                  target="_blank"
                >
                  33 Best Coffee Recipes
                </a>
                <a
                  className="dropDown"
                  href="https://www.olivemagazine.com/recipes/collection/best-ever-coffee-recipes/"
                  target="_blank"
                >
                  35 coffee recipes
                </a>
                <a
                  className="dropDown"
                  href="https://www.bbcgoodfood.com/recipes/collection/coffee-recipes"
                  target="_blank"
                >
                  63 coffee recipies
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=epMDcqKoQys&t=157s"
                  target="_blank"
                >
                  Espresso Drinks Explained
                </a>
                <a id="separator2" href="#">
                  Coffee Design:
                </a>{" "}
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=4TTp06RVy3M"
                  target="_blank"
                >
                  10 Basic Designs
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=i8bqSUxuFD0"
                  target="_blank"
                >
                  10 Challenging Designs
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=TH3PdDeS6h4"
                  target="_blank"
                >
                  Swan Latte Art World Champion
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/watch?v=-_9N4iSJKP0"
                  target="_blank"
                >
                  The best Latte Art
                </a>
              </div>
            </div>
          </li>
          <li className="liAnimation">
            <a href="https://world.openfoodfacts.org/" target="_blank">
              Open food facts
            </a>
          </li>
          <li className="liAnimation">
            <div className="dropdown">
              <button className="dropbtn">Food Critics</button>
              <div className="dropdown-content">
                <a id="separator2" href="#">
                  How to cook:
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/@bonappetit/videos"
                  target="_blank"
                >
                  Bon Appetit with star cooks
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/@epicurious/videos"
                  target="_blank"
                >
                  Epicurious learn to cook
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/@ChefMajk/videos"
                  target="_blank"
                >
                  Chef Majk cook like a prof
                </a>
                <a id="separator1" href="#">
                  Test reports:
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/@alexandertheguest/videos"
                  target="_blank"
                >
                  Alexander <br></br>the guest
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/@GaryEats/videos"
                  target="_blank"
                >
                  Gary eats in UK
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/@MoreBestEverFoodReviewShow/videos"
                  target="_blank"
                >
                  The Food Review Show
                </a>
                <a
                  className="dropDown"
                  href="https://www.youtube.com/@maxxpane/videos"
                  target="_blank"
                >
                  Max <br></br>(in German)
                </a>
              </div>
            </div>
          </li>
          <li className="liAnimation">
            <div className="dropdown">
              <button className="dropbtn">Thanks & Bye</button>
              <div className="dropdown-content">
                <a id="separator2" href="#">
                  Thank you!
                </a>
                <p>Thank you for visiting my website. </p>
                <br></br>
                <p>
                  I hope you enjoy it and can find a lot of input for your next
                  party!
                </p>
                <br></br>
                <a id="bye" href="#">
                  Reinhild's myRecipe <br></br> copyright &copy; <br></br>2024
                  <br></br> all rights reserved
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="container">
        {showRandom && <RandomMeal />}
        {showSpecial && <Special />}
      </div>
    </>
  );
};

export default Kitchen;
