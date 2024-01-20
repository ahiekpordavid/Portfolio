import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../media/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { FormattedMessage } from "react-intl";
// import ThemeToggle from "../../utils/theme/ThemeToggle";

const Navbar = ({ onSelectLanguage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="flex flex-row justify-between fixed z-20 top-0 left-0 right-0 md:px-[140px] sm:px-[90px] px-[50px] py-[20px]">
      <img src={logo} alt="Logo" className="w-[80px] sm:w-[110px] object-contain "/>
      <div className="flex flex-row items-center">
        <LanguageSelector onSelectLanguage={onSelectLanguage} />
        <RxHamburgerMenu onClick={handleMenuToggle} fontSize={30} fontWeight={100}/>
        {/* <ThemeToggle/> */}
      </div>
      {toggleMenu && (
        <div className="smallScreenMenus">
          <Link
            className="menuItemSmall"
            onClick={handleMenuToggle}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FormattedMessage id="navbar.home" />
          </Link>
          <Link
            className="menuItemSmall"
            onClick={handleMenuToggle}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FormattedMessage id="navbar.about" />
          </Link>
          <Link
            className="menuItemSmall"
            onClick={handleMenuToggle}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FormattedMessage id="navbar.skills" />
          </Link>
          <Link
            className="menuItemSmall"
            onClick={handleMenuToggle}
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FormattedMessage id="navbar.portfolio" />
          </Link>
          <Link
            className="menuItemSmall"
            onClick={handleMenuToggle}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <FormattedMessage id="navbar.contact" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
