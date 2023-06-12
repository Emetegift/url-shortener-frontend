import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.post("http://localhost:5000/short-urls", { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Paste Long Url..."
      />
      <button onClick={shortenUrl}>Trim Url</button>
      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default UrlShortener;
