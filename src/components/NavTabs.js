import React from "react";

const NavTabs = props =>
(
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className=
        {
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("UCIDemo")}
        className=
        {
          props.currentPage === "UCIDemo" ? "nav-link active" : "nav-link"
        }
      >
        UCI Demo
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("SampleLevels")}
        className=
        {
          props.currentPage === "SampleLevels" ? "nav-link active" : "nav-link"
        }
      >
        Sample Levels
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("About")}
        className=
        {
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
      >
        About
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Download")}
        className=
        {
          props.currentPage === "Download" ? "nav-link active" : "nav-link"
        }
      >
        Download
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Contact")}
        className=
        {
          props.currentPage === "Contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>
  </ul>
);

export default NavTabs;