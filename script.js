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
  let innerDiv = document.createElement("div");
  let frontDiv = document.createElement("div");
  let backDiv = document.createElement("div");
  let frontImage = document.createElement("img");
  let backImage = document.createElement("img");
  let dataType = document.outerDiv.classList.add("flip-card-outer");
  innerDiv.classList.add("flip-card-inner");
  frontDiv.classList.add("flip-card-front");
  backDiv.classList.add("flip-card-back");
  frontImage.classList.add("front-image");
  backImage.classList.add("back-image");
  frontImage.setAttribute("src", "assets/BackOfCard.png");
  backImage.setAttribute("src", cardArray[i].image);

  frontDiv.append(frontImage);
  backDiv.append(backImage);
  innerDiv.append(frontDiv, backDiv);
  outerDiv.append(innerDiv);
  gameContainer.append(outerDiv);
}
gameContainer.addEventListener("click", (e) => {
  console.log(e.target.parentNode.parentNode.parentNode);
  if (e.target.classList.contains("front-image")) {
    e.target.parentNode.parentNode.classList.add("flip");
  }
  // setTimeout(() => {
  //   e.target.parentNode.parentNode.classList.remove("flip");
  // }, 1000);
});
