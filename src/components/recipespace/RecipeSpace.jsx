import { React, useState, useEffect } from "react";
import "./Recipespace.css";
import RecipeCard from "../recipecard/RecipeCard";
import axios from "axios";


//import RecipeCard from "../recipecard/RecipeCard";
//import RecipeInfoCard from "../recipeinfo/RecipeInfoCard";

import mockdata from "./mockdata.js";
 
const Recipespace = (props) => {

  const API_KEY = "3b86538a99f049e0b87b85328b391b86";

  const [recipeData, setRecipeData] = useState([]);
  const [searchedRecipeList, setSearchedRecipeList] = useState([]);
  const [savedRecipeList, setSavedRecipeData] = useState([]);
  const [tempRecipe, setCopyRecipe] = useState({});
  // Effect for searching
  useEffect(() => {
    getRecipeData();
  }, [props.searchTerm]);

  // Effect for toggling saved recipe list
  useEffect(() => {
    console.log("Recipespace: savedRecipeToggle =",props.savedRecipeToggle);
    if (props.savedRecipeToggle) {
      setRecipeData(savedRecipeList);
    }
    else {
      setRecipeData(searchedRecipeList);
    }
  }, [props.savedRecipeToggle]);

  // Effect for updating saved recipe list
  useEffect(() => {
    updateSavedRecipes();
  }, [tempRecipe])


  const complexSearch = {
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/complexSearch',
    params: {apiKey: API_KEY, 
             addRecipeInformation: true,
             addRecipeNutrition: true,
             query: props.searchTerm},
  };

  // Function to search using the AP
  // Sets that list as the presenting data
  // Saves that list to the searched data list
  function getRecipeData() {
    if (props.searchTerm){
      axios.request(complexSearch)
      .then(function (response) 
      {
      setRecipeData(response.data.results);
      setSearchedRecipeList(response.data.results);
      console.log(response.data.results);
      })
      .catch(function (error) 
      {
      console.error(error);
      });
    }
  }

  // This function takes the temp recipe for being saved
  // If it's already in the list, un-save it and remove it
  // otherwise push it to the list, and set the saved list
  function updateSavedRecipes() {
    console.log("inside updateSavedRecipes", tempRecipe);
    var tempList = savedRecipeList;
    const oldList = JSON.parse(window.localStorage.getItem("savedList"));
    //console.log("oldList", oldList);

    if (oldList != null) {
      tempList = oldList;
    }

    if (JSON.stringify(tempRecipe) != '{}') {
      if (tempList.indexOf(tempRecipe) === -1) {
        tempList.push(tempRecipe);
      }
    }

    tempList.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    console.log("UpdateSaveRecipe",tempList);
    setSavedRecipeData(tempList);
    localStorage.setItem("savedList", JSON.stringify(tempList));
  }



  return (
    <>
      <div className="recipespace">
        {Object.keys(recipeData).map((recipeId) => (
          <RecipeCard key={recipeId} recipe={recipeData[recipeId]} setCopyRecipe={setCopyRecipe} />
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