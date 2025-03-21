import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title) {
      errors.title = 'Recipe title is required';
    }
    if (!ingredients) {
      errors.ingredients = 'Ingredients are required';
    } else if (ingredients.split('\n').length < 2) {
      errors.ingredients = 'Please provide at least two ingredients';
    }
    if (!steps) {
      errors.steps = 'Preparation steps are required';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const newRecipe = {
        title,
        ingredients,
        steps,
      };
      console.log(newRecipe);
      // Add logic to post the form data to the server or update the local data
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Add New Recipe</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Recipe Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
        />
        {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">Ingredients:</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
          rows={4}
        />
        {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="steps" className="block text-gray-700 text-sm font-bold mb-2">Preparation Steps:</label>
        <textarea
          id="steps"
          value={steps}
          onChange={(event) => setSteps(event.target.value)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.steps ? 'border-red-500' : ''}`}
          rows={6}
        />
        {errors.steps && <p className="text-red-500 text-xs italic">{errors.steps}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;
