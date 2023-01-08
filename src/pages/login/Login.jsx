import React, { useState } from "react";
import "./login.css";
import logo from "./bus.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  TextField,
  CircularProgress,
  Paper,
} from "@material-ui/core";

const Login = () => {
  const navigate = useNavigate();
  const auth = () => {
    navigate("/home");
  };
  const register = () => {
    navigate("/register");
  };

  const [success, setSuccess] = useState(false);

  const [key, setKey] = useState("");

  if (success == true) {
    navigate("/home");
    localStorage.setItem("auth", key);
  }

  console.log(key);

  const [email, setEmails] = useState("");

  const [password, setPassWords] = useState("");

  const [loading, setLoading] = useState(false);

  const [token, setToken] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setEmails(e.target.value);
  };

  const handlePassword = (e) => {
    setPassWords(e.target.value);
  };

  const handleIn = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const log = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/user/auth/login", data)
      .then((response) => {
        if (response.status == 201) {
          setToken(response.data);
          localStorage.setItem("token", response.data);
          navigate("/home");
        }
      })
      .catch((error) => {
        let message = String(error.response.data.message);
        if (error.response.data.statusCode == 401) {
          toast.error(message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (error.response.data.statusCode == 400) {
          toast.error(message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    // .then((res) => {
    //   var data = res.data.data;
    //   localStorage.setItem("keys", JSON.stringify(res.data.token));
    //   // window.open("/admin","_self");
    //   navigate("/home");
    //   setLoading(false);
    // })
    // .then((res) => console.log(res));
  };

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  return (
    <>
      <div className="login-section">
        <ToastContainer />
        <div className="login-page">
          <div className="login-header">
            <div className="login-item">
              <img src={logo}></img>
            </div>
            <div className="login-item">
              <h5>Login Form</h5>
            </div>
            <form onSubmit={log} className="form-group">
              <div className="form-input">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleIn}
                  className=""
                  placeholder="email"
                />
              </div>
              <div className="form-input">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleIn}
                  className=""
                  placeholder="Password"
                />
              </div>
              <div className="form-input">
                <button type="submit">Sign In</button>
              </div>
              <div className="form-input-btn">
                <button onClick={register}>Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
