import React from 'react'; // Imports the 'react' module

import { Link } from 'react-router-dom'; // Imports the 'Link' component from 'react-router-dom'

import '../css/about.css'; // Imports the 'about.css' file located in the '../css' directory

const About = () => { // Defines a functional component named 'About'
  return ( // Returns JSX code representing the UI of the component
    <div className="about container"> 
        <h3 className='heading'> <i><b>QuickLink!</b></i></h3> 
      <h2><b>Make your experience count</b></h2> 
      <p className='content'>Simplify your URLs and make them more manageable with QuickLink, 
      </p>
      <p className='content'>

         With just a few clicks, you can transform any URL into a compact and user-friendly link that is easy to share and remember.
        <br /> Say goodbye to those lengthy, hard-to-type URLs and embrace the simplicity of QuickLink.
      </p>
      <p className='content'>
        Experience the power of QuickLink and discover a whole new way of managing your URLs.
        <br /> Sign up today and start enjoying the benefits of a streamlined link management system.
        <br /> Save time, enhance your online presence, and make a lasting impression with QuickLink.
      </p>
      <Link to="/UrlShortener" className='cta-button'>Get Started</Link> 
    </div>
  );
}

export default About; // Exports the 'About' component as the default export of the module
