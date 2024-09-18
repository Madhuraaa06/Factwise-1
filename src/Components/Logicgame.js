import React, { useState } from 'react';
import Board from './Board';
import './all.css'; 

const calculate = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Logicgame = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculate(squares) || squares[i]) return;

    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsNext(true);  // Reset to 'X' starting
  };

  const winner = calculate(squares);
  const status = winner
    ? `WINNER: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Logicgame;
