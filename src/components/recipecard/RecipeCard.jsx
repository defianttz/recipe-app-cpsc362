import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import TimerIcon from "@mui/icons-material/Timer";
import BoltTwoToneIcon from "@mui/icons-material/BoltTwoTone";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./RecipeCard.css";

const RecCard = (props) => {
  const { image, title, id, } = props.recipe;
  //console.log(props.recipe);
  return (
    <div className="card">
      <div className="card__body">
        <img src={image} alt="" className="card__image" />
        <Tooltip title="Add Recipe">
          <IconButton className="card__addbtn">
            <AddIcon />
          </IconButton>
        </Tooltip>
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
                  <BoltTwoToneIcon /> {props.recipe.nutrition.nutrients[0].amount} cal{" "}
                </span>
              </Tooltip>
            </li>
          </ul>
        </div>
        <li className="card__desc">
          <span>
            {props.recipe.summary}
          </span>
        </li>
      </div>
      <button className="card__btn"> View Recipe </button>
    </div>
  );
};
export default RecCard;

/* <div>
          <h3 className="card__title"> {props.title} </h3>
          <i className="card__timeicon">
            <TimerIcon /> 15 mins
          </i>
          <i className="card__energyicon">
            <BoltTwoToneIcon /> 2 servings
          </i>
        </div>    */
