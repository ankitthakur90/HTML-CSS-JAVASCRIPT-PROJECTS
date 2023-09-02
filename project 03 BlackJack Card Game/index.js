let player = {
  name:"player-1",
  chips:"150"
}

let sum =0 ;
let cardArray = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//  let sumEl = document.querySelector("#sum-el");




let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $ " + player.chips;


let cards = document.getElementById("cards-el");

function randomNumber(){
   
    let randomNum = (Math.floor(Math.random() * 13) + 1);
    if(randomNum >10){
      return 10;
    }else if(randomNum === 1){
      return 11;
    }else{
      return randomNum;
    }
}

function startGame() {
  cardArray = [];
  isAlive = true;
  let firstCard = randomNumber();
  let secondCard = randomNumber();
  sum = firstCard + secondCard;
  cardArray.push(firstCard);
  cardArray.push(secondCard);

  renderGame();
}

function renderGame() {
  cards.textContent = "Cards: ";
  for (let i = 0; i < cardArray.length; i++) {
    cards.textContent += cardArray[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if(isAlive == true && hasBlackJack == false){
  let card = randomNumber();
  sum += card;
  cardArray.push(card);
  renderGame();
 }
}
