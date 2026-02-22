import logoName from "../../assets/images/logo-LLLL.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "./Logo/Logo";
import "./Home.scss";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["a", "k", "s", "h", "a", "y,"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="container ">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img
                src={logoName}
                alt="developer"
                onMouseEnter={(e) => e.target.classList.add("rubberBand")}
                onAnimationEnd={(e) => e.target.classList.remove("rubberBand")}
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>
              Software Engineer at Morgan Stanley | Web Designer | Broke
              Audiophile
            </h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME!
            </Link>
          </div>
          <Logo />
        </div>
      </div>
    </>
  );
}

export default Home;