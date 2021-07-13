import React from "react";
import style from "./recipe.module.css"

// Function to display the data fetched
const Recipe = ({title,calories,image,ingredients}) => {
return(
<div className = {style.recipe}>
    <h1>{title} </h1>
    <ol>
        {ingredients.map(ingredient =>(
            <li>
                
                {ingredient.text}
            </li>
        ))}
    </ol>
    <p>{calories} Calories</p>
    <img className={style.image} src = {image} alt = "" />
</div>
);
};

export default Recipe;