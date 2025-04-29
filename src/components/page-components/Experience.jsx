import React from "react";
import Main from "../UI/Main";
import ExperienceCard from "../cards/ExperienceCard";
import CircleButtonAnimated from "../UI/CircleButtonAnimated";

const Experience = () => {
  const [experience, setExperience] = React.useState("");

  return (
    <Main title="Experience">
      <section className="flex flex-col gap-2 mt-4 items-center">
        <aside className="flex gap-2">
          <CircleButtonAnimated onClick={() => setExperience("university")}>
            2021-2025
          </CircleButtonAnimated>
          <div className="w-10 sm:w-16 md:w-24 border-t-2 border-white border-dotted self-center" />
          <CircleButtonAnimated onClick={() => setExperience("diverger")}>
            2025
          </CircleButtonAnimated>
        </aside>
        {experience === "university" && (
          <ExperienceCard
            title="University of A Coruña"
            description="Bachelor's degree in Computer Engineering with a specialization in Software Engineering. I learned the fundamentals of Spring Boot and React, specialized in agile methodologies, and gained experience with design patterns and software architectures. I developed my Final Degree Project, EZCow, using React Native and Expo."
            initialDate="09/2021"
            endDate="05/2025"
          />
        )}
        {experience === "diverger" && (
          <ExperienceCard
            title="Diverger"
            description="University internship. It allowed me to learn how to develop projects using hexagonal architecture in Java with Spring Boot and to improve my skills in React."
            initialDate="02/2025"
            endDate="Present"
          />
        )}
      </section>
    </Main>
  );
};

export default Experience;
