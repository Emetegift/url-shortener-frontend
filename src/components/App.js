// // import React from 'react';
// // import '../css/App.css';
// // import UrlShortener from './UrlShortener';

// // const App = () => {
// //   return (
// //     <div>
// //       <UrlShortener />
// //     </div>
// //   );
// // };

// // export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/App.css";
// importing components from react-router-dom package
import {
// BrowserRouter as Router,
// Route, Routes
} from "react-router-dom";
import Home from "./Home";
import Login from "./login";
// import Feature from "./Feature";
import SignUp from "./signup";
import UsersList from "./users";
import Dashboard from "./dashboard";
import ShortenUrl from "./UrlShortener";
import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Features from "./Feature";


// function App() {
//   const Token = localStorage.getItem("accessToken");
//   const [checkToken, setCheckToken] = useState(false);
//   useEffect(() => {

//       if(Token !== null){
//         setCheckToken(true) ;
//         console.log("Token is available")
//       } else {
//         setCheckToken(false) ;
//         console.log("Token is null")
//       }
    
//   }, [Token])

//     return (
      // <div className="app-container">
      //   {/* <NavBar/> */}
      //   <Home isLoggedIn={checkToken}/>
        
//         <Routes>
        
//           <Route path="/login" element={<Login/>} />
//           <Route path="/" element={<Feature/>} />
//           <Route path="/signup" element={<SignUp/>} />
        //   <Route path="/users" element={<UsersList/>} />
        //   <Route path="/dashboard" element={<Dashboard/>} />
        //   <Route path="/UrlShortener" element={<ShortenUrl/>} />
        // </Routes>
//       </div>
//   );
// }

// export default App;



// import 'bootstrap/dist/css/bootstrap.min.css';
// import { createRoot } from 'react-dom/client';
// import React from 'react'
// import ReactDom from 'react-dom'
// import NavBar from './components/Navbar';

import {
     BrowserRouter as Router, 
     Routes,
     Route 
    } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

// import Home from './components/Home';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Platform from './components/Platform';

// // const container = document.getElementById('app');

function App() {
  const Token = localStorage.getItem("accessToken");
  const [checkToken, setCheckToken] = useState(false);
  useEffect(() => {

      if(Token !== null){
        setCheckToken(true) ;
        console.log("Token is available")
      } else {
        setCheckToken(false) ;
        console.log("Token is null")
      }
    
  }, [Token])


    return (
        
        <div className="">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Feature" element={<Features />} />
                <Route path="/users" element={<UsersList/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/UrlShortener" element={<ShortenUrl/>} />
                
            </Routes>






        </div>
        
        
    )
}

export default App;


