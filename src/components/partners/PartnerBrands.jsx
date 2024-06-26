import React from "react";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";

import "./style.scss";

const PartnerBrands = () => {
  return (
    <div>
      <div className="partnerBrands">
        <img src={brand1} alt="brand1" />
        <img src={brand2} alt="brand2" />
        <img src={brand3} alt="brand3" />
        <img src={brand4} alt="brand4" />
        <img src={brand5} alt="brand5" />
      </div>
    </div>
  );
};

export default PartnerBrands;
