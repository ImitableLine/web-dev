import React, { useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (index) => {
    if (winner || squares[index]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newSquares));
  };

  const calculateWinner = (squares) => {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleSquareClick(index)}>
        {squares[index]}
      </button>
    );
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next Player: ${xIsNext ? "X" : "O"}`;
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  return (
    <div>
      <div className="status">{renderStatus()}</div>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        <br></br>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        <br></br>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {winner && (
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      )}
      <style></style>
    </div>
  );
}

export default TicTacToe;
