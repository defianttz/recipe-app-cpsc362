import { React, useState,useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import TimerIcon from "@mui/icons-material/Timer";
import BoltTwoToneIcon from "@mui/icons-material/BoltTwoTone";
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from "@mui/material/Tooltip";
//import RecipeView from "../recipeview/RecipeView"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
//import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import "./RecipeCard.css";
import "../recipeview/recipeview.css";


function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const RecCard = (props) => {
  const { image, title, id, analyzedInstructions } = props.recipe;
  const ingredients = props.recipe.nutrition.ingredients;
  const activebutton = props.savedRecipeToggle;
  const [viewRecipe, setViewRecipe] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [buttonType, setButtonType] = useState("Add Button");
  //const [addsub, toggleAddSub] = useState("card_addbtn");
  /*const [copyRecipe, setCopyRecipe] = useState();*/
  
  const showModal = () => {
    setViewRecipe(!viewRecipe);
  } 

  const handleClose = () => {
    setViewRecipe(false);
  }

  useEffect(() => {
    if (activebutton){
      setButtonType("Delete Recipe");
    }
    else{
      setButtonType("Add Button");
    }

  }, [activebutton]);

  const handleCopyRecipe = () =>{
    //setViewRecipe(false);
    const temp = props.recipe;
    props.setCopyRecipe(temp);
    //props.updateSavedRecipes(temp);
    //console.log("RecipeCard:CopyRecipe = ",temp);
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  }

  //console.log(props.recipe);
  //console.log(analyzedInstructions.length);
  return (
    <div className="card">
      <div className="card__body">
        <img src={image} alt="" className="card__image" />
        <div>
        <Tooltip title={buttonType}>
          <IconButton  onClick={handleCopyRecipe}
          sx={{
              color:"#ffffff",
              background:"#5651e5",
              boxShadow: "0px 5px 30px 1px #5651e5",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              fontSize: "large",
              justifyContent: "top",
              left: "85%",
              fontWeight: "bold",
              marginTop: "-50px",
              maxHeight: "30px",
              "&:hover":{
                background: "#352efa",
                color: "white"
              }
            }}>
            {activebutton ?  <DeleteIcon/> : <AddIcon />}
          </IconButton>
        </Tooltip>
        </div>
        <div>
          <h3 className="card__title"> {title} </h3>
          <ul>
            <li className="card__timeicon">
              {" "}
              <Tooltip title="Cooking Time">
                <span>
                  <TimerIcon /> <span>{props.recipe.readyInMinutes} mins</span>{" "}
                </span>
              </Tooltip>
            </li>
            <li className="card__energyicon">
              <Tooltip title="Calories">
                <span>
                  {" "}
                  <BoltTwoToneIcon /> {Math.ceil(props.recipe.nutrition.nutrients[0].amount)} cal{" "}
                </span>
              </Tooltip>
            </li>
            <li className="card__servingicon">
              <Tooltip title="Servings">
                <span>
                  {" "}
                  <PeopleAltIcon/> {props.recipe.servings} {" "}
                </span>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
      <button className="card__btn"
        onClick={() => showModal()}> View Recipe
      </button>
      {/*Pop up recipe View */}
      <Dialog
        //fullWidth
        maxWidth={'md'}
        open={viewRecipe}
        onClose={handleClose}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>{title}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <img src={image} alt="" className="view__image" />
            <Box sx={{ width: '400px', height: '400px' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: 5 }}>
                <Tabs value={activeTab} onChange={handleTabChange} aria-label="basic tabs example">
                  <Tab label="Ingredients" {...a11yProps(0)} />
                  <Tab label="Instructions" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={activeTab} index={0}>
                <IngredientList ingredients={ingredients}/> 
              </TabPanel>
              <TabPanel value={activeTab} index={1}>
                <div className="view__dir">
                  <ul>
                    {analyzedInstructions.length > 0 ?
                      analyzedInstructions[0].steps.map((i, index) => (
                        <li key={index}>
                          {index+1}. {i.step}<br />
                        </li>
                      )) : "Empty"}
                  </ul>
                </div>
              </TabPanel>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}
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
          <Button autoFocus onClick={handleCopyRecipe}
          sx={{
                color:"#5651e5",
                background:"#ffffff",
                "&:hover":{
                  background: "#5651e5",
                  color: "white"
                }
              }}>
            {buttonType}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

function IngredientList(props)
{ const {ingredients} = props;
  return(
    <div className="view__ingr">
      <ul className="ingre__list">
        {ingredients.map((item,index) => (
          <li key={index}>
            <span>  {item.amount}{" "}{item.unit}{" "}{item.name}</span><br />
          </li>
           ))}
      </ul>
    </div>    
  )
}



export default RecCard;


