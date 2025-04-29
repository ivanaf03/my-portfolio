import React from "react";

const SkillCard = ({ name, icon }) => {
  return (
    <article className="w-[90%] flex items-center justify-around gap-4 m-2 p-4 bg-onyx rounded-3xl shadow-sm shadow-white transition-transform duration-300 hover:scale-105">      
      <h2 className="text-lg font-bold">{name}</h2>
      {icon}
    </article>
  );
};

export default SkillCard;