'use strict';

const drinkTypes = ['cola', 'lemonade', 'water'];
let drinkTray = [];

for (let i = 0; i < 5; i++) {
  drinkTray = drinkTypes.push(i);
}
console.log(drinkTray);
// for (let i = 0; i < 5; i++) {
//   drinkTray = drinkTypes.map((drinktype) => drinktype + ',' + drinktype);
//   console.log(drinkTray);
// }
// console.log('hi guys i brought  ' + drinkTray);

// node orderDrink.js
