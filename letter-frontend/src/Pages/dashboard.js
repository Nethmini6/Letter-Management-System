import React from "react";
import "../App.css";
import officeImage from "../assests/img1.jpg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div className="dashboard-container">

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-buttons">
          <button onClick={() => navigate("/")}>New</button>
          <button onclick={() => navigate("/")}>Previous</button>
          <button onClick={() => navigate("/")}>Logout</button>
        </div>
      </div>

      {/* Content */}
      <div className="dashboard-content">
        <h2>Welcome to the site ......</h2>
        <img src={officeImage} alt="Office" className="dashboard-image" />
      </div>

    </div>
  );
};

export default Dashboard;
