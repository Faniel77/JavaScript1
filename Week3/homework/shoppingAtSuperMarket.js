'use strict';

const shoppingCart = ['banana', 'Milk'];

function addToShoppingCart(groceryItem) {
  shoppingCart.push(groceryItem); // this line adds grocery items to the shopping cart every time the function is called
  if (shoppingCart.length > 3) {
    shoppingCart.shift(); // this line will start removing items from the shopping cart if they're more than 3
  }
  console.log(`you bought ${shoppingCart}`);
}
addToShoppingCart('chocolate'); // Returns "You bought bananas, milk, chocolate!"
addToShoppingCart('waffles'); // Returns "You bought milk, chocolate, waffles!"
addToShoppingCart('tea'); // Returns "You bought chocolate, waffles, tea!"
