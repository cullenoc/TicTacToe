import React, { useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const Game = () => {

  var[board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  var[stepNumber, setStepNumber] = useState(0);
  var[xIsNext, setXisNext] = useState(true);
  var winner = calculateWinner(board)
  
  const jumpToStart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setStepNumber(stepNumber = 0);
    setXisNext(xIsNext = true);
  };

  const result = () => {
    if (winner != null) {
      return("Winner: " + winner);
    };
    if (stepNumber === 9) {
      return("Tie Game");
    };
    var next = (xIsNext === true ? "X" : "O");
    return("Next Player: " + next);
  };

  const handleClick = (index) => {
    if(winner != null || board[index] != null) {return;}
    board[index] = (xIsNext === true ? "X" : "O");
    setStepNumber(stepNumber + 1);
    if (xIsNext) {setXisNext(xIsNext = false)}
    else setXisNext(xIsNext = true);
  };

  return (

    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} 
        onClick={(x) => handleClick(x)} />
      <div className='info-wrapper'>
          <div>
            <button onClick={() => jumpToStart()}>Go to Start</button>
          </div>
          <h3>{result()}</h3>
      </div>
    </>
  );
};

export default Game;
