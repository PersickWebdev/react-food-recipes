import React from "react";
import style from './RecipesList.module.css';
import Recipe from "./Recipe/Recipe";

const RecipesList = (props) => {
    const recipesElements = props.recipes.map(recipe => <Recipe title={recipe.recipe.label}
                                                                calories={recipe.recipe.calories}
                                                                image={recipe.recipe.image}
                                                                key={recipe.recipe.label}
                                                                ingredients={recipe.recipe.ingredients}/>)

    return (
        <div className={style.recipeList__container}>
            {recipesElements}
        </div>
    );
}

export default RecipesList;