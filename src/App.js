import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
const App = () => {
    const APP_ID = "f66fb2ea"
    const APP_KEY = "d877347b145676675ccb623b6494af2a";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");
    useEffect(() => (
        getRecipes()
    ), [query])
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits)
    }
    const updateSearch = e => {
        setSearch(e.target.value)
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
        setSearch("")
    }
    return (
        <div className="App">
            <form className="search-form" onSubmit={getSearch}>
                <input type="text" className="search-bar" value={search} onChange={updateSearch} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        ingredients={recipe.recipe.ingredients}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                    />
                ))}
            </div>
        </div>
    )
}
export default App;