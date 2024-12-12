import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Form from "../Form";
import { Container, Dropdown } from "./styles"; 
import TodoList from "../TodoList";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchData = async () => {
    try {
      const response = await axios.get("/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) return null;
    await axios.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);
    fetchData();
    setInput("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "non-completed") return !todo.completed;
    return true;
  });

  return (
    <Container>
      <h2>List of things</h2>
      <Form input={input} setInput={setInput} addTodo={addTodo} />

      {}
      <Dropdown onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="non-completed">Non-Completed</option>
      </Dropdown>

      <TodoList todos={filteredTodos} fetchData={fetchData} />
    </Container>
  );
}

export default Todo;
