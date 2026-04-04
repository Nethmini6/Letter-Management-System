/*import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import officeImage from "../assets/img1.jpg";

const Login = () => {
const navigate = useNavigate();
  return (
    <div className="login-container">
      { Left Section }
      <div className="left-section">
        <img src={officeImage} alt="Office" className="office-image" />
        <h2>Welcome Back...</h2>
      </div>

      { Right Section }
      <div className="right-section">
        <div className="login-card">
          <h3>Log In</h3>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <button>Login</button>

          <p className="create-account"
          onClick={() => navigate("/signup")}
          >
            Create New Account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;*/



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import officeImage from "../assests/img1.jpg";

const Login = () => {
  const navigate = useNavigate();

  // ✅ State for inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Login handler
  const handleLogin = () => {
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      alert("Login Successful!");
      navigate("/dashboard"); // change route if needed
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={officeImage} alt="Office" className="office-image" />
        <h2>Welcome Back...</h2>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-card">
          <h3>Log In</h3>

          {/* ✅ Username */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* ✅ Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* ✅ Login Button */}
          <button onClick={handleLogin}>Login</button>

          {/* Signup Navigation */}
          <p
            className="create-account"
            onClick={() => navigate("/signup")}
          >
            Create New Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

