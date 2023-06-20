import { BASE_URL } from "../utils/constant";
import axios from "axios";
import QRCode from "qrcode.react";
import api from "./refresh_token";
import React, { useEffect, useState, useCallback } from "react";
import "../css/dashboard.css";
import { Link, useNavigate, Redirect } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState({});
  const [userLinks, setUserLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`${BASE_URL}/dashboard`, config)
      .then((response) => {
        const { data } = response;
        console.log("API response:", data);
        setUser(data || {});
        setUserLinks(data.user_links || []);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log("User:", user);
  console.log("User Links:", userLinks);

  const handleLinkClick = useCallback(
    (linkId) => {
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      api
        .patch(`${BASE_URL}/link/${linkId}/clicks`, null, config)
        .then((response) => {
          console.log("Link click recorded");
        })
        .catch((error) => {
          console.error("Error recording link click", error);
        });
    },
    []
  );

  const isLoggedIn = localStorage.getItem("accessToken");
  if (!isLoggedIn) {
    return (
      <div>
        <h1>Error</h1>
        <p>You must log in to access the dashboard.</p>
        <p>
          <Link to="/login">Go to Login Page</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="user-profile">
        <h4>User Profile</h4>
        
        <p className="title-head">
          Username: <span>{user.username}</span>
        </p>
        <p className="title-head">
          Email:{" "}
          <span>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </span>
        </p>
        <p className="title-head">
          First Name: <span>{user.first_name}</span>
        </p>
        <p className="title-head">
          Last Name: <span>{user.last_name}</span>
        </p>
      </div>

      <div className="analytics">
        <h4>Analytics</h4>
        <p className="totalclicks">Total Clicks: {user.analytics ? user.analytics.totalClicks : +1}</p>
      </div>

      {/* <div className="shorten-url">
        <Link to="/UrlShortener" className="link-url">
          Shorten URL
        </Link>
      </div>

      <div className="url-list">
        <h4>URL List</h4>
        <ul className="ul-list">
          {userLinks.map((item) => (
            <li key={item.id} className="li-list">
              <div>
                <p>
                  Original URL:{" "}
                  <a
                    href={item.original_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.original_url}
                  </a>
                </p>
                <p>
                  Short URL:{" "}
                  <a
                    href={item.short_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.short_url}
                  </a>
                </p>
                <p>
                  Clicks: {item.clicks} | QR Code:{" "}
                  <QRCode value={item.short_url} size={64} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <br />
      <Link to="/UrlShortener" className="btn btn-primary btn-lg">Go back</Link>
    </div>
  );
}

export default Dashboard;
