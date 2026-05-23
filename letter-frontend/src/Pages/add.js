import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AddLetter = () => {
 const navigate = useNavigate();
  const [formData, setFormData] = useState({
    code: "",
    head: "",
    from: "",
    to: "",
    date: "",
    receiver: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    alert("Letter Added!");
  };

  return (
    <div className="add-container">

      {/* Navbar */}
      <div className="navbar">
        <div className="nav-buttons">
          <button>New</button>
          <button>Previous</button>
          <button>Logout</button>
        </div>
      </div>

      {/* Form */}
      <div className="form-card">
        <h2>Add new letter</h2>

        <div className="form-group">
          <label>Letter Code :</label>
          <input name="code" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Letter head :</label>
          <input name="head" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>From :</label>
          <input name="from" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>To :</label>
          <input name="to" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Received Date :</label>
          <input type="date" name="date" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Receiver :</label>
          <input name="receiver" onChange={handleChange} />
        </div>

        <button className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLetter;