'use strict';

console.log('I am loaded!!');

let oddDucks = [];
let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');

let rounds = 0;

function Duck(url, name) {
    this.url = url;
    this.name = name;
    this.clicks = 0;
    this.views = 0;
  }

  let duck1 = new Duck('img/bag.jpg', 'bag');
  let duck2 = new Duck('img/banana.jpg', 'banana');
  let duck3 = new Duck('img/bathroom.jpg', 'bathroom');
  let duck4 = new Duck('img/boots.jpg', 'boots');
  let duck5 = new Duck('img/breakfast.jpg', 'breakfast');
  let duck6 = new Duck('img/bubblegum.jpg', 'bubblegum');
  let duck7 = new Duck('img/chair.jpg', 'chair');
  let duck8 = new Duck('img/cthulhu.jpg', 'cthulhu');
  let duck9 = new Duck('img/dog-duck.jpg', 'dog-duck');
  let duck10 = new Duck('img/dragon.jpg', 'dragon');
  let duck11= new Duck('img/pen.jpg', 'pen');
  let duck12 = new Duck('img/pet-sweep.jpg', 'pet-sweep');
  let duck13 = new Duck('img/scissors.jpg', 'scissors');
  let duck14 = new Duck('img/shark.jpg', 'shark');
  let duck15 = new Duck('img/sweep.png', 'sweep');
  let duck16 = new Duck('img/tauntaun.jpg', 'tauntaun');
  let duck17 = new Duck('img/unicorn.jpg', 'unicorn');
  let duck18 = new Duck('img/water-can.jpg', 'water-can');
  let duck19 = new Duck('img/wine-glass.jpg', 'wine-glass');

  oddDucks.push(duck1, duck2, duck3, duck4, duck5, duck6, duck7, duck8, duck9,
    duck10, duck11, duck12, duck13, duck14, duck15, duck16, duck17, duck18, duck19);


image1.setAttribute('src', duck1.url);
image2.setAttribute('src', duck2.url);
image3.setAttribute('src', duck3.url);
image1.setAttribute('alt', duck1.name);
image2.setAttribute('alt', duck2.name);
image3.setAttribute('alt', duck3.name);

console.log(oddDucks);

function findDuck(alt) {
    for (let i = 0; i < oddDucks.length; i++) {
      if (oddDucks[i].name === alt) {
        oddDucks[i].clicks++;
        console.log(`Clicks for ${oddDucks[i].name}: ${oddDucks[i].clicks}`);
      }
    }
  }
  
  let duckImages = document.getElementById('oddDucks');

  function attachEventListeners() {
    duckImages.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(event.currentTarget.alt);

        findDuck(event.currentTarget.alt);
        renderNewDucks();
    });
}

attachEventListeners();
  
  function renderNewDucks() {
    // generate a random index betwee 0 and the length of our oddDucks array
    let index1 = Math.floor(Math.random() * oddDucks.length);
    let index2 = Math.floor(Math.random() * oddDucks.length);
    let index3 = Math.floor(Math.random() * oddDucks.length);
    while(index1 === index2) {
      index1 = Math.floor(Math.random() * oddDucks.length);
      index2 = Math.floor(Math.random() * oddDucks.length);
      index3 = Math.floor(Math.random() * oddDucks.length);
    }
    
    let randomDuck1 = oddDucks[index1];
    let randomDuck2 = oddDucks[index2];
    let randomDuck3 = oddDucks[index3];

    console.log(randomDuck1, randomDuck2, randomDuck3);
  
    // render the goat onto the page / add the name
    image1.setAttribute('src', randomDuck1.url);
    image2.setAttribute('src', randomDuck2.url);
    image3.setAttribute('src', randomDuck3.url);
    image1.setAttribute('alt', randomDuck1.name);
    image2.setAttribute('alt', randomDuck2.name);
    image3.setAttribute('alt', randomDuck3.name);
  }