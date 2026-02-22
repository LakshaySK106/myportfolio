import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Outlet, Link } from "react-router-dom";
import "./About.scss";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3300);
  }, []);

  return (
    <div className="container about-page">
      <div className="page">
        <span className="tags top-html">&lt;/html&gt;</span>
        <span className="tags top-tags">&lt;body&gt;</span>

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "M",
                "y",
                ",",
                " ",
                "M",
                "y",
                "s",
                "e",
                "l",
                "f",
                " ",
                "&",
                " ",
                "I",
              ]}
              idx={15}
            />
          </h1>
          <p>
            I’m a Full Stack Software Engineer at Morgan Stanley, a Computer
            Science graduate from Delhi Technological University (CGPA 8.77/10),
            and a Competitive Programmer with a passion for building scalable
            systems located in Bangalore, Karnataka, India. I’ve a serious
            passion for problem-solving, UI effects, animations, and creating
            intuitive, dynamic user experiences.
            <br />
            <br />
            - Codeforces: Expert (1805) – lakshay_sk
            <br />
            - LeetCode: Guardian (2324, Top 0.48%) – lakshaysk
            <br />
            - Winner of Morgan Stanley’s Code to Give Hackathon ’23 (1st out of
            14,000+)
            <br />
            <br />
            Outside of work, I’m a well-organised, self-starting, and
            imaginative person who enjoys UI effects, animations, English
            literature, soundtracks, and various physical pursuits against the
            run of play.
            <br />
            <br />
            I’m always excited about open-source contributions and collaborating
            on ambitious projects with positive, driven people.
            <Link to="/contact" className="reach">
              Reach out to me!
            </Link>
          </p>
          <div className="myCv">
            <div className="rtext">My Resume</div>
            <div className="okay">
              <a
                href="https://drive.google.com/file/d/1fHKgJ1wfQEkTLtRT3oMHFmemGbXnRBaM/view?usp=share_link"
                target="__blank"
              >
                CLICK HERE TO VIEW PDF
              </a>
            </div>
          </div>
        </div>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}

export default About;