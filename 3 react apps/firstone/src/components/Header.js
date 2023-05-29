/* import React, { useState } from "react"; */
import "./Header.css";
function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={props.onButtonClick}>Counter</button>
          </li>
          <li>
            <button onClick={props.buttonToDo}>To Do List</button>
          </li>
          <li>
            <button onClick={props.buttonTicTacToe}>TicTacToe</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
