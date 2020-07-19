'use strict';

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);
myString = myString.replace(/,/g, ' '); // RegEx modifier "g" finds all matches rather than stopping after the first match
console.log(myString);
