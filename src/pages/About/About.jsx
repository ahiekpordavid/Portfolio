import React from "react";
import "./About.css";
import me from "../../media/me1.png";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="about">
      <div className="aboutImage">
        <img src={me} alt="Me" className="meImage"/>
      </div>
      <div className="aboutText">
        <h1><FormattedMessage id="about.title"/></h1>
        <p>
        <FormattedMessage id="about.aboutText"/>
        </p>
        <div className="aboutTabs">
            <div className="aboutTab">
                <h3><FormattedMessage id="about.experience.title"/></h3>
                <div>
                    <h6><FormattedMessage id="about.experience.YYYY1"/></h6>
                    <p><FormattedMessage id="about.experience.work1"/></p>
                </div>
                <div>
                    <h6><FormattedMessage id="about.experience.YYYY2"/></h6>
                    <p><FormattedMessage id="about.experience.work2"/></p>
                </div>
            </div>
            <div className="aboutTab">
                <h3><FormattedMessage id="about.education.title"/></h3>
                <div>
                    <h6><FormattedMessage id="about.education.YYYY1"/></h6>
                    <p><FormattedMessage id="about.education.school1"/></p>
                </div>
                <div>
                    <h6><FormattedMessage id="about.education.YYYY1"/></h6>
                    <p><FormattedMessage id="about.education.school2"/></p>
                </div>
            </div>
        </div>
        <button><FormattedMessage id="about.cv"/></button>
      </div>
    </div>
  );
};

export default About;
