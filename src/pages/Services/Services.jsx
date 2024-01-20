import React from "react";
import "./Services.css";
import api from "../../media/api.png";
import code from "../../media/code.png";
import responsive from "../../media/responsive.png";
import translate from "../../media/translate.png";
import ux from "../../media/ux.png";
import { FormattedMessage } from "react-intl";

const Services = () => {
  const data = [
    {
      icon: <img src={code} alt="code" className="skillIcons" />,
      name: <FormattedMessage id="service.frontendDevelopment.name" />,
      description: (
        <FormattedMessage id="service.frontendDevelopment.description" />
      ),
    },
    {
      icon: <img src={api} alt="Api" className="skillIcons" />,
      name: <FormattedMessage id="service.apiIntegration.name" />,
      description: <FormattedMessage id="service.apiIntegration.description" />,
    },
    {
      icon: <img src={responsive} alt="responsive" className="skillIcons" />,
      name: <FormattedMessage id="service.responsiveDesign.name" />,
      description: (
        <FormattedMessage id="service.responsiveDesign.description" />
      ),
    },
    {
      icon: <img src={translate} alt="translate" className="skillIcons" />,
      name: <FormattedMessage id="service.i18n.name" />,
      description: <FormattedMessage id="service.i18n.description" />,
    },
    {
      icon: <img src={code} alt="translate" className="skillIcons" />,
      name: <FormattedMessage id="service.backendDevelopment.name" />,
      description: (
        <FormattedMessage id="service.backendDevelopment.description" />
      ),
    },
    {
      icon: <img src={ux} alt="translate" className="skillIcons" />,
      name: <FormattedMessage id="service.ui/ux.name" />,
      description: <FormattedMessage id="service.ui/ux.description" />,
    },
  ];
  return (
    <div
      className="flex blur-0 bg-black h-[95vh] relative justify-center items-center skill"
      id="skills"
    >
      <div className="flex flex-col container mx-auto absolute z-10 ">
        <h1 className="font-bold flex flex-col items-center">
          <FormattedMessage id="service.title" />
          <div className="w-[30px] h-[2px] bg-white"></div>
        </h1>
        <div className="w-[100%] grid grid-cols-3 gap-10 mt-[60px]">
          {data.map((item) => (
            <div
              className="p-[30px] skillItem blur-0 rounded-lg flex flex-col gap-3"
              key={item.name}
            >
              <div>{item.icon}</div>
              <h2 className="font-bold text-xl">{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
