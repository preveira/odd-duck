
'use strict';
console.log('I am loaded!!');
const ctx = document.getElementById('myChart');
let clearButton = document.getElementById('start-over');
clearButton.addEventListener('click', function () {
  clearData();
});
let dataFromStorage = fetchData();
console.log('here is our data', dataFromStorage);
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
let duckImages = document.getElementById('oddDucks'); 
if (dataFromStorage) {
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
  
    image1.setAttribute('src', randomDuck1.url);
    image2.setAttribute('src', randomDuck2.url);
    image3.setAttribute('src', randomDuck3.url);
  
    image1.setAttribute('alt', randomDuck1.name);
    image2.setAttribute('alt', randomDuck2.name);
    image3.setAttribute('alt', randomDuck3.name);
  
    randomDuck1.timesShown++;
    randomDuck2.timesShown++;
    randomDuck3.timesShown++;
  }

} else {
  let duck1 = new Duck('img/bag.jpg', 'bag');
  console.log('HERE IS A DUCK FROM CONSTRUCTOR', duck1);
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
  oddDucks.push(duck1, duck2, duck3, duck4, duck5, duck6, duck7, duck8, duck9, duck10, duck11, duck12, duck13, duck14, duck15, duck16, duck17, duck18, duck19);
  
  function renderImage(image, duck) {
    image.setAttribute('src', duck.url);
    image.setAttribute('alt', duck.name);
    duck.timesShown++;
  }
  
  renderImage(image1, duck1);
  renderImage(image2, duck2);
  renderImage(image3, duck3);
  
  console.log(oddDucks);
}



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
duckImages.addEventListener('click', handleClick);
function roundCount(totalRounds, currentRound) {
  if (currentRound < totalRounds) {
    currentRound++;
  } else {
    duckImages.removeEventListener('click', handleClick);
    console.log('HERE IS THE DATA!!', oddDucks); 
    alert('Voting Complete!!');
  }
  return currentRound;
}
function findDuck(alt) {
  for (let i = 0; i < oddDucks.length; i++) {
    if (oddDucks[i].name === alt) {
      oddDucks[i].clicks++;
    }
  }
  console.log(oddDucks);
}
function getNames() {
  let names = [];
  for (let i = 0; i < oddDucks.length; i++) {
    names.push(oddDucks[i].name);
  }
  return names;
}
function getClicks() {
  let clicks = [];
  for (let i = 0; i < oddDucks.length; i++) {
    clicks.push(oddDucks[i].clicks);
  }
  return clicks;
}
function getViews() {
  let views = [];
  for (let i = 0; i < oddDucks.length; i++) {
    views.push(oddDucks[i].timesShown);
  }
  return views;
}
let button = document.getElementById('result-button');
button.addEventListener('click', viewChart);
function viewChart() {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getNames(),
      datasets: [{
        label: '# of Clicks',
        data: getClicks(),
        borderWidth: 1
      }, {
        label: '# of Views',
        data: getViews(),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
