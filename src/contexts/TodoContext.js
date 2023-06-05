import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      text: todoText,
      subTodos: [],
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const addSubTodo = (parentIndex, subTodoText) => {
    const parentTodo = todos[parentIndex];
    const newSubTodo = {
      text: subTodoText,
    };
    parentTodo.subTodos.push(newSubTodo);
    setTodos([...todos]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, addSubTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
