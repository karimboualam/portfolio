import React from "react";
import styles from "./Projects.module.scss";

function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Un site web pour présenter mes projets et compétences.",
      link: "https://monportfolio.com",
    },
    {
      name: "E-commerce App",
      description: "Application complète avec React, Node.js et MongoDB.",
      link: "https://monecommerce.com",
    },
    {
      name: "Blog Platform",
      description: "Plateforme de blog utilisant Next.js et Firebase.",
      link: "https://monblog.com",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles["projects-list"]}>
        {projects.map((project, index) => (
          <div key={index} className={styles["project-item"]}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
