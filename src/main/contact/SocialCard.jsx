import React from "react";

const SocialCard = ({ icon, link, name, userName }) => {
  return (
    <a href={link} className="social-card-container">
        <p className="social-card-icon">{icon}</p>
        <p className="social-card-link">{name}</p>
        <p>{userName}</p>
    </a>
  );
}

export default SocialCard;