import React, { useState, useEffect } from "react";
import Footer from "./footer/Footer";
//import SearchAppBar from "./Header";
//import Grid from "@mui/material/Grid";
//import RecipeCard from "./recipecard/RecipeCard";
//import RecipeInfoCard from "./RecipeInfoCard";
import Navbar from "./navbar/Navbar";
import Recipespace from "./recipespace/RecipeSpace";
import {createTheme,ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#5651e5',
      darker: '#3531be',
    },
    neutral: {
      main: '#808080',
      contrastText: '#fff',
    },
  },
});


function App() {
  // Not sure if this should be here.
  const [searchTerm, setSearchTerm] = useState(""); 
  const [savedRecipeToggle, setSavedRecipeToggle] = useState(false);
  
  console.log("App:searchTerm " + searchTerm);
  return (
    <ThemeProvider theme={theme}>
      <Navbar setSearchTerm={setSearchTerm} setSavedRecipeToggle={setSavedRecipeToggle}
              savedRecipeToggle={savedRecipeToggle}/>
      <Recipespace searchTerm={searchTerm} savedRecipeToggle={savedRecipeToggle}/>
      
      {/*<Footer />*/}
    </ThemeProvider>
  );
}

export default App;