// // import React from "react";
// // import "../css/dashboard.css";
// // import { Link } from "react-router-dom";
// // import { BASE_URL } from "../utils/constant";
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import QRCode from 'qrcode.react';
// // import api from "./refresh_token";

// // function Dashboard() {
// //   const [users, setUsers] = useState([]);
// //   const [user_links, setUserLinks] = useState([]);
// //   // const [dashboard, setDashboard] = useState([]);
// //   // ...

// //   useEffect(() => {
// //     const token = localStorage.getItem("accessToken"); // Get the token from local storage
// //     const config = {
// //       headers: {
// //         Authorization: `Bearer ${token}`, // Include the token in the authorization header with the "Bearer" prefix
// //       },
// //     };

// //     api.get(`${BASE_URL}/dashboard`, config) // Fetch data from the first link
// //       .then((response) => {
// //         // Process the data
// //         const users = response.data;
// //         const user_links = response.data.user_links;
// //         setUserLinks(user_links);
// //         setUsers(users);
// //         // ...

// //         // Fetch data from another link within the same file
// //         // return axios.get(`${BASE_URL}/all-link`, config);
// //       })
// //       // .then((response) => {
// //       //   // Process the data from the other link
// //       //   const otherData = response.data;
// //       //   setDashboard(otherData);
// //       // ...
// //       // })
// //       .catch((error) => console.error(error));
// //   }, []);

  
// //   // Check if the user is logged in
// //   const isLoggedIn = localStorage.getItem("accessToken");
// //   if (!isLoggedIn) {
// //     // Redirect to the login page if not logged in
// //     return <Redirect to="/login" />;
// // //   }


// // import { BASE_URL } from "../utils/constant";
// // import axios from "axios";
// // import QRCode from 'qrcode.react';
// // import api from "./refresh_token";
// // import React, { useEffect, useState } from "react";
// // import "../css/dashboard.css";
// // import { Link, useNavigate } from "react-router-dom";


// //   function Dashboard() {
    
// //     const [username, setUsername] = useState("");
// //     const [users, setUsers] = useState({});
// //     const [userLinks, setUserLinks] = useState([]);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //       const token = localStorage.getItem("accessToken");
// //       const config = {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       };

// //       api.get(`${BASE_URL}/dashboard`, config)
// //         .then((response) => {
// //           const { data } = response;
// //           console.log("API response:", data);
// //           setUsername(data.username || "");
// //           setUsers(data.users || {});
// //           setUserLinks(data.user_links || []);
// //         })
// //         .catch((error) => console.error(error));
// //     }, []);

// //     // Check if the user is logged in
// //     const isLoggedIn = localStorage.getItem("accessToken");
// //     if (!isLoggedIn) {
// //       // Redirect to the login page if not logged in
// //       navigate("/login");
// //       return null;
// //     }

// //     console.log("Username:", username);
// //     console.log("Users:", users);
// //     console.log("User Links:", userLinks);

// //   return (
// //     <div>
// //       <h1>Dashboard</h1>

// //       <div className="user-profile">
// //         <h2>User Profile</h2>
// //         <p className="title-head">
// //           Username: <span>{users.username}</span>
// //         </p>
// //         <p className="title-head">
// //           Email:{" "}
// //           <span>
// //             <a href={`mailto:${users.email}`}>{users.email}</a>
// //           </span>
// //         </p>
// //         <p className="title-head">
// //           First Name: <span>{users.first_name}</span>
// //         </p>
// //         <p className="title-head">
// //           Last Name: <span>{users.last_name}</span>
// //         </p>
// //       </div>

// //       <div className="shorten-url">
// //         <Link to="/UrlShortener" className="link-url">
// //           Shorten URL
// //         </Link>
// //       </div>

// //       <div className="url-list">
// //         <h2>URL List</h2>
// //         <ul className="ul-list">
// //           {userLinks.slice().reverse().map((item) => (
// //             <li key={item.id} className="li-list">
// //               <div>
// //                 <p>
// //                   Original URL: <a href={item.url}
// //                   target="_blank"
// //                   >{item.url}</a>
// //                 </p>
// //                 <p>
// //                   Short URL: <a href={item.short_url}
// //                   target="_blank"
// //                   >{item.short_url}</a>
// //                 </p>
// //                 <p>
// //                   <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.short_url}`} alt="QR Code" />
// //                 </p>
// //                 <p>Clicks: {item.visit}</p>
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;


// // import React, { useEffect, useState } from "react";
// // import "../css/dashboard.css";
// // import { Link, useNavigate } from "react-router-dom";
// // import { BASE_URL } from "../utils/constant";
// // import axios from "axios";
// // import QRCode from 'qrcode.react';
// // import api from "./refresh_token";

// // function Dashboard() {
// //   const [users, setUsers] = useState({});
// //   const [userLinks, setUserLinks] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const token = localStorage.getItem("accessToken");
// //     const config = {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     };

// //     api.get(`${BASE_URL}/dashboard`, config)
// //       .then((response) => {
// //         const { data } = response;
// //         setUsers(data.users);
// //         setUserLinks(data.user_links);
// //       })
// //       .catch((error) => console.error(error));
// //   }, []);

// //   // Check if the user is logged in
// //   const isLoggedIn = localStorage.getItem("accessToken");
// //   if (!isLoggedIn) {
// //     // Redirect to the login page if not logged in
// //     navigate("/login");
// //     // return null;
// //   }

//   // return (
//   //   <div>
//   //     <h1>Dashboard</h1>

//   //     <div className="user-profile">
//   //       <h2>User Profile</h2>
//   //       <p className="title-head">
//   //         Username: <span>{users.username}</span>
//   //       </p>
//   //       <p className="title-head">
//   //         Email:{" "}
//   //         <span>
//   //           <a href={`mailto:${users.email}`}>{users.email}</a>
//   //         </span>
//   //       </p>
//   //       <p className="title-head">
//   //         First Name: <span>{users.first_name}</span>
//   //       </p>
//   //       <p className="title-head">
//   //         Last Name: <span>{users.last_name}</span>
//   //       </p>
//   //     </div>

//   //     <div className="shorten-url">
//   //       <Link to="/UrlShortener" className="link-url">
//   //         Shorten URL
//   //       </Link>
//   //     </div>

//   //     <div className="url-list">
//   //       <h2>URL List</h2>
//   //       <ul className="ul-list">
//   //         {userLinks.slice().reverse().map((item) => (
//   //           <li key={item.id} className="li-list">
//   //             <div>
//   //               <p>
//   //                 Original URL: <a href={item.url} target="_blank">{item.url}</a>
//   //               </p>
//   //               <p>
//   //                 Short URL: <a href={item.short_url} target="_blank">{item.short_url}</a>
//   //               </p>
//   //               <p>
//   //                 <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.short_url}`} alt="QR Code" />
//   //               </p>
//   //               <p>Clicks: {item.visit}</p>
//   //             </div>
//   //           </li>
//   //         ))}
//   //       </ul>
//   //     </div>
//   //   </div>
//   // );
// // }

// // export default Dashboard;



// // import { BASE_URL } from "../utils/constant";
// // import axios from "axios";
// // import QRCode from 'qrcode.react';
// // import api from "./refresh_token";
// // import React, { useEffect, useState } from "react";
// // import "../css/dashboard.css";
// // import { Link, useNavigate } from "react-router-dom";


// //   function Dashboard() {
// //     const [username, setUsername] = useState("");
// //     const [users, setUsers] = useState({});
// //     const [userLinks, setUserLinks] = useState([]);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //       const token = localStorage.getItem("accessToken");
// //       const config = {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       };

// //       api.get(`${BASE_URL}/dashboard`, config)
// //         .then((response) => {
// //           const { data } = response;
// //           console.log("API response:", data);
// //           setUsername(data.username || "");
// //           setUsers(data.users || {});
// //           setUserLinks(data.user_links || []);
// //         })
// //         .catch((error) => console.error(error));
// //     }, []);

// //     // Check if the user is logged in
// //     const isLoggedIn = localStorage.getItem("accessToken");
// //     if (!isLoggedIn) {
// //       // Redirect to the login page if not logged in
// //       navigate("/login");
// //       return null;
// //     }

// //     console.log("Username:", username);
// //     console.log("Users:", users);
// //     console.log("User Links:", userLinks);

// //     return (
// //       <div>
// //         <h1>Dashboard</h1>

// //         <div className="user-profile">
// //           <h2>User Profile</h2>
// //           <p className="title-head">
// //             Username: <span>{users.username}</span>
// //           </p>
// //           <p className="title-head">
// //             Email:{" "}
// //             <span>
// //               <a href={`mailto:${users.email}`}>{users.email}</a>
// //             </span>
// //           </p>
// //           <p className="title-head">
// //             First Name: <span>{users.first_name}</span>
// //           </p>
// //           <p className="title-head">
// //             Last Name: <span>{users.last_name}</span>
// //           </p>
// //         </div>

// //         <div className="shorten-url">
// //           <Link to="/UrlShortener" className="link-url">
// //             Shorten URL
// //           </Link>
// //         </div>

// //         <div className="url-list">
// //           <h2>URL List</h2>
// //           <ul className="ul-list">
// //             {userLinks.slice().reverse().map((item) => (
// //               <li key={item.id} className="li-list">
// //                 <div>
// //                   <p>
// //                     Original URL: <a href={item.url} target="_blank">{item.url}</a>
// //                   </p>
// //                   <p>
// //                     Short URL: <a href={item.short_url} target="_blank">{item.short_url}</a>
// //                   </p>
// //                   <p>
// //                     <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.short_url}`} alt="QR Code" />
// //                   </p>
// //                   <p>Clicks: {item.visit}</p>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     );

























    

//     // return (
//     //   <div>
//     //     <h1>Dashboard</h1>

//     //     <div className="user-profile">
//     //       <h2>User Profile</h2>
//     //       <p className="title-head">
//     //         Username: <span>{users.username}</span>
//     //       </p>
//     //       <p className="title-head">
//     //         Email:{" "}
//     //         <span>
//     //           <a href={`mailto:${users.email}`}>{users.email}</a>
//     //         </span>
//     //       </p>
//     //       <p className="title-head">
//     //         First Name: <span>{users.first_name}</span>
//     //       </p>
//     //       <p className="title-head">
//     //         Last Name: <span>{users.last_name}</span>
//     //       </p>
//     //     </div>

//     //     <div className="shorten-url">
//     //       <Link to="/UrlShortener" className="link-url">
//     //         Shorten URL
//     //       </Link>
//     //     </div>

//     //     <div className="url-list">
//     //       <h2>URL List</h2>
//     //       <ul className="ul-list">
//     //         {userLinks.slice().reverse().map((item) => (
//     //           <li key={item.id} className="li-list">
//     //             <div>
//     //               <p>
//     //                 Original URL: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
//     //               </p>
//     //               <p>
//     //                 Short URL: <a href={item.short_url} target="_blank" rel="noopener noreferrer">{item.short_url}</a>
//     //               </p>
//     //               <p>
//     //                 <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.short_url}`} alt="QR Code" />
//     //               </p>
//     //               <p>Clicks: {item.visit}</p>
//     //             </div>
//     //           </li>
//     //         ))}
//     //       </ul>
//     //     </div>
//     //   </div>
//     // );
//   // }

//   // export default Dashboard;






//   import { BASE_URL } from "../utils/constant";
// import axios from "axios";
// import QRCode from 'qrcode.react';
// import api from "./refresh_token";
// import React, { useEffect, useState } from "react";
// import "../css/dashboard.css";
// import { Link, useNavigate, Redirect } from "react-router-dom";

// function Dashboard() {
//   const [username, setUsername] = useState("");
//   const [users, setUsers] = useState({});
//   const [userLinks, setUserLinks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     api.get(`${BASE_URL}/dashboard`, config)
//       .then((response) => {
//         const { data } = response;
//         console.log("API response:", data);
//         setUsername(data.username || "");
//         setUsers(data.users || {});
//         setUserLinks(data.user_links || []);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   // Check if the user is logged in
//   const isLoggedIn = localStorage.getItem("accessToken");
//   if (!isLoggedIn) {
//     // Redirect to the login page if not logged in
//     navigate("/login");
//     return null;
//   }

//   console.log("Username:", username);
//   console.log("Users:", users);
//   console.log("User Links:", userLinks);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <div className="user-profile">
//         <h2>User Profile</h2>
//         <p className="title-head">
//           Username: <span>{users.username}</span>
//         </p>
//         <p className="title-head">
//           Email:{" "}
//           <span>
//             <a href={`mailto:${users.email}`}>{users.email}</a>
//           </span>
//         </p>
//         <p className="title-head">
//           First Name: <span>{users.first_name}</span>
//         </p>
//         <p className="title-head">
//           Last Name: <span>{users.last_name}</span>
//         </p>
//       </div>

//       <div className="shorten-url">
//         <Link to="/UrlShortener" className="link-url">
//           Shorten URL
//         </Link>
//       </div>

//       <div className="url-list">
//         <h2>URL List</h2>
//         <ul className="ul-list">
//           {userLinks.slice().reverse().map((item) => (
//             <li key={item.id} className="li-list">
//               <div>
//                 <p>
//                   Original URL: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
//                 </p>
//                 <p>
//                   Short URL: <a href={item.short_url} target="_blank" rel="noopener noreferrer">{item.short_url}</a>
//                 </p>
//                 <p>
//                   <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.short_url}`} alt="QR Code" />
//                 </p>
//                 <p>Clicks: {item.visit}</p>
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
import QRCode from 'qrcode.react';
import api from "./refresh_token";
import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import { Link, useNavigate, Redirect } from "react-router-dom";

function Dashboard() {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState({});
  const [userLinks, setUserLinks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.get(`${BASE_URL}/dashboard`, config)
      .then((response) => {
        const { data } = response;
        console.log("API response:", data);
        setUsername(data.username || "");
        setUsers(data.users || {});
        setUserLinks(data.user_links || []);
      })
      .catch((error) => console.error(error));
  }, []);

  // Check if the user is logged in
  const isLoggedIn = localStorage.getItem("accessToken");
  if (!isLoggedIn) {
    // Redirect to the login page if not logged in
    navigate("/login");
    return null;
  }

  console.log("Username:", username);
  console.log("Users:", users);
  console.log("User Links:", userLinks);

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

      <div className="shorten-url">
        <Link to="/UrlShortener" className="link-url">
          Shorten URL
        </Link>
      </div>

      <div className="url-list">
        <h2>URL List</h2>
        <ul className="ul-list">
          {userLinks.slice().reverse().map((item) => (
            <li key={item.id} className="li-list">
              <div>
                <p>
                  Original URL: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                </p>
                <p>
                  Short URL: <a href={item.short_url} target="_blank" rel="noopener noreferrer">{item.short_url}</a>
                </p>
                <div className="qr-code-container">
                  <QRCode value={item.short_url} size={150} />
                </div>
                <p>Clicks: {item.visit}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

