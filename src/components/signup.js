import React  from "react";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

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
            if (data.password === data.confirmPassword) {
            try {
                const response = await axios.post("http://localhost:5000/signup", user, data);
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

        return (
            <div className="container">
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <center>
                    <h1>Sign up and start shrinking!</h1>
                    <small>Already have an account? <Link to='/login'>Login</Link></small>
                    </center>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" 
                    placeholder='Enter username...'
                    {...register("username", { required: true, maxLength: 25 })}
                    />
                    {errors.username && <p style={{ color: "red" }}><small>Username is required</small></p>}
                    {errors.username?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
                </Form.Group>

                <br></br>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"
                        placeholder='Enter first name...'
                        {...register("firstName", {required:true, maxLength:50})}
                        // value={firstName}
                        // name="firstName"
                        // onChange={(e)=>{setFirstName(e.target.value)}}
                        >
                        </Form.Control>
                        {errors.firstName && <p style={{color:"red"}}><small>First Name is required</small></p>}
                        {errors.firstName?.type==="maxLength" && <p style={{color:"red"}}><small>Exceeded required character</small></p>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" 
                        placeholder='Enter last name...'
                        {...register ("lastName", {required:true, maxLength:50})}
                        // value={lastName}
                        // name="lastName"
                        // onChange={(e)=>{setLastName(e.target.value)}}
                        >
                        </Form.Control>
                        {errors.lastName && <p style={{color:"red"}}><small>Last Name is required</small></p>}
                        {errors.lastName?.type==="maxLength" && <p style={{color:"red"}}>E<small>xceeded required character</small></p>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" 
                        placeholder='Enter email address...'
                        {...register("email",{required:true, maxLength:100})}
                        // value={email}
                        // name="email"
                        // onChange={(e)=>{setEmail(e.target.value)}}
                        >
                        </Form.Control>
                        {errors.email && <p style={{color:"red"}}><small>Email is required</small></p>}
                        {errors.email?.type==="maxLength" && <p style={{color:"red"}}><small>Exceeded required character</small></p>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        placeholder='Enter password...'
                        {...register("password", {required:true, minLength:6})}
                        // value={password}
                        // name="password"
                        // onChange={(e)=>{setPassword(e.target.value)}}
                        >
                        </Form.Control>
                        {errors.password && <p style={{color:"red"}}><small>Password is required</small></p>}
                        {errors.password?.type==="minLength" && <p style={{color:"red"}}><small>Password is required</small></p>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" 
                        placeholder='Confirm password...'
                        {...register("confirmPassword", {required:true, minLength:6})}
                        // value={confirmPassword}
                        // name="confirmPassword"
                        // onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        >
                        </Form.Control>
                        {errors.confirmPassword && <p style={{color:"red"}}><small>Confirm Password </small></p>}
                        {errors.confirmPassword?.type==="minLength" && <p style={{color:"red"}}><small>Min character should be 6</small></p>}
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
