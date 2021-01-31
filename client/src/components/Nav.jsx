import React, { useState } from "react";

const Nav = () => {
  const [navBarIsOpen, setNavBarIsOpen] = useState(false);

  const handleNavToggle = () => {
    setNavBarIsOpen(!navBarIsOpen);
  };

  return (
    <>
      <header>
        {/* eslint-disable-next-line */}
        <a id="logo" href="#">
          <strong>ROCCO</strong>
          <strong>MANISCALCO</strong>
        </a>
        <i
          id="hamburger"
          className={navBarIsOpen ? "open" : null}
          onClick={handleNavToggle}
        >
          <div id="line1"></div>
          <div id="line2"></div>
          <div id="line3"></div>
        </i>
      </header>

      <nav className={navBarIsOpen ? "open" : null}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
