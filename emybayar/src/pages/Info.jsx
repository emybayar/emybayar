import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Info.css";

const Info = () => {
  useEffect(() => {
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.innerText = "<- BACK TO HOME";
  }, []);

  return (
    <>
      <div id="header">
        <ul id="nav">
          <li>
            <Link to="/" id="name">
              EMY <br /> SAINBAYAR
            </Link>
          </li>
          <div className="right-nav">
            <li>
              <Link to="/projects" id="projects">
                Index -&gt;
              </Link>
            </li>
            <li>
              <Link to="/info" id="infoHtml" style={{ color: "red" }}>
                About -&gt;
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div id="info-container" className="active">
        <div id="name">
          <div className="title">EMY (EMUJIN) SAINBAYAR</div>
          <div className="descriptions">
            {" "}
            I am a student, researcher and an aspiring creative technologist
            from Mongolia, currently wrapping up my senior year of college in
            Shanghai. Through practice, I explore the creative dynamics between
            humans and algorithms.
          </div>
        </div>
        <>
          <div id="currently">
            <div className="title">CURRENTLY</div>
            <div className="descriptions">
              <div className="role">
                Student @
                <a
                  href="https://shanghai.nyu.edu/academics/majors/interactive-media-arts"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IMA
                </a>
              </div>
              <div className="role">
                Researcher @
                <a
                  href="https://ml5js.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ML5.JS
                </a>
              </div>
              <div className="role">
                Research Assistant @
                <a
                  href="https://www.e-flux.com/architecture/intensification/656807/soft-future/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Soft Technologies
                </a>
              </div>
              <div className="role">
                Creator @
                <a
                  href="https://www.instagram.com/zeencollective/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZEEN* Collective
                </a>
              </div>
            </div>
          </div>
        </>
        {/* <div id="currently">
          <div className="title">CURRENTLY</div>
          <div className="descriptions">
            {" "}
            <div className="role">Student @IMA</div>
            <div className="role">Researcher @ML5.JS</div>
            <div className="role">Research Assistant @Soft Technologies</div>
            <div className="role">Creator @ZEEN* Collective</div>
          </div>
        </div> */}
        <div id="education">
          <div className="title">EDUCATION</div>
          <div className="descriptions">
            Bachelor of Science in Interactive Media Arts, NYU Shanghai, 2025
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
