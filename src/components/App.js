import 'bootstrap/dist/css/bootstrap.min.css'; // Imports the Bootstrap CSS file
import "../css/App.css"; // Imports the 'App.css' file located in the '../css' directory
import Home from "./Home"; // Imports the 'Home' component
import Login from "./login"; // Imports the 'Login' component
import Logout from "./logout"; // Imports the 'Logout' component
import About from "./about"; // Imports the 'About' component
import SignUp from "./register"; // Imports the 'SignUp' component
import UsersList from "./users"; // Imports the 'UsersList' component
import Dashboard from "./dashboard"; // Imports the 'Dashboard' component
import ShortenUrl from "./UrlShortener"; // Imports the 'ShortenUrl' component
import { useEffect, useState } from "react"; // Imports the 'useEffect' and 'useState' hooks from 'react'
import Navbar from "./Navbar"; // Imports the 'NavBar' component
import Features from "./Feature"; // Imports the 'Features' component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Imports necessary components from 'react-router-dom'
import { Switch } from 'react-router-dom'; // Imports the 'Switch' component from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Defines a state variable 'isLoggedIn' and its setter function 'setIsLoggedIn' using the 'useState' hook

  useEffect(() => { // Defines an effect using the 'useEffect' hook
    const accessToken = localStorage.getItem("accessToken"); // Retrieves the "accessToken" value from the localStorage
    if (accessToken !== null) {
      setIsLoggedIn(true); // Sets 'isLoggedIn' to true if "accessToken" is not null
    } else {
      setIsLoggedIn(false); // Sets 'isLoggedIn' to false if "accessToken" is null
    }
  }, []);

  return (
    <div className="">
      {/* // Renders the 'NavBar' component with the 'isLoggedIn' prop */}
      <Navbar isLoggedIn={isLoggedIn} /> 
      {/* // Defines a container for routing components */}
      <Routes> 
      {/* // Renders the 'Home' component when the path matches '/' */}
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<SignUp />} /> // Renders the 'SignUp' component when the path matches '/register'
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} /> // Renders the 'Login' component when the path matches '/login' and passes an 'onLogin' prop
        <Route path="/logout" element={<Logout onLogout={() => setIsLoggedIn(false)} />} /> // Renders the 'Logout' component when the path matches '/logout' and passes an 'onLogout' prop
        <Route path="/about" element={<About />} /> // Renders the 'About' component when the path matches '/about'
        <Route path="/Feature" element={<Features />} /> // Renders the 'Features' component when the path matches '/Feature'
        <Route path="/users" element={<UsersList />} /> // Renders the 'UsersList' component when the path matches '/users'
        <Route path="/dashboard" element={<Dashboard />} /> // Renders the 'Dashboard' component when the path matches '/dashboard'
        <Route path="/UrlShortener" element={<ShortenUrl />} /> // Renders the 'ShortenUrl' component when the path matches '/UrlShortener'
      </Routes>
    </div>
  );
}

export default App; // Exports the 'App' component as the default export of the module

