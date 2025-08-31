import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Work from "./components/Work";
import Bio from "./components/Bio";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar/>
        <HeroSection/>
        <About/>
        <Work/>
        <Bio/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
