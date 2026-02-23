import logoName from "../../assets/images/logo-LLLL.png";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "./Logo/Logo";
import "./Home.scss";

function Home() {
  const [visitCount, setVisitCount] = useState(0);
  const [letterClass, setLetterClass] = useState("text-animate");
  const hasFetched = useRef(false);

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

  if (!hasFetched.current) {
    fetch("https://api.counterapi.dev/v1/lakshay-portfolio-site/visits/up")
      .then((response) => response.json())
      .then((data) => setVisitCount(data.count))
      .catch((error) => console.error("Error fetching visit count:", error));

    hasFetched.current = true;
}

  }, []);

  return (
    <>
      <div className="home-page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>
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
          <div className="visitor-counter">
            <span className="counter-label">You are visitor #</span>
            <span className="counter-number">
              {visitCount > 0 ? visitCount : "..."}
            </span>
          </div>
          <Logo />
        </div>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
}

export default Home;