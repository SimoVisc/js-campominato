"use strict"
// FUNCTIONS



function createGame( boardElement, nCell){
  boardElement.innerHTML= "";
  for( let i=1; i<=100; i++) {
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("board-number");
    // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
    boardCell.addEventListener("click", function colorFunction(){
        console.log(this);
        this.style.backgroundColor = 'blue';
    })
    boardElement.append(boardCell);
  } 
}

document.getElementById("play").addEventListener("click", function () {
    const boardContainer = document.querySelector(".board")
    const totBomb = 49;
    createGame(boardContainer, totBomb);
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

const bomb = getRandomInt(1, 100);
let i= 1;

while(i <= 100){
    bomb += boardCell[i]
    i++;
}
if(bomb === boardCell ){
    return true;
}
return false;

