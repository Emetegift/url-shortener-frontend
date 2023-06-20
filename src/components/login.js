import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
// import "../css/login.css";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

function Login() {
  const { formState: { errors }, reset, watch } = useForm();
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
        navigate("/UrlShortener", { state: { message: `Welcome` } });

        // Store access token in local storage
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refreshToken", data.refresh_token);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        setFlashMessage("Account not found. Please register first.");
      } else {
        setFlashMessage(error.response.data.message); // set flash message from error response
      }
    }
  };

  return (
    <div className="login container">
      <div className="form">
        {message && <div className="messg">{message}</div>}
        {flashMessage && <div className="flash-message2">{flashMessage}</div>}
        <form onSubmit={handleSubmit}>
          <Form.Group>
            <center>
              <h2>
                <b>Good to See you again</b>
              </h2>
            </center>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email address..."
              value={user.email}
              onChange={handleChange}
            />{" "}
            {errors.email && (
              <p style={{ color: "red" }}>
                <small>Email is required</small>
              </p>
            )}
            {errors.email?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Exceeded required character</small>
              </p>
            )}
          </Form.Group>

          <br />
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password..."
              value={user.password}
              onChange={handleChange}
            />{" "}
            {errors.password && (
              <p style={{ color: "red" }}>
                <small>Password is required</small>
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p style={{ color: "red" }}>
                <small>Password required</small>
              </p>
            )}
          </Form.Group>

          <Form.Group>
            <center>
              <Button type="submit" variant="primary">
                Login
              </Button>

              <h6>
                <Link to="/register">Do not have an account?</Link>
              </h6>
            </center>
          </Form.Group>

          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Login;
