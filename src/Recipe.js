import React from "react";
import styles from "./recipe.module.css";
const Recipe = ({ title, ingredients, calories, image }) => {
    return (
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} className={styles.image} alt="" />
        </div>
    )
}
export default Recipe;