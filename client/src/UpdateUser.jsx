import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);

        setName(result.data.name);
        setEmail(result.data.email);

       
        if (result.data.dob) {
          const dobString = result.data.dob;
          let formattedDob = dobString;

          
          if (dobString.includes("-")) {
            const [day, month, year] = dobString.split("-");
            formattedDob = `${year}-${month}-${day}`;
          }

          
          const dobDate = new Date(formattedDob);
          if (!isNaN(dobDate.getTime())) {
            setDob(formattedDob);
          } else {
            console.error("Invalid DOB value:", result.data.dob);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const updatedUser = { name, email, dob };

    axios
      .put(`http://localhost:3001/updateUser/${id}`, updatedUser)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Edit User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">DOB</label>
            <input
              type="date"
              placeholder="Enter Dob"
              className="form-control"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
