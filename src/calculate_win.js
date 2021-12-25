export function calculateWinner(squares) {
  if (squares[0] &&
    ((squares[0] === squares[1] && squares[0] === squares[2]) ||
    (squares[0] === squares[4] && squares[0] === squares[8]) ||
    (squares[0] === squares[3] && squares[0] === squares[6]))) {
      return squares[0];
    }
  if (squares[1] && 
    squares[1] === squares[4] && squares[1] === squares[7]) {
    return squares[1];
  }
  if (squares[2] &&
    ((squares[2] === squares[4] && squares[2] === squares[6]) ||
    (squares[2] === squares[5] && squares[2] === squares[8]))) {
      return squares[2];
    }
  if (squares[3] &&
    squares[3] === squares[4] && squares[3] === squares[5]) {
    return squares[3];
  }
  if (squares[6] &&
    squares[6] === squares[7] && squares[6] === squares[8]) {
    return squares[6];
  }
  return null;
}
