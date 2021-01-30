import React from "react";

const Nav = () => {
  const handleNavToggle = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
  };

  return (
    <>
      <header>
      {/* eslint-disable-next-line */}
        <a id="logo" href="#">
          <strong>ROCCO</strong>
          <strong>MANISCALCO</strong>
        </a>
        <i id="hamburger" onClick={handleNavToggle}>
          <div id="line1"></div>
          <div id="line2"></div>
          <div id="line3"></div>
        </i>
      </header>

      <nav>
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
