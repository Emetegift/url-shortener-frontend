import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function SignUp() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();
  
  
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: ""
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
    // console.log(user)
    if (data.password === data.confirm_password) {
      try {
        const response = await axios.post("https://url-shortener-api-y3fb.onrender.com/register", data, {
          headers: {
            'Content-Type': 'application/json'
          }});
        console.log(response.data);
        navigate('/login', { state: { message: "Registration successful!" } });
        reset(); // Clear the form fields
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  console.log(watch("username"));
  console.log(watch("first_name"));
  console.log(watch("last_name"));
  console.log(watch("email"));
  console.log(watch("password"));
  console.log(watch("confirm_password"))

  return (
    <div className="container">
      <div className='form'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <center>
              <h1>Sign up and start shrinking!</h1>
              <small><Link to='/login'>Already have an account?</Link></small>
            </center>
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username..."
              {...register("username", { required: true, maxLength: 25 })}
            />
            {errors.username && <p style={{ color: "red" }}><small>Username is required</small></p>}
            {errors.username?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label htmlFor="first_name">First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name..."
              {...register("first_name", { required: true, maxLength: 50 })}
            />
            {errors.first_name && <p style={{ color: "red" }}><small>First Name is required</small></p>}
            {errors.first_name?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
          </Form.Group>
          <br></br>
          <Form.Group>
            <Form.Label htmlFor="last_name">Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name..."
              {...register("last_name", { required: true, maxLength: 50 })}
            />
            {errors.last_name && <p style={{ color: "red" }}><small>Last Name is required</small></p>}
            {errors.last_name?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
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
          <Form.Group>
            <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password..."
              {...register("confirm_password", { required: true, minLength: 6 })}
            />
            {errors.confirmPassword && <p style={{ color: "red" }}><small>Confirm Password</small></p>}
            {errors.confirmPassword?.type === "minLength" && <p style={{ color: "red" }}><small>Min character should be 6</small></p>}
          </Form.Group>
          <br></br>
          <Form.Group>
            <Button type="submit" variant="primary">SignUp</Button>
          </Form.Group>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
