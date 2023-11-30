import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarlogo">
        <img src={logo} alt="asmazabeen13@gmail.com" />
        <p id="studio">IGSTUDIO</p>
      </div>
      <div className="midnav">
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className="endnav">
        <button>Contact Now</button>
      </div>
    </div>
  );
};

export default Navbar;
