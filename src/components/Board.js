import React from "react";
import Square from "./Square";

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8] 

const Board = (props /* squares, onClick */) => (
  <div className="board">
    {array.map(x => <Square key={x} value={props.squares[x]} 
    onClick={() => props.onClick(x)}/>)}
  </div>
);

export default Board;
