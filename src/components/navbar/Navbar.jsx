import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import DiningSharpIcon from "@mui/icons-material/DiningSharp";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import "./Navbar.css";

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

  return (
    <>
      <div className="navbar">
        <div className="container">
          <h1>
            <span>
              <DiningSharpIcon className="icon" /> Recipe App{" "}
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
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/reipelist">My Recipes</a>
          </div>
                    
          </div>
      </div>
    </>
  );
};

export default Navbar;
