import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("/api/todos/")
      .then((res) => {
        setTodos(res.data);
      })
      .catch(() => {
        alert("Something Went Wrong");
      });
  }, []);
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand href="#">Todo App</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <TodoForm />
        <TodoList todos={todos} />
      </Container>
    </div>
  );
}

export default App;
