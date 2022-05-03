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
  
  console.log("App:searchTerm " + searchTerm);
  return (
    <ThemeProvider theme={theme}>
      <Navbar setSearchTerm={setSearchTerm} />
      <Recipespace searchTerm={searchTerm} />
      {/*Recipe List */}
      {/*<Footer />*/}
    </ThemeProvider>
  );
}

export default App;

/*

 <>
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid
          item
          xs={12}
          style={{
            paddingTop: "0px",
            paddingLeft: "0px",
            paddingRight: "0px"
          }}
        >
          <SearchAppBar />
        </Grid>
        {Array.from(Array(6)).map((_, index) => (
          <Grid
            item
            xs={4}
            md={4}
            key={index}
            style={{
              width: "100%",
              paddingTop: "25px",
              paddingLeft: "50px",
              paddingRight: "50px"
            }}
          >
            <RecipeCard />
          </Grid>
        ))}
      </Grid>
    </>
 */
