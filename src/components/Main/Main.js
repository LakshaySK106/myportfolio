import React, { useState } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import "./Main.scss";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

function Main() {
  const [showIndicator, setShowIndicator] = useState(true);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    const isBottom = scrollHeight - scrollTop <= clientHeight + 50;

    setShowIndicator(!isBottom);
  };

  return (
    <>
      <div className={`scroll-indicator ${showIndicator ? "show" : "hide"}`}>
        <span className="scroll-text">Scroll Down</span>
        <svg
          className="scroll-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>

      <div className="main-scroll-container" onScroll={handleScroll}>
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default Main;
