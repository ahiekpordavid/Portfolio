import React from "react";
import "./Portfoilo.css";
import {BsGithub} from "react-icons/bs"
import {BiLinkExternal} from "react-icons/bi"
import translate from "../../media/OIP.jpeg";

const Portfoilo = () => {
  const data = [
    {
      icon: translate,
      name: "Portfolio Website",
      description:
        "Using React JavaScript frameworks for building complex user interfaces for both websites and web apps with app-like experiences.",
      gitLink: <BsGithub/>,
    },
    {
        icon: translate,
      name: "API Integration",
      description:
        "Communicating with backend APIs (RESTful or GraphQL) to fetch and display data.",
      gitLink: <BsGithub/>,
      appLink: <BiLinkExternal/>,
    },
    {
        icon: translate,
      name: "Responsive Design",
      description:
        "Designing and coding web interfaces that adapt to various screen sizes and devices (responsive design)",
      gitLink: <BsGithub/>,
      appLink: <BiLinkExternal/>,
    },
    {
        icon: translate,
      name: "Internationalization (i18n) and Localization (l10n)",
      description:
        "Implementing support for multiple languages and regions in web applications",
      gitLink: <BsGithub/>,
      appLink: <BiLinkExternal/>,
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Work</h1>
      <div className="portfolioContainer">
        {data.map((item) => (
          <div className="portfolioItem">
            <img src={item.icon} alt="" className="portfolioImage" />
            <div className="portfolioImageContent">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="linkIcons">
                <div className="linkIcon">{item.gitLink}</div>
                <div className="linkIcon">{item.appLink}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfoilo;
