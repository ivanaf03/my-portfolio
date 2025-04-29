import React from "react";
import NavBarButton from "../UI/NavBarButton";
import ProjectCard from "../cards/ProjectCard";
import Main from "../UI/Main";

import ezcow from "../../assets/ezcow.png";
import portfolio from "../../assets/portfolio.png";

const Projects = () => {
  const [showInfo, setShowInfo] = React.useState("EZCow");

  const handleClick = (value) => {
    setShowInfo(value);
  };

  return (
    <Main title="Projects">
      <nav className="my-4 gap-2 bg-gradient-to-r sm:bg-gradient-to-b md:bg-gradient-to-b from-eerie-black via-white/10 to-white/20 rounded-r-2xl sm:rounded-b-2xl md:rounded-b-2xl">
        <ul className="flex flex-col sm:flex-row md:flex-row justify-around gap-2">
          <li>
            <NavBarButton onClick={() => handleClick("EZCow")}>
              EZCow
            </NavBarButton>
          </li>
          <li>
            <NavBarButton onClick={() => handleClick("Portfolio")}>
              My portfolio
            </NavBarButton>
          </li>
        </ul>
      </nav>
      <section>
        {showInfo === "EZCow" && (
          <ProjectCard
            title="EZCow"
            description="A mobile application that enables farmers to manage their cows and consolidate all related 
            information in one place. This is my Final Degree Project at the University of A Coruña, and it is my 
            first mobile app. I'm proud of the work I've done on it. I developed it for Android using React Native 
            and Expo."
            image={ezcow}
          />
        )}
        {showInfo === "Portfolio" && (
          <ProjectCard
            title="My portfolio"
            description="My personal portfolio website is a minimalistic project 
            I created using React and TailwindCSS to enhance my skills and experience. 
            It allowed me to learn how to manage the viewport with custom hooks, 
            create a responsive and visually appealing website, and further develop my design abilities."
            image={portfolio}
          />
        )}
      </section>
    </Main>
  );
};

export default Projects;
