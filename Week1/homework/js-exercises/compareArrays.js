'use strict';

let firstArray = ['car', 45, true, { car: 'Mercedes', model: '500DX' }];
let secondArray = [
  'Tesla',
  'Mercedes',
  'BMW',
  'Fiat',
  'Toyota',
  'chevrolet',
  'Volkswagen',
];
console.log('The length of the array is ' + firstArray.length); // returns the number of elements inside the array which is 4
console.log('The length of the array is ' + secondArray.length); //returns the number of elements inside the array which is 7

if (firstArray.length == secondArray.length) {
  console.log('They are the same!');
} else {
  console.log('They are different  size');
}
