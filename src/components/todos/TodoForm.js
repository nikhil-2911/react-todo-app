import React, { useState, useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo({ title }); // Add the new todo to the TodoContext
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;
