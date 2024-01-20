import React from "react";
import "./About.css";
import me from "../../media/me1.png";
import CV from "../../media/David Kwashie Ahiekpor.pdf";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <div className="flex flex-col bg-black blur-0 about" >
      <div className="flex flex-col gap-10 container mx-auto about px-[300px] py-[180px] ">
        <h1 className="font-bold flex flex-col items-center" >
          <FormattedMessage id="about.title" />
          <div className="w-[30px] h-[2px] bg-white"></div>
        </h1>
        <p className="text-2xl font-extralight text-center">
          <FormattedMessage id="about.aboutText" />
        </p>
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">
              <FormattedMessage id="about.experience.title" />
            </h3>
            <div>
              <h6 className="text-sm font-thin">
                <FormattedMessage id="about.experience.YYYY1" />
              </h6>
              <p>
                <FormattedMessage id="about.experience.work1" />
              </p>
            </div>
            <div>
              <h6 className="text-sm font-thin">
                <FormattedMessage id="about.experience.YYYY2" />
              </h6>
              <p>
                <FormattedMessage id="about.experience.work2" />
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">
              <FormattedMessage id="about.education.title" />
            </h3>
            <div>
              <h6 className="text-sm font-thin">
                <FormattedMessage id="about.education.YYYY1" />
              </h6>
              <p>
                <FormattedMessage id="about.education.school1" />
              </p>
              <h4>
                <FormattedMessage id="about.education.description1" />
              </h4>
            </div>
          </div>
        </div>
        <a href={CV} download className="flex-col items-center flex mt-[20px] font-semibold text-lg">
          <FormattedMessage id="about.cv" />
          <div className="w-[20px] h-[5px] bg-white rounded-full"></div>
        </a>
      </div>
      <div className="h-[600px] image relative flex">
        <img src={me} alt="Me" className="absolute -top-[20%] right-[35%] flex w-[500px]" />
      </div>
    </div>
  );
};

export default About;
