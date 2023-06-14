import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constant";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [flashMessage, setFlashMessage] = useState("");

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
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/login`, user);
      const data = response.data;
      console.log(data);
      if (message) {
        setFlashMessage(message);
      }
      setUser({
        email: "",
        password: ""
      });
      if (data) {
        navigate("/dashboard", { state: { message: `Welcome` } });
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("refreshToken", data.refresh_token);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.error(error);
      setFlashMessage(error.response.data.message);
    }
  };

  return (
    <div className="div1">
      <h1>Login</h1>
      {message && <div className="messg">{message}</div>}
      {flashMessage && <div className="flash-message2">{flashMessage}</div>}
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <h1>Start shrinking!</h1>
          <small>
            Do not have an account? <Link to="/register">Create an account</Link>
          </small>
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label  htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email address..."
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password..."
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Button as="sub" variant="primary" type="submit">
            Login
          </Button>
        </Form.Group>
        <br></br>
      </form>
    </div>
  );
}

export default Login;