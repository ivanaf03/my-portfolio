import React from "react";

const ExperienceCard = ({ title, description, initialDate, endDate }) => {
  return (
    <article className="flex flex-col gap-4 m-2 p-4 bg-onyx rounded-3xl shadow-sm shadow-white">
      <div className="flex flex-row items-center justify-between gap-2">
        <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">{title}</h2>
        <p className="text-sm md:text-lg font-mono">
          {initialDate} - {endDate}
        </p>
      </div>
      <p className="text-sm md:text-lg font-mono">{description}</p>
    </article>
  );
};

export default ExperienceCard;
