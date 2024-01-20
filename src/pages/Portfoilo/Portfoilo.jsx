import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import translate from "../../media/OIP.jpeg";
import portfolio from "../../media/portfolio.png";
import { FormattedMessage } from "react-intl";
import "./Portfolio.css"

const Portfoilo = () => {
  const data = [
    {
      icon: portfolio,
      name: <FormattedMessage id="portfolio.portfolioWebsite.name" />,
      description: (
        <FormattedMessage id="portfolio.portfolioWebsite.description" />
      ),
      gitLink: "https://github.com/ahiekpordavid/Portfolio",
    },
    {
      icon: translate,
      name: <FormattedMessage id="service.apiIntegration.name" />,
      description: <FormattedMessage id="service.apiIntegration.description" />,
      gitLink: "",
      appLink: <BiLinkExternal />,
    },
  ];

  return (
    <div
      className="flex flex-col min-h-[95vh] blur-0 bg"
      id="portfolio"
    >
      <div className="flex flex-col container mx-auto py-[180px]">
        <h1 className="font-bold flex flex-col items-center">
          <FormattedMessage id="portfolio.title" />
          <div className="w-[30px] h-[2px] bg-white"></div>
        </h1>
        <div className="w-[100%] grid grid-cols-3 gap-10 mt-[60px]">
          {data.map((item) => (
            <div
              className="shadow-xl h-[600px] rounded-lg bg-white"
              key={item.name}
            >
              <img
                src={item.icon}
                alt=""
                className="w-[100%] h-[45%] rounded-t-lg"
              />
              <div className="p-10 text-black flex flex-col justify-between h-[55%]">
                <div>
                  <h2 className="font-bold text-xl mb-5">{item.name}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="flex flex-row gap-5">
                  <a
                    href={item.gitLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-green-900"
                  >
                    <BsGithub />
                  </a>
                  <div className="text-2xl text-green-900">{item.appLink}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfoilo;
