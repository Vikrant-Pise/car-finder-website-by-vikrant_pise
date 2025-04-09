// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-dark bg-dark mb-4">
//       <div className="container">
//         <span className="navbar-brand mb-0 h1">Car Finder ☞ Vikrant Pise</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="navbar-brand fw-bold fs-4 ">
          🚘<span className="text-info"> Car Finder</span> | Vikrant Pise
        </span>

        <div className="d-flex align-items-center gap-3 fs-4">
          {/* <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a> */}
          <a
            href="https://www.linkedin.com/in/vikrant-pise/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>

          {/* <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
