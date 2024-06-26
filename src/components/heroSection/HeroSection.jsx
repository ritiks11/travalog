import React from "react";
import destination1 from "../../assets/destination1.png";
import destination2 from "../../assets/destination2.png";
import destination3 from "../../assets/destination3.png";
import dotted1 from "../../assets/dotted1.png";
import dotted2 from "../../assets/dotted2.png";
import dotted3 from "../../assets/dotted3.png";
import globe from "../../assets/globe.png";
import plane1 from "../../assets/plane1.png";
import plane2 from "../../assets/plane2.png";
import plane3 from "../../assets/plane3.png";
import location from "../../assets/location.png";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <button className="exploreWorldBtn">Explore the world!</button>
        <h1>
          Travel <span>top destination</span> of the world
        </h1>
        <p>
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className="hero__buttons">
          <button className="hero__get-started">Get Started</button>
          <button className="hero__watch-demo">Watch Demo</button>
        </div>
      </div>
      <div className="layer1">
        <img className="overlap-image globe" src={globe} alt="globe" />
        <img className="overlap-image dotted1" src={dotted1} alt="airplane" />
        <img className="overlap-image dotted2" src={dotted2} alt="airplane" />
        <img className="overlap-image dotted3" src={dotted3} alt="airplane" />
        <img className="overlap-image plane1" src={plane1} alt="airplane" />
        <img className="overlap-image plane2" src={plane2} alt="airplane" />
        <img className="overlap-image plane3" src={plane3} alt="airplane" />
        <img className="overlap-image location" src={location} alt="airplane" />
      </div>

      <div className="hero__right">
        <div className="hero__image hero__image--top">
          <img src={destination1} alt="Destination 1" />
        </div>
        <div className="hero__image hero__image--middle">
          <img src={destination2} alt="Destination 2" />
        </div>
        <div className="hero__image hero__image--bottom">
          <img src={destination3} alt="Destination 3" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
