import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../media/logo.png";
import { CgMenuGridO } from "react-icons/cg";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { FormattedMessage } from "react-intl";

const Navbar = ({ onSelectLanguage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="Navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="largeScreenMenus">
        <Link
          className="menuItem"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FormattedMessage id="navbar.home" />
        </Link>
        <Link
          className="menuItem"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FormattedMessage id="navbar.about" />
        </Link>
        <Link
          className="menuItem"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FormattedMessage id="navbar.skills" />
        </Link>
        <Link
          className="menuItem"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FormattedMessage id="navbar.portfolio" />
        </Link>
        <Link
          className="menuItem"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FormattedMessage id="navbar.contact" />
        </Link>
        <LanguageSelector onSelectLanguage={onSelectLanguage} />
      </div>
      <div className="toggleMenus">
        <CgMenuGridO onClick={handleMenuToggle} />
        <LanguageSelector onSelectLanguage={onSelectLanguage} />
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
