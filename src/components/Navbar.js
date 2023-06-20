// import React from "react";
// import { Link } from 'react-router-dom';
// import '../css/Navbar.css';

// const Navbar = ({ isLoggedIn }) => {
//   const handleLogout = () => {
//     // Handle logout logic here
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/about"><i><b>QuickLink!</b></i></Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/">Home</Link>
//             </li>
//             {isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/feature">Features</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/logout" onClick={handleLogout}>Logout</Link>
//                 </li>
//               </>
//             )}
//             {!isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/register">Sign Up</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/login">Login</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/about"><i><b>QuickLink!</b></i></Link>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={handleToggleMenu}
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/feature">Features</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/logout" onClick={handleLogout}>Logout</Link>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
