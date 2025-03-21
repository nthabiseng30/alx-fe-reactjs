import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const recipe = data.find(item => item.id === parseInt(id));
        setRecipe(recipe);
      });
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {recipe && (
        <div>
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-lg font-bold mb-2">Ingredients:</h2>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li key={ingredient} className="text-gray-600">
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-bold mb-2">Cooking Instructions:</h2>
          <p className="text-gray-600">{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;

