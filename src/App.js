import React from 'react';
import './App.css';

export default function App() {
//variables
 let currentPlayer ;
 let gameBoard = [
     ['', '', ''],
     ['', '', ''],
     ['', '', '']
  ];

  let turns = 0

//functions
  function randomStartingPlayer() {
    (Math.random() < 0.5) ? currentPlayer = 'X' : currentPlayer = 'O';
  }
  randomStartingPlayer() 

  function switchTurn() {
    if (turns<8) {
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    turns++;}
  }


/// handle
  function handleClickStart(){
    randomStartingPlayer()
    gameBoard = [
        ['null', 'null', 'null'],
        ['null', 'null', 'null'],
        ['null', 'null', 'null']
      ];
      window.location.reload();

}
function handleClick(event) {
  const button = event.target;
  const buttonId = button.id;
    const clickedButton = event.target;
    console.log(event.target, 'before change inside event listener ')
    clickedButton.textContent = currentPlayer;
 
  if (buttonId <= 3) {
    let col = buttonId-1 
    gameBoard[0][col]=currentPlayer
  } else if (buttonId >= 4 && buttonId <= 6 ){
    let col = buttonId-4 
    gameBoard[1][col]=currentPlayer
  } else if (buttonId >= 7 && buttonId <=9){
    let col = buttonId-7
    gameBoard[2][col]=currentPlayer
  } else {
    console.log('ooops')
  }
if (turns<8){
  switchTurn()
} else {
  let x = checkWinner()
  console.log('winner is:', x)
}

}
const buttons = document.querySelectorAll('.square');
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});

  return (
    <div className="container">
        <button className="buttonStart" onClick={handleClickStart}> Start New Game </button>
        <div className="board">
            <button className="square" id="1" onClick={handleClick}>   </button>
            <button className="square" id="2" onClick={handleClick}>   </button>
            <button className="square" id="3" onClick={handleClick}>   </button>
            <button className="square" id="4" onClick={handleClick}>   </button>
            <button className="square" id="5" onClick={handleClick}>   </button>
            <button className="square" id="6" onClick={handleClick}>   </button>
            <button className="square" id="7" onClick={handleClick}>   </button>
            <button className="square" id="8" onClick={handleClick}>   </button>
            <button className="square" id="9" onClick={handleClick}>   </button>
        </div>
    </div> 
  );
}

