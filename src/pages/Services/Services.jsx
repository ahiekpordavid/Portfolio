import React from "react";
import "./Services.css";
import api from "../../media/api.png";
import code from "../../media/code.png";
import responsive from "../../media/responsive.png";
import translate from "../../media/translate.png";

const Services = () => {
  const data = [
    {
      icon: <img src={code} alt="code"  className="skillIcons"/>,
      name: "ReactJs Development",
      description:
        "Using React JavaScript frameworks for building complex user interfaces for both websites and web apps with app-like experiences.",
    },
    {
      icon:<img src={api} alt="Api" className="skillIcons" /> ,
      name: "API Integration",
      description:
        "Communicating with backend APIs (RESTful or GraphQL) to fetch and display data.",
    },
    {
      icon: <img src={responsive} alt="responsive"  className="skillIcons"/>,
      name: "Responsive Design",
      description:
        "Designing and coding web interfaces that adapt to various screen sizes and devices (responsive design)",
    },
    {
      icon: <img src={translate} alt="translate"  className="skillIcons"/>,
      name: "Internationalization (i18n) and Localization (l10n)",
      description:
     " Implementing support for multiple languages and regions in web applications",
    },
  ];
  return (
    <div className="skill" id="skills">
      <h1>My Skills</h1>
      <div className="skillContainer">
        {data.map((item) => (
          <div className="skillItem" key={item.name}>
            <div>{item.icon}</div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
