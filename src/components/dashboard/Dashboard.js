import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "./Todo";
import { TodoContext } from "../../contexts/TodoContext";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { todos, addSubTodo } = useContext(TodoContext);
  const [subTodoText, setSubTodoText] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // Redirect to the login page
  };
  const renderTodos = (todoList) => {
    return todoList.map((todo, index) => {
      const { text, subTodos } = todo;
      return (
        <ul className="todo-list">
          <li key={index} className="todo-task">
            {text}
          </li>
          {subTodos.length > 0 &&
            subTodos.map((subTodo) => (
              <li className="todo-task subtodo-task">{subTodo.text}</li>
            ))}
          <li>
            <div className="todo-input-container subtodo-input-container">
              <input
                type="text"
                onChange={(event) => setSubTodoText(event.target.value)}
                placeholder="Enter Subtodo todo"
              />
              <button
                className="todo-add-btn"
                onClick={() => addSubTodo(index, subTodoText)}
                type="submit"
              >
                Add Subtodo
              </button>
            </div>
          </li>
        </ul>
      );
    });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token !== "your-jwt-token") {
      navigate("/");
    }
  }, []);
  return (
    <div className="todo-dashboard-container">
      <h2 className="todo-title">Todo List Dashboard</h2>
      <button className="todo-signout-btn" onClick={handleLogout}>
        Signout
      </button>
      <Todo />
      {todos.length > 0 ? (
        renderTodos(todos)
      ) : (
        <li className="todo-task">No Todos...</li>
      )}
    </div>
  );
};

export default Dashboard;
