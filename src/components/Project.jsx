import brainbin from "../assets/brainbin.png"
import moviedex from "../assets/moviedex.png"
import talentIQ from "../assets/talent-iq.png"

const Project = () => {
  return (
    <div className="project-container" id="projects">
        <div className="bio-links-title">Projects</div>
      <div className="bio-showcase">
        <a
          href="https://github.com/Sarath-33/MovieDex"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-card"
        >
          <img
            src={moviedex}
            alt="YouTube"
            className="bio-img"
          />
          <div className="bio-card-caption">
            MovieDex
            <br />
            <span className="bio-card-desc">A Movie Platform</span>
          </div>
        </a>
        <a
          href="https://github.com/Sarath-33/BrainBin"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-card"
        >
          <img
            src={brainbin}
            alt="Your Product"
            className="bio-img"
          />
          <div className="bio-card-caption">
            BrainBin
            <br />
            <span className="bio-card-desc">A Note Taking Application</span>
          </div>
        </a>
        <a
          href="https://github.com/Sarath-33/DreamHire"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-card"
        >
          <img
            src={talentIQ}
            alt="Your Product"
            className="bio-img"
          />
          <div className="bio-card-caption">
            Talent-IQ
            <br />
            <span className="bio-card-desc">Interview Platform with video call and chat</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
