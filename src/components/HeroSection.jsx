import React from "react";

import computer from "../assets/Programming Computer.json"
import Lottie from "lottie-react"

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <p className="hero-para">Hi, I’m<span style={{ color: "#ff63c3" }}> Sarath</span>  — a Full-Stack Developer focused on building clean and scalable web applications.</p>
      
      {/* for animation */}
      <div className="hero-animation">
        <Lottie animationData={computer} loop={true} />
      </div>
    </div>
  );
};

export default HeroSection;
