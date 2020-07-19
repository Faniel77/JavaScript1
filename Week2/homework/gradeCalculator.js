'use strict';

let score = 50.5;
let toPercent = Math.round((score / 100) * 100); // this line will convert the score in to percent and round it to the nearest integer
let grade;

// the if statement will look in to the percentage and assign a grade to it
if (toPercent >= 90 && toPercent <= 100) {
  grade = 'A';
  console.log('you got ' + grade + ' ' + '(' + toPercent + '%' + ')' + '!');
} else if (toPercent >= 80 && toPercent <= 89) {
  grade = 'B';
  console.log('you got ' + grade + ' ' + '(' + toPercent + '%' + ')' + '!');
} else if (toPercent >= 70 && toPercent <= 79) {
  grade = 'C';
  console.log('you got ' + grade + ' ' + '(' + toPercent + '%' + ')' + '!');
} else if (toPercent >= 60 && toPercent <= 69) {
  grade = 'D';
  console.log('you got ' + grade + ' ' + '(' + toPercent + '%' + ')' + '!');
} else if (toPercent >= 50 && toPercent <= 59) {
  grade = 'E';
  console.log('you got ' + grade + ' ' + '(' + toPercent + '%' + ')' + '!');
} else if (toPercent >= 0 && toPercent <= 49) {
  grade = 'F';
  console.log('you got ' + grade + ' ' + '(' + toPercent + '%' + ')' + '!');
}
// node gradeCalculator.js
