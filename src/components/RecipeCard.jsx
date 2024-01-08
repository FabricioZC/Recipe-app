import React from "react";

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strArea,
        strYoutube,
    } = recipe;

    const handleCardClick = () => {
        // Redirigir a la URL de YouTube
        window.location.href = strYoutube;
    };

    return (
        <a href={strYoutube} target="_blank" rel="noopener noreferrer" className="recipe-card-link" onClick={handleCardClick}>
            <div className="recipe-card">
                <figure>
                    <img src={strMealThumb} alt={strMeal} />
                </figure>

                <div className="card-meta">
                    <p className="dish-type">{strCategory}</p>

                    <ul className="dish-stats">
                        <li>
                            {strArea}
                        </li>
                    </ul>
                </div>

                <h1>{strMeal}</h1>
            </div>
        </a>
    );
};

export default RecipeCard;
