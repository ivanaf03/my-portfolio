import React from "react";
import "./app.css";
import NameCard from "./header/NameCard";
import Welcome from "./header/Welcome";
import SideBarMenu from "./main/SideBarMenu";
import FooterInfo from "./footer/FooterInfo";
import AboutMe from "./main/about-me/AboutMe";
import Skills from "./main/skills/Skills";
import Projects from "./main/projects/Projects";
import Contact from "./main/contact/Contact";

const App = () => {

  const [selected, setSelected] = React.useState("about-me");

  const renderContent = () => {
    switch (selected) {
      case "about-me":
        return <AboutMe />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <Welcome/>
        <NameCard/>
      </div>
      <div className="main-container">
        <SideBarMenu setSelected={setSelected}/>
        {renderContent()}
      </div>
      <div className="footer-container">
        <FooterInfo/>
      </div>
    </div>
  );
}

export default App;