'use strict';
const numToValidate = ' ';
function validateCreditNumber(numToValidate) {
  // the loop below will make sure all the numbers are not the same and its value will be later called in the if statement
  var obj = {};
  for (var i = 0; i < numToValidate.length; i++) {
    obj[numToValidate[i]] = true;
  }
  // the function below will add all the numbers and return the sum
  let sum = 0;
  function sumNumbers(numToValidate) {
    let splitStr = numToValidate.split('');

    for (let i = 0; i < splitStr.length; i++) {
      sum += parseInt(splitStr[i]);
    }
    return sum;
  }
  // the if statement below will check if all the conditions for a valid credit number are met
  if (Object.keys(obj).length < 2) {
    console.log(
      `invalid: The input ${numToValidate} should contain at least 2 different types of numbers`,
    );
  } else if (sumNumbers(numToValidate) < 16) {
    console.log(
      `Invalid: The sum of the input ${numToValidate} is smaller than 16`,
    );
  } else if (numToValidate.length !== 16) {
    console.log(`Invalid: The input ${numToValidate} has less than 16 digits`);
  } else if (isNaN(numToValidate)) {
    console.log(
      `Invalid: The input ${numToValidate} should contain only numbers`,
    );
  } else if (numToValidate.charAt(15) % 2 !== 0) {
    console.log(
      `Invalid: Last digit of ${numToValidate} is not an even number`,
    );
  } else {
    console.log(`Success: ${numToValidate} is a valid number`);
  }
}

validateCreditNumber('a92332119c011112'); // invalid: it has characters other than numbers
validateCreditNumber('4444444444444444'); // invalid: all numbers are the same
validateCreditNumber('11111111990022'); // Invalid: input is less than 16 digits
validateCreditNumber('6686453284156358'); // Success: input is valid
validateCreditNumber('1100001111100000'); // the sum of all numbers is less than 16
