import React, { useState } from "react";

export default function Todolist() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log("Handle input change");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
    console.log("Handle form submit");
  };

  const handleDelete = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1); // at index delete one
    setTodoList(updatedTodoList); // update the state of array
    console.log("Handle delete");
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        {" "}
        {/* press enter to submit aswell */}
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {/* // map over todo array using index as key */}
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo} {/* display todo */}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
