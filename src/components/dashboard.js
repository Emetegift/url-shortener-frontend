import { BASE_URL } from "../utils/constant";
import axios from "axios";
import QRCode from "qrcode.react";
import api from "./refresh_token";
import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link, useNavigate, Redirect } from "react-router-dom";

function Dashboard() {
  const [users, setUser] = useState({});
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

  // Check if the user is logged in
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

  console.log("Users:", users);
  console.log("User Links:", userLinks);

  const totalClicks = users.analytics ? users.analytics.totalClicks : 0;

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="user-profile">
        <h2>User Profile</h2>
        <p className="title-head">
          Username: <span>{users.username}</span>
        </p>
        <p className="title-head">
          Email:{" "}
          <span>
            <a href={`mailto:${users.email}`}>{users.email}</a>
          </span>
        </p>
        <p className="title-head">
          First Name: <span>{users.first_name}</span>
        </p>
        <p className="title-head">
          Last Name: <span>{users.last_name}</span>
        </p>
      </div>
      <div className="analytics">
        <h2>Analytics</h2>
        <p>Total Clicks: {totalClicks}</p>
      </div>

      <div className="shorten-url">
        <Link to="/UrlShortener" className="link-url">
          Shorten URL
        </Link>
      </div>

      <div className="url-list">
        <h2>URL List</h2>
        <ul className="ul-list">
          {userLinks.map((item) => (
            <li key={item.id} className="li-list">
              <div>
                <p>
                  Original URL:{" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.url}
                  </a>
                </p>
                <p>
                  Short URL:{" "}
                  <a
                    href={item.short_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.short_url}
                  </a>
                </p>
                <QRCode value={item.short_url} size={128} level="H" includeMargin={true} />
                <p className="title-head">
                  Clicks: <span>{item.analytics ? item.analytics.totalClicks : 0}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
