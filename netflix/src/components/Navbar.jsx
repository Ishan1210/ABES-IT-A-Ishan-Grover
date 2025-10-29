import React from "react";
import "./navbar.css"; 

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo">{props.ht1}</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Series</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="profile">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
        />
      </div>
    </nav>
  );
}

export default Navbar;
