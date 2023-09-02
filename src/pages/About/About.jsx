import React from "react";
import "./About.css";
import me from "../../media/me1.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutImage">
        <img src={me} alt="Me" className="meImage"/>
      </div>
      <div className="aboutText">
        <h1>About Me</h1>
        <p>
          I'm a dedicated frontend engineer passionate about crafting remarkable
          web experiences. With a background in computer science and a love for
          design. I specialize in turning ideas into interactive,
          user-friendly web applications. What sets me apart
          is my versatile skill set, which extends to backend development. I'm
          well-versed in Express.js and MongoDB, allowing me to create robust
          RESTful APIs that power seamless interactions between the frontend and
          backend.
        </p>
        <div className="aboutTabs">
            <div className="aboutTab">
                <h3>Experience</h3>
                <div>
                    <h6>YYYY</h6>
                    <p>Work</p>
                </div>
                <div>
                    <h6>YYYY</h6>
                    <p>Work</p>
                </div>
            </div>
            <div className="aboutTab">
                <h3>Education</h3>
                <div>
                    <h6>YYYY</h6>
                    <p>School</p>
                </div>
                <div>
                    <h6>YYYY</h6>
                    <p>School</p>
                </div>
            </div>
        </div>
        <a href="#">Download CV</a>
      </div>
    </div>
  );
};

export default About;
