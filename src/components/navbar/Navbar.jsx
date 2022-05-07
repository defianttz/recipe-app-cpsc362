import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import DiningSharpIcon from "@mui/icons-material/DiningSharp";
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Link, useLocation } from "react-router-dom"

import "./Navbar.css";
import { Button } from "@mui/material";


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  padding: "0px 46px 0px 0px",
  marginLeft: "0",
  marginRight: "100px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#5651e5"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: "Bold 1px #5651e5",
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

const Navbar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [togglecolor, setToggleColor] = useState("primary");
  const [alignment, setAlignment] = useState('home');
  

  const handleChange = (event, newAlignment) => {
    if(newAlignment !== null)
    setAlignment(newAlignment);
  }; 
  
  
  const initiateSearch = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value); // Remove?
      //setQuery(e.target.value);
      props.setSearchTerm(searchTerm);
      console.log("Navbar:onKeyUp::SearchTerm = " + e.target.value);
      setSearchTerm("");
    }
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    //console.log("Navbar:OnChange:SearchTerm = " + e.target.value);
  };

  //useEffect() => {Takes function}, [array]
  useEffect(() => {
    //props.getSearchKey(query);
    //console.log("The use effect ran " + query);
  }, [query]);

  const handleRecipeToggle = () =>{
    console.log("Navbar:RecipeToggle pressed", props.savedRecipeToggle);
    props.setSavedRecipeToggle(!props.savedRecipeToggle);

  }

  const togglehome = () =>{
    console.log("Navbar:RecipeToggle pressed", props.savedRecipeToggle);
    props.setSavedRecipeToggle(false);
    setToggleColor("primary")

  }
  const togglerecipe = () =>{
    console.log("Navbar:RecipeToggle pressed", props.savedRecipeToggle);
    props.setSavedRecipeToggle(true);

  }

  
  const links = [
    {
        name: "Home",
        path: "/",
        toggle: false,
        //icon: faHome
    },
    {
        name: "Recipes",
        path: "/recipes",
        toggle: true,
       
        //icon: faList
    }
    
]

  return (
    <>
      <div className="navbar">
        {/*<div className="container">*/}
          <h1>
            <span>
              <DiningSharpIcon className="icon" /> The Fifth Spoon{" "}
            </span>{" "}
          </h1>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find a Recipe"
              inputProps={{ "aria-label": "search" }}
              onChange={handleOnChange}
              value={searchTerm}
              onKeyUp={initiateSearch}
              //onKeyPress={initiateSearch}
            />
          </Search>
          
          <ToggleButtonGroup
           
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{  color: "#3531be",
                  borderBottomColor:"#3531be",
                  fontWeight: "bold",
                  background: "white",
                  fontFamily: "Roboto Mono",                  
                ".css-1do4wx1-MuiButtonBase-root-MuiToggleButton-root":{
                  color: "black"
                },
                ".css-x67mov-MuiButtonBase-root-MuiToggleButton-root.Mui-selected":{
                  color: "white",
                  background: "#5651e5"
                }
              }}
          >
            <ToggleButton value="home" onClick={togglehome}
            sx={
              {color:"#808080",
                "&:hover":{
                  //background: "red",
                  color: "#3531be",
                  borderBottomColor:"#3531be",
                  fontWeight: "bold",
                }}}>Home</ToggleButton>
            <ToggleButton value="My Recipes" onClick={togglerecipe}
             sx={{color:"#808080","&:hover":{
                  //background: "red",
                  color: "#3531be",
                  borderBottomColor:"#3531be",
                  fontWeight: "bold",
                }}}>My Recipes</ToggleButton>
          </ToggleButtonGroup>
        {/*</div>*/}
      </div>
    </>
  );
};

export default Navbar;

/*  <button onClick={(handleRecipeToggle)}>
          My Recipes
          </button> <h6><span> My Recipes <MenuBookTwoToneIcon/></span></h6>
          
          
          <div className="nav-links">
            {links.map(link => (
              <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
            ))}

          </div>
          
          
          {links.map(link => (
              <Button key={link.name}
               onClick={props.setSavedRecipeToggle(link.toggle)}
              >{link.name}</Button>
            ))}
          </div>
          
          
          <div className="nav-links">        
          
          
          <Link to="/" sx={{textDecoration: "none"}}>
            <Button onClick={togglehome} 
            sx={{
              color:togglecolor,
              ':before':{
                borderBottomColor: 'blue'
              },
              ':after': { borderBottomColor: 'red' }
            }}>
            Home
            </Button>
            </Link>
            <Link to="/" sx={{textDecoration: "none"}}>
            <Button onClick={togglerecipe} >
            Recipes
            </Button>
            </Link>
            </div> 
          
          
          
          
          
          
          
          */