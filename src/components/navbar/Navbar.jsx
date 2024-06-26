import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Special Deals</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar__auth">
        <button className="navbar__login">Log In</button>
        <button className="navbar__signup">Sign Up</button>
      </div>
    </nav>
  );
};
export default Navbar;
