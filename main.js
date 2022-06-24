// Minecraft Fishing Sim CS10 Review

// Variables to store HTML Elements
let goFishBtn = document.getElementById("go-fish-btn");
let numFishInput = document.getElementById("num-fish");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
goFishBtn.addEventListener("click", goFishBtnClicked);

function goFishBtnClicked() {
  // Determine # of times to fish
  let numFish = +numFishInput.value;

  for (let _ = 1; _ <= numFish; _++) {
    catchFish();
  }
}

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
