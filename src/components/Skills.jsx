import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiVite, SiTypescript } from "react-icons/si";

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-skill");

            // Find the progress bar within this skill card
            const progressBar = entry.target.querySelector(".skill-progress");
            if (progressBar) {
              const level = progressBar.getAttribute("data-level");
              progressBar.style.setProperty("--progress-width", `${level}%`);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "Typescript", icon: SiTypescript, color: "#646CFF" },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills & Technologies</h2>
      <p className="skills-subtitle">
        Here are the technologies I work with and my proficiency levels
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="skill-card"
              ref={(el) => (skillRefs.current[index] = el)}
            >
              <div className="skill-header">
                <IconComponent
                  className="skill-icon"
                  style={{ color: skill.color }}
                />
                <span className="skill-name">{skill.name}</span>
              </div>

              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: "0%",
                      backgroundColor: skill.color,
                    }}
                    data-level={skill.level}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
