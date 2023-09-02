import React from "react";
import "./Home.css";
import langIcons from "../../media/langIcons2.png";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="homeText">
        <h3>
          <small><FormattedMessage id="home.title.hello" /></small>  <FormattedMessage id="home.title.i'm" /> <span><FormattedMessage id="home.title.name" /></span>
        </h3>
        <h3>
        <FormattedMessage id="home.title.job" />
        </h3>
        <p>
        <FormattedMessage id="home.about" />
        </p>
      </div>
      <img src={langIcons} alt="display" className="langIcons" />
    </div>
  );
};

export default Home;
