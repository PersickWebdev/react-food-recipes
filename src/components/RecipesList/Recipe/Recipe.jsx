import React from "react";
import style from './Recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe__container}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ul>
                {ingredients.map(i => <li>{i.text}</li>)}
            </ul>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    );
}

export default Recipe;
