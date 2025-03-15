import React from "react";
import "./skills.css";
import SkillCard from "./SkillCard";
import { FaReact, FaJava, FaGit, FaMobile, FaDatabase, FaFolder, FaHtml5} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="skills-container">
        <div className="skills-container-cards">
            <SkillCard 
                icon={<FaReact />} 
                name="React"
            />
            <SkillCard 
                icon={<FaJava />} 
                name="Java"
            />
            <SkillCard 
                icon={<FaGit />} 
                name="Git"
            />
            <SkillCard 
                icon={<FaMobile />} 
                name="React Native + Expo"
            />
            <SkillCard 
                icon={<FaDatabase />} 
                name="MySQL"
            />
            <SkillCard 
                icon={<FaFolder />} 
                name="SQLite"
            />
            <SkillCard
              icon={<FaHtml5 />}
              name="HTML+CSS+JS"
            />
            <SkillCard
              icon={<RiTailwindCssFill />}
              name="tailwindcss"
            />
        </div>
    </div>
  );
}

export default Skills;