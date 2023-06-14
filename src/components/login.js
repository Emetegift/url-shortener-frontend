import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function Login() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();
  
  
  const [user, setUser] = useState({
    email: "",
    password: ""

    // email:user.email,
    // password:user.password
  });

  const [flashMessage, setFlashMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const onSubmit = async (data) => {
    console.log(data)
    if (data.password === data.confirm_password) {
      try {
        const response = await axios.post("http://localhost:5000/login", user, data);
        console.log(response.data);
        navigate('/register', { state: { message: "Login successful!" } });
        reset(); // Clear the form fields
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  console.log(watch("email"));
  console.log(watch("password"))

  return (
    <div className="container">
      <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <center>
              <h1>Login and start shrinking!</h1>
              <small>Do not have an account? <Link to='/register'>Sign Up</Link></small>
            </center>
          </Form.Group>
          <br></br>
          
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address..."
              {...register("email", { required: true, maxLength: 100 })}
            />
            {errors.email && <p style={{ color: "red" }}><small>Email is required</small></p>}
            {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && <p style={{ color: "red" }}><small>Password is required</small></p>}
            {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Password is required</small></p>}
          </Form.Group>
          <br></br>
          <br></br>
          <Form.Group>
            <Button type="submit" variant="primary">Login</Button>
          </Form.Group>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default Login;
