import { useEffect, useState, useRef } from "react";
import TagCloud from "TagCloud";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skill.scss";
import { Outlet } from "react-router-dom";

function Skill() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const contentRef = useRef(null);

  /*
   * =========================================================
   * TIMELINE
   * =========================================================
   *
   * Timeline:
   * 2023 -> 2027
   *
   * Rippling:
   * April 20, 2026 -> January 1, 2027
   */

  const timelineStart = new Date("2023-01-01");
  const timelineEnd = new Date("2027-01-01");

  const getTimelinePercent = (date) => {
    const totalDuration = timelineEnd.getTime() - timelineStart.getTime();

    const elapsedDuration = date.getTime() - timelineStart.getTime();

    return Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100));
  };

  /*
   * Rippling:
   * April 20, 2026 -> January 1, 2027
   */

  const ripplingStart = getTimelinePercent(new Date("2026-05-20"));

  const ripplingEnd = getTimelinePercent(new Date("2027-01-01"));

  const ripplingWidth = ripplingEnd - ripplingStart;

  /*
   * =========================================================
   * TAG CLOUD
   * =========================================================
   */

  useEffect(() => {
    const myTags = [
      "JavaScript",
      "CSS",
      "HTML",
      "C",
      "C++",
      "Go",
      "SQL",
      "LLM",
      "genAI",
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
        {/* =====================================================
            HTML TAGS
        ====================================================== */}

        <span className="tags top-html">&lt;/html&gt;</span>

        <span className="tags top-tags">&lt;body&gt;</span>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s", " ", "&"]}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["T", "i", "m", "e", "l", "i", "n", "e"]}
              idx={22}
            />
          </h1>

          <p>
            The main area of my expertise is full-stack web development (both
            client and service side of the web).
            <br />
            <br />
            • Languages: Java, C/C++, Go, Python, JavaScript, SQL
            <br />
            • Technologies/Frameworks: React, Angular, Node.js, Spring Boot,
            Kafka, Redis, REST APIs, Kubernetes, MongoDB, Vector DBs, RAG,
            GenAI/LLMs, NLP, AG Grid, Distributed Systems, gRPC
            <br />
            • Developer Tools: Git, Docker, Helm, AWS, GCP, Prometheus, Grafana
            <br />• Undergraduate Coursework: Data Structures, Operating
            Systems, Algorithms Analysis, Database Management, Artificial
            Intelligence, System Design, Distributed Systems, Computer
            Architecture
          </p>

          {/* =====================================================
              TIMELINE
          ====================================================== */}

          <div className="timeline-container">
            <div className="timeline-title">TIMELINE</div>

            <div className="timeline-content">
              {/* =================================================
                  COMPANY BACKGROUND FILLS
              ================================================== */}

              {/* GirlScript */}

              <div
                className="timeline-company-fill girlscript-fill"
                style={{
                  left: "10%",
                  width: "8%",
                }}
              />

              {/* Morgan Stanley */}

              <div
                className="timeline-company-fill morgan-stanley-fill"
                style={{
                  left: "25%",
                  width: "57%",
                }}
              />

              {/* Rippling */}

              <div
                className="timeline-company-fill rippling-fill"
                style={{
                  left: `${ripplingStart}%`,
                  width: `${ripplingWidth}%`,
                }}
              />

              {/* =================================================
                  COMPANY HEADERS
              ================================================== */}

              {/* GirlScript */}

              <div
                className="company-span"
                style={{
                  left: "10%",
                  width: "8%",
                }}
              >
                <div className="company-name">GirlScript</div>

                <div className="company-line-f" />
              </div>

              {/* Morgan Stanley */}

              <div
                className="company-span"
                style={{
                  left: "25%",
                  width: "57%",
                }}
              >
                <div className="company-name">Morgan Stanley</div>

                <div
                  className="company-line"
                  style={{
                    backgroundColor: "#9b5de5",
                  }}
                />
              </div>

              {/* Rippling */}

              <div
                className="company-span rippling-company"
                style={{
                  left: `${ripplingStart}%`,
                  width: `${ripplingWidth}%`,
                }}
              >
                <div className="company-name">Rippling</div>

                <div className="company-line rippling-line" />
              </div>

              {/* =================================================
                  ROLE TIMELINE
              ================================================== */}

              <div className="timeline-track">
                {/* =================================================
                    GIRLSCRIPT
                ================================================== */}

                <div
                  className="timeline-bar-group"
                  style={{
                    left: "10%",
                    width: "8%",
                  }}
                >
                  <span className="timeline-label">Project Admin</span>

                  <div
                    className="timeline-bar"
                    style={{
                      backgroundColor: "#ff2a5f",
                    }}
                  />
                </div>

                {/* =================================================
                    MORGAN STANLEY
                ================================================== */}

                {/* Intern */}

                <div
                  className="timeline-bar-group"
                  style={{
                    left: "25%",
                    width: "12.5%",
                  }}
                >
                  <span className="timeline-label">Intern</span>

                  <div
                    className="timeline-bar"
                    style={{
                      backgroundColor: "#00d2b5",
                    }}
                  />
                </div>

                {/* Analyst */}

                <div
                  className="timeline-bar-group"
                  style={{
                    left: "37.5%",
                    width: "25%",
                  }}
                >
                  <span className="timeline-label">Analyst</span>

                  <div
                    className="timeline-bar"
                    style={{
                      backgroundColor: "#e965d3",
                    }}
                  />
                </div>

                {/* Analyst 2 */}

                <div
                  className="timeline-bar-group"
                  style={{
                    left: "62.5%",
                    width: "12.5%",
                  }}
                >
                  <span className="timeline-label">Analyst 2</span>

                  <div
                    className="timeline-bar"
                    style={{
                      backgroundColor: "#0a58e0",
                    }}
                  />
                </div>

                {/* Associate */}

                <div
                  className="timeline-bar-group associate"
                  style={{
                    left: "75%",
                    width: "7.5%",
                  }}
                >
                  <span className="timeline-label-associate">Associate</span>

                  <div
                    className="timeline-bar"
                    style={{
                      backgroundColor: "#9b0000",
                    }}
                  />
                </div>

                {/* =================================================
                    RIPPLING
                ================================================== */}

                <div
                  className="timeline-bar-group rippling-role"
                  style={{
                    left: `${ripplingStart}%`,
                    width: `${ripplingWidth}%`,
                  }}
                >
                  <span className="timeline-label">Software Engineer</span>

                  <div
                    className="timeline-bar"
                    style={{
                      backgroundColor: "#90EE90",
                    }}
                  />
                </div>
              </div>

              {/* =================================================
                  YEAR AXIS
              ================================================== */}

              <div className="timeline-axis">
                <span
                  className="axis-tick"
                  style={{
                    left: "0%",
                  }}
                >
                  2023
                </span>

                <span
                  className="axis-tick"
                  style={{
                    left: "25%",
                  }}
                >
                  2024
                </span>

                <span
                  className="axis-tick"
                  style={{
                    left: "50%",
                  }}
                >
                  2025
                </span>

                <span
                  className="axis-tick"
                  style={{
                    left: "75%",
                  }}
                >
                  2026
                </span>

                <span
                  className="axis-tick"
                  style={{
                    left: "100%",
                  }}
                >
                  2027
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TAG CLOUD
        ====================================================== */}

        <Outlet />

        <div ref={contentRef} className="content" />

        <div className="scroll-hint">Scroll here to zoom in and zoom out</div>

        {/* =====================================================
            BOTTOM TAGS
        ====================================================== */}

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
