import React from "react";
import "./contact.css";
import SocialCard from "./SocialCard";
import { FaLinkedin, FaGithub, FaMailBulk, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
        <h2>You can contact me at:</h2>
        <div className="social-media-container">
            <SocialCard 
                icon={<FaLinkedin />} 
                link="https://www.linkedin.com/in/iván-álvarez-fernández-60829733a/" 
                name="LinkedIn"
                userName={<i>Iván Álvarez Fernández</i>}
            />
            <SocialCard 
                icon={<FaGithub />} 
                link="https://github.com/ivanaf03" 
                name="GitHub"
                userName={<i>@ivanaf03</i>}
            />
            <SocialCard 
                icon={<FaMailBulk />} 
                link="mailto:ivanalvarezfernandez9876@gmail.com" 
                name="Gmail"
                userName={<i>ivanalvarezfernandez9876@gmail.com</i>}
            />
            <SocialCard 
                icon={<FaInstagram />} 
                link="https://www.instagram.com/ivan.af__/" 
                name="Instagram"
                userName={<i>@ivan.af__</i>}
            />
        </div>
    </div>
  );
}

export default Contact; 