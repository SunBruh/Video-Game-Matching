"use strict";
const cardArray = [
  {
    name: "CallOfDuty",
    image: "/assets/COD.png",
    id: 1,
  },
  {
    name: "CallOfDuty",
    image: "/assets/COD.png",
    id: 2,
  },
  {
    name: "MineCraft",
    image: "/assets/Minecraft.png",
    id: 3,
  },
  {
    name: "MineCraft",
    image: "/assets/Minecraft.png",
    id: 4,
  },
  {
    name: "Zelda",
    image: "/assets/Zelda.png",
    id: 5,
  },
  {
    name: "Zelda",
    image: "/assets/Zelda.png",
    id: 6,
  },
  {
    name: "AgeOfEmpires",
    image: "/assets/AgeOfEmpires.png",
    id: 7,
  },
  {
    name: "AgeOfEmpires",
    image: "/assets/AgeOfEmpires.png",
    id: 8,
  },
  {
    name: "SuperSmash",
    image: "/assets/SuperSmash.png",
    id: 9,
  },
  {
    name: "SuperSmash",
    image: "/assets/SuperSmash.png",
    id: 10,
  },
  {
    name: "Metroid",
    image: "/assets/Metroid.png",
    id: 11,
  },
  {
    name: "Metroid",
    image: "/assets/Metroid.png",
    id: 12,
  },
];
const gameContainer = document.querySelector(".game-container");
function shuffle(cardArray) {
  let m = cardArray.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = cardArray[m];
    cardArray[m] = cardArray[i];
    cardArray[i] = t;
  }
  return cardArray;
}
shuffle(cardArray);
console.log(cardArray);
for (let i = 0; i < cardArray.length; i++) {
  let outerDiv = document.createElement("div");
  let frontImage = document.createElement("img");
  let backImage = document.createElement("img");


  outerDiv.classList.add("flip-card-outer");
  frontImage.classList.add("front-image");
  backImage.classList.add("back-image");

  outerDiv.setAttribute("data-framework", cardArray[i].name);

  backImage.setAttribute("src", "assets/BackOfCard.png");
  frontImage.setAttribute("src", cardArray[i].image);


  outerDiv.append(frontImage, backImage);
  gameContainer.append(outerDiv);
}


gameContainer.addEventListener("click", (e) => {
  //console.log(e.target.parentNode);
  if (e.target.classList.contains("front-image")) {
    e.target.parentNode.parentNode.classList.add("flip");
  }
});

const cards = document.querySelectorAll(".flip-card-outer");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(e) {
  if (e.target.classList.contains("back-image")) {
    e.target.parentNode.classList.add("flip");
  }

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = e.target.parentNode.getAttribute("data-framework");
    console.log(firstCard);
  } else {
    hasFlippedCard = false;
    secondCard = e.target.parentNode.getAttribute("data-framework");

    if (firstCard === secondCard) {
      const removePair = document.querySelectorAll(".flip");
      removePair.forEach((card) => {
        setTimeout(() => {
          card.style.visibility = "hidden";
        }, 1000);
      });
      //
      console.log("it's a match!");
    } else {
      const allCards = document.querySelectorAll(".flip-card-outer");
      allCards.forEach((card) => {
        if (card.classList.contains("flip")) {
          setTimeout(() => {
            card.classList.remove("flip");
          }, 1000);
        }
      });
    }
  }
}

cards.forEach((card) => card.addEventListener("click", flipCard));

var timerVariable = setInterval(countUpTimer, 1000);
var totalSeconds = 0;

function countUpTimer() {
  ++totalSeconds;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds - minutes * 60;
  document.getElementById("timer").innerHTML = `0${minutes}:${seconds}`;
}
countUpTimer();

const resetbutton = document.querySelector(".reset");

resetbutton.addEventListener("click", () => {
  location.reload();
});

//win condition for the game in our javascript
//when all things all hidden "you have won" that will stop the timer and throw up the pop up window that we want to do.
// Need a start button to initiate the game. Timer should start on click (Start button);
