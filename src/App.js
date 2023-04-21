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

  function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
        return gameBoard[i][0];
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
        return gameBoard[0][i];
      }
    }
  
    // Check diagonals
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
      return gameBoard[0][0];

    }
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
      return gameBoard[0][2];

    }
  
    // No winner
    return null;
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
    // console.log(event.target, 'before change inside event listener ')
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
  alert(`winner is: ${x}`)
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

