import React, { useState } from "react";
import logo from "../../assets/logo.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <ContentWrapper>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <a
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </a>
        <ul className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
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
        <div className={`navbar__auth ${isMenuOpen ? "active" : ""}`}>
          <button className="navbar__login">Log In</button>
          <button className="navbar__signup">Sign Up</button>
        </div>
      </nav>
    </ContentWrapper>
  );
};
export default Navbar;
