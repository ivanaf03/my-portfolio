import React from "react";
import SkillCard from "../cards/SkillCard";
import Main from "../UI/Main";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Skills = () => {
  const [showBackend, setShowBackend] = React.useState(false);
  const [showMobile, setShowMobile] = React.useState(false);
  const [showFrontend, setShowFrontend] = React.useState(false);

  const toggleSection = (setter) => setter((prev) => !prev);

  return (
    <Main title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-4">
        <section className="flex flex-col gap-2">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">Backend</h2>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              showBackend ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 items-center mt-2">
              <SkillCard
                name="Relational databases"
                icon={<FaDatabase size={40} color="white" />}
              />
              <SkillCard
                name="Java"
                icon={<FaJava size={40} color="white" />}
              />
              <SkillCard
                name="Spring Boot"
                icon={<BiLogoSpringBoot size={40} color="white" />}
              />
            </div>
          </div>
          <button onClick={() => toggleSection(setShowBackend)}>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                showBackend ? "rotate-180" : ""
              }`}
              size={24}
              color="white"
            />
          </button>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">Mobile</h2>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              showMobile ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 items-center mt-2">
              <SkillCard
                name="React Native"
                icon={<TbBrandReactNative size={40} color="white" />}
              />
              <SkillCard
                name="Expo"
                icon={<CiMobile1 size={40} color="white" />}
              />
            </div>
          </div>
          <button onClick={() => toggleSection(setShowMobile)}>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                showMobile ? "rotate-180" : ""
              }`}
              size={24}
              color="white"
            />
          </button>
        </section>
        <section className="flex flex-col gap-2">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">
            Frontend
          </h2>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              showFrontend ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 items-center mt-2">
              <SkillCard
                name="HTML"
                icon={<FaHtml5 size={40} color="white" />}
              />
              <SkillCard name="CSS" icon={<FaCss3 size={40} color="white" />} />
              <SkillCard
                name="React"
                icon={<FaReact size={40} color="white" />}
              />
              <SkillCard
                name="TailwindCSS"
                icon={<RiTailwindCssFill size={40} color="white" />}
              />
            </div>
          </div>
          <button onClick={() => toggleSection(setShowFrontend)}>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                showFrontend ? "rotate-180" : ""
              }`}
              size={24}
              color="white"
            />
          </button>
        </section>
      </div>
    </Main>
  );
};

export default Skills;
