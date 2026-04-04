import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
//import "./Login.css";
import officeImage from "../assests/img1.jpg";

const Signup = () => {
const navigate = useNavigate();
  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="left-section">
        <img src={officeImage} alt="Office" className="office-image" />
        <h2>Welcome Back...</h2>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="signup-card">
          <h3>Signup</h3>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button onClick={() => navigate("/")}>Signup</button>

        </div>
      </div>
    </div>
  );
};

export default Signup;
