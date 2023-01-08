import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const auth = () => {
    navigate("/home");
  };
  const register = () => {
    navigate("/register");
  };

  const [reg, setReg] = useState([
    {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
    },
  ]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setReg({ ...reg, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios
      .post("http://localhost:8000/user", {
        names: reg.firstName + " " + reg.lastName,
        phone: reg.phone,
        email: reg.email,
        password: reg.password,
        access_level: "admin",
      })
      .then((res) => {
        toast.success("account was successfull created", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      })
      .catch((error) => {
        let message = String(error.response.data.message);
        toast.error("Booking failed!!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

    // .then(res => navigate('/login'))
    // .catch(err => console.log(err));
    console.log(reg);
  };
  return (
    <>
      <div className="login-section">
         <ToastContainer/>
        <div className="login-page">
          <div className="login-header">
            <div className="login-item"></div>
            <div className="login-item">
              <h5 style={{ paddingTop: "50px" }}>Create Account</h5>
            </div>
            <form className="form-group" onSubmit={handleSubmit}>
              <div className="form-input">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleInputs}
                  value={reg.fname}
                  className=""
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="lastName"
                  onChange={handleInputs}
                  value={reg.lname}
                  className=""
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="phone"
                  onChange={handleInputs}
                  value={reg.username}
                  className=""
                  placeholder="phone"
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="email"
                  onChange={handleInputs}
                  value={reg.email}
                  className=""
                  placeholder="email"
                  required
                />
              </div>

              <div className="form-input">
                <input
                  type="password"
                  name="password"
                  onChange={handleInputs}
                  value={reg.password}
                  className=""
                  placeholder="password"
                  required
                />
              </div>
              <div style={{ paddingBottom: "30px;" }} className="form-input">
                <button type="submit">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
