import React, { useState } from "react";
import "./style.scss";
import newsLetterDesign from "../../assets/newsLetterDesign.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission
    console.log("Subscribed with:", email);
  };

  return (
    <ContentWrapper>
      <div className="newsContainer">
        <div className="designdiv1">
          <img src={newsLetterDesign} alt="design" />
        </div>
        <div className="newsletter">
          <div className="texts">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <p>Prepare yourself & let’s explore the beauty of the world</p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default NewsLetter;
