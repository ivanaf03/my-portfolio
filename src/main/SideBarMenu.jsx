import React from "react";
import "./nav-menu.css";

const SideBarMenu = ({ setSelected }) => {
  return (
    <div className="sidebar-container">
      <button onClick={() => setSelected("about-me")}>About me</button>
      <button onClick={() => setSelected("skills")}>Skills</button>
      <button onClick={() => setSelected("projects")}>Projects</button>
      <button onClick={() => setSelected("contact")}>Contact</button>
    </div>
  );
}

export default SideBarMenu;
