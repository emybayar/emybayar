import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    const nameEl = document.getElementById("name");
    if (nameEl) nameEl.innerText = "<- BACK TO HOME";
  }, []);

  const projects = [
    { title: ">> Endless (Authorless) Poem", slug: "endless-authorless-poem" },
    {
      title: ">> LLMs Understand Numbers (Differently)?",
      slug: "llms-numbers",
    },
    { title: ">> Enfut", slug: "enfut" },
    { title: ">> Live Coding", slug: "live-coding" },
    // { title: ">> Tyler in Minecraft", slug: "tyler-minecraft" },
    {
      title: ">> Breakfast: 12000, After Guild (Ongoing)",
      slug: "breakfast-12000-ag",
    },
    {
      title: ">> Algorithmic Playwright (Ongoing)",
      slug: "algorithmic-playwright",
    },
  ];

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
              <Link to="/projects" id="projects" style={{ color: "red" }}>
                Index -&gt;
              </Link>
            </li>
            <li>
              <Link to="/info" id="infoHtml">
                About -&gt;
              </Link>
            </li>
          </div>
        </ul>
      </div>

      <div id="projects-container">
        <div className="receipt-column">
          <div className="receipt-heading">
            <pre className="ascii-heading" aria-hidden="true">
              {String.raw`         
  _ ___    _ ___   ____     LJ    ____     ____   FJ_     ____   
 J '__ J  J '__ ",F __ J     _   F __ J   F ___J.J  _|   F ___J  
 | |--| | | |__|-| |--| |   J J | _____J | |---LJ| |-'  | '----_ 
 F L__J J F L  '-F L__J J   J  LF L___--.F L___--F |__-.)-____  L
J  _____/J__L   J\______/,-_J  J\______/J\______/\_____J\______/F
|_J_____F|__L    J______F\_____/J______F J______FJ_____FJ______F 
L_J                      \_____/                                 
               `}
            </pre>
            <div className="text-heading" aria-hidden="true">
              *** PROJECTS ***
            </div>
          </div>
          <ul className="project-list">
            {projects.map((project, index) => (
              <li key={index} className="project-line">
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
