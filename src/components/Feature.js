import React from 'react';
import '../css/Features.css';
import { Link } from "react-router-dom";

function Feature() {
  return (
    <div className='div1'>
        <h2 className='head'>We shorten links and generate QR code</h2>
        <h5>User Registration and Authentication:</h5>
        <p className='para'>- Users can register an account to access the URL shortening functionality.
        <br />
        - User authentication is implemented using access tokens stored in the browser's local storage.
        <br />
        - The application checks if a user is logged in by verifying the presence of an access token.
        </p>
      <br />
      <h5>Navigation Bar:</h5>
      <p className="bar"> - The application has a navigation bar that allows users to navigate between different sections of the website.
      <br />
      - The navigation bar provides links to the home page, registration page, login page, logout functionality, about page, features page, users list page, dashboard, and the URL shortener page.

      </p>





        <Link className='start' to="/login">Get Started</Link>
    </div>
  );
}

export default Feature;


// 3. Home Page:
// - The home page serves as the landing page for the application.
// - Users can get an overview of the application's features and benefits.
// - It provides a call-to-action to encourage users to register or log in.

// 4. Registration and Login:
// - Users can register for a new account by providing their details, such as username, email, and password.
// - Existing users can log in using their credentials.
// - Upon successful login, the user is redirected to the dashboard.

// 5. Logout:
// - Logged-in users have the option to log out from their account.
// - Clicking on the logout link removes the access token and redirects the user to the home page.

// 6. About Page:
// - The about page provides information about the application, its purpose, and the team behind it.
// - Users can learn more about the features and benefits of the URL shortener.

// 7. Features Page:
// - The features page showcases the key features and functionalities of the URL shortener application.
// - Users can understand how the application can help them in managing and sharing URLs effectively.

// 8. Users List:
// - The users list page displays a list of registered users.
// - This feature is typically available only to administrators or authorized users.

// 9. Dashboard:
// - The dashboard provides a personalized view for logged-in users.
// - It may include user-specific information, statistics, and links to various sections of the application.
// - Users can access the URL shortener functionality from the dashboard.

// 10. URL Shortener:
//  - The URL shortener component allows users to enter a long URL and generate a shortened URL.
//  - Users can customize the generated URL if desired.
//  - The component communicates with the server using API calls to generate and store the shortened URL.
//  - After successful generation, the shortened URL is displayed along with the original URL and a QR code for easy sharing.

// These features provide users with a seamless experience for managing and sharing URLs efficiently. The application ensures secure user 
// authentication and authorization while offering a simple and intuitive interface for URL shortening and management.