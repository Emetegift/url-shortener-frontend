// import React, { useState, useEffect, useRef  } from "react";
// import { useForm } from "react-hook-form";
// import { Form, Button } from "react-bootstrap";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { BASE_URL } from "../utils/constant";
// import QRCode from "qrcode.react";
// import api from "./refresh_token";
// import image2 from '../images/image2.jpg';
// import '../css/shortener.css';


  
// export default function UrlShortener() {
//   const { formState: { errors }, reset, watch } = useForm();
//   const [responseData, setResponseData] = useState({});
//   const [urlLink, setUrlLink] = useState({ original_url: "", custom_url: "" });
//   const [message, setMessage] = useState("");
//   const [flashMessage, setFlashMessage] = useState("");
//   const [errorStatus, setErrorStatus] = useState(null);
//   const [copied, setCopied] = useState(false);
//   const [copyButtonText, setCopyButtonText] = useState("Copy");
//   const shortenedUrlRef = useRef(null);
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUrlLink((prevUrlLink) => ({
//       ...prevUrlLink,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();



// const accessToken = localStorage.getItem("accessToken");
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
//       if (error.response && error.response.data) {
//         const { status, message } = error.response.data;
//         setFlashMessage(`Error ${status}: ${message}`);
//       } else {
//         console.error(error);
//       }
//     }
  
//     setUrlLink({ original_url: "", custom_url: "" });
    
//   };

//   const handleRegenerate = () => {
//     setCurrentStep(1); // Move back to the first step when "Re-generate" button is clicked
//   };

//   useEffect(() => {
//     if (copyButtonText === "Copied!") {
//       const timer = setTimeout(() => {
//         setCopyButtonText("Copy");
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [copyButtonText]);


//   return (
//     <div className="contain">
      
//       {message && <div className="messg">{message}</div>}
//       {flashMessage && <div className="flash-message2">{flashMessage}</div>}
//       <form className="formy" onSubmit={handleSubmit}>
//         <Form.Group className="quicklink">
          
//               <h2><b>Generate your Quicklink</b></h2>
          
//         </Form.Group>
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
//           <Form.Label htmlFor="custom_url">Customize URL (optional):</Form.Label>
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
//             <Button type="submit" variant="primary">Generate quicklink</Button>
//           </center>
//         </Form.Group>
//       </form>
//       <img src={image2} alt="Image" />

      

//       {/* {Object.keys(responseData).length > 0 && ( */}
//       {currentStep === 2 && Object.keys(responseData).length > 0 && (
//         <div className="details">
//           <div className="qrcode">
//               <QRCode value={responseData.shortened_url} />
//           </div>
         
//           <Form.Group>
//             <Form.Label htmlFor="short_url">Shortened URL:</Form.Label>
//             <div className="input-group">
//               <Form.Control
//                 type="text"
//                 name="short_url"
//                 readOnly
//                 value={responseData.shortened_url}
//                 ref={shortenedUrlRef}
//               />
//               <Button
//                className="copy-button"
//                 variant="outline-secondary"
//                 onClick={() => {
//                   shortenedUrlRef.current.select();
//                   document.execCommand("copy");
//                   setCopied(true);
//                   setCopyButtonText("Copied!");
//                 }}
//               >
//                 {copyButtonText}
//               </Button>
//             </div>
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
//           <Button variant="primary" onClick={handleRegenerate}>
//             Re-generate
//           </Button>
//         </div>
//       )}

      
      
//     </div>
//   );
// }







import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constant";
import QRCode from "qrcode.react";
import api from "./refresh_token";
import image2 from '../images/image2.jpg';
import '../css/shortener.css';

export default function UrlShortener() {
  const { formState: { errors }, reset, watch } = useForm();
  const [responseData, setResponseData] = useState({});
  const [urlLink, setUrlLink] = useState({ original_url: "", custom_url: "" });
  const [message, setMessage] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const [errorStatus, setErrorStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const shortenedUrlRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);

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
      setCurrentStep(2); // Move to the second step
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

  const handleRegenerate = () => {
    setCurrentStep(1); // Move back to the first step when "Re-generate" button is clicked
  };

  useEffect(() => {
    if (copyButtonText === "Copied!") {
      const timer = setTimeout(() => {
        setCopyButtonText("Copy");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [copyButtonText]);


  return (
    <div className="contain">
      {message && <div className="messg">{message}</div>}
      {flashMessage && <div className="flash-message2">{flashMessage}</div>}
      <form className="formy" onSubmit={handleSubmit}>
        <Form.Group className="quicklink">
          <h2><b>Generate your Quicklink</b></h2>
        </Form.Group>
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
            <Button type="submit" variant="primary">Generate quicklink</Button>
          </center>
        </Form.Group>
      </form>
      <img src={image2} alt="Image" />

      {currentStep === 2 && Object.keys(responseData).length > 0 && (
        <div className="details">
          <div className="qrcode">
            <QRCode value={responseData.shortened_url} />
          </div>

          <Form.Group>
            <Form.Label htmlFor="short_url">Shortened URL:</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                name="short_url"
                readOnly
                value={responseData.shortened_url}
                ref={shortenedUrlRef}
              />
              <Button
                className="copy-button"
                variant="outline-secondary"
                onClick={() => {
                  shortenedUrlRef.current.select();
                  document.execCommand("copy");
                  setCopied(true);
                  setCopyButtonText("Copied!");
                }}
              >
                {copyButtonText}
              </Button>
            </div>
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
          <Button variant="primary" onClick={handleRegenerate}>
            Re-generate
          </Button>
        </div>
      )}
    </div>
  );
}





