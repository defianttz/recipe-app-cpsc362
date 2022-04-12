import { React, useState, useEffect } from "react";
import "./Recipespace.css";
import RecipeCard from "../recipecard/RecipeCard";

//import RecipeCard from "../recipecard/RecipeCard";
//import RecipeInfoCard from "../recipeinfo/RecipeInfoCard";

import mockdata from "./mockdata.js";
import axios from "axios";

const Recipespace = (props) => {
  const apiURL = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
  const apiKey = "4l2VUZDPcFmshNG9ypRwW0gs8XFqp1rk4dajsnVnpEyMHEyIWU";

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
    params: {addRecipeInformation: 'true', 
            query: props.searchTerm,
            addRecipeNutrition: 'true'},
    headers: {
      'X-RapidAPI-Host': apiURL,
      'X-RapidAPI-Key': apiKey
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data.results);
  }).catch(function (error) {
    console.error(error);
  });

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
