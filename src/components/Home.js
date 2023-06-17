// // import React from 'react'
// // import { useForm } from "react-hook-form";
// // import { Form, Button } from "react-bootstrap";
// // import UrlShortener from './UrlShortener';

// // import {Link} from 'react-router-dom'

// // const Home=()=>{
// //     const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
// //     return (
//         // <div className="home container">
//         //     <h1 className='heading'>Welcome to <i><b>QuickLink!</b></i></h1>
//         //     <p className='content'>Simplify your URLs and make them more manageable with QuickLink, 
//         //         <br /> the ultimate URL shortening service. 
//         //         <br /> Whether you're sharing links on social media, 
//         //         <br /> sending emails, or simply want to keep your URLs concise, 
//         //         <br /> QuickLink has got you covered.</p>
//         //         <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>

//         //     <br />
//         //     <br />
           
//         // </div>
        


          
            
        
        
        
// //     )
// // }
// // export default Home






// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import { Form, Button } from "react-bootstrap";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import { BASE_URL } from "../utils/constant";
// // import QRCode from "qrcode.react";
// // import api from "./refresh_token";

// // export default function Home() {
// //   const { formState: { errors }, reset, watch } = useForm();
// //   const [responseData, setResponseData] = useState({});
// //   const [urlLink, setUrlLink] = useState({ original_url: "", custom_url: "" }); // Add custom_url state
// //   const [message, setMessage] = useState("");
// //   const [flashMessage, setFlashMessage] = useState("");

// //   const handleChange = (event) => {
// //     const { name, value } = event.target;
// //     setUrlLink((prevUrlLink) => ({
// //       ...prevUrlLink,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const accessToken = localStorage.getItem("accessToken");
// //     const config = {
// //       headers: {
// //         Authorization: `Bearer ${accessToken}`,
// //       },
// //     };

// //     const requestBody = {
// //       ...urlLink,
// //       user_id: 1, // Replace with the actual user ID
// //     };

// //     try {
// //       const response = await api.post(`${BASE_URL}/short-urls`, requestBody, config);
// //       const responseData = response.data;
// //       setResponseData(responseData);
// //       console.log(responseData);
// //     } catch (error) {
// //       console.error(error);
// //     }

// //     if (message) {
// //       setFlashMessage(message);
// //     }

// //     setUrlLink({ original_url: "", custom_url: "" }); // Reset both original_url and custom_url
// //   };

// //   return (

// //     <div className="home container">
// //             <h1 className='heading'>Welcome to <i><b>QuickLink!</b></i></h1>
// //             <p className='content'>Simplify your URLs and make them more manageable with QuickLink, 
// //                 <br /> the ultimate URL shortening service. 
// //                 <br /> Whether you're sharing links on social media, 
// //                 <br /> sending emails, or simply want to keep your URLs concise, 
// //                 <br /> QuickLink has got you covered.</p>
// //                 <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>

// //             <br />
// //             <br />
           
 
// //         <h2>Trim your long URL</h2>
// //         {message && <div className="messg">{message}</div>}
// //         {flashMessage && <div className="flash-message2">{flashMessage}</div>}
// //         <form onSubmit={handleSubmit}>
// //           <Form.Group>
// //             <Form.Label htmlFor="original url">Original URL:</Form.Label>
// //             <Form.Control
// //               type="text"
// //               name="original_url"
// //               placeholder="Paste long link here..."
// //               value={urlLink.original_url}
// //               onChange={handleChange}
// //             />
// //             {errors.original_url && <p style={{ color: "red" }}><small>Long URL is required</small></p>}
// //             {errors.original_url?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
// //           </Form.Group>
// //           <br />

// //           <Form.Group>
// //             <Form.Label htmlFor="custom_url">Custom URL (optional):</Form.Label> {/* Add a new input field for custom_url */}
// //             <Form.Control
// //               type="text"
// //               name="custom_url"
// //               placeholder="Enter custom URL..."
// //               value={urlLink.custom_url}
// //               onChange={handleChange}
// //             />
// //           </Form.Group>
// //           <br />

// //           <Form.Group>
// //             <center>
// //               <Button type="submit" variant="primary">Trim URL</Button>
// //             </center>
// //           </Form.Group>
// //         </form>
// //       </div>
// //   );
// //   }





// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../utils/constant";
// import QRCode from "qrcode.react";
// import api from "./refresh_token";

// export default function Home() {
//   const { formState: { errors }, reset, watch } = useForm();
//   const [responseData, setResponseData] = useState({});
//   const [urlLink, setUrlLink] = useState({ original_url: "", custom_url: "" }); // Add custom_url state
//   const [message, setMessage] = useState("");
//   const [flashMessage, setFlashMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUrlLink((prevUrlLink) => ({
//       ...prevUrlLink,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const accessToken = localStorage.getItem("accessToken");
//     const config = {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };

//     const requestBody = {
//       ...urlLink,
//       user_id: 1, // Replace with the actual user ID
//     };

//     try {
//       const response = await api.post(`${BASE_URL}/short-urls`, requestBody, config);
//       const responseData = response.data;
//       setResponseData(responseData);
//       console.log(responseData);

//       if (responseData.message) {
//         setFlashMessage(responseData.message);
//       }
//     } catch (error) {
//       console.error(error);
//     }

//     setUrlLink({ original_url: "", custom_url: "" }); // Reset both original_url and custom_url
//   };

//   return (
//     <div className="home container">
//       <h1 className='heading'>Welcome to <i><b>QuickLink!</b></i></h1>
//       <p className='content'>Simplify your URLs and make them more manageable with QuickLink, 
//           <br /> the ultimate URL shortening service. 
//           <br /> Whether you're sharing links on social media, 
//           <br /> sending emails, or simply want to keep your URLs concise, 
//           <br /> QuickLink has got you covered.</p>
//       <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>

//       <br />
//       <br />

//       <h2>Trim your long URL</h2>
//       {message && <div className="messg">{message}</div>}
//       {flashMessage && <div className="flash-message2">{flashMessage}</div>}
//       <form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label htmlFor="original url">Original URL:</Form.Label>
//           <Form.Control
//             type="text"
//             name="original_url"
//             placeholder="Paste long link here..."
//             value={urlLink.original_url}
//             onChange={handleChange}
//           />
//           {errors.original_url && <p style={{ color: "red" }}><small>Long URL is required</small></p>}
//           {errors.original_url?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
//         </Form.Group>
//         <br />

//         <Form.Group>
//           <Form.Label htmlFor="custom_url">Custom URL (optional):</Form.Label> {/* Add a new input field for custom_url */}
//           <Form.Control
//             type="text"
//             name="custom_url"
//             placeholder="Enter custom URL..."
//             value={urlLink.custom_url}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <br />

//         <Form.Group>
//           <center>
//             <Button type="submit" variant="primary">Trim URL</Button>
//           </center>
//         </Form.Group>
//       </form>

//       {Object.keys(responseData).length > 0 && (
//         <div>
//           <h3>Response Data:</h3>
//           <pre>{JSON.stringify(responseData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }






import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const accessToken = localStorage.getItem("accessToken");
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   };

  //   const requestBody = {
  //     ...urlLink,
  //     user_id: 1, // Replace with the actual user ID
  //   };

  //   try {
  //     const response = await api.post(`${BASE_URL}/short-urls`, requestBody, config);
  //     const responseData = response.data;

  //     if (responseData.message) {
  //       setFlashMessage(responseData.message);
  //     }

  //     // Navigate to UrlShortener page and pass the response data as state
  //     navigate("/UrlShortener", { state: { responseData } });
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   setUrlLink({ original_url: "", custom_url: "" }); // Reset both original_url and custom_url
  // };


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
    <div className="home container">
      <h1 className='heading'>Welcome to <i><b>QuickLink!</b></i></h1>
      <p className='content'>Simplify your URLs and make them more manageable with QuickLink,
        <br /> the ultimate URL shortening service.
        <br /> Whether you're sharing links on social media,
        <br /> sending emails, or simply want to keep your URLs concise,
        <br /> QuickLink has got you covered.</p>
      <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>

      <br />
      <br />

      <h2>Trim your long URL</h2>
      {message && <div className="messg">{message}</div>}
      {flashMessage && <div className="flash-message2">{flashMessage}</div>}
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="original url">Original URL:</Form.Label>
          <Form.Control
            type="text"
            name="original_url"
            placeholder="Paste long link here..."
            value={urlLink.original_url}
            onChange={handleChange}
          />
          {errors.original_url && <p style={{ color: "red" }}><small>Long URL is required</small></p>}
          {errors.original_url?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label htmlFor="custom_url">Custom URL (optional):</Form.Label> {/* Add a new input field for custom_url */}
          <Form.Control
            type="text"
            name="custom_url"
            placeholder="Enter custom URL..."
            value={urlLink.custom_url}
            onChange={handleChange}
          />
        </Form.Group>
        <br />

        <Form.Group>
          <center>
            <Button type="submit" variant="primary">Trim URL</Button>
          </center>
        </Form.Group>
      </form>
    </div>
  );
}
