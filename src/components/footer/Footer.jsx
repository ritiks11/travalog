import React from "react";
import "./style.scss";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/insta.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <ContentWrapper>
      <footer className="footer">
        <div className="footer-column">
          {/* <h2 className="footer-logo"></h2> */}
          <img src={logo} alt="logo" />
          <p className="footer-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" className="social-icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/career">Career</a>
          <a href="/mobile">Mobile</a>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="/why-travlog">Why Travlog?</a>
          <a href="/partner">Partner with us</a>
          <a href="/faqs">FAQ's</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="footer-column">
          <h3>Meet Us</h3>
          <p>+00 92 1234 56789</p>
          <p>info@travlog.com</p>
          <p>205. R Street, New York</p>
          <p>BD23200</p>
        </div>
      </footer>
    </ContentWrapper>
  );
};

export default Footer;
