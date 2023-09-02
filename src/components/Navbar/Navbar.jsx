import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../media/logo.png";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
      <div className="Navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="largeScreenMenus">
          <Link className="menuItem" to="home" spy={true}smooth={true}duration={500}>Home</Link>
          <Link className="menuItem"to="about" spy={true}smooth={true}duration={500}>About</Link>
          <Link className="menuItem" to="skills" spy={true}smooth={true}duration={500}>Skills</Link>
          <Link className="menuItem" to="portfolio" spy={true}smooth={true}duration={500}>Portfolio</Link>
          <Link className="menuItem"to="contact" spy={true}smooth={true}duration={500}>Contact</Link>
        </div>
        <div className="toggleMenus" onClick={handleMenuToggle}>
          <CgMenuGridO />
        </div>
        {toggleMenu && (
          <div className="smallScreenMenus">
            <Link className="menuItemSmall" onClick={handleMenuToggle} to="home" spy={true}smooth={true}duration={500}>
              Home
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}to="about" spy={true}smooth={true}duration={500}>
              About
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}to="skills" spy={true}smooth={true}duration={500}>
              Skills
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}to="portfolio" spy={true}smooth={true}duration={500}>
              Portfolio
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}to="contact" spy={true}smooth={true}duration={500}>
              Contact
            </Link>
          </div>
        )}
      </div>
  );
};

export default Navbar;
