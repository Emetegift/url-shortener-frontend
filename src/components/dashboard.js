// import { BASE_URL } from "../utils/constant"; // Imports the 'BASE_URL' constant from the '../utils/constant' module
// import axios from "axios"; // Imports the 'axios' library
// import QRCode from "qrcode.react"; // Imports the 'QRCode' component from the 'qrcode.react' library
// import api from "./refresh_token"; // Imports the 'api' instance from the './refresh_token' module
// import React, { useEffect, useState, useCallback } from "react"; // Imports necessary components and hooks from 'react'
// import "../css/dashboard.css"; // Imports the 'dashboard.css' file located in the '../css' directory
// import { Link, useNavigate, Redirect } from "react-router-dom"; // Imports the 'Link', 'useNavigate', and 'Redirect' components from 'react-router-dom'

// function Dashboard() {
//   const [user, setUser] = useState({}); // Defines a state variable 'user' and its setter function 'setUser' using the 'useState' hook
//   const [userLinks, setUserLinks] = useState([]); // Defines a state variable 'userLinks' and its setter function 'setUserLinks' using the 'useState' hook
//   const navigate = useNavigate(); // Retrieves the 'navigate' function from the 'useNavigate' hook

//   useEffect(() => { // Defines an effect using the 'useEffect' hook
//     const token = localStorage.getItem("accessToken"); // Retrieves the "accessToken" value from the localStorage
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`, // Sets the authorization header with the "accessToken" value
//       },
//     };

//     api
//       .get(`${BASE_URL}/dashboard`, config) // Sends a GET request to the specified URL with the authorization header
//       .then((response) => {
//         const { data } = response; // Destructures the 'data' property from the response object
//         console.log("API response:", data); // Logs the API response data
//         setUser(data || {}); // Sets the 'user' state variable with the response data or an empty object
//         setUserLinks(data.user_links || []); // Sets the 'userLinks' state variable with the user links data or an empty array
//       })
//       .catch((error) => console.error(error)); // Handles and logs any errors that occur
//   }, []);

//   console.log("User:", user); // Logs the 'user' state variable
//   console.log("User Links:", userLinks); // Logs the 'userLinks' state variable

//   const handleLinkClick = useCallback( // Defines a memoized callback function 'handleLinkClick'
//     (linkId) => {
//       const token = localStorage.getItem("accessToken"); // Retrieves the "accessToken" value from the localStorage
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`, // Sets the authorization header with the "accessToken" value
//         },
//       };

//       api
//         .patch(`${BASE_URL}/link/${linkId}/clicks`, null, config) // Sends a PATCH request to update the link clicks with the authorization header
//         .then((response) => {
//           console.log("Link click recorded"); // Logs a success message when the link click is recorded
//         })
//         .catch((error) => {
//           console.error("Error recording link click", error); // Handles and logs any errors that occur while recording link click
//         });
//     },
//     []
//   );

//   // Check if the user is logged in
//   const isLoggedIn = localStorage.getItem("accessToken"); // Retrieves the "accessToken" value from the localStorage
//   if (!isLoggedIn) { // Checks if the user is not logged in
//     return (
//       <div>
//         <h1>Error</h1>
//         <p>You must log in to access the dashboard.</p>
//         <p>
//           <Link to="/login">Go to Login Page</Link> // Renders a link to the login page using the 'Link' component
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>

//       {/* // Displays the dtails of the user from the 'user' state variable */}
//       <div className="user-profile">
//         <h4>User Profile</h4>
//         <p className="title-head">
//           Username: <span>{user.username}</span> 
//         </p>
//         <p className="title-head">
//           Email:{" "}
//           <span>
//             <a href={`mailto:${user.email}`}>{user.email}</a> 
//           </span>
//         </p>
//         <p className="title-head">
//           First Name: <span>{user.first_name}</span> 
//         </p>
//         <p className="title-head">
//           Last Name: <span>{user.last_name}</span> 
//         </p>
//       </div>
//       {/* // Displays the total clicks (currently hardcoded as 0) */}
//       <div className="analytics">
//         <h4>Analytics</h4>
//         <p>Total Clicks: {0}</p> 
//       </div>

//       {/* // Renders a link to the URL Shortener page using the 'Link' component */}
//       <div className="shorten-url">
//         <Link to="/UrlShortener" className="link-url"> 
//           Shorten URL
//         </Link>
//       </div>

//       <div className="url-list">
//         <h4>URL List</h4>
//         <ul className="ul-list">
//           {userLinks.map((item) => ( // Maps over the 'userLinks' array and renders the list of URLs
//             <li key={item.id} className="li-list">
//               <div>
//                 <p>
//                 {/* // Displays the original URL as a link */}
//                   Original URL:{" "}
//                   <a
//                     href={item.original_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={() => handleLinkClick(item.id)}
//                   >
//                     {item.original_url}
//                   </a> 
//                 </p>
//                 <p>

//                 {/* // Displays the short URL as a link and calls 'handleLinkClick' when clicked */}
//                   Short URL:{" "}
//                   <a
//                     href={item.short_url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     onClick={() => handleLinkClick(item.id)}
//                   >
//                     {item.short_url}
//                   </a> 
//                 </p>
//               {/* Renders a QRCode component with the short URL as the value */}
//                 <QRCode
//                   value={item.short_url}
//                   size={128}
//                   level="H"
//                   includeMargin={true}
//                 /> 
//                 {/* // Displays the total clicks for the URL */}
//                 <p className="title-head">
//                   Clicks:{" "}
//                   <span>{item.analytics ? item.analytics.totalClicks : 0}</span> 
//                 </p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;







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
        <p>Total Clicks: {user.analytics ? user.analytics.totalClicks : 0}</p>
      </div>

      <div className="shorten-url">
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
                <QRCode
                  value={item.short_url}
                  size={128}
                  level="H"
                  includeMargin={true}
                />
                <p className="title-head">
                  Clicks:{" "}
                  <span>{item.analytics ? item.analytics.totalClicks : 0}</span>
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
