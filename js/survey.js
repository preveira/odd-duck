'use strict'

console.log('JS is loaded')

// const person = {
//   name: 'Kawika',
//   age: '33',
//   location: 'Seattle'
// }

// localStorage.clear(); //removes all data from localStorage

localStorage.setItem('duckData', JSON.stringify(oddDucks)); //method of the localStorage object that takes two arguments, the key and the value

console.log('The local storage object', localStorage);

let stringFromStorage = localStorage.getItem('duckData'); //method of the localStorage object that takes one argument, the key
console.log(stringFromStorage);

let object = JSON.parse(stringFromStorage);
console.log('PARSED BACK TO JS OBJECT', object);

function saveData(data) {
  localStorage.setItem('duckData', JSON.stringify(data));
}

function fetchData() {
  JSON.stringify(localStorage.getItem('duckData'));
}

function clearData() {
  localStorage.clear();
}



/******************************************************/

// ***** see dataFromStorage in app.js from demo to move forward *****

// once rounds are complete have that data stored

/******************************************************/

// console.log('PERSON BEFORE JSONification: ', person);

// let json = JSON.stringify(person); //returns a string

// console.log('PERSON AFTER JSONification: ', json);

// person: JSON.parse(json); //converts our JSON string back into JS object

// //global object that oes JSON things
// console.log('PERSON CONVERTED BACK TO OBJECT', person);

