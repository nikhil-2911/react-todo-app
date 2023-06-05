import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
