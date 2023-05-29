import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Todolist from "./components/Todolist";
import React, { useState } from "react";
import TicTacToe from "./components/TicTacToe";

function App() {
  const [showChild, setShowChild] = useState(false);
  const [showChildToDo, setShowChildToDo] = useState(false);
  const [showChildTicTacToe, setShowChildTicTacToe] = useState(false);

  const handleButtonClick = () => {
    setShowChild(!showChild);
  };
  const handleToDo = () => {
    setShowChildToDo(!showChildToDo);
  };
  const handleTicTacToe = () => {
    setShowChildTicTacToe(!showChildTicTacToe);
  };

  return (
    <div className="App">
      <Header
        onButtonClick={handleButtonClick}
        buttonToDo={handleToDo}
        buttonTicTacToe={handleTicTacToe}
      />
      {showChild && <Counter />}
      {showChildToDo && <Todolist />}
      {showChildTicTacToe && <TicTacToe />}
    </div>
  );
}

export default App;
