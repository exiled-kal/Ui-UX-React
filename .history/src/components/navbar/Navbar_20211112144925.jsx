import React from "react";
import { RiMenu3line, RiCloseline } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href='#home'></a></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
