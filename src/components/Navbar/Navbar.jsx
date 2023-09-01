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
          <Link className="menuItem">Home</Link>
          <Link className="menuItem">About</Link>
          <Link className="menuItem">Skills</Link>
          <Link className="menuItem">Portfolio</Link>
          <Link className="menuItem">Contact</Link>
        </div>
        <div className="toggleMenus" onClick={handleMenuToggle}>
          <CgMenuGridO />
        </div>
        {toggleMenu && (
          <div className="smallScreenMenus">
            <Link className="menuItemSmall" onClick={handleMenuToggle}>
              Home
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}>
              About
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}>
              Skills
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}>
              Portfolio
            </Link>
            <Link className="menuItemSmall" onClick={handleMenuToggle}>
              Contact
            </Link>
          </div>
        )}
      </div>
  );
};

export default Navbar;
