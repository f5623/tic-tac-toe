import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container">
        <button className="buttonStart" > Start New Game </button>
        <div className="board">
            <button className="square" id="1" >   </button>
            <button className="square" id="2" >   </button>
            <button className="square" id="3" >   </button>
            <button className="square" id="4" >   </button>
            <button className="square" id="5" >   </button>
            <button className="square" id="6" >   </button>
            <button className="square" id="7" >   </button>
            <button className="square" id="8" >   </button>
            <button className="square" id="9" >   </button>
        </div>
    </div> 
  );
}

