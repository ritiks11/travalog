import React from "react";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import PartnerBrands from "./components/partners/PartnerBrands";
import Services from "./components/services/Services";
import Statistics from "./components/stats/Statistics";
import NewsLetter from "./components/newsletter/NewsLetter";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PartnerBrands />
      <Services />
      <Statistics />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default App;
