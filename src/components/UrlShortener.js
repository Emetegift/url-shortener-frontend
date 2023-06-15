// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../utils/constant";
// // import "../css/shorten.css";
// import api from "./refresh_token";

// export default function UrlShortener() {
//   const {formState: { errors }, reset, watch } = useForm();
//     const [responseData, setResponseData] = useState({});
//     const [urlLink, setUrlLink] = useState({ original_url: ""});
//     const [message, setMessage] = useState("");
//     const [flashMessage, setFlashMessage] = useState("");
  
//     const handleChange = (event) => {
//       const { name, value } = event.target;
//       setUrlLink((prevUrlLink) => ({
//         ...prevUrlLink,
//         [name]: value,
//       }));
//     };
  
//     const handleSubmit = async (e) => {
//         e.preventDefault();
      
//         const accessToken = localStorage.getItem("accessToken");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         };
      
//         try {
//           const response = await api.post(`${BASE_URL}/short-urls`, urlLink, config);
//           const responseData = response.data;
//           setResponseData(responseData);
//           console.log(responseData);
//         } catch (error) {
//         console.error(error);
//       }
  
//       if (message) {
//         setFlashMessage(message);
//       }
  
//       setUrlLink({ original_url: "" });
//     };

//   return (
//     <div className="container">
//       <h2>Trim your long URL</h2>
//       {message && <div className="messg">{message}</div>}
//       {flashMessage && <div className="flash-message2">{flashMessage}</div>}
//       <form onSubmit={handleSubmit}>
//       <Form.Group>
//             <Form.Label htmlFor="original url"></Form.Label>
//             <Form.Control
//                 type="text"
//                 name="original_url"
//                 placeholder="Paste long link here..."
//                 value={urlLink.original_url}
//                 onChange={handleChange}
//               />{" "}
//               {errors.original_url && <p style={{ color: "red" }}><small>Long Url is required</small></p>}
//               {errors.original_url?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
//             </Form.Group>
//             <br />

//             <Form.Group>
//             <center>
//               <Button type="submit" variant="primary">Trim URL</Button>
//             </center>
              
//             </Form.Group> 
//             {/* <Form.Group>
//             <Form.Label htmlFor="original url"></Form.Label>
//             <Form.Control
//                 type="text"
//                 name="original_url"
//                 placeholder="Paste long link here..."
//                 value={urlLink.original_url}
//                 onChange={handleChange}
//               />{" "}
//               {errors.email && <p style={{ color: "red" }}><small>Long Url is required</small></p>}
//               {errors.email?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
//             </Form.Group>
//  */}
// {/* 
//         <input
//           type="text"
//           placeholder="Short Url"
//           name="short_url"
//           value={urlLink.short_url}
//           onChange={handleChange}
//         /> */}
      
//       </form>
//       {Object.keys(responseData).length > 0 && (
//         <>
//           <div className="details">
//             <p>Short URL: <br /> <span>
//                 <a href={responseData.short_url} target="_blank" rel="noreferrer">{responseData.short_url}
//                 </a></span></p>

//             <p>Original URL: <br />
//                 <span>
//                     <a href={responseData.url} target="_blank" rel="noreferrer">{responseData.url}</a>
//                 </span>
//                 </p>
//           </div>
//         </>
//       )}
//       <div className="b2d-div">
//         <Link to="/dashboard" className="b2d">
//           Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// }






import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
// import "../css/shorten.css";
import api from "./refresh_token";

export default function UrlShortener() {
  const { formState: { errors }, reset, watch } = useForm();
  const [responseData, setResponseData] = useState({});
  const [urlLink, setUrlLink] = useState({ original_url: "" });
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

    const requestBody = {
      ...urlLink,
      user_id: 1, // Replace with the actual user ID
    };

    try {
      const response = await api.post(`${BASE_URL}/short-urls`, requestBody, config);
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
    <div className="container">
      <h2>Trim your long URL</h2>
      {message && <div className="messg">{message}</div>}
      {flashMessage && <div className="flash-message2">{flashMessage}</div>}
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="original url"></Form.Label>
          <Form.Control
            type="text"
            name="original_url"
            placeholder="Paste long link here..."
            value={urlLink.original_url}
            onChange={handleChange}
          />{" "}
          {errors.original_url && <p style={{ color: "red" }}><small>Long Url is required</small></p>}
          {errors.original_url?.type === "maxLength" && <p style={{ color: "red" }}><small>Exceeded required character</small></p>}
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
            <p>Short URL: <br /> <span>
              <a href={responseData.short_url} target="_blank" rel="noreferrer">{responseData.short_url}
              </a></span></p>

            <p>Original URL: <br />
              <span>
                <a href={responseData.url} target="_blank" rel="noreferrer">{responseData.url}</a>
              </span>
            </p>
          </div>

      )}
      <div className="b2d-div">
        <Link to="/dashboard" className="b2d">
          Dashboard
          </Link>
      </div>
    </div>
  );
}

