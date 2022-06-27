// Minecraft Fishing Sim CS10 Review

// Variables to store HTML Elements
let fish1Btn = document.getElementById("fish-1-btn");
let fish5Btn = document.getElementById("fish-5-btn");
let fishUntilBtn = document.getElementById("fish-until-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let resetBtn = document.getElementById("reset-btn");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fish1Btn.addEventListener("click", fish1BtnClicked);
fish5Btn.addEventListener("click", fish5BtnClicked);
fishUntilBtn.addEventListener("click", fishUntilClicked);
resetBtn.addEventListener("click", resetBtnClicked);

// Event handler for fish1Btn
function fish1BtnClicked() {
  catchFish();
}

// Event handler for fish5Btn
function fish5BtnClicked() {
  for (let _ = 1; _ <= 5; _++) {
    catchFish();
  }
}

// Event handler for fishUntilBtn
function fishUntilClicked() {
  while (numCod < 100) {
    catchFish();
  }
}

// Event handler for resetBtn
function resetBtnClicked() {
  numCod = 0;
  numSalmon = 0;
  numTropical = 0;
  numPuffer = 0;

  numCodSpan.innerHTML = numCod;
  numSalmonSpan.innerHTML = numSalmon;
  numTropicalSpan.innerHTML = numTropical;
  numPufferSpan.innerHTML = numPuffer;
}

// Process Selected Character and Simulate Catching a Single Fish
function catchFish() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === "steve") {
    // Steve: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    let randNum = Math.random();
    if (randNum < 0.7) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = "img/Raw-Cod.png";
    } else if (randNum < 0.9) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = "img/Raw-Salmon.png";
    } else if (randNum < 0.95) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = "img/Pufferfish.png";
    }
  } else if (character === "alex") {
    // Steve: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    let randNum = Math.random();
    if (randNum < 0.1) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = "img/Raw-Cod.png";
    } else if (randNum < 0.2) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = "img/Raw-Salmon.png";
    } else if (randNum < 0.5) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = "img/Pufferfish.png";
    }
  }
}
