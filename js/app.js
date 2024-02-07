'use strict';

console.log('I am loaded!!');

let oddDucks = []; 
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let totalRounds = 25;
let currentRound = 0;

function Duck(url, name) {
  this.url = url;
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
}

let odd1 = new Duck('img/bag.jpg', 'bag');
let odd2 = new Duck('img/banana.jpg', 'banana');
let odd3 = new Duck('img/boots.jpg', 'boots');
let odd4 = new Duck('img/breakfast.jpg', 'Breakfast');
let odd5 = new Duck('img/bubblegum.jpg', 'gum');
let odd6 = new Duck('img/cthulhu.jpg', 'green vampire');
let odd7 = new Duck('img/dog-duck.jpg', 'duck-dog');
let odd8 = new Duck('img/dragon.jpg', 'dragon');
let odd9 = new Duck('img/pen.jpg', 'pen');
let odd10 = new Duck('img/pet-sweep.jpg', 'pet');
let odd11 = new Duck('img/scissors.jpg', 'pizza scissors');
let odd12 = new Duck('img/shark.jpg', 'shark');
let odd13 = new Duck('img/sweep.png', 'sweep');
let odd14 = new Duck('img/tauntaun.jpg', 'taun');
let odd15 = new Duck('img/unicorn.jpg', 'uni');
let odd16 = new Duck('img/water-can.jpg', 'watercan');
let odd17 = new Duck('img/wine-glass.jpg', 'wine');

oddDucks.push(odd1, odd2, odd3, odd4, odd5, odd6, odd7, odd8, odd9, odd10, odd11, odd12, odd13, odd14, odd15, odd16, odd17); // Renamed from 'ducks'

function renderImage(image, duck) {
  image.setAttribute('src', duck.url);
  image.setAttribute('alt', duck.name);
  duck.timesShown++;
}

renderImage(image1, odd1);
renderImage(image2, odd2);
renderImage(image3, odd3);

console.log(oddDucks);

let duckImages = document.getElementById('oddDucks'); 

function attachEventListeners() {
  duckImages.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target.alt);
    findDuck(event.target.alt);
    renderNewDucks();
    currentRound = roundCount(totalRounds, currentRound);
  });
}

attachEventListeners();

let handleClick = function (event) {
  event.preventDefault();
  console.log(event.target.alt); 

  findDuck(event.target.alt);

  renderNewDucks();
  currentRound = roundCount(totalRounds, currentRound);
}
oddImages.addEventListener('click', handleClick);

function roundCount(total, current) {
  if (current < total) {
    current++;
  } else {
    duckImages.removeEventListener('click', handleClick);
    console.log('HERE IS THE DATA!!', oddDucks); 
    alert('Voting Complete!!');
  }
  return current;
}

function findDuck(alt) {
  for (let i = 0; i < oddDucks.length; i++) {
    if (oddDucks[i].name === alt) {
      oddDucks[i].clicks++;
    }
  }
  console.log(oddDucks);
}

function renderNewDucks() {
  let index1 = Math.floor(Math.random() * oddDucks.length);
  let index2 = Math.floor(Math.random() * oddDucks.length);
  let index3 = Math.floor(Math.random() * oddDucks.length);
  while (index1 === index2 || index1 === index3 || index2 === index3) {
    index1 = Math.floor(Math.random() * oddDucks.length);
    index2 = Math.floor(Math.random() * oddDucks.length);
    index3 = Math.floor(Math.random() * oddDucks.length);
  }
  let randomDuck1 = oddDucks[index1];
  let randomDuck2 = oddDucks[index2];
  let randomDuck3 = oddDucks[index3];

  renderImage(image1, randomDuck1);
  renderImage(image2, randomDuck2);
  renderImage(image3, randomDuck3);
}
