import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
// import "../css/shorten.css";
import api from "./refresh_token";

export default function UrlShortener() {
    const [responseData, setResponseData] = useState({});
    const [urlLink, setUrlLink] = useState({ original_url: "original_url"});
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
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
      
        try {
          const response = await api.post(`${BASE_URL}/short-urls`, urlLink, config);
          const responseData = response.data;
          setResponseData(responseData);
          console.log(responseData);
        } catch (error) {
        console.error(error);
      }
  
      if (message) {
        setFlashMessage(message);
      }
  
      setUrlLink({ original_url: "" });
    };

  return (
    <div className="shot">
      <h2>Shorten URL</h2>
      {message && <div className="messg">{message}</div>}
      {flashMessage && <div className="flash-message2">{flashMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL here"
          name="original_url"
          value={urlLink.original_url}
          onChange={handleChange}
        />
        <button type="submit">Shorten</button>
      </form>
      {Object.keys(responseData).length > 0 && (
        <>
          <div className="details">
            <p>Short URL: <br /> <span>
                <a href={responseData.short_url} target="_blank" rel="noreferrer">{responseData.short_url}
                </a></span></p>

            <p>Original URL: <br />
                <span>
                    <a href={responseData.url} target="_blank" rel="noreferrer">{responseData.url}</a>
                </span>
                </p>
          </div>
        </>
      )}
      <div className="b2d-div">
        <Link to="/dashboard" className="b2d">
          Dashboard
        </Link>
      </div>
    </div>
  );
}






