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

const AddRecipeForm = (props) => {
    const [open, setOpen] = React.useState(false);
    //const handleOpen = () => setOpen(true);
    //const handleClose = () => setOpen(false);
    

    const [recipe, setRecipe] = React.useState({
          id: "",
          name: "",
          ingredients: [],
          directions: [],
          cooktime: "",
          calories:"",
          servings: "",
          notes: []
          });

const [temprecipe, setTempRecipe] = React.useState({
            id: "",
            name: "",
            ingredients: [],
            directions: [],
            cooktime: "",
            calories:"",
            servings: "",
            notes: []
            });
  
          
  const handleDirectionChange = (e) => {
    //recipe.ingredients = e.target.value;

    //setRecipe((recipe.directions = e.target.value));
    setRecipe({ ...recipe, directions: e.target.value });
    //console.log("Description: " + recipe.directions);
  };
  const handleIngredientChange = (e) => {
    //recipe.ingredients = e.target.value;
    setRecipe({ ...recipe, ingredients: e.target.value });
    //setRecipe((recipe.ingredients = e.target.value));
    //console.log("ingredients: " + recipe.ingredients);
  };
  const handleNameChange = (e) => {
    //setRecipe((recipe.name = e.target.value));
    setRecipe({ ...recipe, name: e.target.value });
    //console.log("Recipe name: " + e.target.value);
  };

  const handleSave = () => {
    props.handleClose();
    //props.handle

  }
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
              '& .MuiTextField-root': { minWidth: '25ch',

                                        p: "12px 16px"},
              width:"auto",
              minHeight: "300px",
              //p: "2",
            }}
      >  
      
      <TextField
        required
        id="outlined-required"
        label="Recipe Name"
        value={recipe.name}
        size="medium"
        onChange={handleNameChange}
                //onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
      />
      
      <TextField
        id="outlined"
        label="Cooking Time (mins)"
        value={recipe.cooktime}
        onChange={(e) => setRecipe({ ...recipe, cooktime: e.target.value })}
      />
      <TextField
        id="outlined"
        label="Calories"
        value={recipe.calories}
        onChange={(e) => setRecipe({ ...recipe, calories: e.target.value })}
      />

      <TextField
        id="outlined"
        label="Servings"
        value={recipe.servings}
        onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
      /> 
      
      <div>
      <TextField
        
        id="standard-multiline-static"
        label="Ingredients"
        multiline
        maxRows={4}
        value={recipe.ingredients}
        onChange={(e) =>
                  setRecipe({ ...recipe, ingredients: e.target.value })
        }
        />
        </div>
       <TextField
        //id="outlined-multiline-flexible"
        id="standard-multiline-static"
        label="Directions"
        multiline
        maxRows={4}
        value={recipe.directions}
        onChange={(e) =>
                 setRecipe({ ...recipe, directions: e.target.value })
                }
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
      <Button autoFocus onClick={props.handleClose}>
        Cancel
      </Button>
      <Button autoFocus onClick={handleSave}>
        Save Recipe
      </Button>
    </DialogActions>
    </Dialog> 
  </div>
  
  );
}

export default AddRecipeForm;