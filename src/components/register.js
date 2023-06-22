import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/register.css";
import { Form, Button } from "react-bootstrap";

function SignUp() {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();
  const [flashMessage, setFlashMessage] = useState("");

  const onSubmit = async (data) => {
    if (data.password === data.confirm_password) {
      try {
        const response = await axios.post("https://quicklink.onrender.com/register", data, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log(response.data);
        navigate('/login', { state: { message: "Registration successful!" } });
        reset(); // Clear the form fields
      } catch (error) {
        console.error(error);
        if (error.response) {
          if (error.response.data && error.response.data.error) {
            setFlashMessage(`Error: ${error.response.data.error}`);
          } else if (error.response.status === 400 && error.response.data && error.response.data.error === "Username already exists") {
            setFlashMessage(`Username already exists.`);
          } else if (error.response.status === 400 && error.response.data && error.response.data.error === "Email already exists") {
            setFlashMessage(`Email already exists.`);
          } else {
            setFlashMessage(`An error occurred: ${error.message}`);
          }
        } else {
          setFlashMessage(`Network error: ${error.message}`);
        }
      }
    } else {
      setFlashMessage("Passwords do not match");
    }
  };

  useEffect(() => {
    // Apply styles to make the background color cover the whole page
    const container = document.querySelector('.container');
    const body = document.querySelector('body');

    body.style.margin = '0';
    body.style.padding = '0';
    container.style.minHeight = '100vh';
    container.style.backgroundColor = '#2196F3';
  }, []);

  return (
    <div className="container">
      <div className='form'>
        {flashMessage && <div className="flash-message2">{flashMessage}</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-reg">
            <Form.Group className="signup">
                <h2><b>Sign up and start shrinking!</b></h2>
                <h4><Link to='/login'>Already have an account?</Link></h4>
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
                placeholder="Enter email..."
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              />
              {errors.email && <p style={{ color: "red" }}><small>Email is required</small></p>}
              {errors.email?.type === "pattern" && <p style={{ color: "red" }}><small>Invalid email format</small></p>}
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password..."
                {...register("password", { required: true, minLength: 8   })}
              />
              {errors.password && <p style={{ color: "red" }}><small>Password is required</small></p>}
              {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Password must be at least 8 characters long</small></p>}
            </Form.Group>
            <br></br>
            <Form.Group>
              <Form.Label htmlFor="confirm_password">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password..."
                {...register("confirm_password", { required: true, validate: (value) => value === watch("password") })}
              />
              {errors.confirm_password && <p style={{ color: "red" }}><small>Password confirmation is required</small></p>}
              {errors.confirm_password?.type === "validate" && <p style={{ color: "red" }}><small>Passwords do not match</small></p>}
            </Form.Group>
            <br></br>
          
            <Button type="submit" className="btn btn-success" variant="dark">Sign Up</Button>
           <br />
            <Form.Group>
              {/* <h4><Link to='/login'>Already have an account?</Link></h4> */}
           
            </Form.Group>

          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
