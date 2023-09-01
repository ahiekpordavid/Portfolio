import React from "react";
import "./Home.css";
import langIcons from "../../media/langIcons2.png";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="homeText">
        <h3>
          <small>Hello! </small>  I'm <span>David</span>
        </h3>
        <h3>
          a <span>Frontend Developer</span> From Ghana
        </h3>
        <p>
          I believe that great design and functional development go
          hand-in-hand. My goal is to transform ideas into stunning,
          user-friendly websites and applications that not only look amazing but
          also deliver exceptional results.
        </p>
      </div>
      <img src={langIcons} alt="display" className="langIcons" />
    </div>
  );
};

export default Home;
