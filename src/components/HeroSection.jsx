import React from "react";

import computer from "../assets/Programming Computer.json"
import Lottie from "lottie-react"

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      {/* for animation */}
      <div className="hero-animation">
        <Lottie animationData={computer} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;
