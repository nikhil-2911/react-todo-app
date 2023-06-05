import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const getToken = await login(username, password); // Call the login API endpoint
      const { token } = getToken;
      localStorage.setItem("token", token);
      navigate("/dashboard"); // Redirect to the dashboard page
    } catch (error) {
      toast.error("Incorrect User Credentials!");
    }
  };

  return (
    <>
      <Toaster />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            disabled={username === "" && password === ""}
            type="submit"
            className="login-btn"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
