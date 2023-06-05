import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TodoProvider } from "./contexts/TodoContext";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
}

export default App;
