import { React, useState, useEffect } from "react";
import "./Recipespace.css";
import RecipeCard from "../recipecard/RecipeCard";
import axios from "axios";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddRecipeForm from "../addrecipe/AddRecipeForm";

 
const Recipespace = (props) => {

  const API_KEY = "3b86538a99f049e0b87b85328b391b86";

  const [recipeData, setRecipeData] = useState([]);
  const [searchedRecipeList, setSearchedRecipeList] = useState([]);
  const [savedRecipeList, setSavedRecipeData] = useState([]);
  const [tempRecipe, setCopyRecipe] = useState({});
  const [open, setOpen] = useState(false);

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


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
      setSearchedRecipeList(response.data.results);
      if(props.savedRecipeToggle != false){
        props.setSavedRecipeToggle(false);
      }
      else{
        setRecipeData(response.data.results);
      }
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
    if (JSON.stringify(tempRecipe) != '{}'){
        var tempList = savedRecipeList;
        const oldList = JSON.parse(window.localStorage.getItem("savedList"));
  
        if (oldList != null) {
          tempList = oldList;
        }
  
        console.log(tempList.findIndex(f => f.title === tempRecipe.title));
  
        //if (JSON.stringify(tempRecipe) != '{}') {
          if (tempList.findIndex(f => f.title === tempRecipe.title) === -1) {
            tempList.push(tempRecipe);
          }
          else {
            tempList.splice(tempList.findIndex(f => f.title === tempRecipe.title), 1);
            setRecipeData(tempList);
          }
        //}
  
  
  
        tempList.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
      
        setSavedRecipeData(tempList);
        localStorage.setItem("savedList", JSON.stringify(tempList));
        setCopyRecipe({});
      }
    }

  return (
    <>
      <div className="recipespace">
        {recipeData?.length ? ( 
          Object.keys(recipeData).map((recipeId) => (
          <RecipeCard key={recipeId} recipe={recipeData[recipeId]} setCopyRecipe={setCopyRecipe} savedRecipeToggle={props.savedRecipeToggle}/>
        ))):
        (
        <div className="placeholder-container">
          <img className="placeholder" src="/img/TheFifthSpoon-white.jpg" alt="white spoon"/>
        </div>
        )

        }
      </div>      
      {/*Pressing Add will display an Add Recipe Form*/ }
      <Box className="add_recipe_box">
        <Fab 
             color="primary"      
             aria-label="add" 
             className="add_recipe_icon"
             onClick={handleOpen} 
        >
          <AddIcon />
        </Fab>
      </Box>        
      <AddRecipeForm open={open} handleClose={handleClose} setCopyRecipe={setCopyRecipe}/>      
    </>
  );
};

export default Recipespace;


/*

<div className="recipespace">
        {recipeData?.length ? ( 
          Object.keys(recipeData).map((recipeId) => (
          <RecipeCard key={recipeId} recipe={recipeData[recipeId]} setCopyRecipe={setCopyRecipe} savedRecipeToggle={props.savedRecipeToggle}/>
        ))):
        (
          <img className="placeholder" src="/img/TheFifthSpoon-white.jpg" alt="white spoon"/>
        )

        }
      </div>
      
      
      <Box className="add_recipe_box">
        <Fab 
             color="primary"      
             aria-label="add" 
             className="add_recipe_icon"
             onClick={handleOpen} 
        >
          <AddIcon />
        </Fab>
      </Box>        
      <AddRecipeForm open={open} handleClose={handleClose} setCopyRecipe={setCopyRecipe}/>      
    </>
  );


*/