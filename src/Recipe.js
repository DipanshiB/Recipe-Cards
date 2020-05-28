import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.calories}>Calories : {calories}</p>
            <img className={style.image} src={image} alt={title}/>
            <ul className={style.ingredient}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;