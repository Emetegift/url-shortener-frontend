import React from 'react'
import UrlShortener from './UrlShortener';

import {Link} from 'react-router-dom'

const Home=()=>{
    return (
        <div className="home container">
            <h1 className='heading'>Welcome to <i><b>QuickLink!</b></i></h1>
            <p className='content'>Simplify your URLs and make them more manageable with QuickLink, 
                <br /> the ultimate URL shortening service. 
                <br /> Whether you're sharing links on social media, 
                <br /> sending emails, or simply want to keep your URLs concise, 
                <br /> QuickLink has got you covered.</p>
                <Link to="/signup" className="btn btn-primary btn-lg">Get Started</Link>

            <br />
            <br />
            
            <div>
                <UrlShortener/>
            </div>
        </div>

            
        
        
        
    )
}
export default Home