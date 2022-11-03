"use strict"
// FUNCTIONS

function createGame( boardElement, nCell){
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

const boardContainer = document.querySelector(".board");
boardContainer.innerHTML= "";
const totBomb=49;

createGame(boardContainer, totBomb);