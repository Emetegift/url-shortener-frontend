// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../utils/constant";
// import QRCode from "qrcode.react";
// import api from "./refresh_token";
// import '../css/shortener.css';

// export default function UrlShortener() {
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
//       user_id: +1, // Replace with the actual user ID
//     };

//     try {
//       const response = await api.post(`${BASE_URL}/short-urls`, requestBody, config);
//       const responseData = response.data;
//       setResponseData(responseData);
//       console.log(responseData);
//     } catch (error) {
//       console.error(error);
//     }

//     if (message) {
//       setFlashMessage(message);
//     }

//     setUrlLink({ original_url: "", custom_url: "" }); // Reset both original_url and custom_url
//   };

//   return (
//     <div className="contain">
//       <h1>Trim your long URL</h1>
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
//           <Form.Label htmlFor="custom_url">Customize URL (optional):</Form.Label> {/* Add a new input field for custom_url */}
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

//       <br />
//       {Object.keys(responseData).length > 0 && (
//         <div className="details">
//           <Form.Group>
//             <Form.Label htmlFor="short_url">Shortened URL:</Form.Label>
//             <Form.Control
//               type="text"
//               name="short_url"
//               readOnly
//               value={responseData.shortened_url}
//             />
//           </Form.Group>
//           <br />
//           <Form.Group>
//             <Form.Label htmlFor="original_url">Original URL:</Form.Label>
//             <Form.Control
//               type="text"
//               name="original_url"
//               readOnly
//               value={responseData.original_url}
//             />
//           </Form.Group>

//           <br />
//           <div className="qrcode">
//             <QRCode value={responseData.shortened_url} />
//           </div>
//         </div>
//       )}

//       <br />
//       <div className="b2d-div">
//         <Link to="/dashboard" className="b2d">
//           Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// }




















// // import React, { useState, useEffect } from "react";
// // import { useForm } from "react-hook-form";
// // import { Form, Button } from "react-bootstrap";
// // import axios from "axios";
// // import { Link } from "react-router-dom";
// // import { BASE_URL } from "../utils/constant";
// // import QRCode from "qrcode.react";
// // import api from "./refresh_token";

// // export default function UrlShortener() {
// //   const { formState: { errors }, reset, watch } = useForm();
// //   const [responseData, setResponseData] = useState({});
// //   const [urlLink, setUrlLink] = useState({ original_url: "", custom_url: "" });
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
      
// //       // Send API request to update view count
// //       await axios.get(`${BASE_URL}/${responseData.shortened_url}`);
// //     } catch (error) {
// //       console.error(error);
// //     }

// //     if (message) {
// //       setFlashMessage(message);
// //     }

// //     setUrlLink({ original_url: "", custom_url: "" });
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Trim your long URL</h2>
// //       {message && <div className="messg">{message}</div>}
// //       {flashMessage && <div className="flash-message2">{flashMessage}</div>}
// //       <form onSubmit={handleSubmit}>
// //         <Form.Group>
// //           <Form.Label htmlFor="original url">Original URL:</Form.Label>
// //           <Form.Control
// //             type="text"
// //             name="original_url"
// //             placeholder="Paste long link here..."
// //             value={urlLink.original_url}
// //             onChange={handleChange}
// //           />
// //           {errors.original_url && <p style={{ color: "red" }}><small>Long URL is required</small></p>}
// //           {errors.original_url?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
// //         </Form.Group>
// //         <br />

// //         <Form.Group>
// //           <Form.Label htmlFor="custom_url">Custom URL (optional):</Form.Label>
// //           <Form.Control
// //             type="text"
// //             name="custom_url"
// //             placeholder="Enter custom URL..."
// //             value={urlLink.custom_url}
// //             onChange={handleChange}
// //           />
// //         </Form.Group>
// //         <br />

// //         <Form.Group>
// //           <center>
// //             <Button type="submit" variant="primary">Trim URL</Button>
// //           </center>
// //         </Form.Group>
// //       </form>

// //       {Object.keys(responseData).length > 0 && (
// //         <div className="details">
// //           <Form.Group>
// //             <Form.Label htmlFor="short_url">Shortened URL:</Form.Label>
// //             <Form.Control
// //               type="text"
// //               name="short_url"
// //               readOnly
// //               value={responseData.shortened_url}
// //             />
// //           </Form.Group>
// //           <br />
// //           <Form.Group>
// //             <Form.Label htmlFor="original_url">Original URL:</Form.Label>
// //             <Form.Control
// //               type="text"
// //               name="original_url"
// //               readOnly
// //               value={responseData.original_url}
// //             />
// //           </Form.Group>

// //           <br />
// //           <br />
// //           <br />
// //           <div className="qrcode">
// //             <QRCode value={responseData.shortened_url} />
// //           </div>
// //         </div>
// //       )}

// //       <br />
// //       <div className="b2d-div">
// //         <Link to="/dashboard" className="b2d">
// //           Dashboard
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }









import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import QRCode from "qrcode.react";
import api from "./refresh_token";
import '../css/shortener.css';

export default function UrlShortener() {
  const { formState: { errors }, reset, watch } = useForm();
  const [responseData, setResponseData] = useState({});
  const [urlLink, setUrlLink] = useState({ original_url: "", custom_url: "" });
  const [message, setMessage] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const [errorStatus, setErrorStatus] = useState(null);

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
  
    const requestBody = {
      ...urlLink,
      user_id: +1, // Replace with the actual user ID
    };
  
    try {
      const response = await api.post(`${BASE_URL}/short-urls`, requestBody, config);
      const responseData = response.data;
      setResponseData(responseData);
      console.log(responseData);
    } catch (error) {
      if (error.response && error.response.data) {
        const { status, message } = error.response.data;
        setFlashMessage(`Error ${status}: ${message}`);
      } else {
        console.error(error);
      }
    }
  
    setUrlLink({ original_url: "", custom_url: "" });
  };

  return (
    <div className="contain">
      <h1>Trim your long URL</h1>
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
          <Form.Label htmlFor="custom_url">Customize URL (optional):</Form.Label>
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

      {Object.keys(responseData).length > 0 && (
        <div className="details">
          <div className="qrcode">
              <QRCode value={responseData.shortened_url} />
          </div>
          <Form.Group>
            <Form.Label htmlFor="short_url">Shortened URL:</Form.Label>
            <Form.Control
              type="text"
              name="short_url"
              readOnly
              value={responseData.shortened_url}
            />
            
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label htmlFor="original_url">Original URL:</Form.Label>
            <Form.Control
              type="text"
              name="original_url"
              readOnly
              value={responseData.original_url}
            />
          </Form.Group>

          <br />
          
        </div>
      )}
      
    </div>
  );
}
