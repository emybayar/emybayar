import React from "react";
import { Link } from "react-router-dom";
// import "./Layout.css";

const Layout = ({ children }) => (
  <>
    <div id="header">
      <ul id="nav">
        <li>
          <Link to="/projects" id="projects" style={{ color: "red" }}>
            &lt;- BACK TO INDEX
          </Link>
        </li>
      </ul>
    </div>
    <main>{children}</main>
  </>
);

export default Layout;
