import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import '../css/Home.css';
import image1 from '../images/image1.jpg';
import image4 from '../images/image4.jpg';
import api from "./refresh_token";

export default function Home() {
  const { formState: { errors }, reset, watch } = useForm();
  const navigate = useNavigate();
  const [urlLink, setUrlLink] = useState({ original_url: "", custom_url: "" }); // Add custom_url state
  const [message, setMessage] = useState("");
  const [flashMessage, setFlashMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUrlLink((prevUrlLink) => ({
      ...prevUrlLink,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setMessage("Please log in to trim the URL.");
      navigate("/login"); // Redirect to the login page using useNavigate
      return;
    }
  
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  
    const requestBody = {
      ...urlLink,
      user_id: 1, // Replace with the actual user ID
    };
  
    try {
      const response = await api.post(`${BASE_URL}/short-urls`, requestBody, config);
      const responseData = response.data;
  
      if (responseData.message) {
        setFlashMessage(responseData.message);
      }
  
      // Navigate to UrlShortener page and pass the response data as state
      navigate("/UrlShortener", { state: { responseData } });
    } catch (error) {
      console.error(error);
    }
  
    setUrlLink({ original_url: "", custom_url: "" }); // Reset both original_url and custom_url
  };
  

  // Check if the user is logged in
  
  return (
    <div className="home">
      <h2 className='head'>Welcome to <i><b>QuickLink!</b></i></h2>
      <p className='content'>Simplify your URLs and make them more manageable with QuickLink,
        <br /> the ultimate URL shortening service.
        <br /> Whether you're sharing links on social media,
        <br /> sending emails, or simply want to keep your URLs concise,
        <br /> QuickLink has got you covered.</p>
      <div className="img1">
        <img src={image1} alt="Image" />
      </div>
      <div className="img2">
        <img src={image4} alt="Image" />
      </div>
    
      <Link to="/register" className="btn btn-primary btn-lg">Get Started for Free</Link>

      <br />
      <br />

    </div>
  );
}
