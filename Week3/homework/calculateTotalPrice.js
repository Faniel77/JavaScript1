'use strict';

const cartForParty = { beer: 65, cola: 31, cheese: 35, beef: 89, bread: 15 };

function calculateTotalPrice(myCart) {
  var totalPrice = 0;
  for (var item in myCart) {
    if (myCart.hasOwnProperty(item)) {
      totalPrice += parseFloat(myCart[item]);
    }
  }
  console.log(`Total: ${totalPrice}`);
}
calculateTotalPrice(cartForParty);
