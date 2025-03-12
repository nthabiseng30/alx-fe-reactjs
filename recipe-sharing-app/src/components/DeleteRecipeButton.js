import React, { useContext } from 'react';
import { RecipeContext } from './recipeStore';

const DeleteRecipeButton = () => {
  const { dispatch } = useContext(RecipeContext);
  const recipeId = window.location.pathname.split('/').pop();

  const handleDelete = () => {
    dispatch({ type: 'deleteRecipe', id: recipeId });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Recipe</button>
    </div>
  );
};

export default DeleteRecipeButton;
