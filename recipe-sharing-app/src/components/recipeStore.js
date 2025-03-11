import { createContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  recipes: [],
  selectedRecipe: null,
};

// Define the reducer function
const recipeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.recipe] };
    case 'DELETE_RECIPE':
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.id),
      };
    case 'EDIT_RECIPE':
      return {
        ...state,
        recipes: state.recipes.map(recipe =>
          recipe.id === action.id ? { ...recipe, ...action.changes } : recipe
        ),
      };
    case 'SELECT_RECIPE':
      return { ...state, selectedRecipe: action.recipe };
    default:
      return state;
  }
};

// Create the context
const RecipeContext = createContext();

// Create the provider component
const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };
