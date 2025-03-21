import React, { useState, useEffect } from 'react';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className="bg-white rounded shadow-md p-4 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

