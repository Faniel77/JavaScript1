'use strict';

let booksRead = [
  { title: 'Da vinci Code', author: 'Dan Brown', alreadyRead: true },
  { title: 'Harry Potter', author: ' J.K Rowling', alreadyRead: false },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    alreadyRead: true,
  },
];
// target the array index first and use property names to target the values inside the objects
for (let i = 0; i < booksRead.length; i++) {
  console.log(`${booksRead[i].title}  by ${booksRead[i].author}`);
  if (booksRead[i].alreadyRead == true) {
    console.log(`I already read ${booksRead[i].title}`);
  } else {
    console.log(`I still need to read ${booksRead[i].title}`);
  }
}

// node booksRead.js
