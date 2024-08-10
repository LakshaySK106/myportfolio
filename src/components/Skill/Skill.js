import { React, useEffect, useState, useRef } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Skill.scss'
import { Outlet} from 'react-router-dom'

function Skill() {
  const [letterClass, setLetterClass] = useState("text-animate");

  const contentRef = useRef(null);

  useEffect(() => {
    const myTags = [
      "JavaScript",
      "CSS",
      "HTML",
      "C",
      "C++",
      "React",
      "Python",
      "Java",
      "git",
      "Express.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "MySQL",
      "jQuery",
      "AngularJS",
      "Spring Boot",
      "Rest Services",
    ];

    var tagCloud = TagCloud(".content", myTags, {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      if (tagCloud && typeof tagCloud.destroy === "function") {
        tagCloud.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="container skill-page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s", " ", "&"]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
              idx={22}
            />
          </h1>
          <p>
            The main area of my expertise is full-stack web development(both
            client and service side of the web).
            <br />
            <br />
            - Over 5000 lines: C++, C, JavaScript
            <br />
            - Over 1000 lines: Python, HTML, CSS, TypeScript, Tailwind CSS
            <br />
            - Web Development Libraries/Frameworks: React, AngularJS,
            Express.js, Bootstrap, Node.js, MaterialUI
            <br />
            - Familiar: MongoDB, MySQL, Sybase, Swagger, Rest Services
            <br />
            <br />
            <div className="exp-flex">
              <a
                href="https://www.linkedin.com/company/morgan-stanley/mycompany/"
                target="_blank"
                rel="noreferrer"
                className="work-exp"
              >
                Morgan Stanley{" "}
              </a>
              &nbsp;-
              <div className="vertical-line"></div>
              Technology Analyst (Aug 2024 - Present)
              <br />
              <br />
              Technology Spring Analyst (Jan 2024 - July 2024)
            </div>
            <div className="gs-found">
              <a
                href="https://www.linkedin.com/company/girlscriptsoc/"
                target="_blank"
                rel="noreferrer"
                className="work-exp "
              >
                GirlScript Foundation{" "}
              </a>
              - Project Administrator (May 2023 - Aug 2023)
            </div>
          </p>
        </div>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      <div ref={contentRef} className="content"></div>
    </>
  );
}

export default Skill 