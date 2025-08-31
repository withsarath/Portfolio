// import profile from "../assets/Sarath1.jpg"
// const About = () => {
//   return <div>
//     <h2>Sarath</h2>
//     <p>Digital Craftsman ( Tech Enthusiast  / Developer / Designer )</p>
//     <img src={profile} style={{width: 120, borderRadius: 500}} alt="image" />
//   </div>;
// };

// export default About;

import profile from "../assets/Sarath1.jpg";

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
