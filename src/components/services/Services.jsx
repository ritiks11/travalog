import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import data from "../../data/index.json";

const Services = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "5rem",
        },
      },
    ],
  };
  return (
    <div className="ourServices">
      <div className="info">
        <p className="text1">SERVICES</p>
        <p className="text2">Our top value categories for you !</p>
      </div>
      <div className="carousel">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
