// import React, { useState } from 'react';
// import axios from 'axios';

// const UrlShortener = () => {
  // const [original_url, setLongUrl] = useState('');
  // const [short_url, setShortUrl] = useState('');

//   const shortenUrl = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/short-urls", { original_url });
//       setShortUrl(response.data.shortUrl);
//     } catch (error) {
//       console.error(error);
//     }
//   };

  // return (
  //   <div>
  //     <h2>URL Shortener</h2>
  //     <input
  //       type="text"
  //       value={original_url}
  //       onChange={(e) => setLongUrl(e.target.value)}
  //       placeholder="Paste Long Url..."
  //     />
  //     <button onClick={shortenUrl}>Trim Url</button>
  //     {short_url && (
  //       <p>
  //         Short URL: <a href={short_url}>{short_url}</a>
  //       </p>
  //     )}
  //   </div>
  // );
// };

// export default UrlShortener;




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

function UrlShortener() {
  const [original_url, setOriginalUrl] = useState('');
  const [short_url, setShortUrl] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    console.log(data);
    if (data.original_url === data.short_url) {
      try {
        const response = await axios.post("http://localhost:5000/short-urls", data);
        console.log(response.data);
        // navigate('/UrlShortener', { state: { message: "Url trimmed successfully!" } });
        reset(); // Clear the form fields
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Unsupported URL pattern. The original URL and short URL must be the same.");
    }
  };

  return (
    <div className="container">
      <h2>URL Shortener</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="originalUrl">
          <Form.Label>Paste Long URL:</Form.Label>
          <Form.Control
            type="text"
            {...register("original_url", { required: true })}
            value={original_url}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Paste Long URL..."
          />
          {errors.original_url && <span>This field is required.</span>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Trim URL
        </Button>
      </Form>
      {short_url && (
        <p>
          Short URL: <a href={short_url}>{short_url}</a>
        </p>
      )}
    </div>
  );
}

export default UrlShortener;
