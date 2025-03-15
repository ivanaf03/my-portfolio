import React from "react";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="skill-card-container">
        <p className="skill-card-icon">{icon}</p>
        <p className="skill-card-name">{name}</p>
    </div>
  );
}

export default SkillCard;