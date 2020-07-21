'use strict';

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
// switch statement will help us to determine what happens in every iteration
for (let i = 0; i < 5; i++) {
  switch (i) {
    case 0:
    case 1:
      drinkTray[i] = drinkTypes[0]; // the 2 cases will push the same element twice
      break;

    case 2:
    case 3:
      drinkTray[i] = drinkTypes[1]; // the 2 cases will push the same element twice
      break;

    case 4:
      drinkTray[i] = drinkTypes[2]; // 1 case will result in to only 1 element being pushed
  }
}

console.log(`Hey guys I brought ${drinkTray}`);

// node orderDrink.js
