import Home from "../Home/Home";
import About from "../About/About";
import "./Main.scss";
import Skill from "../Skill/Skill";

function Main() {
  return (
    <div className="main-scroll-container">
      <Home />
      <About />
      <Skill />
    </div>
  );
}

export default Main;
