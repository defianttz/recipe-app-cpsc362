import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import DiningSharpIcon from "@mui/icons-material/DiningSharp";
import SearchIcon from "@mui/icons-material/Search";

const Nav = styled("nav")({
  backgroundColor: "#4b741d",

  height: "100px",
  display: "flex",
  zIndex: "100",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  transition: "all 0.5s ease-in-out"
});

const Container = styled("div")(({ theme }) => ({
  backgroundColor: "inherit",
  width: "100%",
  maxWidth: "100%",
  height: "64px",
  margin: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 0rem"
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
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
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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

const HeaderLogo = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(38)})`,
  flexDirection: "row",
  marginLeft: 0,
  width: "100%"
}));

export default function SearchAppBar() {
  return (
    <AppBar
      position="static"
      height="100%"
      style={{ boxShadow: "0px 0px 0px 0px", backgroundColor: "#4b741d" }}
    >
      <Toolbar
        style={{
          backgroundColor: "#4b741d",
          minHeight: "60px",
          justifyContent: "space-between",
          padding: "0 1rem"
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 4 }}
        >
          <MenuIcon />
        </IconButton>
        <HeaderLogo>
          <DiningSharpIcon fontSize="large" />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}
          >
            Recipe App
          </Typography>
        </HeaderLogo>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Find a Recipe"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}

/*<Container sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        height="100%"
        style={{ boxShadow: "0px 0px 0px 0px" }}
      >
        <Toolbar
          style={{
            backgroundColor: "#4b741d",
            minHeight: "80px",
            justifyContent: "space-between",
            padding: "0 1rem"
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 4 }}
          >
            <MenuIcon />
          </IconButton>
          <HeaderLogo>
            <DiningSharpIcon fontSize="large" />
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 2, display: { xs: "none", sm: "block" } }}
            >
              Recipe App
            </Typography>
          </HeaderLogo>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Find a Recipe"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Container>
  );
}*/
