import React from 'react'
import ValueBox from './ValueBox'

const Board = ({ squares, onClick }) => {
  const square = (i) => {
    return (
      <ValueBox 
        value={squares[i]} 
        onClick={() => onClick(i)} 
      />
    );
  };

  return (
    <div className='board'>
      <div className="row">
        {square(0)}
        {square(1)}
        {square(2)}
      </div>
      <div className="row">
        {square(3)}
        {square(4)}
        {square(5)}
      </div>
      <div className="row">
        {square(6)}
        {square(7)}
        {square(8)}
      </div>
    </div>
  );
}

export default Board;
