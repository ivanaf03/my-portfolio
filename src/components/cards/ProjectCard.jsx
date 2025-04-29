import React from "react";

const ProjectCard = ({ title, description, image }) => {
  return (
    <article className="flex flex-col md:flex-row justify-between m-2 p-4 bg-onyx rounded-3xl shadow-sm shadow-white">
      <div>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-xs md:text-lg font-mono">{description}</p>
      </div>

      <img src={image} alt="project-image" className="p-2 w-48 h-48 md:w-96 md:h-96 rounded-2xl self-center" />
    </article>
  );
};

export default ProjectCard;
