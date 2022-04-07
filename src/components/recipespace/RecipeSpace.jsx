import { React, useState, useEffect } from "react";
import "./Recipespace.css";
import RecipeCard from "../recipecard/RecipeCard";

//import RecipeCard from "../recipecard/RecipeCard";
//import RecipeInfoCard from "../recipeinfo/RecipeInfoCard";

import mockdata from "./mockdata.js";

const Recipespace = (props) => {
  //const apiURL = `https://api.spoonacular.com/recipes/${id}/information`;
  //const apiKey = "34ac49879bd04719b7a984caaa4006b4";

  const [recipeData, setRecipeData] = useState(mockdata);
  console.log("RecipeSpace:searchTerm " + props.searchTerm);

  return (
    <>
      <div className="recipespace">
        {Object.keys(recipeData).map((recipeId) => (
          <RecipeCard key={recipeId} recipe={recipeData[recipeId]} />
        ))}
      </div>
    </>
  );
};

export default Recipespace;
