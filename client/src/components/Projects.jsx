import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <header>
        <span className="num">02</span>
        <h2>Projects</h2>
      </header>
      <div id="projectGrid">
        <div className="project">
          <a
            href="https://roccomaniscalco.github.io/covid-cost/"
            target="_blank"
            rel="noopener noreferrer"
            className="site"
          > </a>
          <div className="inner">
            <img src="./assets/covid.png" alt="" />
            <h3>COVID Cost</h3>
            <a
              href="https://github.com/roccomaniscalco/covid-cost"
              target="_blank"
              rel="noopener noreferrer"
              className="repo"
            >
              <i className="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="project">
          <a
            href="https://roccomaniscalco.github.io/weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="site"
          > </a>
          <div className="inner">
            <img src="./assets/weather.png" alt="" />
            <h3>Weather Dashboard</h3>
            <a
              href="https://github.com/roccomaniscalco/weather-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="repo"
            >
              <i className="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
