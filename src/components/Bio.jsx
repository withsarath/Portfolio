import React from "react";

const Bio = () => {
  return (
    <section className="bio-section">
      <h2 className="bio-title">Bio</h2>
      <div className="bio-timeline">
        <div>
          <span className="bio-year">2004</span> Born in [Kerala], [India].
        </div>
        <div>
          <span className="bio-year">2024</span> Graduated Diploma in Computer
          Application at [Rutronix]
        </div>
        <div>
          <span className="bio-year">2024</span> Joined Internship at[One Team
          Solutions]
        </div>
        <div>
          <span className="bio-year">2024 - present</span> Working as a
          Developer / Freelancer
        </div>
      </div>
      <div className="bio-love">
        <h2 className="bio-heart">I ♥</h2>
        <span className="bio-list">
          Tech, <span style={{ color: "#ff63c3" }}>Coding</span>, Music,
          <span style={{ color: "#ff63c3" }}> Movies, </span>
          Reading
        </span>
      </div>
      <div className="bio-links-title">On the web</div>
      <ul className="bio-social-list">
        <li>
          <a
            href="https://www.instagram.com/withsarath_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sarath-m-b7558b272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Sarath-33"
            target="_blank"
            rel="noopener noreferrer"
          >
            @github
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Bio;
