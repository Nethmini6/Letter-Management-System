// import React, { useState } from "react";
// import axios from "axios";
// import "../App.css";
// import { useNavigate } from "react-router-dom";

// function New() {
// const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     letterCode: "",
//     letterHead: "",
//     from: "",
//     to: "",
//     receivedDate: "",
//     receiver: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(
//         "http://localhost:5000/api/letters/add",
//         formData
//       );

//       alert("Letter Added Successfully");

//       setFormData({
//         letterCode: "",
//         letterHead: "",
//         from: "",
//         to: "",
//         receivedDate: "",
//         receiver: "",
//       });

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="container">

//       <nav className="navbar">
//         <button>New</button>
//         <button>Previous</button>
//         <button>Logout</button>
//       </nav>

//       <div className="form-box">
//         <h1>Add new letter</h1>

//         <form onSubmit={handleSubmit}>

//           <div className="form-group">
//             <label>Letter Code :</label>
//             <input
//               type="text"
//               name="letterCode"
//               value={formData.letterCode}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Letter head :</label>
//             <input
//               type="text"
//               name="letterHead"
//               value={formData.letterHead}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>From :</label>
//             <input
//               type="text"
//               name="from"
//               value={formData.from}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>To :</label>
//             <input
//               type="text"
//               name="to"
//               value={formData.to}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Received Date :</label>
//             <input
//               type="date"
//               name="receivedDate"
//               value={formData.receivedDate}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Receiver :</label>
//             <input
//               type="text"
//               name="receiver"
//               value={formData.receiver}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button onClick={() => navigate("/")}>Add</button>

//         </form>
//       </div>
//     </div>
//   );
// }

// export default New;


import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

function New() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    letterCode: "",
    letterHead: "",
    from: "",
    to: "",
    receivedDate: "",
    receiver: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/letters/add",
        formData
      );

      alert("Letter Added Successfully");

      setFormData({
        letterCode: "",
        letterHead: "",
        from: "",
        to: "",
        receivedDate: "",
        receiver: "",
      });

    } catch (error) {
      console.log(error);
      alert("Error Adding Letter");
    }
  };

  return (
    <div className="main-container">

      {/* Navbar */}
      <div className="navbar">

        <button onClick={() => navigate("/new")}>
          New
        </button>

        <button onClick={() => navigate(-1)}>
          Previous
        </button>

        <button onClick={() => navigate("/")}>
          Logout
        </button>

      </div>

      {/* Form Card */}
      <div className="form-container">

        <h1>Add new letter</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Letter Code :</label>

            <input
              type="text"
              name="letterCode"
              value={formData.letterCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Letter head :</label>

            <input
              type="text"
              name="letterHead"
              value={formData.letterHead}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>From :</label>

            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>To :</label>

            <input
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Received Date :</label>

            <input
              type="date"
              name="receivedDate"
              value={formData.receivedDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Receiver :</label>

            <input
              type="text"
              name="receiver"
              value={formData.receiver}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="add-btn">
            Add
          </button>

        </form>

      </div>

    </div>
  );
}

export default New;