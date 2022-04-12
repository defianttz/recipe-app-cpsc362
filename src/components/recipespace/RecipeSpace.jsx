import { React, useState, useEffect } from "react";
import "./Recipespace.css";
import RecipeCard from "../recipecard/RecipeCard";
import axios from "axios";


//import RecipeCard from "../recipecard/RecipeCard";
//import RecipeInfoCard from "../recipeinfo/RecipeInfoCard";

import mockdata from "./mockdata.js";

const Recipespace = (props) => {

  const API_KEY = "API KEY HERE";

  const [recipeData, setRecipeData] = useState([]);

 // useEffect(() => {
 //   getRecipeData();
 // }, [props.searchTerm]);

  //console.log("RecipeSpace:searchTerm " + props.searchTerm);

  const options = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/complexSearch',
    params: {apiKey: API_KEY, 
             addRecipeInformation: true,
             addRecipeNutrition: true,
             query: props.searchTerm},
  };

  axios.request(options).then(function (response) {
   //setRecipeData(response.data.results);
    console.log(response.data.results);
  }).catch(function (error) {
    console.error(error);
  });

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


  /*
  const getRecipeData = async() => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch
                                  ?apiKey=${API_KEY}
                                  &query=${props.searchTerm}`);
    const data = await response.json();
    setRecipeData(data.results);
    console.log(data);
    console.log(`https://api.spoonacular.com/recipes/complexSearch
    ?apiKey=${API_KEY}
    &addRecipeInformation=true
    &addRecipeNutrition=true
    &query=${props.searchTerm}`);                           
  };
  

  function getRecipeData() {
    fetch(`https://api.spoonacular.com/recipes/complexSearch
                                  ?apiKey=${API_KEY}
                                  &addRecipeInformation=true
                                  &addRecipeNutrition=true
                                  &query=${props.searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      setRecipeData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
  }
 */