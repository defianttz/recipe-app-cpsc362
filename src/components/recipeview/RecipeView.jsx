import { React, useState } from "react";

import "./recipeview.css";


function RecipeView({item}){

    return(          
    <div className="view__box"> 
        {/* Recipe Name */}
        
        <h3 className="view__title"> {item.title} </h3>
    
        {/* Recipe img */}
        <div>
            <img src={item.image} alt="" className="view__image" />
        </div>

        {/* Recipe Ingredients */ }
        <div className="view__ingr">
            <h3> Ingredients</h3>
            <Divider></Divider>
            <ul>
                <li> step 1

                </li>
                <li> step 2

                </li>
            </ul>
        </div>
    
        {/* Recipe Directions */ }
        <div className="view__dir">
            <h3> Directions</h3>
            <Divider></Divider>
            <ul>
                <li> Do this

                </li>
                <li> Do this

                </li>
                <li> Do this

                </li>
            </ul>


        </div>

    {/* Button to add Recipe */ }

    {/* Button to close window/go back */ }
    
    </div>
    
    );
}

export default RecipeView;
