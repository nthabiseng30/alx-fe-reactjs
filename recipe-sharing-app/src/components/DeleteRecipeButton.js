// DeleteRecipeButton component
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleClick = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleClick}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
