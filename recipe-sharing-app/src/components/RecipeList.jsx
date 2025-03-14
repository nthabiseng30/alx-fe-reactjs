import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { state } = useRecipeStore();

  return (
    <div>
      <h2>Recipe List</h2>
      {state.recipes && (
        <ul>
          {state.recipes.map(recipe => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;

