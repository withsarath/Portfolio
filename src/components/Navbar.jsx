// import React from "react";
// import github from "../assets/github-icon.svg"
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="nav-lists">
//         <h1 className="logo">Sarath</h1>
//         <li>
//           <a href="#home">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#Projects">Projects</a>
//         </li>
//         <li>
//           <a href="#contact">Contact Me</a>
//         </li>
//       </ul>
//       <img src={github} width="30px" alt="github icon" />
//       <h2><a href="https://github.com/Sarath-33">Source</a></h2>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import github from "../assets/github-icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="logo">Sarath</h1>
        <ul className="nav-lists">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </div>

      {/* Right side: only Source link */}
      <a
        href="https://github.com/withsarath"
        className="nav-source"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Source on GitHub"
      >
        <img src={github} alt="" width="20" height="20" className="nav-git" />
        <span>Source</span>
      </a>
    </nav>
  );
};

export default Navbar;
