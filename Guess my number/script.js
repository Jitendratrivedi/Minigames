'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent="Correct Number 😎😎"

// document.querySelector(".number").textContent=13
// document.querySelector(".score").textContent=10

// document.querySelector(".guess").value=23

let secretnumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore=0;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '🤦‍♂️🤦‍♀️No number';
  } else if (guess == secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number 😎😎';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';


    if(score>highscore){
        highscore=score
        document.querySelector('.highscore').textContent=score;
    }
    
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too high 😑😑';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost game 😫😫';
    }
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess too Low😐😐';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game😐😐';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(39, 30, 177)';
});
