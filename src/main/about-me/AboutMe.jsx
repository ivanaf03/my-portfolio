import React from "react";
import "./about-me.css";
import ProfileImg from "../../assets/profile.png";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="image-container">
        <img
          src={ProfileImg}
          alt="Iván Álvarez Fernández"
          className="profile-img"
        />
        <h1>Hi! Thank you for visiting me</h1>
      </div>
      <div className="about-me-text">
        <p>I am a junior web developer from Spain. I have studied Computer Science at the University of Coruña. 
          I am currently working as a trainee full stack developer at <a href="https://trileucosolutions.com">
          Diverger</a> (formerly Trileuco Solutions). 
        </p>
        <br/>
        <p>I love web development, especially React. React Native is also a passion of mine. 
          I have developed my Final Degree Project in React Native, a mobile application for the
          administration of small and medium-sized cow farms. I have leraned a lot about React Native
          and how to use it to create mobile applications. For backend development, I have experience
          with Java and Spring Boot. 
        </p>
        <br/>
        <p>Programming is my passion. My favorite programming language is JavaScript, it is a difficult
          language to learn but it is also very powerful. When you design a website, sometimes it is
          a challenge imagine how much time it would take to program it. But when you get the final product,
          it is very rewarding. I think that is what strikes me the most about programming.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;