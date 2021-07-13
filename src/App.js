import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {

 //Application ID 
const APP_ID = "98fd54a0";

//Application key
const APP_KEY = "15df6f3a67115b6f96e3f4c9c1c6e090";

// Store the recipes array in the state.
const [recipes, setRecipes] = useState([]);

//Store the searched string in the state
const [search, setSearch] = useState("");

//Store the final query in the state
const [query, setQuery] = useState("chicken")


// Function to update the search.
const updateSearch = e => {
setSearch(e.target.value);
}

//Function to get the final query
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

// Hook that manages the side-effects
useEffect(() => {

  // Fetching data from the API
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
    };
getRecipes();
},[query]);

  // Displaying data fetched.
  return(
    <div className = 'App'>
      <form onSubmit={getSearch} className = "search-form">
        <input className= "search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className = "search-button" type = "submit"> search </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
      <Recipe 
      key = {recipe.recipe.label} 
      title={recipe.recipe.label} 
      calories = {Math.round(recipe.recipe.calories)} 
      image = {recipe.recipe.image}
      ingredients = {recipe.recipe.ingredients}/>
    ))}
      </div>
    </div>
  );
};

export default App;
