import React, {useState} from 'react'
import Inside from './Inside'


function Board() {

  const [xisNext, setxisNext] =useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    if((squares[i])||CalculateWinner(squares)){
      return ;
    }
    const nextSquares = squares.slice();
    if(xisNext){
      nextSquares[i] = "X";
    }
    else
    {
      nextSquares[i]= "O";
    }

    setSquares(nextSquares);
    setxisNext(!xisNext);

  }
  function CalculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
        
      }  

  return null;
    }

    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xisNext ? "X" : "O");        /*need to check about this ? function*/
    }
  

  return (
    <div>
       <div >{status}</div>
       <div className="board-row">                          {  /*handleClick={handleClick} value={value} number={0}*/}
        <Inside value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Inside value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Inside value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Inside value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Inside value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Inside value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Inside value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Inside value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Inside value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </div>
  )
}

export default Board
