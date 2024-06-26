import React from "react";
import "./style.scss";
import statsLeft from "../../assets/statsLeft.png";
import yellowCircle from "../../assets/yellowCircle.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger only once
    threshold: 0.2, // Trigger when 50% of the component is visible
  });

  const renderCount = (end, limit, displayLimit) => {
    return end > limit ? displayLimit : <CountUp end={end} duration={3} />;
  };

  return (
    <div>
      <div className="statistics">
        <div className="child leftSection">
          <img src={statsLeft} alt="img" />
          <button className="discountedPrice">Discounted Price</button>
        </div>
        <div className="child rightSection">
          <div className="container">
            <p className="text1">TRAVEL POINT</p>
            <p className="text2">We helping you find your dream location</p>
            <p className="text3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>

            <div className="statsContainer" ref={ref}>
              <div className="statBox">
                {inView && renderCount(500, 500, "500+")}
                <p>Holiday Package</p>
              </div>
              <div className="statBox">
                {inView && <CountUp end={100} duration={3} />}
                <p>Luxury Hotel</p>
              </div>
              <div className="statBox">
                {inView && <CountUp end={7} duration={3} />}
                <p>Premium Airlines</p>
              </div>
              <div className="statBox">
                {inView && renderCount(2000, 2000, "2k+")}
                <p>Happy Customer</p>
              </div>
            </div>
          </div>
          <div className="yellowCircle">
            <img src={yellowCircle} alt="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
