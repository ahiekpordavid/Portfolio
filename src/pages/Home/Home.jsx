import React from "react";
import langIcons from "../../media/hero.jpg";
import { FormattedMessage } from "react-intl";

const Home = () => {
  return (
    <div id="home" className=" h-[95vh] relative" >
      <div className="flex flex-row absolute justify-center items-center h-[90vh] z-10">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 flex-col pr-10">
          <h3 className="text-2xl">
            <small className="mr-3">
              <FormattedMessage id="home.title.hello" />
            </small>
            <FormattedMessage id="home.title.i'm"/>  <span>
              <FormattedMessage id="home.title.name" />
            </span>
          </h3>
          <h3  className="text-5xl mt-5">
            <FormattedMessage id="home.title.job" />
          </h3>
          <p className="text-2xl mt-10 font-extralight ">
            <FormattedMessage id="home.about" />
          </p>
        </div>
      </div>
      <img
        src={langIcons}
        alt="display"
        className="w-[100%] h-[95vh] top-0 right-0 left-0 bottom-0 object-cover fixed opacity-40"
      />
    </div>
  );
};

export default Home;
