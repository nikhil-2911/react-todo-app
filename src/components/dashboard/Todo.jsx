import React, { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import "./Dashboard.css";

const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useContext(TodoContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText("");
    }
  };
  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        placeholder="Enter todo"
      />
      <button className="todo-add-btn" onClick={handleSubmit} type="submit">
        Add
      </button>
    </div>
  );
};

export default Todo;
