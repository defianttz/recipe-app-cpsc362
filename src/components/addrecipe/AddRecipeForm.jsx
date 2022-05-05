import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import "./AddRecipe.css";
import mockdingredients from "./mockingredients.js";
import mockdinstructions from "./mockinstructions.js";
const AddRecipeForm = (props) => {

  const [nutrientz, setNutrients] = React.useState(
    {
      name: "Calories",
      amount: "",
      unit: "kcal"    
  });

  const [nutritionz, setNutrition] = React.useState({
    ingredients:[],
    nutrients:[]
  });

  const [recipe, setRecipe] = React.useState({
    id: "999",                  
    title: "", 
    readyInMinutes: "",
    image: "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    servings: "",
    notes: [],    // onChange
    nutrition: [], // handleSave
    analyzedInstructions: [], // handleSave 
  });   


function handleSave() {
  
  nutritionz.ingredients = mockdingredients;
  nutritionz.nutrients = [
                          nutrientz,
                          {
                              "name": "Fat",
                              "amount": 0,
                              "unit": "g",
                              "percentOfDailyNeeds": 0
                          },  
                        ];
    
  
  recipe.nutrition = nutritionz;
  recipe.analyzedInstructions =mockdinstructions;  
       
    props.handleClose();
    props.setCopyRecipe(recipe);
    //props.handle
  }          
    
  const handleDirectionChange = (e) => {
    //recipe.ingredients = e.target.value;

    //setRecipe((recipe.directions = e.target.value));
    //setRecipe({ ...recipe, directions: e.target.value });
    //console.log("Description: " + recipe.directions);
  };
  const handleIngredientChange = (e) => {
    //recipe.ingredients = e.target.value;
    //setRecipe({ ...recipe, ingredients: e.target.value });
    //setRecipe((recipe.ingredients = e.target.value));
    //console.log("ingredients: " + recipe.ingredients);
  };
  const handleNameChange = (e) => {
    //setRecipe((recipe.name = e.target.value));
    setRecipe({ ...recipe, title: e.target.value });
    //console.log("Recipe name: " + e.target.value);
  };
  const handleCalorieChange = (e) => {
    
    setNutrients({ ...nutrientz, amount: e.target.value});
    
  };

 
return(
  <div> 
  <Dialog
        maxWidth={"md"}
        open={props.open}
        onClose={props.handleClose}
      >    
    <DialogTitle sx={{ m: 0, p: 2 }}>
      New Recipe
    </DialogTitle>
    <IconButton
        aria-label="close"
        onClick={props.handleClose}
        sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
        }}
    >
      <CloseIcon />
    </IconButton>

    <DialogContent dividers>
      <Box 
          noValidate
          component="form"
          sx={{
              display: "flex",
              flexDirection: "column",
              m: "6",
              '& .MuiTextField-root': { minWidth: '40ch',
                                        p: "12px 5px"},
              width:"auto",
              minHeight: "300px",
              //p: "2",
            }}
      >  
      
      <TextField
        required
        id="outlined-required"
        variant="outlined"
        label="Recipe Name"
        value={recipe.title}
        onChange={handleNameChange}
                //onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
      />
      
      <TextField
        id="outlined"
        label="Cooking Time (mins)"
        value={recipe.readyInMinutes}
        onChange={(e) => setRecipe({ ...recipe, readyInMinutes: e.target.value })}
      />
      <TextField
        id="outlined"
        label="Calories"
        value={nutrientz.amount}
        onChange={handleCalorieChange}
        //onChange={(e) => setRecipe({ ...recipe, nutrition:{
        //    ...recipe.nutrition.nutrients, amount: e.target.value}})}
      />
    
      <TextField
        id="filled-basic"
        label="Servings"
        value={recipe.servings}
        onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
      /> 
      
      <div>
      <TextField        
        id="standard-multiline-uncontrolled"
        label="Ingredients"
        multiline
        disabled 
        maxRows={4}
        //value={recipe.ingredients}
        //onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
        />
        </div>
       <TextField
        //id="outlined-multiline-flexible"
        id="standard-multiline-uncontrolled"
        label="Directions"
        disabled 
        multiline
        maxRows={4}
        //value={recipe.directions}
        //onChange={(e) => setRecipe({ ...recipe, directions: e.target.value }) }
        />

        <TextField
        //id="outlined-multiline-flexible"
        id="standard-multiline-static"
        label="Notes"
        multiline
        maxRows={4}
        value={recipe.notes}
        onChange={(e) =>
                  setRecipe({ ...recipe, notes: e.target.value })
        }
        /> 
    
      </Box>   
    </DialogContent>        
    {/* Footer Button Group*/}
    <DialogActions>
      <Button autoFocus onClick={props.handleClose}
              sx={{
                color:"#5651e5",
                background:"#ffffff",
                "&:hover":{
                  background: "#5651e5",
                  color: "white"
              }
              }}>
        Cancel
      </Button>
      <Button autoFocus onClick={handleSave}
      sx={{
                color:"#5651e5",
                background:"#ffffff",
                "&:hover":{
                  background: "#5651e5",
                  color: "white"
                }
              }}>
        Save Recipe
      </Button>
    </DialogActions>
    </Dialog> 
  </div>
  
  );
}

export default AddRecipeForm;