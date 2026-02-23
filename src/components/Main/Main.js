import Home from "../Home/Home";
import About from "../About/About";
import "./Main.scss";
import Skill from "../Skill/Skill";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

function Main() {
  return (
    <div className="main-scroll-container">
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default Main;
