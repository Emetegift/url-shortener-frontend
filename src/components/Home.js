import React from 'react'
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import UrlShortener from './UrlShortener';

import {Link} from 'react-router-dom'

const Home=()=>{
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
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
            {/* <Form.Group>
            <Form.Label htmlFor="UrlShortener">Url Shortener</Form.Label>
            <Form.Control
              type="text"
              placeholder="Paste Long Url..."
              {...register("UrlShortener", { required: true, maxLength: 5000 })}
            />
            {errors.UrlShortener && <p style={{ color: "red" }}><small>Url is required</small></p>}
            {errors.UrlShortener?.type === "maxLength" && <p style={{ color: "red" }}><small>Url is required</small></p>}
          </Form.Group>
          <br></br>
          <Form.Group>
            <Button type="submit" variant="primary">trim</Button>
          </Form.Group>
          <br></br> */}
            
            {/* <div>
                <UrlShortener/>
            </div> */}
        </div>
        


          
            
        
        
        
    )
}
export default Home