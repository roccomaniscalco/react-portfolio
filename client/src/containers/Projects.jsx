import React from "react";
import Project from "../components/Project";

const Projects = () => {
  const projects = [
    {
      title: "COVID cost",
      deployedURL: "https://roccomaniscalco.github.io/covid-cost/",
      repoURL: "https://github.com/roccomaniscalco/covid-cost",
      img: "./assets/covid.png",
    },
    {
      title: "Weather Dashboard",
      deployedURL: "https://roccomaniscalco.github.io/weather-dashboard/",
      repoURL: "https://github.com/roccomaniscalco/weather-dashboard",
      img: "./assets/weather.png",
    },
  ];

  return (
    <main>
      <section id="projects">
        <header>
          <span className="num">02</span>
          <h2>Projects</h2>
        </header>
        <div id="projectGrid">
          {projects.map((project) => (
            <Project {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
