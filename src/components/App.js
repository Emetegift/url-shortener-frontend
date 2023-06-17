// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../css/App.css";
// import Home from "./Home";
// import Login from "./login";
// import Logout from "./logout";
// import SignUp from "./register";
// import UsersList from "./users";
// import Dashboard from "./dashboard";
// import ShortenUrl from "./UrlShortener";
// import { useEffect, useState } from "react";
// import NavBar from "./Navbar";
// import Features from "./Feature";
// import {
//      BrowserRouter as Router, 
//      Routes,
//      Route 
//     } from 'react-router-dom';
// import { Switch } from 'react-router-dom';



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
        
//         <div className="">
//             <NavBar/>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/register" element={<SignUp />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/logout" element={<Logout />} />
//                 <Route path="/Feature" element={<Features />} />
//                 <Route path="/users" element={<UsersList/>} />
//                 <Route path="/dashboard" element={<Dashboard/>} />
//                 <Route path="/UrlShortener" element={<ShortenUrl/>} />
                
//             </Routes>

//         </div>
        
        
//     )
// }

// export default App;






// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../css/App.css";
// import Home from "./Home";
// import Login from "./login"
// import Logout from "./logout";
// import About from "./about";
// import SignUp from "./register";
// import UsersList from "./users";
// import Dashboard from "./dashboard";
// import ShortenUrl from "./UrlShortener";
// import { useEffect, useState } from "react";
// import NavBar from "./Navbar";
// import Features from "./Feature";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';

// function App() {
//   const Token = localStorage.getItem("accessToken");
//   const [checkToken, setCheckToken] = useState(false);
  
//   useEffect(() => {
//     if (Token !== null) {
//       setCheckToken(true);
//       console.log("Token is available");
//     } else {
//       setCheckToken(false);
//       console.log("Token is null");
//     }
//   }, [Token]);

//   return (
//     <div className="">
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/logout" element={<Logout />} /> 
//         <Route path="/about" element={<About />} /> 
//         <Route path="/Feature" element={<Features />} />
//         <Route path="/users" element={<UsersList />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/UrlShortener" element={<ShortenUrl />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;






import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/App.css";
import Home from "./Home";
import Login from "./login";
import Logout from "./logout";
import About from "./about";
import SignUp from "./register";
import UsersList from "./users";
import Dashboard from "./dashboard";
import ShortenUrl from "./UrlShortener";
import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Features from "./Feature";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="">
      <NavBar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/logout" element={<Logout onLogout={() => setIsLoggedIn(false)} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Feature" element={<Features />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/UrlShortener" element={<ShortenUrl />} />
      </Routes>
    </div>
  );
}

export default App;
