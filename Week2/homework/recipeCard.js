'use strict';

const myRecipeMeal = {
  name: 'Omlette',
  servings: 4,
  Ingredients: ['4 eggs', '2 strips of bacon', '1 tsp salt/pepper'],
};
//Object.entries() Method will return an array of both the property key and its value

for (const [key, value] of Object.entries(myRecipeMeal)) {
  console.log(`${key}: ${value}`);
}

// node recipeCard.js
