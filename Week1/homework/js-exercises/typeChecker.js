'use strict';

// Declare all variables
let str1 = 'car';
let str2 = 'Train';
let obj1 = { firstName: 'John', lastName: 'Doe' };
let obj2 = { type: 'Toyota', model: '500' };

// check if data type is the same and log the result

if (typeof str1 == typeof str2) {
  console.log('same type');
} else {
  console.log('Not the same');
}
if (typeof str1 == typeof obj1) {
  console.log('same type');
} else {
  console.log('Not the same');
}
if (typeof str1 == typeof obj2) {
  console.log('same type');
} else {
  console.log('Not the same');
}
if (typeof str2 == typeof obj1) {
  console.log('same type');
} else {
  console.log('Not the same');
}
if (typeof str2 == typeof obj2) {
  console.log('same type');
} else {
  console.log('Not the same');
}
if (typeof obj1 == typeof obj2) {
  console.log('same type');
} else {
  console.log('Not the same');
}
