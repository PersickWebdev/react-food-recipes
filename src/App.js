import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import SearchForm from "./components/SearchForm/SearchForm";
import RecipesList from "./components/RecipesList/RecipesList";

const App = (props) => {
    // authentication data for API
    const API_ID = 'b8361030';
    const API_KEY = '100c96c2594f7d2ffd7e31c555b937ee';

    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    return (
        <div className={style.application__container}>
            <SearchForm setQuery={setQuery}/>
            <RecipesList recipes={recipes}/>
        </div>
    );
}

export default App;
