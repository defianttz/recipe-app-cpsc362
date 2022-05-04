import { React, useState, useEffect } from "react";
import "./Recipespace.css";
import RecipeCard from "../recipecard/RecipeCard";
import axios from "axios";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Dialog from "@mui/material/Dialog";
import AddRecipeForm from "../addrecipe/AddRecipeForm";
//import RecipeCard from "../recipecard/RecipeCard";
//import RecipeInfoCard from "../recipeinfo/RecipeInfoCard";

//import mockdata from "./mockdata.js";




const Recipespace = (props) => {

  const API_KEY = "1d5576d6a19744bfb3c6fdf5592992ec";

  const [recipeData, setRecipeData] = useState([]);
  const [open, setOpen] = useState(false);  
  
  useEffect(() => {
    getRecipeData();
  }, [props.searchTerm]);

  //console.log("RecipeSpace:searchTerm " + props.searchTerm);

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

  function getRecipeData() {
    if (props.searchTerm){
      axios.request(complexSearch)
      .then(function (response) 
      {
      setRecipeData(response.data.results);
      console.log(response.data.results);
      })
      .catch(function (error) 
      {
      console.error(error);
      });
    }
  }

  console.log("RecipeSpace:searchTerm " + props.searchTerm);

  return (
    <>
      <div className="recipespace">
        {Object.keys(recipeData).map((recipeId) => (
          <RecipeCard key={recipeId} recipe={recipeData[recipeId]} />
        ))}
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
      <AddRecipeForm open={open} handleClose={handleClose}/>      
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