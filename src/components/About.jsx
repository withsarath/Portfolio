

import profile from "../assets/ai5.jpg";

const About = () => {
  return (
    <div id="about" className="about-container">
      {/* Left Side (Text) */}
      <div className="about-text">
        <h1 className="about-name">Sarath</h1>
        <p className="about-title">
          Digital Craftsman ( Tech Enthusiast / Developer / Designer )
        </p>
      </div>

      {/* Right Side (Image) */}
      <div className="about-image-container">
        <img
          src={profile}
          alt="Sarath"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default About;
