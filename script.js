"use strict";
const cardArray = [];
const gameContainer = document.querySelector(".game-container");

for (let i = 0; i <= 11; i++) {
  let newDiv = document.createElement("div");
  gameContainer.append(newDiv);
  newDiv.classList.add("card");
}
