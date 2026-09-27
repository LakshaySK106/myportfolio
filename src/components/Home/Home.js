import logoName from "../../assets/images/logo-LLLL.png";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Counter } from "counterapi";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "./Logo/Logo";
import "./Home.scss";

function Home() {
  const [visitCount, setVisitCount] = useState(0);
  const [letterClass, setLetterClass] = useState("text-animate");
  const hasFetched = useRef(false);

  const nameArray = ["a", "k", "s", "h", "a", "y,"];

  const jobArray = [
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
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
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    const getVisitorCount = async () => {
      try {
        const counter = new Counter({
          workspace: "lakshays-team-5704",
          debug: true,
        });

        // Increment the visitor counter
        const incrementResult = await counter.up("first-counter-5704");

        console.log("COUNTER INCREMENT:", incrementResult);

        // Fetch the current counter value
        const result = await counter.get("first-counter-5704");

        console.log("CURRENT COUNTER:", result);

        const count =
          result?.value ?? result?.data?.up_count ?? result?.data?.value;

        if (typeof count === "number") {
          setVisitCount(count);
        } else {
          console.error("Unable to determine visitor count:", result);
        }
      } catch (error) {
        console.error("COUNTER API ERROR:", error);
      }
    };

    if (!hasFetched.current) {
      hasFetched.current = true;
      getVisitorCount();
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="home-page">
        <span className="tags top-html">&lt;/html&gt;</span>

        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="container">
          <div className="text-zone">
            <h1>
              <span
                className={letterClass}
                onMouseEnter={(e) => e.target.classList.add("rubberBand")}
                onAnimationEnd={(e) => e.target.classList.remove("rubberBand")}
              >
                H
              </span>

              <span
                className={`${letterClass} _12`}
                onMouseEnter={(e) => e.target.classList.add("rubberBand")}
                onAnimationEnd={(e) => e.target.classList.remove("rubberBand")}
              >
                i,
              </span>

              <br />

              <span
                className={`${letterClass} _13`}
                onMouseEnter={(e) => e.target.classList.add("rubberBand")}
                onAnimationEnd={(e) => e.target.classList.remove("rubberBand")}
              >
                I
              </span>

              <span
                className={`${letterClass} _14`}
                onMouseEnter={(e) => e.target.classList.add("rubberBand")}
                onAnimationEnd={(e) => e.target.classList.remove("rubberBand")}
              >
                'm
              </span>

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
                idx={17}
              />
            </h1>

            <h2>
              Software Engineer at Rippling | Ex-Morgan Stanley | Delhi
              Technological University
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
