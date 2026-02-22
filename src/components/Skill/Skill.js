import { useEffect, useState, useRef } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skill.scss";
import { Outlet } from "react-router-dom";

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
      "Angular",
      "Spring Boot",
      "Rest Services",
    ];

    const tagCloud = TagCloud(".content", myTags, {
      radius: 400,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    let currentScale = 1;
    let ticking = false;

    const updateTransform = () => {
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-50%) scale(${currentScale})`;
      }
      ticking = false;
    };

    const handleWheel = (e) => {
      e.preventDefault();

      const zoomSpeed = 0.0015;
      currentScale += e.deltaY * -zoomSpeed;

      currentScale = Math.min(Math.max(0.4, currentScale), 3);

      if (!ticking) {
        window.requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    const sphereContainer = contentRef.current;
    if (sphereContainer) {
      sphereContainer.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (tagCloud && typeof tagCloud.destroy === "function") {
        tagCloud.destroy();
      }
      if (sphereContainer) {
        sphereContainer.removeEventListener("wheel", handleWheel);
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
            The main area of my expertise is full-stack web development (both
            client and service side of the web).
            <br />
            <br />
            - Over 5000 lines: C++, C, JavaScript
            <br />
            - Over 1000 lines: Python, HTML, CSS, TypeScript, Tailwind CSS
            <br />
            - Web Development Libraries/Frameworks: React, AngularJS,
            Express.js, Bootstrap, Node.js, MaterialUI
            <br />- Familiar: MongoDB, MySQL, Sybase, Swagger, Rest Services
          </p>

          <div className="timeline-container">
            <div className="timeline-title">TIMELINE</div>

            <div className="timeline-content">
              <div
                className="timeline-company-fill girlscript-fill"
                style={{ left: "10%", width: "8%" }}
              ></div>
              <div
                className="timeline-company-fill morgan-stanley-fill"
                style={{ left: "25%", width: "60%" }}
              ></div>
              <div
                className="company-span"
                style={{ left: "10%", width: "8%" }}
              >
                <div className="company-name">GirlScript</div>
                <div className="company-line-f"></div>
              </div>

              <div
                className="company-span"
                style={{ left: "25%", width: "60%" }}
              >
                <div className="company-name">Morgan Stanley</div>
                <div
                  className="company-line"
                  style={{ backgroundColor: "#9b5de5" }}
                ></div>
              </div>

              <div className="timeline-track">
                <div
                  className="timeline-bar-group"
                  style={{ left: "10%", width: "8%" }}
                >
                  <span className="timeline-label">Project Admin</span>
                  <div
                    className="timeline-bar"
                    style={{ backgroundColor: "#ff2a5f" }}
                  ></div>
                </div>

                <div
                  className="timeline-bar-group"
                  style={{ left: "25%", width: "12.5%" }}
                >
                  <span className="timeline-label">Intern</span>
                  <div
                    className="timeline-bar"
                    style={{ backgroundColor: "#00d2b5" }}
                  ></div>
                </div>

                <div
                  className="timeline-bar-group"
                  style={{ left: "37.5%", width: "12.5%" }}
                >
                  <span className="timeline-label">Analyst</span>
                  <div
                    className="timeline-bar"
                    style={{ backgroundColor: "#e965d3" }}
                  ></div>
                </div>

                <div
                  className="timeline-bar-group"
                  style={{ left: "50%", width: "25%" }}
                >
                  <span className="timeline-label">Analyst 2</span>
                  <div
                    className="timeline-bar"
                    style={{ backgroundColor: "#0a58e0" }}
                  ></div>
                </div>

                <div
                  className="timeline-bar-group"
                  style={{ left: "75%", width: "10%" }}
                >
                  <span className="timeline-label">Associate</span>
                  <div
                    className="timeline-bar"
                    style={{ backgroundColor: "#fee440" }}
                  ></div>
                </div>
              </div>

              {/* --- AXIS --- */}
              <div className="timeline-axis">
                <span className="axis-tick" style={{ left: "0%" }}>
                  2023
                </span>
                <span className="axis-tick" style={{ left: "25%" }}>
                  2024
                </span>
                <span className="axis-tick" style={{ left: "50%" }}>
                  2025
                </span>
                <span className="axis-tick" style={{ left: "75%" }}>
                  2026
                </span>
                <span className="axis-tick" style={{ left: "100%" }}>
                  2027
                </span>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
        <div ref={contentRef} className="content"></div>
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
}

export default Skill;