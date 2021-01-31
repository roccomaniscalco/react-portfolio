import React from "react";

const Project = ({ title, deployedURL, repoURL, img }) => {
  return (
    <div className="project">
      <a
        href={deployedURL}
        target="_blank"
        rel="noopener noreferrer"
        className="site"
      >
        {" "}
      </a>
      <div className="inner">
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <a
          href={repoURL}
          target="_blank"
          rel="noopener noreferrer"
          className="repo"
        >
          <i className="fab fa-github fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};

export default Project;
