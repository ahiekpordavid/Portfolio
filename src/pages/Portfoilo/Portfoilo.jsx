import React from "react";
import "./Portfoilo.css";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import translate from "../../media/OIP.jpeg";
import portfolio from "../../media/portfolio.png";
import { FormattedMessage } from "react-intl";

const Portfoilo = () => {
  const data = [
    {
      icon: portfolio,
      name: <FormattedMessage id="portfolio.portfolioWebsite.name" />,
      description:
      <FormattedMessage id="portfolio.portfolioWebsite.description" />,
      gitLink: "https://github.com/ahiekpordavid/Portfolio",
    },
    {
      icon: translate,
      name: <FormattedMessage id="service.apiIntegration.name" />,
      description: <FormattedMessage id="service.apiIntegration.description" />,
      gitLink: "",
      appLink: <BiLinkExternal />,
    }
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1><FormattedMessage id="portfolio.title" /></h1>
      <div className="portfolioContainer">
        {data.map((item) => (
          <div className="portfolioItem" key={item.name}>
            <img src={item.icon} alt="" className="portfolioImage" />
            <div className="portfolioImageContent">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="linkIcons">
                <a
                  href={item.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="linkIcon"
                >
                  <BsGithub />
                </a>
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
