import React, { useState } from "react";
import "../css/login.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

function Login() {
    const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [flashMessage, setFlashMessage] = useState(""); // add flashMessage state variable

  const location = useLocation();
  const message = location.state && location.state.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission
    try {
      const response = await axios.post(`${BASE_URL}/login`, user);
      const data = response.data; // get data from response
      console.log(data);
      if (message) {
        setFlashMessage(message); // set flash message from location state if redirected from register component
      }
      setUser({
        email: "",
        password: ""
      });
      if (data) {
          // handle successful login, e.g. redirect to dashboard
          navigate("/dashboard", { state: { message: `Welcome` } });
    
          // Store access token in local storage
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("refreshToken", data.refresh_token);
          setTimeout(() => {
                window.location.reload();          
            }, 1000);
      }

    } catch (error) {
      console.error(error);
      setFlashMessage(error.response.data.message); // set flash message from error response
    }
  };

  return (
    <div className="div1">
      <h1>Login</h1>
      {message && <div className="messg">{message}</div>}
      {flashMessage && <div className="flash-message2">{flashMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email.."
          value={user.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="password">Password</label> <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password.."
          value={user.password}
          onChange={handleChange}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
        <span className="psw">
          Don't have an account? &nbsp;{" "}
          <Link className="link" to="/register">
            SignUp
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;